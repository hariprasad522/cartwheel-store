import StateMessage from "./StateMessage";

const ErrorState = ({ text = "We could not load products. Your cart is safe.", onRetry }) => (
  <StateMessage
    tone="error"
    title="⚠ Something went wrong"
    text={text}
    action={{ label: "Try again", onClick: onRetry ?? (() => window.location.reload()) }}
  />
);

export default ErrorState;