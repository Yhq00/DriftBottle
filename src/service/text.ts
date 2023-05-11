import http from "../utils/http";

//漂流瓶
type textBody = {
  userId: number;
  textContent: string;
};
export const addText = async (textBody: textBody) => {
  const res = await http.post("/logic/text/addText", {
    userId: textBody.userId,
    textContent: textBody.textContent,
  });
  return res;
};

export const findText = async () => {
  const res = await http.get("/logic/text/findText");
  return res;
};

//漂流瓶
type rePlyBody = {
  textId: number;
  userId: number;
  replyContent: string;
};

export const addReply = async (rePlyBody: rePlyBody) => {
  const res = await http.post("/logic/text/addReply", {
    textId: rePlyBody.userId,
    userId: rePlyBody.userId,
    replyContent: rePlyBody.replyContent,
  });
  return res;
};
type loginBody = {
  userName: string;
  passWord: string;
};
export const login = async (loginBody: loginBody) => {
  const res = await http.post(
    "/logic/user/login",
    {
      userName: loginBody.userName,
      passWord: loginBody.userName,
    },
    {},
    "upload"
  );
  return res;
};
