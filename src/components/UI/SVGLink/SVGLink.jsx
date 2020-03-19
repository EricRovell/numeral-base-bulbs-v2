import Link from "next/link";
import SVGIcon from "./SVGIcon";

const anchor = {
  width: "100%",
  height: "100%",
  display: "grid",
  placeItems: "center"
};

export default () => {

  return (
    <div>
      <Link href="/tutorial" as="/tutorial/ru/sandbox/about">
        <a style={anchor} title="Sandbox Tutorial">
          <SVGIcon />
        </a>
      </Link>
    </div>
  );
};