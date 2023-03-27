import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const SocialNetwork = () => {
  return (
    <ul className="flex flex-row justify-around  p-5 mt-10">
      <a
        href="https://www.facebook.com/profile.php?id=100010366297963"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          className="h-10 w-10 sm:h-16 sm:w-16"
          icon={faFacebook}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/victordosmartires-97947910b/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          className="h-10 w-10 sm:h-16 sm:w-16"
          icon={faLinkedin}
        />
      </a>
      <a
        href="https://github.com/Victor-DM18"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          className="h-10 w-10 sm:h-16 sm:w-16"
          icon={faGithub}
        />
      </a>
      <a
        href="https://twitter.com/Vikito_18"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          className="h-10 w-10 sm:h-16 sm:w-16 "
          icon={faTwitter}
        />
      </a>
    </ul>
  );
};

export default SocialNetwork;
