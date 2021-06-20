import React from "react";
import { Card, Text } from "react-native-paper";
import { StyleSheet } from "react-native";
import { View } from "react-native";

type WalletInfoProps = {
  address?: string;
  balance?: number;
};

type InfoProps = {
  name: string;
  value: string;
};

const WalletInfo: React.FunctionComponent<WalletInfoProps> = () => {
  return (
    <Card>
      <Card.Content>
        <InfoRows name="Address" value="x0address" />
        <InfoRows name="Balance" value="cUSD 2000" />
      </Card.Content>
    </Card>
  );
};

const InfoRows: React.FunctionComponent<InfoProps> = ({ name, value }) => {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Text>{value}</Text>
    </View>
  );
};

export default WalletInfo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
  },
});
