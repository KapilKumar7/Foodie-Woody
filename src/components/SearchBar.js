import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.background}>
      <Feather name="search" style={styles.styleIcon} />
      <TextInput
        onEndEditing={onTermSubmit}
        autoCapitalize="none"
        autoCorrect={false}
        value={term}
        onChangeText={(changedTerm) => onTermChange(changedTerm)}
        style={styles.inputStyle}
        placeholder="Search"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#D3D3D3",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    marginVertical: 10,
  },
  inputStyle: {
    borderColor: "black",

    flex: 1,
    fontSize: 18,
    // paddingLeft:
  },
  styleIcon: {
    fontSize: 30,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default SearchBar;
