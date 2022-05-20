import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Tab1 from "../screens/Tab1";
import Tab2 from "../screens/Tab2";
const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <BottomTab.Screen name="Tab1" component={Tab1} />
      <BottomTab.Screen name="Tab2" component={Tab2} />
    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;
