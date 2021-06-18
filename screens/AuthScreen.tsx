import * as React from "react";
import { Button, StyleSheet, TextInput } from "react-native";
import { Card } from "react-native-paper";
import { Image, TouchableOpacity } from "react-native";
import { Text, View } from "../components/Themed";
import ProfileCard from "../components/ProfileCard";
import WalletInfo from "../components/WalletInfo";

// @ts-ignore
import { celo } from "../assets/images/celo-logo.png";

const AuthScreen: React.FunctionComponent<{}> = () => {
  const [nickName, setNickName] = React.useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to</Text>
      <Text style={styles.subtitle}>Fund Me Coin</Text>
      <View style={{ height: 80 }} />

      <Text style={styles.text}>Enter a Nick Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={setNickName}
        value={nickName}
        placeholder="Nick Name"
        keyboardType="default"
      />
      <View style={{ height: 10 }} />
      <Text style={styles.text}>Connect With</Text>
      <View style={{ height: 5 }} />
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Image
          style={styles.Image}
          resizeMode="contain"
          source={require("../assets/images/celo-logo.png")}
        ></Image>
      </TouchableOpacity>
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  input: {
    height: "6%",
    color: "white",
    padding: 10,
    margin: 12,
    borderWidth: 2,
    width: "80%",
    borderColor: "white",
  },
  Image: {
    width: "70%",
    height: 70,
    backgroundColor: "white",
    padding: 5,
    borderRadius: 25,
    overflow: "hidden",
    alignSelf: "center",
  },
  button: {
    textAlign: "center",
    width: "70%",
    height: 80,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 25,
    overflow: "hidden",
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
  },

  text: {
    fontSize: 20,
  },
});
