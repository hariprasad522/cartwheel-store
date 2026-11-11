const Footer = () => {
  return (
    <>
      <div className="gap-8 mt-16 w-full px-4 text-panel bg-ink py-10 flex flex-col md:px-6 md:justify-between md:flex-row">
        <div>
          <h1 className="text-xl font-bold font-display">CartWheel</h1>
          <p className="mt-1 opacity-70">Shop smarter. Spend on purpose.</p>
        </div>
        <div className="leading-7 opacity-80">
          <p className="font-semibold">Shop</p>
          <p>Electronics · Fashion · Home</p>
        </div>
        <div className="leading-7 opacity-80">
          <p className="font-semibold">Help</p>
          <p>Shipping · Returns · Contact</p>
        </div>
      </div>
    </>
  );
};
export default Footer;
