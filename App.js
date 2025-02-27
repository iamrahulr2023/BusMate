import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AdBuses from "./components/Admin/BusRoute/AdBuses";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="adbuses">
        <Stack.Screen name="adbuses" component={AdBuses} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
