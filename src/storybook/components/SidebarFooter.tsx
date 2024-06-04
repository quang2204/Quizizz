import styled from "@emotion/styled";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Logout } from "../../Server/ApiServer";
import { dologout } from "../../redux/action/useAction";
import { toast } from "react-toastify";

interface SidebarFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  collapsed?: boolean;
}

const StyledButton = styled.a`
  padding: 5px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  display: inline-block;
  background-color: #fff;
  color: #484848;
  text-decoration: none;
`;

const StyledSidebarFooter = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 8px;
  color: white;
  background: linear-gradient(45deg, rgb(21 87 205) 0%, rgb(90 225 255) 100%);
  /* background: #0098e5; */
`;

const StyledCollapsedSidebarFooter = styled.a`
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  color: white;
  background: linear-gradient(45deg, rgb(21 87 205) 0%, rgb(90 225 255) 100%);
  /* background: #0098e5; */
`;

const codeUrl =
  "https://github.com/azouaoui-med/react-pro-sidebar/blob/master/storybook/Playground.tsx";
// const isUser = useSelector((state: RootState) => state.user.isAuthenticated);
// const user = useSelector((state: RootState) => state.user.user);
// const navigate = useNavigate();
// console.log(isUser);

// const dispatch = useDispatch();

// const logout = async () => {
//   let res = await Logout(user.email, user.refresh_token);
//   if (res.data.EC === 0) {
//     dispatch(dologout());
//     navigate("/dangnhap");
//   } else {
//     toast.error(res.data.EM);
//   }
// };

// useEffect(() => {
//   // Đặt điều kiện để kiểm tra isAuthenticated và chuyển hướng nếu cần
//   if (!isUser) {
//     navigate("/dangnhap");
//   }
// }, [isUser, navigate]);
export const SidebarFooter: React.FC<SidebarFooterProps> = ({
  children,
  collapsed,
  ...rest
}) => {
  return (
    <div
      style={{
        display: "flex",
        paddingLeft: "20px",
        paddingBottom: "20px",
        alignItems: "center",
        gap: "10px",
        fontSize: "18px",
        cursor: "pointer",
      }}
    >
      <i className="fa-solid fa-right-from-bracket"></i> Log out
    </div>
  );
};
