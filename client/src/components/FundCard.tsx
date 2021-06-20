import * as React from "react";
import { StyleSheet, View } from "react-native";
import {
  Button,
  Card,
  Divider,
  Paragraph,
  Text,
  Title,
} from "react-native-paper";

type Props = {
  onUpVote?: Function;
  onFund?: Function;
};

const FundCard: React.FunctionComponent<Props> = ({ onUpVote, onFund }) => (
  <Card>
    <Card.Title
      title="KAMAL SINGH AT ENGLISH NATIONAL BALLET SCHOOL"
      subtitle="u/KillMonger"
    />
    <Card.Content>
      <Paragraph>
        My name is Kamal Singh and I am a 20-year old ballet dancer from
        Vikaspuri, Delhi (Click here to see me dance:
        https://vimeo.com/377363537) Four years ago, I had never heard of
        Ballet. My father is an e-rickshaw driver and I attended the local
        government boys school. I always liked to move but I didn't have the
        money to attend dance classes as a teenager. But fate led me to a chance
        encounter with Maestro Fernando Aguilera, director of a ballet school
        and company in New Delhi. I fell in love with this beautiful, rigorous,
        classical form and after training intensively for four years, my dream
        has come true: The English National Ballet School of London, England,
        has sent me an invitation, offering me a place in their one-year
        Professional Trainee Programme!
      </Paragraph>
      <Divider style={styles.separator} />
      <Text>Total Funds Raised</Text>
      <Title>cUSD 200,000</Title>
      <Divider style={styles.separator} />
    </Card.Content>
    <Card.Actions>
      <Button onPress={() => {}}> UpVote</Button>
      <Text> 2 </Text>
      <Button onPress={() => {}}>Fund</Button>
    </Card.Actions>
  </Card>

  // <View></View>
);
export default FundCard;

const styles = StyleSheet.create({
  card: {
    padding: 15,
    margin: 5,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  paragraph: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 10,
    marginHorizontal: 5,
    height: 1,
    width: "90%",
  },
});
