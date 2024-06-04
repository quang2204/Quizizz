import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";

import { Deletequizz } from "../../../Server/ApiServer";
import _, { isEmpty } from "lodash";
function Delete(props) {
  const { show, setdelete, dataDelete } = props;

  const handleClose = () => {
    setdelete(false);
  };
  const handleadd = async () => {
    let res = await Deletequizz(dataDelete.id);
    if (res.data && res.data.EC === 0) {
      toast.success("Delete participant succeed");
      handleClose();
      // props.setCurrentPage(1);
      // Corrected typo: setcurrenrtPage -> setCurrentPage
      await props.fetchListuserPage();
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
          <Modal.Title>Delete user</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn có muốn xóa bài {dataDelete.email} này k </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleadd()}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Delete;
