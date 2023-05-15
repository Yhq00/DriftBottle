import React from "react";
import "./App.css";
import Main from "./views/main";
import { Layout, Empty, Button } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
//layout布局定义
const { Header, Content, Footer } = Layout;
function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const userId = location.state?.userId;
  // console.log("userId:", userId);
  return (
    <>
      {typeof userId !== "undefined" ? (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Header className="header">
            <div className="headerIconDiv">
              {/* <LeftOutlined className="headerIcon" /> */}
            </div>
            <div className="headerTitle">
              <h1>漂流瓶</h1>
            </div>
            <div className="headerIconSettingDiv">
              <SettingOutlined className="headerIcon" />
            </div>
          </Header>
          <Content className="content"></Content>
          <Footer className="footer">
            <Main userId={userId} />
          </Footer>
        </div>
      ) : (
        <Empty
          description={
            <Button
              type="primary"
              onClick={() => {
                navigate("/login");
              }}
            >
              您还未登录，请先登录！！
            </Button>
          }
        ></Empty>
      )}
    </>
  );
}

export default App;
