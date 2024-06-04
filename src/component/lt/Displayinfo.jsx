import React, { useEffect, useState } from "react";
function Displayinfo(props) {
  const { listuser } = props;
  const [listhideuser, setshow] = useState(true);
  const show = () => {
    setshow(!listhideuser);
  };
  useEffect(() => {
    if (listuser.length == 0) {
      console.log("đã về 1");
    }
    
    setTimeout(() => {
      document.title = "Hello";
    }, 1000);
  }, [listuser]); //[] không có gì là chỉ chạy 1 lần
  return (
    <div>
      <p
        onClick={() => {
          show();
        }}
      >
        {listhideuser ? "Ẩn" : "Hiện thị"}
      </p>
      {listhideuser && (
        <div>
          {listuser.map((user) => {
            return (
              <div className="" key={user.id}>
                My name :{user.name}
                My age :{user.age}
                <button
                  onClick={() => {
                    props.handdelete(user.id);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Displayinfo;

// export default Displayinfo;
