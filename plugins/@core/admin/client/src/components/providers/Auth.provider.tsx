import React, { PropsWithChildren, useEffect } from "react";

const AuthProvider = (props: PropsWithChildren) => {
  return props.children;
};

export default AuthProvider;
