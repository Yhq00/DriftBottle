import React from "react";
import "./App.css";
import Main from "./views/main";
import { Layout } from "antd";
import { SettingOutlined } from "@ant-design/icons";
//layout布局定义
const { Header, Content, Footer } = Layout;
function App() {
  return (
    <>
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
      <Content className="content">22</Content>
      <Footer className="footer">
        <Main />
      </Footer>
    </>
  );
}

export default App;
