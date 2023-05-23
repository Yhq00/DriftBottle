import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getDetail } from "../../../service/text";
// import {}
const Detail = () => {
  // const navigate = useNavigate();
  const location = useLocation();
  const textId = location.state;
  useEffect(() => {
    getDetail(textId);
  }, []);
  return <>{textId}</>;
};

export default Detail;
