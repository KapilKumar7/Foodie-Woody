import { useState } from "react";
import ResultList from "../components/ResultList";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
const searchScreen = ({ navigation }) => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };
  return (
    <>
      <SearchBar
        term={term}
        onTermChange={(changedTerm) => setTerm(changedTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {/* <Text style={styles.text}>we have found : {results.length}</Text> */}
      <Text> {errorMessage}</Text>
      <ScrollView>
        <ResultList
          navigation={navigation}
          results={filterResultsByPrice("$")}
          title="Cost Effective"
        />
        <ResultList
          navigation={navigation}
          results={filterResultsByPrice("$$")}
          title="Bit  Pricier"
        />
        <ResultList
          navigation={navigation}
          results={filterResultsByPrice("$$$")}
          title="Big spender"
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  // text:{
  //   marginLeft:10
  // }
});
export default searchScreen;
