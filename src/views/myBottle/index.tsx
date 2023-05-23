import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { useLocation } from "react-router-dom";
import { Empty, Card, message } from "antd";
import { getMyBottles } from "../../service/text";
const MyBottle = () => {
  const location = useLocation();
  const userId = location.state?.userId;
  const [textList, setTextList] = useState();
  useEffect(() => {
    getMyBottles(userId.userId).then((res) => {
      if (res.status === 200) {
        setTextList(res.data.data);
      } else {
        message.error("请求失败！");
      }
    });
  }, []);
  // const ListCard;
  return (
    <>
      {typeof userId !== "undefined" ? (
        <div className={styles.body}>
          <div className={styles.header}>我的瓶子</div>
          <div>
            <Card></Card>
          </div>
        </div>
      ) : (
        <Empty description={<span>非法跳转！！</span>}></Empty>
      )}
    </>
  );
};

export default MyBottle;
