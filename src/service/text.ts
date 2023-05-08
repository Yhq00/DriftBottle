import http from "../utils/http";

//漂流瓶
type textBody = {
  userId: string;
  textContent: string;
};
export const addText = async (textBody: textBody) => {
  const res = await http.post("/logic/text/addText", {
    userId: textBody.userId,
    textContent: textBody.textContent,
  });
  return res;
};
