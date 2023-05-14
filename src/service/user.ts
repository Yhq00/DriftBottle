import http from "../utils/http";

type loginBody = {
  userName: string;
  passWord: string;
};

export const login = async (loginBody: loginBody) => {
  const res = await http.post(
    "/logic/user/login",
    {
      userName: loginBody.userName,
      userPwd: loginBody.passWord,
    },
    {},
    "upload"
  );
  return res;
};
