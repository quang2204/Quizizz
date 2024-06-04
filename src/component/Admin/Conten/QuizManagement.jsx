import Tablequizz from "../Quizz/tablequizz";

import Creactquizz from "../Quizz/Creact";
import Updatequizz from "../Quizz/Update";
import Delete from "../Quizz/Delete";
import Addusera from "../Quizz/Addquizza";
import { useState, useEffect } from "react";
import { getcauhoi, getAlluser } from "../../../Server/ApiServer";

function Quizz(props) {
  const [Showupdate, Setshow] = useState(false);
  const [Showdelete, Setdelete] = useState(false);
  const [Showadd, Setadd] = useState(false);
  const [Showaddq, Setaddq] = useState(false);
  const [dataUpdate, setdataUpdate] = useState({});
  const [dataquizz, setdataquizz] = useState({});
  const [dataDelete, setdataDlete] = useState({});
  const [listquizz, setlistuser] = useState([]);
  const fetchListuserPage = async (page) => {
    let res = await getcauhoi();
    if (res.data.EC === 0) {
      const res = await getcauhoi();
      if (res.data.EC === 0) {
        setlistuser(res.data.DT);
      }
    }
  };

  useEffect(() => {
    fetchListuserPage();
  }, []);
  const handleclick = (user) => {
    Setshow(true);
    setdataUpdate(user);
    console.log(user);
  };
  const handleupdateq = (user) => {
    console.log(user);
    setdataquizz(user);
    Setaddq(true);
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
          Add quizz
        </button>
        <Creactquizz
          show={Showadd}
          setshow={Setadd}
          fetchListuserPage={fetchListuserPage}
        ></Creactquizz>
        <Updatequizz
          show={Showupdate}
          setshow={Setshow}
          dataUpdate={dataUpdate}
          fetchListuserPage={fetchListuserPage}
        ></Updatequizz>
        <Tablequizz
          handleclick={handleclick}
          deletes={deletes}
          fetchListuserPage={fetchListuserPage}
          listquizz={listquizz}
          handleupdateq={handleupdateq}
        ></Tablequizz>

        <Delete
          show={Showdelete}
          setdelete={Setdelete}
          dataDelete={dataDelete}
          fetchListuserPage={fetchListuserPage}
        ></Delete>
        <Addusera
          show={Showaddq}
          setaddd={Setaddq}
          fetchListuserPage={fetchListuserPage}
          dataquizz={dataquizz}
        ></Addusera>
      </div>
    </div>
  );
}

export default Quizz;
