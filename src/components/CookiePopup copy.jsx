"use client";
import { useState } from "react";
import { FaCookieBite } from "react-icons/fa";

// Cookie-popup der kan lukkes med useState
const CookiePopup = () => {
  const [visible, setVisible] = useState(true); // Synlighedsstyring

  // Hvis popup'en ikke er synlig, returnér ingenting
  if (!visible) return null;

  return (
    <>
      <div className="cookie-popup">
        {/* Luk-knap */}
        <button className="close-button" onClick={() => setVisible(false)}>
          ×
        </button>

        {/* Cookie-ikon */}
        <div className="cookie-icon">
          <FaCookieBite size={24} />
        </div>

        {/* Tekst */}
        <p className="cookie-text">We use cookies to improve your user experience.</p>

        {/* Knap til at acceptere cookies */}
        <button className="cookie-btn" onClick={() => setVisible(false)}>
          I like Cookies
        </button>
      </div>

      {/* Styling */}
      <style jsx>{`
        .cookie-popup {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 300px;
          height: 200;
          background: #111;
          color: #fff;
          border-radius: 12px;
          padding: 16px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
          z-index: 9999;
          font-family: sans-serif;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .close-button {
          position: absolute;
          top: 8px;
          right: 12px;
          background: none;
          border: none;
          color: #fff;
          font-size: 18px;
          cursor: pointer;
        }

        .cookie-icon {
          margin-bottom: 8px;
        }

        .cookie-text {
          font-size: 14px;
          margin-top: 8px;
          flex-grow: 1;
        }

        .cookie-btn {
          background-color: white;
          color: black;
          border: none;
          border-radius: 8px;
          padding: 8px 12px;
          cursor: pointer;
          font-weight: bold;
        }

        .cookie-btn:hover {
          background-color: #f0f0f0;
        }
      `}</style>
    </>
  );
};

export default CookiePopup;
