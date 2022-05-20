import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";

function Drawer1() {
  return (
    <View style={styles.container}>
      <Text>Drawer1 </Text>
    </View>
  );
}

export default Drawer1;

const styles = StyleSheet.create({
  container: {
    ...GlobalStyles.screenContainer,
  },
});
