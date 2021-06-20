import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import ProfileCard from "../components/ProfileCard";
import WalletInfo from "../components/WalletInfo";
import AccountContext from "../context/account";

export default function ProfileScreen() {
  const { account, setAccount } = React.useContext(AccountContext);

  return (
    <View>
      <ProfileCard />

      <Text style={styles.subTitle}>Wallet Info</Text>
      <WalletInfo />
      <Text style={styles.title}>Your Fund Raisers</Text>
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
});
