import dynamic from "next/dynamic";
import EmptyState from "./modes/empty/EmptyState";

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

export default (mode, skin) => (dynamic(
  () => import(`components/Digits/modes/${mode}/skin/${capitalize(skin)}.jsx`).catch(err => {
    return () => <EmptyState />
  })
));
