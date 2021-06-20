import {
  requestTxSig,
  waitForSignedTxs,
  requestAccountAddress,
  waitForAccountAuth,
  FeeCurrency,
} from "@celo/dappkit";
import { web3, kit } from "../root";
import * as Linking from "expo-linking";

export const connectWithCelo = async (
  name: string
): Promise<Account | null> => {
  try {
    const networkId = await web3.eth.net.getId();

    // A string you can pass to DAppKit, that you can use to listen to the response for that request
    const requestId = "login";

    // A string that will be displayed to the user, indicating the DApp requesting access/signature
    const dappName = "Fund me Coins";

    // The deeplink that the Celo Wallet will use to redirect the user back to the DApp with the appropriate payload.
    const callback = Linking.makeUrl("/my/path");

    // Ask the Celo Alfajores Wallet for user info
    requestAccountAddress({
      requestId,
      dappName,
      callback,
    });

    // Wait for the Celo Wallet response
    const dappkitResponse = await waitForAccountAuth(requestId);

    console.debug(requestId);
    // Set the default account to the account returned from the wallet
    kit.defaultAccount = dappkitResponse.address;

    // Get the stabel token contract
    const stableToken = await kit.contracts.getStableToken();

    // Get the user account balance (cUSD)
    const cUSDBalanceBig = await stableToken.balanceOf(kit.defaultAccount);

    // Convert from a big number to a string
    let cUSDBalance = cUSDBalanceBig.toString();

    let account: Account = {
      address: dappkitResponse.address,
      cUSDBalance,
      phone: dappkitResponse.phoneNumber,
      name,
    };

    return account;
  } catch (error) {
    console.warn(error);
    return null;
  }
};

async function getContract() {
  const networkId = await web3.eth.net.getId();

  // Get the deployed HelloWorld contract info for the appropriate network ID
  // const deployedNetwork = HelloWorldContract.networks[networkId];

  // Create a new contract instance with the HelloWorld contract info
  // const instance = new web3.eth.Contract(
  //   HelloWorldContract.abi,
  //   deployedNetwork && deployedNetwork.address
  // );
}
