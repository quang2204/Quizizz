import React from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  menuClasses,
  MenuItemStyles,
} from "react-pro-sidebar";
import { Switch } from "./components/Switch";
import { SidebarHeader } from "./components/SidebarHeader";

import { Diamond } from "./icons/Diamond";
import { BarChart } from "./icons/BarChart";
import { Outlet, NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Typography } from "./components/Typography";
import { SidebarFooter } from "./components/SidebarFooter";
type Theme = "light" | "dark";

const themes = {
  light: {
    sidebar: {
      backgroundColor: "#ffffff",
      color: "#607489",
    },
    menu: {
      menuContent: "#fbfcfd",
      icon: "#0098e5",
      hover: {
        backgroundColor: "#c5e4ff",
        color: "#44596e",
      },
      disabled: {
        color: "#9fb6cf",
      },
    },
  },
  dark: {
    sidebar: {
      backgroundColor: "#0b2948",
      color: "#8ba1b7",
    },
    menu: {
      menuContent: "#082440",
      icon: "#59d0ff",
      hover: {
        backgroundColor: "#00458b",
        color: "#b6c8d9",
      },
      disabled: {
        color: "#3e5e7e",
      },
    },
  },
};

// hex to rgba converter
const hexToRgba = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const Playground: React.FC = () => {
  const [collapsed, setCollapsed] = React.useState(false);
  const [toggled, setToggled] = React.useState(false);
  const [broken, setBroken] = React.useState(false);
  const [rtl, setRtl] = React.useState(false);
  const [hasImage, setHasImage] = React.useState(false);
  const [theme, setTheme] = React.useState<Theme>("light");
  const menuItemStyles: MenuItemStyles = {
    root: {
      fontSize: "13px",
      fontWeight: 400,
    },
    icon: {
      color: themes[theme].menu.icon,
      [`&.${menuClasses.disabled}`]: {
        color: themes[theme].menu.disabled.color,
      },
    },
    SubMenuExpandIcon: {
      color: "#b6b7b9",
    },
    subMenuContent: ({ level }) => ({
      backgroundColor:
        level === 0
          ? hexToRgba(
              themes[theme].menu.menuContent,
              hasImage && !collapsed ? 0.4 : 1
            )
          : "transparent",
    }),
    button: {
      [`&.${menuClasses.disabled}`]: {
        color: themes[theme].menu.disabled.color,
      },
      "&:hover": {
        backgroundColor: hexToRgba(
          themes[theme].menu.hover.backgroundColor,
          hasImage ? 0.8 : 1
        ),
        color: themes[theme].menu.hover.color,
      },
    },
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined,
    }),
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        direction: rtl ? "rtl" : "ltr",
      }}
    >
      <Sidebar collapsed={collapsed} toggled={toggled}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            position: "fixed",
            width: `${collapsed == true ? "80px" : "250px"}`,
          }}
        >
          <SidebarHeader
            rtl={rtl}
            style={{ marginBottom: "24px", marginTop: "16px" }}
          />
          <div style={{ flex: 1, marginBottom: "32px" }}>
            <div style={{ padding: "0 24px", marginBottom: "8px" }}>
              <Typography
                variant="body2"
                fontWeight={600}
                style={{ opacity: collapsed ? 0 : 0.7, letterSpacing: "0.5px" }}
              >
                General
              </Typography>
            </div>
            <Menu menuItemStyles={menuItemStyles}>
              <Link
                to="/admin"
                style={{
                  textDecoration: "none",

                  color: "rgb(96, 116, 137)",
                }}
              >
                <MenuItem icon={<BarChart />} style={{ fontSize: "17px" }}>
                  Dashboard
                </MenuItem>
              </Link>
              <SubMenu
                label="Feature"
                style={{ fontSize: "18px" }}
                icon={<Diamond />}
              >
                <Link
                  to="quan-ly-user"
                  style={{ textDecoration: "none", color: "rgb(96, 116, 137)" }}
                >
                  <MenuItem className="a" style={{ fontSize: "17px" }}>
                    Quản lý user
                  </MenuItem>
                </Link>

                <Link
                  to="quan-ly-quiz"
                  style={{ textDecoration: "none", color: "rgb(96, 116, 137)" }}
                >
                  <MenuItem className="a" style={{ fontSize: "17px" }}>
                    Quản lý bài Quiz
                  </MenuItem>
                </Link>
                <Link
                  to="quan-ly-cau-hoi"
                  style={{ textDecoration: "none", color: "rgb(96, 116, 137)" }}
                >
                  <MenuItem className="a" style={{ fontSize: "17px" }}>
                    Quản lý Câu hỏi
                  </MenuItem>
                </Link>
              </SubMenu>
            </Menu>
          </div>
          
        </div>
        {/* <SidebarFooter></SidebarFooter> */}
      </Sidebar>

      <main className="w-full z-10">
        <div style={{ padding: "16px 24px", color: "#44596e" }}>
          <div style={{ marginBottom: "16px" }}>
            {broken && (
              <button
                className="sb-button"
                onClick={() => setToggled(!toggled)}
              >
                Toggle
              </button>
            )}
          </div>
          <div style={{ padding: "0 8px" }}>
            <div style={{ marginBottom: 16 }}>
              <Switch
                id="collapse"
                checked={collapsed}
                onChange={() => setCollapsed(!collapsed)}
                label=""
              />
            </div>
            <div>
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </main>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};
