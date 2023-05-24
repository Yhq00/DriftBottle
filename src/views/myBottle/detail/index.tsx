import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getDetail } from "../../../service/text";
import styles from "./index.module.scss";
import { Empty } from "antd";
import TextArea from "antd/es/input/TextArea";
const Detail = () => {
  // const navigate = useNavigate();
  const location = useLocation();
  const textId = location.state?.textId;
  const textContent = location.state?.textContent;
  useEffect(() => {
    getDetail(textId);
  }, []);
  return (
    <>
      {typeof textId !== "undefined" ? (
        <div className={styles.body}>
          <div className={styles.title}>
            <div>我的瓶子:</div>
            <TextArea
              style={{
                height: "400px",
                // margin: "5px 0px 10px 180px",
                color: "black",
                fontSize: "20px",
                textIndent: "2ch",
              }}
              value={textContent}
              disabled={true}
            ></TextArea>
          </div>
        </div>
      ) : (
        <Empty description={<span>非法跳转！！</span>}></Empty>
      )}
    </>
  );
};

export default Detail;
