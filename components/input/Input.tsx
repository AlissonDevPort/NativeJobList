import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import useInput from "./useInput";
import { Employee } from "../../types/types";
import { Ionicons } from "@expo/vector-icons";

interface SearchInputProps {
  employees: Employee[];
  setFilteredEmployees: React.Dispatch<React.SetStateAction<Employee[]>>;
}
const SearchInput: React.FC<SearchInputProps> = ({
  employees,
  setFilteredEmployees,
}) => {
  const searchInput = useInput(
    "",
    (term) => {
      searchInput.handleSearch(term);
    },
    employees,
    setFilteredEmployees
  );

  return (
    <View style={styles.mainHolder}>
      <View>
        <Text style={styles.text}>Funcionários</Text>
      </View>
      <View style={styles.searchSection}>
        <Ionicons name="search" size={20} style={styles.searchIcon} />
        <TextInput
          onChangeText={searchInput.onChange}
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          placeholder="Pesquisar"
          placeholderTextColor="#1C1C1C"
          underlineColorAndroid="transparent"
          value={searchInput.value}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainHolder: {
    flexDirection: "column",
    width:335
  },
  searchSection: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    padding: 5,
    borderRadius: 100,
    height: 48,
    marginTop: 15,
    marginBottom: 24,
  },
  searchIcon: {
   marginLeft:19,
   marginRight:4,
    color: "#1C1C1C",
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
},
input: {
  width:'100%',
    color: "#1C1C1C",
    fontWeight: "400",
    fontSize: 16,
  },
});

export default SearchInput;
