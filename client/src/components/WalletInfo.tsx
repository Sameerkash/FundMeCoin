import React from "react";
import { Card, Text } from "react-native-paper";
import { StyleSheet } from "react-native";
import { View } from "react-native";

type WalletInfoProps = {
  address?: string;
  balance?: string;
};

type InfoProps = {
  name: string;
  value: string;
};

const WalletInfo: React.FunctionComponent<WalletInfoProps> = ({
  address,
  balance,
}) => {
  return (
    <Card>
      <Card.Content style={{ height: 100 }}>
        <InfoRows name="Address" value={address} />
        <InfoRows name="Balance" value={`cUSD ${balance}`} />
      </Card.Content>
    </Card>
  );
};

const InfoRows: React.FunctionComponent<InfoProps> = ({ name, value }) => {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <View style={{ width: 10 }} />
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default WalletInfo;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
  },

  value: {
    fontWeight: "bold",
  },

 
});
