import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";

import { Updateuser } from "../../../Server/ApiServer";
import _, { isEmpty } from "lodash";
function ModelUpdateu(props) {
  const { show, setshow, dataUpdate } = props;

  const handleClose = () => {
    setEmail("");
    setPassword("");
    setName("");
    setRole("User");
    setimg("");
    setPreview("");
    setshow(false);
  };
  useEffect(() => {
    if (!_.isEmpty(dataUpdate)) {
      setEmail(dataUpdate.email);
      setPassword("");
      setName(dataUpdate.username);
      setRole(dataUpdate.role);
      // setimg("");
      if (dataUpdate.image) {
        setPreview(`data:image/jpeg;base64,${dataUpdate.image}`);
      }
    }
  }, [dataUpdate]);

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
    let res = await Updateuser(dataUpdate.id, name, role, img);
    if (res.data && res.data.EC == 0) {
      toast.success("Update participant succeed");
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
        Add userss
      </Button> */}

      <Modal
        size="xl"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update user</Modal.Title>
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
              disabled={true}
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
                disabled={true}
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
                <option value="USER" selected={role === "USER"}>
                  USER
                </option>
                <option value="ADMIN" selected={role === "ADMIN"}>
                  ADMIN
                </option>
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
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModelUpdateu;
