import { Container } from "./Error404.style";
import pageErrorGif from "../../assets/pageNotFound.gif";
import withTransition from "../../HOC/withTransition";

const Error404 = () => {
  return (
    <Container>
      <img src={pageErrorGif} alt="Page not found gif" />
    </Container>
  );
};

export default withTransition(Error404);
