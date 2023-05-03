import React, { useRef, useState } from "react";
import styles from "./index.module.scss";
import { Menu, MenuProps, Input, message } from "antd";
import { useNavigate, To } from "react-router-dom";
import throwBottle from "../../assets/images/throw.png";
import bottle from "../../assets/images/bottle.png";
const Send = () => {
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
          paddingTop: "1rem",
        }}
        alt="throw bottle"
      />,
      "/"
    ),
  ];
  const navigate = useNavigate();
  const onClick = (e: { key: To }) => {
    setIsSend(true);
    // console.log("click ", e);
    // navigate(e.key);
  };
  const { TextArea } = Input;
  const [isSend, setIsSend] = useState(false);
  const goToMain = () => {
    message.success("期待回信吧！");
    navigate("/");
  };
  return (
    <>
      {!isSend ? (
        <div>
          <div className={styles.body}>
            <TextArea
              style={{
                width: "80%",
                height: "70%",
                margin: "5rem 0rem 6rem 10rem",
              }}
              placeholder="你可以在这畅所欲言"
            ></TextArea>
          </div>
          <div className={styles.footer}>
            <Menu
              mode="horizontal"
              className={styles.menu}
              onClick={onClick}
              items={items}
            ></Menu>
          </div>
        </div>
      ) : (
        <div>
          <div className={styles.body}></div>
          <div className={styles.footers}>
            <img
              className={styles.bottle}
              src={bottle}
              alt="bottle"
              style={{ width: "5rem", height: "5rem" }}
              onAnimationEnd={() => goToMain()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Send;
