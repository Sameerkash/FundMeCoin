import * as React from "react";
import { StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import { Image } from "react-native";
import { Text, View } from "../components/Themed";
import ProfileCard from "../components/ProfileCard";
import WalletInfo from "../components/WalletInfo";

export default function ProfileScreen() {
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
