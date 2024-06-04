import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { getAlluser, postQuizz } from "../../../Server/ApiServer";
import Select from "react-select";
const Addusera = (props) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };
  const [listuser, setuser] = useState("");
  const { show, setaddd, dataquizz } = props;
  const fetchuser = async () => {
    let res = await getAlluser();
    if (res.data.EC === 0) {
      let newQuizz = res.data.DT.map((item) => {
        return {
          id: item.id,
          label: `${item.id}-${item.email}`,
        };
      });
      setuser(newQuizz);
    }
  };
  useEffect(() => {
    fetchuser();
  }, []);

  const handleadd = async () => {
    const res = await postQuizz(dataquizz.id, selectedOption.id);
  };

  const handleClose = () => {
    setaddd(false);
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
          <Modal.Title>Add new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label htmlFor="">User</label>
          <Select
            value={selectedOption}
            onChange={handleChange}
            options={listuser}
          />
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
export default Addusera;
