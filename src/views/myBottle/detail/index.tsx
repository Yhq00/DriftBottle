import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getDetail } from "../../../service/text";
import styles from "./index.module.scss";
import { Empty, message } from "antd";
import TextArea from "antd/es/input/TextArea";
const Detail = () => {
  // const navigate = useNavigate();
  const location = useLocation();
  const textId = location.state?.textId;
  const textContent = location.state?.textContent;
  const [replyList, setReplyList] = useState<any>([]);
  useEffect(() => {
    getDetail(textId).then((res) => {
      // console.log(res.data.);
      if (res.status === 200) {
        if (res.data.data.length > 0) {
          setReplyList(res.data.data);
        }
      } else {
        message.error("请求失败！");
      }
    });
  }, []);
  const replyComponents = () => {
    return replyList.map((res: any) => (
      <div className={styles.commentCard}>
        <div className={styles.name}>{res.userNickname}回复说&nbsp;:</div>
        <div className={styles.reply}>{res.replyContent}</div>
      </div>
    ));
  };
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
          <div>
            <div>
              <h3>回复</h3>
            </div>
            {replyComponents().length > 0 ? (
              replyComponents()
            ) : (
              <Empty description={<span>暂无回复</span>}></Empty>
            )}
          </div>
        </div>
      ) : (
        <Empty description={<span>非法跳转！！</span>}></Empty>
      )}
    </>
  );
};

export default Detail;
