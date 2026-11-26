import Button from "./Button";

const StateMessage = ({
  title,
  text,
  action,
  tone = "default",
  before = null,
  as: Heading = "h1",
}) => {
  const isError = tone === "error";

  return (
    <div
      role={isError ? "alert" : undefined}
      className={`mx-auto max-w-lg rounded-xl border bg-panel p-8 text-center shadow-card ${
        isError ? "border-over" : "border-line"
      }`}
    >
      {before}
      <Heading className={`font-display text-2xl font-bold ${isError ? "text-over" : ""}`}>
        {title}
      </Heading>
      <p className="mt-2 text-muted">{text}</p>
      {action && (
        <Button to={action.to} onClick={action.onClick} className="mt-5">
          {action.label}
        </Button>
      )}
    </div>
  );
};

export default StateMessage;