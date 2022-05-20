import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";

function Tab2() {
  return (
    <View style={styles.container}>
      <Text>Tab2 </Text>
    </View>
  );
}

export default Tab2;

const styles = StyleSheet.create({
  container: {
    ...GlobalStyles.screenContainer,
  },
});
