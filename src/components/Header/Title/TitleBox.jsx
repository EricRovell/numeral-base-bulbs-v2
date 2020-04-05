export default ({ value, fill, fillShade }) => (
  <svg viewBox="0 0 164.86 168">    
    <rect fill={fill} x="3.12" y="4.06" width="156.86" height="160" rx="18.19" />    
    <path fill={fillShade} d="M19.41,5H95.07a33.22,33.22,0,0,1,33.22,33.22v93.55A33.22,33.22,0,0,1,95.07,165H19.41A15.51,15.51,0,0,1,3.9,149.49v-129A15.51,15.51,0,0,1,19.41,5Z" />
    <path
      style={{ fill: "none", strokeLinecap: "round", "strokeMiterlimit": 10, strokeWidth: "8px" }}
      d="M4,70.52v-48A18.53,18.53,0,0,1,22.53,4h119.8a18.53,18.53,0,0,1,18.53,18.53V145.47A18.53,18.53,0,0,1,142.33,164H22.53A18.53,18.53,0,0,1,4,145.47V93.36" />
    <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle">{value}</text> 
  </svg>
);
