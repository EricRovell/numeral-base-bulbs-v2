import React from "react";
import { Children } from "react";

import Link from "next/link";
import { withRouter } from "next/router";

export default withRouter(({ router, children, as, href, className, activeClassName,...rest }) => (
  <Link {...rest} href={href} as={as}>
    {React.cloneElement(Children.only(children), {
      className: (router.pathname.split("/")[2] === href.split("/")[2]) ? activeClassName : className
    })}
  </Link>
));
