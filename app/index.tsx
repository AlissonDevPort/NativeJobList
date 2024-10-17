import React from "react";
import { SafeAreaView } from "react-native";
import EmployeesList from "../components/employees-list/Employees-list";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/header/Header";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <EmployeesList />
    </SafeAreaView>
  );
}
