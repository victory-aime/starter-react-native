import { SafeAreaProvider } from "react-native-safe-area-context";
import ApplicationNavigator from "./src/navigations/app.main.navigation";

export default function App() {
  return (
    <SafeAreaProvider>
      <ApplicationNavigator />
    </SafeAreaProvider>
  );
}
