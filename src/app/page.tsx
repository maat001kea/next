"use client";

import LikeButton from "@/components/Likebutton"; // Komponent fra components-mappen
import CookiePopup from "@/components/CookiePopup"; // (valgfri)

export default function Home() {
  return (
    <>
      <div className="button-row">
        <LikeButton label="Like" />
        <LikeButton label="DisLike" />
      </div>

      <CookiePopup />

      <style jsx>{`
        .button-row {
          display: flex;
          justify-content: center;
          gap: 20px;
          padding: 40px;
        }
      `}</style>
    </>
  );
}
