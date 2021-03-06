// import React from "react";
// import "./global";
// import {
//   Image,
//   StyleSheet,
//   Text,
//   TextInput,
//   Button,
//   View,
//   YellowBox,
// } from "react-native";
// import {
//   requestTxSig,
//   waitForSignedTxs,
//   requestAccountAddress,
//   waitForAccountAuth,
//   FeeCurrency,
// } from "@celo/dappkit";
// import { toTxResult } from "@celo/connect";
// import * as Linking from "expo-linking";

// YellowBox.ignoreWarnings([
//   "Warning: The provided value 'moz",
//   "Warning: The provided value 'ms-stream",
// ]);

// export default class App extends React.Component {
//   // Set the defaults for the state
//   state = {
//     address: "Not logged in",
//     phoneNumber: "Not logged in",
//     cUSDBalance: "Not logged in",
//     helloWorldContract: {},
//     contractName: "",
//     textInput: "",
//   };

//   // This function is called when the page successfully renders
//   componentDidMount = async () => {
//     // Check the Celo network ID
//     const networkId = await web3.eth.net.getId();

//     // Get the deployed HelloWorld contract info for the appropriate network ID
//     const deployedNetwork = HelloWorldContract.networks[networkId];

//     // Create a new contract instance with the HelloWorld contract info
//     const instance = new web3.eth.Contract(
//       HelloWorldContract.abi,
//       deployedNetwork && deployedNetwork.address
//     );

//     // Save the contract instance
//     this.setState({ helloWorldContract: instance });
//   };

//   login = async () => {
//     // A string you can pass to DAppKit, that you can use to listen to the response for that request
//     const requestId = "login";

//     // A string that will be displayed to the user, indicating the DApp requesting access/signature
//     const dappName = "Hello Celo";

//     // The deeplink that the Celo Wallet will use to redirect the user back to the DApp with the appropriate payload.
//     const callback = Linking.makeUrl("/my/path");

//     // Ask the Celo Alfajores Wallet for user info
//     requestAccountAddress({
//       requestId,
//       dappName,
//       callback,
//     });

//     // Wait for the Celo Wallet response
//     const dappkitResponse = await waitForAccountAuth(requestId);

//     console.log(dappkitResponse);

//     // Set the default account to the account returned from the wallet
//     kit.defaultAccount = dappkitResponse.address;

//     // Get the stabel token contract
//     const stableToken = await kit.contracts.getStableToken();

//     // Get the user account balance (cUSD)
//     const cUSDBalanceBig = await stableToken.balanceOf(kit.defaultAccount);

//     // Convert from a big number to a string by rounding it to the appropriate number of decimal places
//     const ERC20_DECIMALS = 18;
//     let cUSDBalanceDec = cUSDBalanceBig.shiftedBy(-ERC20_DECIMALS).toFixed(2);
//     let cUSDBalance = cUSDBalanceDec.toString();

//     // Update state
//     this.setState({
//       cUSDBalance,
//       isLoadingBalance: false,
//       address: dappkitResponse.address,
//       phoneNumber: dappkitResponse.phoneNumber,
//     });
//   };

//   read = async () => {
//     // Read the name stored in the HelloWorld contract
//     let name = await this.state.helloWorldContract.methods.getName().call();

//     // Update state
//     this.setState({ contractName: name });
//   };

//   write = async () => {
//     const requestId = "update_name";
//     const dappName = "Hello Celo";
//     const callback = Linking.makeUrl("/my/path");

//     // Create a transaction object to update the contract with the 'textInput'
//     const txObject = await this.state.helloWorldContract.methods.setName(
//       this.state.textInput
//     );

//     // Send a request to the Celo wallet to send an update transaction to the HelloWorld contract
//     requestTxSig(
//       kit,
//       [
//         {
//           from: this.state.address,
//           to: this.state.helloWorldContract.options.address,
//           tx: txObject,
//           feeCurrency: FeeCurrency.cUSD,
//         },
//       ],
//       { requestId, dappName, callback }
//     );

