import React from "react";
import { useNavigate } from "react-router-dom";

function Membership() {
  const navigate = useNavigate();
  return (
    <>
      <div>회원가입페이지입니다.</div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        홈으로가기
      </button>
    </>
  );
}

export default Membership;
