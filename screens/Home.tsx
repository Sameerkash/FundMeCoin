import * as React from "react";
import { FlatList, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { FAB } from "react-native-paper";
import FundCard from "../components/FunCard";

import { Text, View } from "../components/Themed";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <FundCard />
        <FundCard />
        <FundCard />
      </ScrollView>
      <View style={styles.fixedView}>
        <FAB style={styles.fab} small color="purple" icon="" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
  fixedView: {
    position: "absolute",
    left: 0,
    bottom: 0,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
