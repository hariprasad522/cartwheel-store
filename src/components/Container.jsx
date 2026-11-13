const Container = ({ className = "", children }) => (
  <div className={`mx-auto w-full max-w-7xl px-4 md:px-12 ${className}`}>
    {children}
  </div>
);

export default Container;