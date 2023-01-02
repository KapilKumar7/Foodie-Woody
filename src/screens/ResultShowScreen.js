import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, FlatList, Image } from "react-native";
import yelp from "../api/yelp";
const ResultShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const [results, setResults] = useState(null);

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResults(response.data);
  };

  useEffect(() => {
    getResult(id);
  });
  if (!results) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text>{results.name}</Text>
      <FlatList
        data={results.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: "100%",
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
  },
  container: {
    padding: 25,
  },
});

export default ResultShowScreen;
