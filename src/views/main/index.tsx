import React from "react";
import { Menu } from "antd";
import { useNavigate, Routes, Route, To } from "react-router-dom";
import items from "../../router/index";
import Send from "../send";
import GetBottle from "../get";
import MyBottle from "../myBottle";
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
      >
        <Routes>
          <Route path="/Send" Component={Send}></Route>
          <Route path="/Get" Component={GetBottle}></Route>
          <Route path="/My" Component={MyBottle}></Route>
        </Routes>
      </Menu>
    </>
  );
};
export default Main;
