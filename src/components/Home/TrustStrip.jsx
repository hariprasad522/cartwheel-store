import Container from "../Container";

const ITEMS = [
  { title: "Free delivery", text: "On orders above ₹999" },
  { title: "7-day returns", text: "No questions asked" },
  { title: "Secure checkout", text: "UPI, cards and COD" },
];

const TrustStrip = () => (
  <Container className="mt-10">
    <ul className="grid gap-4 md:grid-cols-3">
      {ITEMS.map((item) => (
        <li key={item.title} className="rounded-xl border border-line bg-panel p-5 shadow-card">
          <p className="font-bold">{item.title}</p>
          <p className="text-muted">{item.text}</p>
        </li>
      ))}
    </ul>
  </Container>
);

export default TrustStrip;