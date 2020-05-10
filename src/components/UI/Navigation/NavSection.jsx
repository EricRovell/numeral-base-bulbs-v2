export default function NavSection({ title, children, className }) {

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <section className={className}>
      <details>
        <summary onClick={stopPropagation}>
          <svg>
            <use href="#nav-chevron" />
          </svg>
          <span>{title}</span>
        </summary>
        <div>
          {children}
        </div>
      </details>
    </section>
  );
}