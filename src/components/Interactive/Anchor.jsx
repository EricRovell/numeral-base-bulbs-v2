export default function Anchor({ href, label, title }) {
  return (
    <a
      title={(title) ? title : label}
      href={href}
      target="_blank">
        {label}
    </a>
  );
}
