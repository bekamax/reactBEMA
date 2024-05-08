import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedinIn,
  faTiktok,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.module.css";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";

const FooterPage = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleButtons = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`buttons ${isActive ? "buttons--active" : ""}`}>
      <button
        className={`buttons__toggle ${
          isActive ? "buttons__toggle--active" : ""
        }`}
        onClick={toggleButtons}
      >
        <FontAwesomeIcon icon={faShareAlt} />
      </button>
      <div className="buttons__ctas">
        <a className="buttons__cta" href="#">
          <FontAwesomeIcon icon={faFacebookF} />
          Facebook
        </a>
        <a className="buttons__cta" href="#">
          <FontAwesomeIcon icon={faTwitter} />
          Twitter
        </a>
        <a className="buttons__cta" href="#">
          <FontAwesomeIcon icon={faInstagram} />
          Instagram
        </a>
        <a className="buttons__cta" href="#">
          <FontAwesomeIcon icon={faYoutube} />
          YouTube
        </a>
        <a className="buttons__cta" href="#">
          <FontAwesomeIcon icon={faTiktok} />
          TikTok
        </a>
        <a className="buttons__cta" href="#">
          <FontAwesomeIcon icon={faLinkedinIn} />
          LinkedIn
        </a>
      </div>
      <div className="store-info">
        <p>Магазин мебели "Интерьер"</p>
        <p>Соглашение о конфиденциальности</p>
      </div>
    </div>
  );
};

export default FooterPage;
