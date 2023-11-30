import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <>
      <div>로그인페이지입니다.</div>
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

export default Login;
