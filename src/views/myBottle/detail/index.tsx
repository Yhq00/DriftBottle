import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Detail = () => {
  // const navigate = useNavigate();
  const location = useLocation();
  const textId = location.state;
  useEffect(() => {}, []);
  return <>{textId}</>;
};

export default Detail;
