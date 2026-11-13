import Container from "./Container";

const Footer = () => (
  <footer className="mt-16 bg-ink py-10 text-panel">
    <Container className="flex flex-col gap-8 md:flex-row md:justify-between">
      <div>
        <p className="font-display text-[22px] font-bold">CartWheel</p>
        <p className="mt-1.5 opacity-70">Shop smarter. Spend on purpose.</p>
      </div>
      <div className="leading-8 opacity-80">
        <p className="font-semibold">Shop</p>
        <p>Electronics · Fashion · Home</p>
      </div>
      <div className="leading-8 opacity-80">
        <p className="font-semibold">Help</p>
        <p>Shipping · Returns · Contact</p>
      </div>
    </Container>
  </footer>
);

export default Footer;