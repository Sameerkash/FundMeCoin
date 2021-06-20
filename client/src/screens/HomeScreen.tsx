import * as React from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Appbar, FAB } from "react-native-paper";
import FundCard from "../components/FundCard";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar animated={true} backgroundColor="indigo" />
      <SafeAreaView style={styles.AndroidSafeArea}>
        <Appbar style={styles.bottom}>
          <Appbar.Content
            title="Home"
            subtitle="All Fundraisers are displayed here"
          />
          <Appbar.Action
            icon="account"
            onPress={() => console.log("Pressed archive")}
          />
        </Appbar>
        <View style={{ height: 10 }} />
        <ScrollView>
          <FundCard />
          <FundCard />
          <FundCard />
        </ScrollView>
        {/* <View style={styles.fixedView}>
        <FAB style={styles.fab} small color="purple" icon="" />
      </View> */}
      </SafeAreaView>
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
  bottom: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
  },
  AndroidSafeArea: {
    paddingTop: StatusBar.currentHeight,
  },
});
