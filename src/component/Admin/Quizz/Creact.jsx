import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { toast } from "react-toastify";
import { Themquizz } from "../../../Server/ApiServer";

const Creactquizz = (props) => {
  const { show, setshow } = props;
  const handleClose = () => {
    setdescription("");
    setName("");
    setdifficulty("");

    setimg("");
    setPreview("");
    setshow(false);
  };
  const [description, setdescription] = useState("");
  const [name, setName] = useState("");
  const [difficulty, setdifficulty] = useState("");
  const [img, setimg] = useState("");
  const [preview, setPreview] = useState("");
  const handleimg = (even) => {
    if (even.target && even.target.files && even.target.files[0]) {
      setPreview(URL.createObjectURL(even.target.files[0]));
      setimg(even.target.files[0]);
    }
  };
  const handleadd = async () => {
    // const isemail = validateEmail(description);
    // if (!isemail) {
    //   toast.error("Nhập description");
    //   return;
    // }
    if (!name) {
      toast.error("Nhập name");
      return;
    }
    if (!difficulty) {
      toast.error("Nhập difficulty");
      return;
    }
    if (!description) {
      toast.error("Nhập description");
      return;
    }
    if (!img) {
      toast.error("Không có ảnh");
      return;
    }

    let res = await Themquizz(description, difficulty, name, img);

    if (res.data && res.data.EC === 0) {
      toast.success("Create a new participant succeed");
      handleClose();
      await props.fetchListuserPage();
      console.log(res);
    }

    if (res.data && res.data.EC != 0) {
      toast.error(`The description ${description} is already exist`);
    }
    console.log("name", name);
  };
  return (
    <>
      <Modal
        size="xl"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new quizz</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label htmlFor="basic-url" className="form-label">
            Name
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
              value={difficulty}
              onChange={(even) => setdifficulty(even.target.value)}
            />
          </div>
          <label htmlFor="basic-url" className="form-label">
            Difficulty
          </label>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="difficulty"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              value={name}
              onChange={(even) => setName(even.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="basic-url" className="form-label">
              Description
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3 basic-addon4"
                value={description}
                onChange={(even) => setdescription(even.target.value)}
              />
            </div>

            <div
              className="mb-3 w-[150px] cursor-pointer flex items-center rounded-md"
              style={{ background: "#ebeef1", marginTop: "20px" }}
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
export default Creactquizz;
