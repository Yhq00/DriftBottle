import React, { RefObject, useRef } from "react";
import { Menu } from "antd";
import { useNavigate, To } from "react-router-dom";
import styles from "./index.module.scss";
import type { MenuProps } from "antd";
import throwBottle from "../../assets/images/throw.png";
import getBottle from "../../assets/images/getBottle.png";
import myBottle from "../../assets/images/myBottle.png";
const Main = () => {
  const navigate = useNavigate();
  const myRef = useRef();
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
  const items = [
    getItem(
      <img
        src={throwBottle}
        style={{
          width: "5rem",
          height: "5rem",
        }}
        alt="throw bottle"
      />,
      "/Send"
    ),
    getItem(
      <img
        src={getBottle}
        className={styles.www}
        alt="get bottle"
        ref={myRef as unknown as RefObject<HTMLImageElement>}
        onAnimationEnd={() => {
          // navigate("/Get");
        }}
      />,
      "/Get"
    ),
    getItem(
      <img
        src={myBottle}
        style={{
          width: "5rem",
          height: "5rem",
        }}
        alt="My bottle"
      />,
      "/My"
    ),
  ];
  const onClick = (e: { key: To }) => {
    if (e.key === "/Get") {
      // alert("1121");
      const sentDom = myRef.current;
      //@ts-ignore
      sentDom.style.animationPlayState = "running";
      //@ts-ignore
      // sentDom.style.animationPlayState = "paused";
    } else {
      navigate(e.key);
    }
  };
  return (
    <>
      <Menu
        mode="horizontal"
        className={styles.menu}
        onClick={onClick}
        items={items}
      ></Menu>
    </>
  );
};
export default Main;
