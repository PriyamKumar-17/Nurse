import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AppNavigator from "../navigation/Navigation";

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppNavigator />
    </GestureHandlerRootView>
  );
};

export default App;
