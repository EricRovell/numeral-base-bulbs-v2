import Link from "next/link";
import style from "./button-link.module.css";

export default ({ title, href, as }) => (
  <button className={style["button-link"]}>
    <div>
      <Link href={href} as={as}>
        <a title={title}>
          {title}
        </a>
      </Link>
      <svg viewBox="-74 0 362 362.66667">
        <path d="m213.667969 181.332031c0 4.269531-1.28125 8.535157-3.628907 11.734375l-106.664062 160c-3.839844 5.761719-10.242188 9.601563-17.707031 9.601563h-64c-11.734375 0-21.335938-9.601563-21.335938-21.335938 0-4.265625 1.28125-8.53125 3.628907-11.730469l98.773437-148.269531-98.773437-148.265625c-2.347657-3.199218-3.628907-7.464844-3.628907-11.734375 0-11.730469 9.601563-21.332031 21.335938-21.332031h64c7.464843 0 13.867187 3.839844 17.707031 9.601562l106.664062 160c2.347657 3.199219 3.628907 7.464844 3.628907 11.730469zm0 0"/>
      </svg>
    </div>
  </button>
);