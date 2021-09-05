import "./App.css";
import axios from "axios";
import { Container } from "@material-ui/core";
import { useEffect, useState } from "react";
import Header from "./components/header/Header";

function App() {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en");
  const dictionaryApi = async () => {
    try {
      const results = await axios.get(
        "https://api.dictionaryapi.dev/api/v2/entries/en/hello"
      );
      setMeanings(results.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(meanings);

  useEffect(() => {
    dictionaryApi();
  }, []);

  return (
    <div
      className="App"
      style={{ height: "100vh", backgroundColor: "#282c34", color: "white" }}
    >
      <Container
        maxWidth="md"
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
        />
      </Container>
    </div>
  );
}

export default App;
