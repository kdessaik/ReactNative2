import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import HeaderTabs from "./components/HeaderTabs";
import Home from "./screen/Home";

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "row",
        alignSelf: "center",
      }}
    >
      <HeaderTabs />
    </SafeAreaView>
  );
}
