import * as React from "react";
import { StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import { Image } from "react-native";
import { Text, View } from "../components/Themed";

export default function ProfileScreen() {
  return (
    <View>
      <Card>
        <Card.Content>
          <Image
            style={styles.image}
            source={{
              uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.fiverr.com%2Fbenmackie%2Fcartoon-profile-picture-or-avatar&psig=AOvVaw2O_QmDtL5610q8Xo3iHbOv&ust=1624010254060000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPiA4emznvECFQAAAAAdAAAAABAD",
            }}
          />
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "red",
  },
});
