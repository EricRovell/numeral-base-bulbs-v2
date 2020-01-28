import style from "./default.css";

export default ({ value, handleSwitch }) => (
  <label className={style.default}>
    <input type="checkbox" checked={(value === 1)}  onClick={handleSwitch} />
    <svg viewBox="0 0 24 24">
      <title>bulb</title>
      <path d="M15,20.5c0,0.3-0.2,0.5-0.5,0.5h-5C9.2,21,9,20.8,9,20.5S9.2,20,9.5,20h5C14.8,20,15,20.2,15,20.5z M14.5,18h-5
        C9.2,18,9,18.2,9,18.5S9.2,19,9.5,19h5c0.3,0,0.5-0.2,0.5-0.5S14.8,18,14.5,18z M10.7,23.7c0.2,0.2,0.5,0.3,0.8,0.3h1.1
        c0.3,0,0.6-0.1,0.8-0.3l1.5-1.7H9.3L10.7,23.7z" />
      <path d="M19,6.7c0,4.2-3.8,7-3.8,10.3H8.8C8.8,13.7,5,10.9,5,6.7C5,2.4,8.5,0,12,0S19,2.4,19,6.7z"/>      
    </svg>
  </label>  
);
