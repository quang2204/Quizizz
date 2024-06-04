import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// import { useSelector } from "react-redux";
// import Loading from "../Loading";
const Index = () => {
  const [activeLink, setActiveLink] = useState("#tao");
  // let location = useLocation();
  // console.log(location);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = document.querySelectorAll("section");

      sections.forEach((sec) => {
        const secTop = sec.offsetTop - 50;
        const secHeight = sec.offsetHeight;
        const secId = sec.getAttribute("id");

        if (scrollY >= secTop && scrollY < secTop + secHeight) {
          setActiveLink("#" + secId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="containers">
      <div className="block ">
        <div className="w-[80%] m-auto">
          <div className="flex index items-center  homepage">
            <div className="">
              <h1 className="font-bold pb-3">Plan in seconds, not weekends.</h1>
              <p className="text-xl font-medium pb-3">
                All the speed teachers love for planning, plus everything you
                need on a singular instructional platform
              </p>
              <button
                className=" text-white button px-8 py-3 rounded"
                style={{ backgroundColor: "#8854c0" }}
              >
                Nhận báo giá
              </button>
            </div>
            {/* <img className="img"
          src="https://assets-global.website-files.com/60aca2b71ab9a5e4ececf1cf/633401610da119172b376051_School%20District%20Hero%20Image-p-500.png"
          alt=""
        /> */}

            <iframe
              style={{ width: "800px", height: "500px" }}
              src="https://rive.app/s/SqJ8CRKHKUCiFw8l1z76dQ/embed"
              allowFullScreen
              dir="ltr"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="max-w-[865px] m-auto pt-4">
        <img
          src="https://quizizz.com/wf/assets/6501a46f763d217ede2fac83_LOGOs_hidef-p-1080.webp"
          alt=""
        />
      </div>

      <div
        className="conten mt-20 py-20 "
        style={{ backgroundColor: "#f7f7f7", width: "100%" }}
      >
        <p style={{ fontSize: "22px" }} className="text-center pb-3">
          Được yêu thích trên hơn 150 quốc gia
        </p>
        <h2
          className="text-center pb-4"
          style={{ fontSize: "40px", fontWeight: "600" }}
        >
          Được các giáo viên tin cậy trong
          <span style={{ color: "#8854c0" }}> 90% trường học ở Mỹ</span>
        </h2>
        <div className="block ">
          <div className="w-[90%] m-auto flex justify-center">
            <button
              className=" text-white button px-8 py-3  mb-5 text-xl rounded"
              style={{ backgroundColor: "#8854c0" }}
            >
              Quizizz cho các trường học và học khu
            </button>
          </div>
        </div>

        <img
          className="m-auto "
          src="https://quizizz.com/wf/assets/65fac5044d44530c089fb779_Logo_Web-p-1080.webp"
          alt=""
        />
      </div>
      <div className="block">
        <div className="ml-auto z-20 mr-auto  w-[90%] mt-10 sticky top-[66px]">
          <div
            className="sticky-tabs-section pb-1 flex pt-1 justify-center rounded-sm mb-10"
            style={{ fontSize: "20px", backgroundColor: "#f2f2f2" }}
          >
            <a
              href="#tao"
              // onClick={() => handclick()}
              className={`w-[450px] section  flex gap-3 items-center justify-center py-[10px] ml-[3px] ${
                activeLink == "#tao" ? "active" : ""
              }`}
            >
              <p>Tạo & Tùy chỉnh </p>
              <div className="flex items-center relative">
                <img
                  className="absolute inset-0"
                  src="https://quizizz.com/wf/assets/62fa6419161d3a5253681cbb_file-plus_white.svg"
                  alt=""
                />
                <img
                  src="https://quizizz.com/wf/assets/62fa6419161d3a67ef681c96_file-plus_black.svg"
                  alt=""
                />
              </div>
            </a>
            <a
              href="#baogom"
              // onClick={handleNavLinkClick()}
              className={`w-[450px] flex gap-3 items-center   justify-center ${
                activeLink == "#baogom" ? "active" : ""
              }`}
            >
              <p>Bao gồm & Tương tác</p>
              <div className="flex items-center relative">
                <img
                  className="absolute inset-0"
                  src="	https://quizizz.com/wf/assets/62fa6419161d3a3807681c9e_Users_-_White.svg"
                  alt=""
                />
                <img
                  src="https://quizizz.com/wf/assets/62fa641a161d3a4123681d01_Users_Black.svg"
                  alt=""
                />
              </div>
            </a>
            <a
              href="#dulieu"
              className={`w-[450px] flex gap-3 items-center justify-center ${
                activeLink == "#dulieu" ? "active" : ""
              }`}
            >
              <p href="">Lấy dữ liệu</p>
              <div className="flex items-center relative">
                <img
                  className="absolute inset-0"
                  src="	https://quizizz.com/wf/assets/62fa6419161d3a0bd0681ced_Chart_-_White.svg"
                  alt=""
                />
                <img
                  src="https://quizizz.com/wf/assets/62fa6419161d3a9caa681cdd_Chart_-_Black.svg"
                  alt=""
                />
              </div>
            </a>
          </div>
        </div>
        <div
          className=" pb-1 nones w-[30%] ml-14 flex pt-1  justify-center rounded-md mb-10"
          style={{ fontSize: "20px", backgroundColor: "#2d70ae" }}
        >
          <a
            href="#tao"
            // onClick={() => handclick()}
            className={` section  flex gap-3 items-center justify-center py-[10px] ml-[3px] `}
          >
            <p className="text-white">Tạo & Tùy chỉnh </p>
            <div className="flex items-center relative">
              <img
                className="absolute inset-0"
                src="https://quizizz.com/wf/assets/62fa6419161d3a5253681cbb_file-plus_white.svg"
                alt=""
              />
              <img
                src="https://quizizz.com/wf/assets/62fa6419161d3a67ef681c96_file-plus_black.svg"
                alt=""
              />
            </div>
          </a>
        </div>
        <section id="tao" className="block">
          <div className="flex ml-[50px] max items-center  justify-evenly">
            <div className="w-96">
              <h4 className="text-5xl font-bold leading-10 pb-4">
                <span className="quickly-span">Nhanh chóng tìm hoặc</span>
                <span className="create-span"> tạo ra </span>
                bất cứ thứ gì trong chương trình học của bạn
              </h4>
              <p className="text-[18px] leading-10 pb-4">
                Chuẩn bị nội dung tương tác, chất lượng cao trong vòng ít nhất
                hai phút.
              </p>
              <div className="flex items-start gap-3">
                <img
                  src="https://quizizz.com/wf/assets/62fa641a161d3a0e3d681d08_Books_Icon.svg"
                  alt=""
                />
                <div>
                  <div className="text-xl font-bold pb-2">
                    Thư viện nội dung có thể tùy chỉnh
                  </div>
                  <p className="leading-6 pb-4 text-lg">
                    Hơn 30 triệu hoạt động do giáo viên tạo bao gồm tất cả các
                    cấp lớp và môn học
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <img
                  src="https://quizizz.com/wf/assets/62fa6419161d3a0c96681c94_Pen_to_square_Icon.svg"
                  alt=""
                />
                <div>
                  <div className="text-xl font-bold pb-2">
                    Tạo, sao chép hoặc chỉnh sửa
                  </div>
                  <p className="leading-6 pb-4 text-lg">
                    Xây dựng từ đầu, sao chép toàn bộ hoạt động hoặc trộn và kết
                    hợp để đáp ứng nhu cầu của sinh viên
                  </p>
                </div>
              </div>
            </div>
            <div className="video pl-20">
              <video
                className="w-[900px]"
                // ref={videoRef}
                src="https://quizizz.com/wf/assets/632a2c2c8adda7ed0e12491c_Unique (1)-transcode.mp4"
                autoPlay
                loop
                playsInline
              ></video>
            </div>
          </div>
        </section>
        <br />
        <div
          className=" pb-1 nones w-[30%] ml-14 flex pt-1  justify-center rounded-md mb-10"
          style={{
            fontSize: "20px",
            backgroundColor: "rgba(154, 66, 146, 0.1)",
          }}
        >
          <a
            href="#"
            // onClick={() => handclick()}
            className={` section  flex gap-3 items-center justify-center py-[10px] ml-[3px] `}
          >
            <p style={{ color: "#9a4292" }}>Bao gồm & Tương tác </p>
            <div className="flex items-center relative">
              <img
                className="absolute inset-0"
                src="	https://quizizz.com/wf/assets/62fa6419161d3a3807681c9e_Users_-_White.svg"
                alt=""
              />
              <img
                src="https://quizizz.com/wf/assets/62fa641a161d3a4123681d01_Users_Black.svg"
                alt=""
              />
            </div>
          </a>
        </div>
        <section id="baogom">
          <div className="flex maxs ml-[-20px] max items-center pt-[140px] justify-around">
            <div className="w-[30rem]">
              <h4 className="text-4xl leading-10 pb-4">
                Bao gồm và tham gia
                <span className="every-student-span"> mọi học sinh</span>
              </h4>
              <p className="text-[18px] leading-10 pb-4">
                Thu hút sinh viên một cách linh hoạt theo tốc độ của riêng họ,
                từ mọi thiết bị.
              </p>
              <div className="flex items-start gap-3">
                <img
                  src="https://quizizz.com/wf/assets/62fa6419161d3a923a681c85_Purple_Glasses.svg"
                  alt=""
                />
                <div>
                  <div className="text-xl font-bold pb-2">
                    Thiết kế toàn diện, dễ tiếp cận
                  </div>
                  <p className="leading-6 pb-4 text-lg">
                    Hơn 30 triệu hoạt động do giáo viên tạo bao gồm tất cả các
                    cấp lớp và môn học
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <img
                  src="https://quizizz.com/wf/assets/62fa6419161d3a49ed681cec_Gamepad.svg"
                  alt=""
                />
                <div>
                  <div className="text-xl font-bold pb-2">Đánh bạc cho tốt</div>
                  <p className="leading-6 pb-4 text-lg">
                    Bảng xếp hạng, chủ đề, âm nhạc, v.v. để thúc đẩy học sinh
                  </p>
                </div>
              </div>
            </div>
            <div className="video relative">
              <img
                className="absolute z-10 w-full max-w-[244px] rounded-xl"
                style={{ boxShadow: "0 16px 120px rgba(31, 31, 31, 0.12)" }}
                src="https://quizizz.com/wf/assets/64f5b07d8d24393191630ed3_62fe8881eec8ec4dc1fb783d_Group_40285_1.webp"
                alt=""
              />
              <img
                className="max-w-[660px] w-full"
                src="https://quizizz.com/wf/assets/64f5b0963efaa4030e778e9f_63339124c299bb0fb4f8c452_Group_482935-min-p-800.webp"
                alt=""
              />
            </div>
          </div>
        </section>
        <br />
        <div
          className=" pb-1 nones w-[30%] ml-14 flex pt-1  justify-center rounded-md mb-10"
          style={{
            fontSize: "20px",
            backgroundColor: "rgba(45, 157, 166, 0.1)",
          }}
        >
          <a
            href="#"
            // onClick={() => handclick()}
            className={` section  flex gap-3 items-center justify-center py-[10px] ml-[3px] `}
          >
            <p style={{ color: "#2d9da6" }}>Lấy dữ liệu </p>
            <div className="flex items-center relative">
              <img
                className="absolute inset-0"
                src="	https://quizizz.com/wf/assets/62fa6419161d3a3807681c9e_Users_-_White.svg"
                alt=""
              />
              <img
                src="https://quizizz.com/wf/assets/62fa641a161d3a4123681d01_Users_Black.svg"
                alt=""
              />
            </div>
          </a>
        </div>
        <section id="dulieu">
          <div className="flex maxs' ml-[-50px] max items-center  pt-[100px]  pb-5 justify-around">
            <div className="w-96">
              <h4 className="text-5xl font-bold leading-10 pb-4">
                Nhận dữ liệu
                <span className="easy-span"> dễ hành động</span>
              </h4>
              <p className="text-[18px] leading-10 pb-4">
                Thông tin chi tiết chính xác bạn cần để biến hướng dẫn theo
                hướng dữ liệu thành hiện thực.
              </p>
              <div className="flex items-start gap-3">
                <img
                  src="https://quizizz.com/wf/assets/62fa6419161d3a1159681cb8_User_Clock.svg"
                  alt=""
                />
                <div>
                  <div className="text-xl font-bold pb-2">
                    Thông tin chi tiết trong thời gian thực
                  </div>
                  <p className="leading-6 pb-4 text-lg">
                    Xác định nhu cầu của học sinh và điều chỉnh ngay lập tức
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <img
                  src="https://quizizz.com/wf/assets/62fa641a161d3a3310681d0d_Green_Chart.svg"
                  alt=""
                />
                <div>
                  <div className="text-xl font-bold pb-2">
                    Báo cáo chụp nhanh
                  </div>
                  <p className="leading-6 pb-4 text-lg">
                    Xem hiệu suất tổng thể của lớp, câu hỏi hoặc chủ đề khó nhất
                    và sự tiến bộ của cá nhân
                  </p>
                </div>
              </div>
            </div>
            <div className="video relative">
              <img
                className="absolute right-0 z-10 w-full max-w-[244px] rounded-xl"
                style={{ boxShadow: "0 16px 120px rgba(31, 31, 31, 0.12)" }}
                src="https://quizizz.com/wf/assets/64f5b1693e2504f6bbe52b00_62fe8a7b63e52b4f85f2f622_visual_1.webp"
                alt=""
              />
              <img
                className="max-w-[660px] w-full"
                src="https://quizizz.com/wf/assets/64f5b15937f3c9809b8db626_6333921d3b3392cd0cfc3681_Group_482936-min-p-800.webp"
                alt=""
              />
              <img
                className="absolute bottom-0 z-10 w-full max-w-[244px] rounded-xl"
                src="https://quizizz.com/wf/assets/64f5b17aae3b5131996b7807_62fe8b07062f505be009f768_visual_2_1-p-500.webp"
                alt=""
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
