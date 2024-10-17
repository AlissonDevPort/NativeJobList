import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useEmployees } from "./useEmployees-list";
import { formatingDate } from "../../utils/formateDate";
import { formatPhoneNumberX } from "../../utils/formatePhoneNumber";
import { Ionicons } from "@expo/vector-icons";
import SkeletonLoader from "../skeleton-loader/Skeleton-Loader";
import SearchInput from "../input/Input";

export default function EmployeesList() {
  const {
    employees,
    setFilteredEmployees,
    filteredEmployees,
    loading,
    expandedId,
    toggleExpand,
  } = useEmployees();

  return (
    <View style={styles.container}>
      {loading ? (
        <SkeletonLoader />
      ) : (
        <>
          <SearchInput
            employees={employees}
            setFilteredEmployees={setFilteredEmployees}
          />
          <FlatList
            data={filteredEmployees}
            keyExtractor={(item) => item.id.toString()}
            ListHeaderComponent={
              <View style={styles.tableHeader}>
                <Text style={[styles.headerText, styles.headerFoto]}>Foto</Text>
                <Text style={[styles.headerText, styles.headerNome]}>Nome</Text>
                <View style={styles.headerArrow}>
                  <View style={styles.blackPoint}></View>
                </View>
              </View>
            }
            renderItem={({ item }) => (
              <View>
                <TouchableOpacity
                  onPress={() => toggleExpand(item.id)}
                  style={styles.employeeItem}
                >
                  <Image
                    source={{ uri: item.image }}
                    style={styles.employeeImage}
                  />
                  <Text style={styles.name}>{item.name}</Text>
                  <Ionicons
                    name={
                      expandedId === item.id ? "chevron-up" : "chevron-down"
                    }
                    size={24}
                    color="#0500FF"
                    style={styles.icon}
                  />
                </TouchableOpacity>
                {expandedId === item.id && (
                  <View style={styles.detailsContainer}>
                    <View style={styles.infoHolder}>
                      <Text style={styles.detailsTextFunction}>Cargo:</Text>
                      <Text style={styles.detailsText}> {item.job}</Text>
                    </View>
                    <View style={styles.infoHolder}>
                      <Text style={styles.detailsTextFunction}>Admissão:</Text>
                      <Text style={styles.detailsText}>
                        {" "}
                        {formatingDate(item.admission_date)}
                      </Text>
                    </View>
                    <View style={styles.infoHolder}>
                      <Text style={styles.detailsTextFunction}>Telefone:</Text>
                      <Text style={styles.detailsText}>
                        {" "}
                        {formatPhoneNumberX(item.phone)}
                      </Text>
                    </View>
                  </View>
                )}
              </View>
            )}
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={true}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 637,
  },
  listContainer: {
    width: 335,
  },
  infoHolder:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor:'#DFDFDF',
    borderStyle: 'dashed',
    borderBottomWidth:1
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#EDEFFB",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderWidth: 1,
    borderColor: "#DFDFDF",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#333",
  },
  headerFoto: {
    width: "20%",
    textAlign: "left",
  },
  headerNome: {
    width: "60%",
    textAlign: "left",
  },
  headerArrow: {
    width: "20%",
    alignItems: "flex-end",
    textAlign: "right",
    paddingHorizontal: 10,
  },
  blackPoint: {
    backgroundColor: "#1C1C1C",
    borderRadius: 50,
    width: 8,
    height: 8,
    marginRight: 2,
  },
  employeeItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: "#DFDFDF",
  },
  employeeImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 15,
  },
  name: {
    fontSize: 16,
    color: "#1c1c1c",
    fontWeight: "400",
    flex: 1,
    textAlign: "left",
    marginLeft: 10,
  },
  icon: {
    paddingHorizontal: 10,
  },
  detailsContainer: {
    width: "100%",
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  detailsText: {
    fontSize: 14,
    color: "#1c1c1c",
    marginVertical: 2,
    borderBottomColor:'black',
    fontWeight:'400'
  },
  detailsTextFunction: {
    fontSize: 14,
    color: "#1c1c1c",
    marginVertical: 2,
    fontWeight:'500'
  },
});
