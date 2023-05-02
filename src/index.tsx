import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
// import { Provider } from "react-redux";
import router from "./router";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // 严格模式 提供友好提示
  // <React.StrictMode>
  <Suspense>
    {/* <Provider store={store}> */}
    <RouterProvider router={router}></RouterProvider>
    {/* </Provider> */}
  </Suspense>
  // </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
