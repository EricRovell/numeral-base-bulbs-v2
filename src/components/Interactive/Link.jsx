import Link from "next/link";

export default ({ href, as, title, label }) => (
  <Link href={href} as={as}>
    <a title={title}>
      {label}
    </a>
  </Link>
);
