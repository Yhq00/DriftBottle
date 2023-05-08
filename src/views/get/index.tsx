import React, { RefObject, useRef, useState } from "react";
import styles from "./index.module.scss";
import loading from "../../assets/images/loading1.png";
import bottle from "../../assets/images/bottle.png";
import { Button, Input } from "antd";
import { useNavigate } from "react-router-dom";
const Get = () => {
  const [isShow, setIsShow] = useState(true);
  const { TextArea } = Input;
  const myRefs = useRef();
  const navigate = useNavigate();
  const handleEnds = () => {
    navigate("/");
  };
  const handleCancel = () => {
    setIsShow(false);
    const sentDom = myRefs.current;
    //@ts-ignore
    sentDom.style.display = "inline";
  };
  return (
    <>
      <div className={styles.body}>
        {isShow && (
          <div>
            <div className={styles.header}>
              <div>
                <img src={loading} className={styles.headerImg} alt="loading" />
              </div>
              <div className={styles.headerMiddle}>
                <h1 className={styles.headerH}>漂流瓶</h1>
              </div>
              <div className={styles.headerBtn}>
                <Button type="primary" danger>
                  举报
                </Button>
              </div>
            </div>
            <div>
              <TextArea
                style={{
                  width: "80%",
                  height: "450px",
                  margin: "5px 0px 30px 180px",
                }}
              ></TextArea>
            </div>
            <div className={styles.footer}>
              <Button style={{ marginLeft: "300px" }} onClick={handleCancel}>
                扔回大海
              </Button>
              <Button style={{ marginRight: "300px" }} type="primary">
                回复
              </Button>
            </div>
          </div>
        )}
        <img
          src={bottle}
          ref={myRefs as unknown as RefObject<HTMLImageElement>}
          className={styles.throw}
          alt="bottle"
          onAnimationEnd={handleEnds}
        />
      </div>
    </>
  );
};

export default Get;
