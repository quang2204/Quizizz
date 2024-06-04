import Table from "./Tablept";

import ModelCreactuser from "./ModelCreactuser";
import ModelUpdateu from "./Modelupdateu";
import ModelDlete from "./ModelDlete";
import { useState, useEffect } from "react";
import { Phantrang } from "../../../Server/ApiServer";

function User(props) {
  const List_User = 11;
  const [listuser, setuser] = useState([]);
  const [pageCount, setpageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const fetchListuserPage = async (page) => {
    let res = await Phantrang(page, List_User);
    if (res.data.EC === 0) {
      setuser(res.data.DT.users);
      setpageCount(res.data.DT.totalPages);
    }
  };
  const [Showupdate, Setshow] = useState(false);
  const [Showdelete, Setdelete] = useState(false);
  const [Showadd, Setadd] = useState(false);
  const [dataUpdate, setdataUpdate] = useState({});
  const [dataDelete, setdataDlete] = useState({});
  useEffect(() => {
    fetchListuserPage(1);
  }, []);
  const handleclick = (user) => {
    Setshow(true);
    // Setdelete(true);
    setdataUpdate(user);
  };

  const deletes = (user) => {
    console.log(user);
    setdataDlete(user);
    Setdelete(true);
  };

  return (
    <div>
      <div>
        <button
          className="bg-indigo-500 border-none text-white absolute top-6 
          right-7 hover:bg-sky-300 px-2 py-1 rounded-md"
          onClick={() => Setadd(true)}
        >
          Add user
        </button>
        <ModelCreactuser
          show={Showadd}
          setshow={Setadd}
          fetchListuserPage={fetchListuserPage}
        ></ModelCreactuser>
        <ModelUpdateu
          show={Showupdate}
          setshow={Setshow}
          dataUpdate={dataUpdate}
          fetchListuserPage={fetchListuserPage}
        ></ModelUpdateu>
        <Table
          handleclick={handleclick}
          deletes={deletes}
          fetchListuserPage={fetchListuserPage}
          listuser={listuser}
          pageCount={pageCount}
        ></Table>

        <ModelDlete
          show={Showdelete}
          setdelete={Setdelete}
          dataDelete={dataDelete}
          fetchListuserPage={fetchListuserPage}
        ></ModelDlete>
      </div>
    </div>
  );
}

export default User;
