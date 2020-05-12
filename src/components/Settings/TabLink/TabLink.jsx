import ExactLink from "./ExactLink";

export default function TabLink({ data = [], className, linkClassName, activeLinkClassName }) {
  return (
    <div className={className}>
      <ul>
        {data.map(option => (
          <li key={option.label}>
            <ExactLink
              href={option.href}
              as={option.as}
              className={linkClassName}
              activeClassName={activeLinkClassName}>
              <a title={option.title}>
                {option.label}
              </a>
            </ExactLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
