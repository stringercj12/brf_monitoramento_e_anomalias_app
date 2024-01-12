import { NavigationContainer } from "@react-navigation/native";
import { AppStack } from "./app-stack.routes";
import { RootStackParamList } from "./interfaces/RootStackParamList";
import { colors } from "../core/themes";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}

export function Routes() {
  return (
    <NavigationContainer theme={{
      colors: {
        background: colors.body,
        border: colors.gray['500'],
        primary: colors.primary['500'],
        card: colors.white,
        text: colors.gray['700'],
        notification: colors.gray['500'],
      },
      dark: false
    }}>
      <AppStack />
    </NavigationContainer>
  )
}