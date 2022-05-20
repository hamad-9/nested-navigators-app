import { View, Text, StyleSheet, Button } from "react-native";
import { GlobalStyles } from "../constants/styles";

function Drawer2({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Drawer2 </Text>
      <Button
        title="go to screen 1"
        onPress={() => {
          navigation.navigate("Screen1");
        }}
      />
    </View>
  );
}

export default Drawer2;

const styles = StyleSheet.create({
  container: {
    ...GlobalStyles.screenContainer,
  },
});
