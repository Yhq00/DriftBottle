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
type registerBody = {
  userName: string;
  passWord: string;
  nickName: string;
};
export const register = async (registerBody: registerBody) => {
  console.log(registerBody);
  const res = await http.post(
    "/logic/user/register",
    {
      userName: registerBody.userName,
      userPwd: registerBody.passWord,
      nickName: registerBody.nickName,
    },
    {},
    "upload"
  );
  return res;
};
