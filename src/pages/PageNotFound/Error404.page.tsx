import { Container } from "./Error404.style";
import pageErrorGif from "../../assets/pageNotFound.gif";

export const Error404 = () => {
  return (
    <Container>
      <img src={pageErrorGif} alt="Page not found gif" />
    </Container>
  );
};
