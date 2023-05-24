import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getDetail } from "../../../service/text";
// import {}
const Detail = () => {
  // const navigate = useNavigate();
  const location = useLocation();
  const textId = location.state?.textId;
  const textContent = location.state?.textContent;
  useEffect(() => {
    getDetail(textId);
  }, []);
  return <>{textContent}</>;
};

export default Detail;
