import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MessageOnHover from "../MessageOnHover";
import { DonateContainer, DonateLink, TextData } from "./Donate.style";

export const Donate = () => (
  <DonateContainer>
    <DonateLink
      href="https://mpago.la/2h2QiVd"
      target="_blank"
      rel="noreferrer"
    >
      Donar <FontAwesomeIcon icon={faHeart} />
    </DonateLink>
    <TextData>
      <MessageOnHover text="Contribuye con nuestro proyecto!" />
    </TextData>
  </DonateContainer>
);
