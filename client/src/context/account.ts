import React from "react";

const AccountContext = React.createContext<{
  account?: Account | null;
  setAccount?: Function | undefined;
}>({
  account: null,
  setAccount: undefined,
});

export default AccountContext;
