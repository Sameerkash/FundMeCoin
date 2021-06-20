import React from "react";

export function useAccount(): [Account, (account: Account) => void] {
  const [account, setAcc] = React.useState<Account | null>();

  const setAccount = (acc: Account) => {
    console.debug(acc);
    setAcc(acc);
  };

  return [account!, setAccount];
}
