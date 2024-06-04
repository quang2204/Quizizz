import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { toast } from "react-toastify";
import { ApiServer } from "../../../Server/ApiServer";

const ModelCreactuser = (props) => {
  const { show, setshow } = props;
  // const [show, setShow] = useState(false);

  const handleClose = () => {
    setEmail("");
    setPassword("");
    setName("");
    setRole("User");
    setimg("");
    setPreview("");
    setshow(false);
  };
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("User");
  const [img, setimg] = useState("");
  const [preview, setPreview] = useState("");
  const handleimg = (even) => {
    if (even.target && even.target.files && even.target.files[0]) {
      setPreview(URL.createObjectURL(even.target.files[0]));
      setimg(even.target.files[0]);
    }
  };
  const handleadd = async () => {
    // const data = {
    //   email: email,
    //   password: password,
    //   username: name,
    //   role: role,
    //   userImage: img,
    // };
    // const FormData = require("form-data");
    const isemail = validateEmail(email);
    if (!isemail) {
      toast.error("Nhập email");
      return;
    }

    if (!password) {
      toast.error("Nhập password");
      return;
    }
    const form = new FormData();
    form.append("email", email);
    form.append("password", password);
    form.append("username", name);
    form.append("role", role);
    form.append("userImage", img);

    let res = await ApiServer(email, password, name, role, img);

    if (res.data && res.data.EC === 0) {
      toast.success("Create a new participant succeed");
      handleClose();
      await props.fetchListuserPage(1);
    }

    if (res.data && res.data.EC != 0) {
      toast.error(`The email ${email} is already exist`);
    }
  };
  return (
    <>
      {/* <Button
        variant="primary"
        className="absolute top-4 right-7"
        onClick={handleShow}
        style={{ width: "100px" }}
      >
        Add user
      </Button> */}
      <Modal
        size="xl"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label htmlFor="basic-url" className="form-label">
            Fullname
          </label>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              @
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={name}
              onChange={(even) => setName(even.target.value)}
            />
          </div>
          <label htmlFor="basic-url" className="form-label">
            Password
          </label>
          <div className="input-group mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="password"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              value={password}
              onChange={(even) => setPassword(even.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="basic-url" className="form-label">
              Email
            </label>
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3 basic-addon4"
                value={email}
                onChange={(even) => setEmail(even.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputState" className="form-label">
                Role
              </label>
              <select
                id="inputState"
                className="form-select"
                onChange={(even) => setRole(even.target.value)}
              >
                <option selected value="USER">
                USER
                </option>
                <option value="ADMIN">ADMIN</option>
              </select>
            </div>
            <div
              className="mb-3 w-[150px] cursor-pointer flex items-center rounded-md"
              style={{ background: "#ebeef1" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="green"
                className="bi bi-plus"
                viewBox="0 0 16 16"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
              </svg>

              <label htmlFor="addimg" className="cursor-pointer">
                Upload file img
              </label>
              <input
                type="file"
                id="addimg"
                hidden
                onChange={(even) => handleimg(even)}
              />
            </div>
            <div className="border-dashed border-2 border-indigo-600">
              {!preview ? (
                <span className="flex justify-center py-3">Preview img</span>
              ) : (
                <img
                  src={preview}
                  alt=""
                  width={"200px"}
                  className="m-auto py-2"
                />
              )}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleadd()}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModelCreactuser;
