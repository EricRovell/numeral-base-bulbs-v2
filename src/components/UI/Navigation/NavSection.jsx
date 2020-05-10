export default function NavSection({ title, children, className }) {
  return (
    <section className={className}>
      <details>
        <summary>
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