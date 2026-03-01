export default function SectionWrapper({
  children,
  className = '',
  bg = 'bg-white',
  id,
}) {
  return (
    <section id={id} className={`relative py-24 md:py-32 ${bg} ${className}`}>
      <div className="container-custom relative z-10">{children}</div>
    </section>
  );
}
