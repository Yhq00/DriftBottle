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
  // console.log(rePlyBody);
  const res = await http.post("/logic/text/addReply", {
    textId: rePlyBody.textId,
    userId: rePlyBody.userId,
    replyContent: rePlyBody.replyContent,
  });
  return res;
};

export const getMyBottles = async (userId: any) => {
  const res = await http.post(
    "/logic/text/getMyBottle",
    {
      userId: userId,
    },
    {},
    "upload"
  );
  return res;
};
export const getDetail = async (textId: string) => {
  const res = await http.post("/logic/text/getDetail", {
    textId: textId,
  });
  console.log(res);
  return res;
};
