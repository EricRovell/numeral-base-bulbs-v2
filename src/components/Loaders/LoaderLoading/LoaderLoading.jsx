// https://codepen.io/tomchewitt/pen/yNdQrO
import style from "./loader-loading.module.css";

export default ({ locale }) => (
  <div className={style["loader-container"]}>
    <div className={style.loader}>
      <svg style={{ display: "none" }}>
        <symbol id="zero" viewBox="0 0 32.55 45.39">
          <path d="M32.55,22.7a36.27,36.27,0,0,1-1.24,10.08,20.69,20.69,0,0,1-3.44,7.08A13.77,13.77,0,0,1,22.68,44a15.41,15.41,0,0,1-6.46,1.37A15.22,15.22,0,0,1,9.78,44a13.77,13.77,0,0,1-5.14-4.16,20.49,20.49,0,0,1-3.41-7.08A36.67,36.67,0,0,1,0,22.7,36.8,36.8,0,0,1,1.23,12.59,20.56,20.56,0,0,1,4.64,5.53,13.87,13.87,0,0,1,9.78,1.37,15.22,15.22,0,0,1,16.22,0a15.41,15.41,0,0,1,6.46,1.37,13.86,13.86,0,0,1,5.19,4.16,20.77,20.77,0,0,1,3.44,7.06A36.4,36.4,0,0,1,32.55,22.7Zm-7.83,0a37.68,37.68,0,0,0-.7-8,16.52,16.52,0,0,0-1.89-5,7,7,0,0,0-2.72-2.62,7.18,7.18,0,0,0-3.19-.75,7,7,0,0,0-3.15.75,6.84,6.84,0,0,0-2.69,2.62,16.05,16.05,0,0,0-1.86,5,38.43,38.43,0,0,0-.69,8,38.4,38.4,0,0,0,.69,8,16.05,16.05,0,0,0,1.86,5,6.77,6.77,0,0,0,2.69,2.62,7,7,0,0,0,3.15.75,7.18,7.18,0,0,0,3.19-.75,6.89,6.89,0,0,0,2.72-2.62,16.52,16.52,0,0,0,1.89-5A37.64,37.64,0,0,0,24.72,22.7Z"/>
        </symbol>
        <symbol id="one" viewBox="0 0 27.76 44.47">
          <path d="M3.19,38.79h9V12.9c0-1,0-2.06.09-3.16L5.9,15.08a2.34,2.34,0,0,1-.82.46,2.89,2.89,0,0,1-.81.12,2.34,2.34,0,0,1-1.12-.26,2,2,0,0,1-.75-.6L0,11.52,13.54,0h6.24V38.79h8v5.68H3.19Z"/>
        </symbol>
      </svg>
      <span className={style.binary}>
        <svg>
          <use href="#zero" />
        </svg>  
        <svg>
          <use href="#one" />
        </svg>  
        <svg>
          <use href="#zero" />
        </svg>  
        <svg>
          <use href="#one" />
        </svg>
      </span>
    </div>
    <h2>{locale.message}</h2>
  </div>
);
