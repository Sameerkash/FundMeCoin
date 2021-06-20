import * as React from "react";
import { StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";
import { Image } from "react-native";


const ProfileCard: React.FunctionComponent<{}> = () => {
  return (
    <Card>
      <Card.Content style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: "https://timesofindia.indiatimes.com/photo/67586673.cms",
          }}
        />
        <CardInfo name="Raised" amount={200} />
        <CardInfo name="Donated" amount={200} />
      </Card.Content>
    </Card>
  );
};

type CardInfoProps = {
  name: string;
  amount: number;
};

const CardInfo: React.FunctionComponent<CardInfoProps> = ({ name, amount }) => {
  return (
    <Card.Content style={styles.container2}>
      <Text>{name}</Text>
      <Text>{amount}</Text>
    </Card.Content>
  );
};

export default ProfileCard;
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
  },
  container2: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
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
    borderColor: "purple",
  },
});
