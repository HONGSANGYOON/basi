import React from "react";
import { Outlet, useNavigate, Link } from "react-router-dom";

function Layout() {
  const navigate = useNavigate();
  return (
    <>
      {/* Header */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "24px",
          backgroundColor: "#000000",
          color: "white",
        }}
      >
        <div
          //   로고 누르면 메인페이지로 이동
          onClick={() => {
            navigate("/");
          }}
        >
          로고
        </div>
        <div
          style={{
            display: "flex",
            gap: "12px",
          }}
        >
          <div
            onClick={() => {
              navigate("/Login");
            }}
          >
            로그인
          </div>
          <div
            onClick={() => {
              navigate("/membership");
            }}
          >
            회원가입
          </div>
        </div>
      </header>
      {/* 아울렛 설정으로 각 페이지들 UI보이게 하기 */}
      <Outlet />
      {/* footer */}
      <footer
        style={{
          marginTop: "24px",
          display: "flex",
          justifyContent: "space-between",
          padding: "24px",
          backgroundColor: "#EEEEEE",
          color: "black",
        }}
      >
        <div>문의하기</div>
        <div>SNS 채널들</div>
      </footer>
    </>
  );
}

export default Layout;
