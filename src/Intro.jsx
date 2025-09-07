import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Intro() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      // 3초 후 /new 경로로 이동 (메인 화면으로 가정)
      navigate("/Home");
    }, 3000);

    // 컴포넌트가 언마운트될 때 타이머를 정리합니다.
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="intro-container">
      <img src="/images/Group.png"></img>
      <h1 className="intro-title">Welcome!</h1>
      <p className="intro-message">Loading...</p>
    </div>
  );
}

export default Intro;
