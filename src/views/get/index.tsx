import React, { RefObject, useRef, useState, useEffect } from "react";
import styles from "./index.module.scss";
import loading from "../../assets/images/loading1.png";
import bottle from "../../assets/images/bottle.png";
import { Button, Empty, Input, message } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { findText, addReply } from "../../service/text";
const Get = () => {
  const [isShow, setIsShow] = useState(true);
  const { TextArea } = Input;
  const myRefs = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const userIds = location.state?.userId;
  const handleEnds = () => {
    navigate("/main", { state: userIds });
  };
  const handleCancel = () => {
    setIsShow(false);
    const sentDom = myRefs.current;
    //@ts-ignore
    sentDom.style.display = "inline";
  };
  const [replyContent, setReplyContent] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [userId, setUserId] = useState(0);
  const [textId, setTextId] = useState(0);
  const [isReply, setIsReply] = useState(false);
  const [textContent, setTextContent] = useState();
  useEffect(() => {
    findText().then((res) => {
      setTextContent(res.data.data.textContent);
      setUserId(res.data.data.userId);
      setTextId(res.data.data.textId);
    });
  }, []);

  interface replyBody {
    textId: number;
    userId: number;
    replyContent: string;
  }
  const handleReply = () => {
    setIsReply(true);
    const rePlay: replyBody = {
      textId: textId,
      userId: userIds.userId,
      replyContent: replyContent,
    };
    if (rePlay.replyContent !== "" && rePlay.userId !== 0) {
      addReply(rePlay).then((res) => {
        if (res.data.code === 200) {
          message.success("回复成功！");
          setIsReply(false);
        } else {
          message.success("回复失败，请联系管理员！");
        }
      });
    } else {
      return;
    }
  };
  return (
    <>
      {typeof userIds !== "undefined" ? (
        <div className={styles.body}>
          {isShow && (
            <div>
              <div className={styles.header}>
                <div>
                  <img
                    src={loading}
                    className={styles.headerImg}
                    alt="loading"
                  />
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
                    height: "400px",
                    margin: "5px 0px 10px 180px",
                    color: "white",
                  }}
                  value={textContent}
                  disabled={true}
                ></TextArea>
              </div>
              <div className={styles.footer}>
                {isReply && (
                  <TextArea
                    style={{
                      width: "89%",
                      height: "100px",
                      margin: "5px 0px 10px 30px",
                    }}
                    onChange={(e) => setReplyContent(e.target.value)}
                    value={replyContent}
                  ></TextArea>
                )}

                <div className={styles.footerBtn}>
                  <Button
                    style={{ marginLeft: "300px" }}
                    onClick={handleCancel}
                  >
                    扔回大海
                  </Button>
                  <Button
                    style={{ marginRight: "300px" }}
                    type="primary"
                    onClick={handleReply}
                  >
                    回复
                  </Button>
                </div>
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
      ) : (
        <Empty
          description={<Empty description={<span>非法跳转！！</span>}></Empty>}
        ></Empty>
      )}
    </>
  );
};

export default Get;
