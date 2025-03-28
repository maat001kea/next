"use client";
import { useState } from "react";
import { FaRegThumbsUp } from "react-icons/fa6";

// En simpel LikeButton-komponent med tæller
const LikeButton = ({ label }) => {
  const [likes, setLikes] = useState(0);

  const handleClick = () => {
    setLikes(likes + 1);
  };

  return (
    <>
      <button className="like-button" onClick={handleClick}>
        <FaRegThumbsUp className="like-icon" />
        <span className="like-text">
          {label} {likes}
        </span>
      </button>

      <style jsx>{`
        .like-button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background-color: #e0f2ff;
          color: #0369a1;
          border: none;
          border-radius: 9999px;
          font-weight: 500;
          cursor: pointer;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s ease, background-color 0.2s ease;
          white-space: nowrap;
        }

        .like-button:hover {
          background-color: #bae6fd;
          transform: scale(1.05);
        }

        .like-icon {
          width: 20px;
          height: 20px;
        }

        .like-text {
          font-size: 14px;
        }
      `}</style>
    </>
  );
};

export default LikeButton;
