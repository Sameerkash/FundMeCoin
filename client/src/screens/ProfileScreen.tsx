import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import ProfileCard from "../components/ProfileCard";
import WalletInfo from "../components/WalletInfo";
import AccountContext from "../context/account";

export default function ProfileScreen() {
  const { account, setAccount } = React.useContext(AccountContext);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar animated={true} backgroundColor="indigo" />
      <SafeAreaView style={styles.AndroidSafeArea}>
        <ProfileCard />
        <Text style={styles.subTitle}>Wallet Info</Text>
        <WalletInfo address={account.address} balance={account.cUSDBalance} />
        <Text style={styles.title}>Your Fund Raisers</Text>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 22,
    padding: 10,
  },
  title: {
    fontSize: 22,
    padding: 15,
  },
  AndroidSafeArea: {
    paddingTop: StatusBar.currentHeight,
  },
});
