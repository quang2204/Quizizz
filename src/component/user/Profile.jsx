import React, { useState } from "react";
import { profile } from "../../Server/ApiServer";
import { useDispatch, useSelector } from "react-redux";
import { Pros } from "../../redux/action/useAction";

const Profile = () => {
  const isaccount = useSelector((state) => state.user.user);
  const names =
    isaccount.nameupdate == undefined
      ? isaccount.username
      : isaccount.nameupdate;
  const [name, setname] = useState(names);
  const [img, setimg] = useState("");
  const [preview, setPreview] = useState("");
  const dipatch = useDispatch();
  const handleimg = (even) => {
    if (even.target && even.target.files && even.target.files[0]) {
      setPreview(URL.createObjectURL(even.target.files[0]));
      setimg(even.target.files[0]);
    }
  };
  // setname();
  const updateProfile = async () => {
    try {
      const res = await profile(name, img);
      dipatch({ type: "PROS", payloads: res });
    } catch (error) {
      // Xử lý lỗi nếu có
      console.error("Error updating profile:", error);
    }
  };
  const handchange = (event) => {
    setname(event.target.value);
  };
  return (
    <>
      <div className="px-3">
        <div
          className="max-w-[800px]  mx-auto block  mt-[150px] rounded-md"
          style={{ boxShadow: "1px 0px 10px 1px #bab5b5", gap: "30px" }}
        >
          <div className="px-5">
            <h2 className="pt-4 pb-1 text-[1.25rem] font-bold">
              Hồ sơ của tôi
            </h2>
            <p className="text-[0.85] ">
              Quản lý thông tin hồ sơ để bảo mật tài khoản
            </p>
            <br />
            <hr />
          </div>

          <div
            className="mb-[50px] flex justify-around items-center  mx-auto "
            //   onEncryptedCapture="multipart/form-data"
          >
            <div className="">
              <div className="pb-[30px] bor12 "></div>

              <div className="hs ">
                <div className="flex flex-col gap-3 ">
                  <div className="d-flex items-center gap-3">
                    <div className="name text-right">
                      <label htmlFor="name">Tên Đăng Nhập</label>
                    </div>
                    <div className="name">
                      <input
                        type="text"
                        name="name"
                        className="border-solid border-2 px-2 py-1 p-l-10 rounded-[4px] w-[300px]"
                        value={name}
                        onChange={(event) => handchange(event)}
                      />
                    </div>
                  </div>
                  <div className="d-flex gap-[90px]">
                    <div className="email ">
                      <label htmlFor="email">Email</label>
                    </div>
                    <div className="email">
                      <p>{isaccount.email}</p>
                    </div>
                  </div>
                </div>
                <button
                  type="submit "
                  className=" my-4 px-4 py-2 rounded-md text-white bg-red-600"
                  onClick={() => updateProfile()}
                >
                  Lưu
                </button>
              </div>
            </div>
            <div className="d-flex flex-column">
              <input type="hidden" value="" onChange={handchange} />

              <input
                type="file"
                id="fileInput"
                accept=".jpg,.jpeg,.png"
                name="img"
                className="d-none"
                onChange={(even) => handleimg(even)}
              />

              <img
                src={
                  preview === ""
                    ? `data:image/jpeg;base64,${isaccount.img}`
                    : preview
                }
                alt=""
                className="my-4 m-auto"
                style={{ maxWidth: " 100px", borderRadius: "50%" }}
              />
              <label htmlFor="addimg" className="cursor-pointer m-auto">
                Chọn ảnh
              </label>
              <input
                type="file"
                id="addimg"
                accept=".jpg,.jpeg,.png"
                hidden
                onChange={(even) => handleimg(even)}
              />
              <p className="m-auto pt-[5px]">Định dạng:.jpg,.jpeg,.png</p>
              <br />
              <p id="fileName" className="m-auto"></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
