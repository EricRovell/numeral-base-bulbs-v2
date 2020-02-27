import React from "react";
import { Children } from "react";

import Link from "next/link";
import { withRouter } from "next/router";

export default withRouter(({ router, children, as, href, className, activeClassName, ...rest }) => (
  <Link {...rest} href={href} as={as}>
     {React.cloneElement(Children.only(children), {
        className: (`/${router.pathname.split("/")[1]}` === href) ? activeClassName : className
     })}
  </Link>
));

/* 
export default withRouter(({ router, children, as, href, className, activeClassName, ...rest }) => (
  <Link {...rest} href={href} as={as}>
     {React.cloneElement(Children.only(children), {
        className: (router.asPath === href || router.asPath === as) ? activeClassName : className
     })}
  </Link>
)); */

/* export default withRouter(({ linkType = "header", router, children, href, className, activeClassName, ...rest }) => {
  
  const setClassName = (linkType === "header")
    ? (`/${router.pathname.split("/")[1]}` === href) ? activeClassName : className
    : (router.asPath === href) ? activeClassName : className

  return (
    <Link {...rest} href={href}>
      {React.cloneElement(Children.only(children), {
          className: setClassName
      })}
    </Link>
  );
}); */