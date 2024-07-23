import React from "react";
import "../styles/listSocial.scss";

// ListSocial component for displaying social login options
export const ListSocial = () => {
  return (
    <div className="list-social">
      {/* Google login */}
      <a href="">
        <img
          src="/logo_social/logo_google.png"
          alt="logo_google"
          className="m-2 ms-0"
        />
      </a>
      {/* Facebook login */}
      <a href="">
        <img src="/logo_social/logo_fb.png" alt="logo_fb" className="m-2" />
      </a>
      {/* Apple login */}
      <a href="">
        <img
          src="/logo_social/logo_apple.png"
          alt="logo_apple"
          className="m-2"
        />
      </a>
      {/* Windows login */}
      <a href="">
        <img
          src="/logo_social/logo_window.png"
          alt="logo_window"
          className="m-2"
        />
      </a>
      {/* Amazon login */}
      <a href="">
        <img
          src="/logo_social/logo_amazon.png"
          alt="logo_amazon"
          className="m-2"
        />
      </a>
      {/* LinkedIn login */}
      <a href="">
        <img
          src="/logo_social/logo_linkedIn.png"
          alt="logo_linkedIn"
          className="m-2"
        />
      </a>
      {/* Twitter (or X) login */}
      <a href="">
        <img src="/logo_social/logo_X.png" alt="logo_X" className="m-2" />
      </a>
    </div>
  );
};
