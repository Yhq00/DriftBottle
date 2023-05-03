import React from "react";
import { Menu } from "antd";
import { useNavigate, To } from "react-router-dom";
import items from "../../utils/index";
import styles from "./index.module.scss";
const Main = () => {
  const navigate = useNavigate();
  const onClick = (e: { key: To }) => {
    // console.log("click ", e);
    navigate(e.key);
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