//     // Get the response from the Celo wallet
//     const dappkitResponse = await waitForSignedTxs(requestId);
//     const tx = dappkitResponse.rawTxs[0];

//     // Get the transaction result, once it has been included in the Celo blockchain
//     let result = await toTxResult(
//       kit.web3.eth.sendSignedTransaction(tx)
//     ).waitReceipt();

//     console.log(`Hello World contract update transaction receipt: `, result);
//   };

//   onChangeText = async (text) => {
//     this.setState({ textInput: text });
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <Image
//           resizeMode="contain"
//           source={require("./assets/white-wallet-rings.png")}
//         ></Image>
//         <Text>Open up client/App.js to start working on your app!</Text>

//         <Text style={styles.title}>Login first</Text>
//         <Button title="login()" onPress={() => this.login()} />
//         <Text style={styles.title}>Account Info:</Text>
//         <Text>Current Account Address:</Text>
//         <Text>{this.state.address}</Text>
//         <Text>Phone number: {this.state.phoneNumber}</Text>
//         <Text>cUSD Balance: {this.state.cUSDBalance}</Text>

//         <Text style={styles.title}>Read HelloWorld</Text>
//         <Button title="Read Contract Name" onPress={() => this.read()} />
//         <Text>Contract Name: {this.state.contractName}</Text>

//         <Text style={styles.title}>Write to HelloWorld</Text>
//         <Text>New contract name:</Text>
//         <TextInput
//           style={{
//             borderColor: "black",
//             borderWidth: 1,
//             backgroundColor: "white",
//           }}
//           placeholder="input new name here"
//           onChangeText={(text) => this.onChangeText(text)}
//           value={this.state.textInput}
//         />
//         <Button
//           style={{ padding: 30 }}
//           title="update contract name"
//           onPress={() => this.write()}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#35d07f",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   title: {
//     marginVertical: 8,
//     fontSize: 20,
//     fontWeight: "bold",
//   },
// });

import React from "react";
import { StyleSheet, View, LogBox } from "react-native";
import "./global";
import AccountContext, { ContractContext } from "./src/context/account";
import AuthScreen from "./src/screens/AuthScreen";
import HomeScreen from "./src/screens/HomeScreen";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "./src/screens/ProfileScreen";
import { web3, kit } from "./root";
import { AbiItem } from "@celo/connect";
const FundMeCoin = require("./contracts/FundMeCoin.json");

LogBox.ignoreLogs([
  "Warning: The provided value 'moz",
  "Warning: The provided value 'ms-stream",
  "Warning: The provided value 'scheme",
]);

export default function App() {
  const [account, setAccount] = React.useState<Account | null>(null);
  const [contractInstance, setContract] = React.useState<{} | null>();

  async function fetchContract() {
    const networkId = await web3.eth.net.getId();

    const deployedNetwork = FundMeCoin.networks[networkId];

    const instance = new web3.eth.Contract(
      FundMeCoin.abi as AbiItem[],
      deployedNetwork && deployedNetwork.address
    );

    setContract(instance);
  }

  function setAcc(acc: Account) {
    setAccount(acc);
    console.debug("called");
  }

  React.useEffect(() => {
    fetchContract();
  }, []);

  const Stack = createStackNavigator<NavigationProps>();

  if (!account)
    return (
      <AccountContext.Provider value={{ account, setAccount: setAcc }}>
        <ContractContext.Provider value={contractInstance}>
          <View style={styles.container}>
            <AuthScreen />
          </View>
        </ContractContext.Provider>
      </AccountContext.Provider>
    );

  return (
    <AccountContext.Provider value={{ account, setAccount: setAcc }}>
      <ContractContext.Provider value={contractInstance}>
        {/* <NavigationContainer> */}
        <View style={styles.container}>
          {/* <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          </Stack.Navigator> */}
          <ProfileScreen />
        </View>
        {/* </NavigationContainer> */}
      </ContractContext.Provider>
    </AccountContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
