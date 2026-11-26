const Toast = ({ children, action }) => (
  <div
    role="status"
    className="flex items-center gap-2 rounded-xl bg-ink px-4 py-3.5 text-panel shadow-pop"
  >
    <span>{children}</span>
    {action && (
      <>
        <span aria-hidden="true">·</span>
        {action}
      </>
    )}
  </div>
);

export default Toast;