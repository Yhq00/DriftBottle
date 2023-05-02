import React from "react";
import type { MenuProps } from "antd";
import throwBottle from "../assets/images/throw.png";
import getBottle from "../assets/images/getBottle.png";
import myBottle from "../assets/images/myBottle.png";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: string,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
const router = [
  getItem(
    <img
      src={throwBottle}
      style={{
        width: "5rem",
        height: "5rem",
        flexBasis: "0",
        flexGrow: "1",
      }}
      alt="throw bottle"
    />,
    "/Send"
  ),
  getItem(
    <img
      src={getBottle}
      style={{
        width: "5rem",
        height: "5rem",
        flexBasis: "0",
        flexGrow: "1",
      }}
      alt="get bottle"
    />,
    "/Get"
  ),
  getItem(
    <img
      src={myBottle}
      style={{
        width: "5rem",
        height: "5rem",
        flexBasis: "0",
        flexGrow: "1",
      }}
      alt="My bottle"
    />,
    "/My"
  ),
];
export default router;
