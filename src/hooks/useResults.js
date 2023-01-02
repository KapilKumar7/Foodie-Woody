import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    // console.log("hi there");
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "Alaska",
        },
      });
      setResults(response.data.businesses);
      // console.log()
    } catch (err) {
      setErrorMessage("something went wrong");
    }
  };
  useEffect(() => {
    searchApi("tea ");
  }, []);
  return [searchApi, results, errorMessage];
};
