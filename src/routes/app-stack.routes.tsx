import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen";
import { ValidationScreen } from "../screens/Authentication/ValidationScreen";
import { VehicleAuthentication } from "../screens/Authentication/VehicleAuthentication";
import { DriverAuthentication } from "../screens/Authentication/DriverAuthentication";
import { RootStackParamList } from "./interfaces/RootStackParamList";

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppStack() {
  return (
    <Stack.Navigator initialRouteName="Validation" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Validation" component={ValidationScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="VehicleAuthentication" component={VehicleAuthentication} />
      <Stack.Screen name="DriverAuthentication" component={DriverAuthentication} />
    </Stack.Navigator>
  )
}