import React from "react";
import { createHashRouter } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import { lazy } from "react";
import { AntdIconProps } from "@ant-design/icons/lib/components/AntdIcon";
import { ItemType } from "antd/es/breadcrumb/Breadcrumb";

const App = lazy(() => import("../App"));
const Send = lazy(() => import("../views/send"));
const Get = lazy(() => import("../views/get"));
const My = lazy(() => import("../views/myBottle"));
const Login = lazy(() => import("../views/user/login"));
const Detail = lazy(() => import("../views/myBottle/detail"));
declare module "react-router" {
  interface IndexRouteObject {
    meta?: {
      menu?: boolean;
      title?: string;
      // icon?: React.ReactNode;
      // 优化特定类型
      icon?: React.ReactElement<AntdIconProps>;
      auth?: boolean;
      propRouter?: ItemType[];
    };
    name: string;
  }
  interface NonIndexRouteObject {
    meta?: {
      menu?: boolean;
      title?: string;
      icon?: React.ReactElement<AntdIconProps>;
      auth?: boolean;
      propRouter?: ItemType[];
    };
    name: string;
  }
}
// 定义路由表组及类型
export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Login></Login>,
    name: "login",
    meta: {
      menu: true,
      title: "页面",
      auth: true,
    },

    // children: [
    //   // main
    //   {
    //     path: "Send",
    //     element: <Send></Send>,
    //     meta: {
    //       menu: true,
    //       title: "主页",
    //       auth: true,
    //     },
    //     name: "send",
    //   },
    // ],
  },
  {
    path: "/main",
    element: <App></App>,
    name: "main",
    meta: {
      menu: true,
      title: "页面",
      auth: true,
    },
  },
  {
    path: "Send",
    element: <Send></Send>,
    meta: {
      menu: true,
      title: "主页",
      auth: true,
    },
    name: "send",
  },
  {
    path: "Get",
    element: <Get></Get>,
    meta: {
      menu: true,
      title: "主页",
      auth: true,
    },
    name: "get",
  },
  {
    path: "My",
    element: <My></My>,
    meta: {
      menu: true,
      title: "主页",
      auth: true,
    },
    name: "my",
    // children: [
    //   {
    //     path: "details",
    //     element: <Detail></Detail>,
    //     meta: {
    //       menu: true,
    //       title: "详情",
    //       auth: true,
    //     },
    //     name: "details",
    //   },
    // ],
  },
  {
    path: "my/details",
    element: <Detail></Detail>,
    meta: {
      menu: true,
      title: "详情",
      auth: true,
    },
    name: "details",
  },
  {
    path: "login",
    element: <Login></Login>,
    meta: {
      menu: true,
      title: "主页",
      auth: true,
    },
    name: "login",
  },
];
// 使用 createHashRouter 函数来创建一个 HashRouter 路由器
const router = createHashRouter(routes);
export default router;
