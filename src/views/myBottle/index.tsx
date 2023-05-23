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
      console.log(res.data);
      if (res.status === 200) {
        if (res.data.code === 200) {
          if (res.data.data.length !== 0) {
            setTextList(res.data.data);
          } else {
            message.info("你还没有发布过内容噢！");
          }
        } else {
          message.info("后端错误联系管理员！");
        }
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
