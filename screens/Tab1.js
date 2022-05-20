import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";

function Tab1() {
  return (
    <View style={styles.container}>
      <Text>Tab1 </Text>
    </View>
  );
}

export default Tab1;

const styles = StyleSheet.create({
  container: {
    ...GlobalStyles.screenContainer,
  },
});
