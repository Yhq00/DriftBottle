import axios from "axios";
import type { AxiosRequestConfig, AxiosResponse } from "axios";
// import { message } from "antd";

const instance = axios.create({
  baseURL: "http://47.120.11.162:8087/",
  // baseURL: "http://127.0.0.1:8087/",

  timeout: 5000,
});

interface Http {
  get: (
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
    type?: "upload"
  ) => Promise<AxiosResponse>;
  post: (
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
    type?: "upload"
  ) => Promise<AxiosResponse>;
  put: (
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
    type?: "upload"
  ) => Promise<AxiosResponse>;
  patch: (
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ) => Promise<AxiosResponse>;
  delete: (
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ) => Promise<AxiosResponse>;
}

const goLogin = (res: any) => {
  // console.log("res", res);
  if (res && res.status === 200 && res.data && res.data.success) {
    return res;
  }
  // message.error(res?.data?.errorMsg || "请求失败");
  return res;
};

const http: Http = {
  get(url, data, config, type) {
    if (type === "upload") {
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });
      return instance
        .get(url, {
          params: formData,
          ...config,
          headers: {
            "Content-Type": "multipart/form-data",
            ...config?.headers,
          },
        })
        .then((res) => {
          return goLogin(res);
        });
    } else {
      return instance
        .get(url, {
          params: data,
          ...config,
        })
        .then((res) => {
          return goLogin(res);
        });
    }
  },
  post(url, data, config, type) {
    if (!data) {
      return instance.post(url, data, config).then((res) => {
        return goLogin(res);
      });
    }

    if (type === "upload") {
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        formData.append(key, data?.[key]);
      });
      return instance
        .post(url, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          ...config,
        })
        .then((res) => {
          return goLogin(res);
        });
    }

    let params = new URLSearchParams();
    Object.keys(data).forEach((key) => {
      params.append(key, data?.[key]?.toString() || "");
    });

    return instance.post(url, params, config).then((res) => {
      return goLogin(res);
    });
  },
  put(url, data, config, type) {
    if (!data) {
      return instance.put(url, data, config);
    }

    if (type === "upload") {
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        formData.append(key, data?.[key]);
      });
      return instance
        .put(url, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          ...config,
        })
        .then((res) => {
          return goLogin(res);
        });
    }

    let params = new URLSearchParams();
    Object.keys(data).forEach((key) => {
      params.append(key, data?.[key]?.toString() || "");
    });

    return instance.put(url, params, config).then((res) => {
      return goLogin(res);
    });
  },
  patch(url, data, config) {
    return instance.patch(url, data, config);
  },
  delete(url, data, config) {
    return instance.delete(url, {
      data,
      ...config,
    });
  },
};

export default http;
