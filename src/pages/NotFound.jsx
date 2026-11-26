import Container from "../components/Container";
import StateMessage from "../components/StateMessage";

const NotFound = () => (
  <Container className="py-12">
    <StateMessage
      before={
        <p className="mb-3 font-display text-[88px] font-bold leading-none text-marigold">404</p>
      }
      title="This page rolled away"
      text="We could not find what you were looking for."
      action={{ label: "Back to shop", to: "/" }}
    />
  </Container>
);

export default NotFound;