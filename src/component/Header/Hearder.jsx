import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { Logout } from "../../Server/ApiServer";
import { toast } from "react-toastify";
import { dologout } from "../../redux/action/useAction";

function Hearder(props) {
  const isuser = useSelector((state) => state.user.isAuthenticated);
  const isaccount = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  // const isquizz = useSelector((state) => state.user.quizResult);
  const dispath = useDispatch();
  const [hamburger, sethamburger] = useState(false);
  // console.log(isquizz);
  const logout = async () => {
    let res = await Logout(isaccount.email, isaccount.refresh_token);
    if (res.data.EC == 0) {
      dispath(dologout());
      navigate("/dangnhap");
    } else {
      toast.error(res.data.EM);
    }
  };

  return (
    <div>
      <nav
        className="flex navs  items-center  pt-3 pb-3 sticky top-0 z-50 justify-around"
        style={{ backgroundColor: "#eee" }}
      >
        <div
          className=" hamburger"
          onClick={() => {
            sethamburger(true);
          }}
        >
          <i className="fa-solid fa-bars"></i>
        </div>
        <NavLink to="/" className="logo text-xl">
          <img
            src="https://quizizz.com/wf/assets/62fa6419161d3a641f681ceb_Logo.svg"
            alt=""
          />
        </NavLink>
        <ul className={`flex gap-4 nav ${hamburger === true ? "blocks" : ""}`}>
          <div
            className="thoat"
            onClick={() => {
              sethamburger(false);
            }}
          >
            X
          </div>
          <li
            onClick={() => {
              sethamburger(false);
            }}
          >
            <NavLink to="/" style={{ padding: "14px 16px" }}>
              Trang chủ
            </NavLink>
          </li>
          <li
            onClick={() => {
              sethamburger(false);
            }}
          >
            <NavLink to="quizz" style={{ padding: "14px 16px" }}>
              Quizz
            </NavLink>
          </li>
          <li
            onClick={() => {
              sethamburger(false);
            }}
          >
            <NavLink to="/history" style={{ padding: "14px 16px" }}>
              Hoạt động
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin" style={{ padding: "14px 16px" }}>
              Admin
            </NavLink>
          </li>
        </ul>

        <div className="flex gap-7">
          {isuser === false ? (
            <>
              <NavLink to="dangnhap">
                <button
                  className="p-2 rounded-xl"
                  style={{ backgroundColor: "#ede6f6", color: "#5d2057" }}
                >
                  Đăng nhập
                </button>
              </NavLink>
              <NavLink to="dangky ">
                <button
                  className="px-3 py-2 rounded-xl"
                  style={{ backgroundColor: "#9a4292", color: "white" }}
                >
                  Đăng ký
                </button>
              </NavLink>
            </>
          ) : (
            <>
              <div className="dropdown relative">
                {isaccount.img == null ? (
                  <img
                    className="w-11 rounded-md "
                    src={`data:image/jpeg;base64,${isaccount.img}`}
                  />
                ) : (
                  <img
                    className="w-11 rounded-md "
                    src="https://phongreviews.com/wp-content/uploads/2022/11/avatar-facebook-mac-dinh-19.jpg"
                    alt=""
                  />
                )}
                <div className="act-dropdown absolute top-[55px] right-[-40px]">
                  <div className="dror relative p-[30px] rounded-[20px]">
                    <div className="top absolute top-[-10px] left-[115px]">
                      <img
                        className="w-10  "
                        src="https://sondnpt00343.github.io/f8-project-08/assets/icons/arrow-up.png"
                        alt=""
                      />
                    </div>
                    <div className="list-none flex items-center gap-3 break-normal">
                      {isaccount.img == null ? (
                        <img
                          className="w-11 rounded-md "
                          src={`data:image/jpeg;base64,${isaccount.img}`}
                        />
                      ) : (
                        <img
                          className="w-11 rounded-md "
                          src="https://phongreviews.com/wp-content/uploads/2022/11/avatar-facebook-mac-dinh-19.jpg"
                          alt=""
                        />
                      )}
                      <p className="font-semibold text-xl pr-5">
                        {isaccount.nameupdate == undefined
                          ? isaccount.username
                          : isaccount.nameupdate}
                      </p>
                    </div>
                    <br />
                    <div className="dropdown-item ">
                      <li className="list-none my-[14px] ">
                        <NavLink to="/profile" className="text-[15px]">
                          Profile
                        </NavLink>
                      </li>
                      <hr />
                      <li className="list-none my-[14px] flex items-center justify-between gap-14">
                        <NavLink to="" className="text-[15px]">
                          Dark mode
                        </NavLink>
                        <img
                          className="w-[14px]"
                          src="https://sondnpt00343.github.io/f8-project-08/assets/icons/sun.svg"
                          alt=""
                        />
                      </li>
                      <hr />
                      <li className="list-none my-[14px]" onClick={logout}>
                        <p
                          href=""
                          className="text-[15px] cursor-pointer font-semibold"
                        >
                          Log out
                        </p>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </nav>
      <div id="detail">
        {/* Sử dụng Outlet để hiển thị nội dung tương ứng của mỗi route */}
        <Outlet />
      </div>
    </div>
  );
}

export default Hearder;
