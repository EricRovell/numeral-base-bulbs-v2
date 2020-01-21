const nextMode = mode => {
  switch (mode) {
    case "none":
      return "index";
    case "index":
      return "value";
    case "value":
      return "power";
    case "power":
      return "none"; 
  };
};

export default nextMode;
