import Container from "./Container";

const Section = ({ id, title, children }) => (
  <section aria-labelledby={id} className="mt-14">
    <Container>
      <h2 id={id} className="mb-5 font-display text-[28px] font-bold tracking-tight md:text-[32px]">
        {title}
      </h2>
      {children}
    </Container>
  </section>
);

export default Section;