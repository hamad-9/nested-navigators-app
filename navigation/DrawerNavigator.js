import { createDrawerNavigator } from "@react-navigation/drawer";
import Drawer2 from "../screens/Drawer2";
import Drawer1 from "../screens/Drawer1";
import BottomTabNavigator from "./BottomTabNavigator";

const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <Drawer.Screen name="Drawer1" component={Drawer1} />
      <Drawer.Screen name="Drawer2" component={Drawer2} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
