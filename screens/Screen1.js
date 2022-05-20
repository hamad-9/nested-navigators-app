import { View, Text, StyleSheet } from "react-native";

import { GlobalStyles } from "../constants/styles";

function Screen1() {
  return (
    <View style={styles.container}>
      <Text>Screen1 </Text>
    </View>
  );
}

export default Screen1;

const styles = StyleSheet.create({
  container: {
    ...GlobalStyles.screenContainer,
  },
});
