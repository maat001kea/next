"use client";
import { FaCookieBite } from "react-icons/fa";

// Cookie-popup uden funktionalitet – kun layout og styling
const CookiePopup = () => {
  return (
    <>
      <div className="cookie-popup">
        {/* Luk-knap (statisk) */}
        <button className="close-button">×</button>

        {/* Cookie-ikon */}
        <div className="cookie-icon">
          <FaCookieBite size={24} />
        </div>

        {/* Tekst */}
        <p className="cookie-text">We use cookies to improve your user experience.</p>

        {/* Knap (statisk) */}
        <button className="cookie-btn">I like Cookies</button>
      </div>

      {/* Styling */}
      <style jsx>{`
        .cookie-popup {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 300px;
          height: 30vh;
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
