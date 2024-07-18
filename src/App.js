import { createContext, useState } from "react";
import "./App.css";
import Images from "./Components/Images";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import useAxios from "./hooks/useAxios";
import Footer from "./Components/Footer";

export const ImageContext = createContext();

function App() {
  const [searchImage, setSearchImage] = useState("");
  const query = encodeURIComponent("cat");
  const apiKey = "NG7Z32k63vkZNqX1zPOsNiwQVzqMiWLXDomJrqTmNYo"; // Replace with your actual API key
  const { response, isLoading, error, fetchData } = useAxios(
    `search/photos?page=1&query=${query}&client_id=${apiKey}`
  );

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage,
  };

  return (
    <ImageContext.Provider value={value}>
      <Navbar>
        <Search />
      </Navbar>

      <Images />
      <Footer /> 
    </ImageContext.Provider>
  );
}

export default App;
