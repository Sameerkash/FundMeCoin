import React from "react";
import { requestAccountAddress, waitForAccountAuth } from "@celo/dappkit";
import { web3, kit } from "../../root";
import * as Linking from "expo-linking";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import AccountContext from "../context/account";

const AuthScreen: React.FunctionComponent<{}> = () => {
  const [nickName, setNickName] = React.useState<string>();

  const { setAccount } = React.useContext(AccountContext);

  const login = async () => {
    // A string you can pass to DAppKit, that you can use to listen to the response for that request
    const requestId = "login";

    // A string that will be displayed to the user, indicating the DApp requesting access/signature
    const dappName = "Hello Celo";

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

    console.log(dappkitResponse);

    // Set the default account to the account returned from the wallet
    kit.defaultAccount = dappkitResponse.address;

    // Get the stabel token contract
    const stableToken = await kit.contracts.getStableToken();

    // Get the user account balance (cUSD)
    const cUSDBalanceBig = await stableToken.balanceOf(kit.defaultAccount);

    // Convert from a big number to a string by rounding it to the appropriate number of decimal places
    const ERC20_DECIMALS = 18;
    let cUSDBalanceDec = cUSDBalanceBig.shiftedBy(-ERC20_DECIMALS).toFixed(2);
    let cUSDBalance = cUSDBalanceDec.toString();

    // Update state
    let account: Account = {
      address: dappkitResponse.address,
      cUSDBalance,
      phone: dappkitResponse.phoneNumber,
      nickName,
    };

    setAccount(account);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to</Text>
      <Text style={styles.subtitle}>Fund Me Coin</Text>
      <View style={{ height: 20 }} />

      <Text style={styles.text}>Enter a Nick Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setNickName(text)}
        value={nickName}
        placeholder="Nick Name"
        keyboardType="default"
      />
      <View style={{ height: 10 }} />
      <Text style={styles.text}>Connect With</Text>
      <View style={{ height: 5 }} />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (nickName != null && nickName.length != 0) {
            login();
          }
        }}
      >
        <Image
          style={styles.Image}
          resizeMode="contain"
          source={require("../../assets/celo-logo.png")}
        ></Image>
      </TouchableOpacity>
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  input: {
    height: "10%",
    color: "black",
    padding: 10,
    margin: 12,
    fontSize: 20,
    borderWidth: 2,
    width: "80%",
    borderColor: "white",
  },
  Image: {
    width: 150,
    height: 80,
    // backgroundColor: "white",
    // padding: 5,
    // borderRadius: 25,
    // overflow: "hidden",
    // alignSelf: "center",
  },
  button: {
    width: "70%",
    height: 80,
    // textAlign: "center",
    // width: "100%",
    // height: 100,
    // backgroundColor: "white",
    // padding: 10,
    // borderRadius: 25,
    // overflow: "hidden",
  },
  container: {
    margin: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 25,
  },

  subtitle: {
    fontSize: 40,
    color: "violet",
    fontStyle: "italic",
  },

  text: {
    fontSize: 20,
  },
});
