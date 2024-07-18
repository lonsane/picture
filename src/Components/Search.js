import { useContext, useState } from "react";
import { ImageContext } from "../App";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const { fetchData, setSearchImage } = useContext(ImageContext);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleButtonSearch = () => {
    const query = encodeURIComponent(searchValue);
    const apiKey = "NG7Z32k63vkZNqX1zPOsNiwQVzqMiWLXDomJrqTmNYo";
    fetchData(`search/photos?page=1&query=${query}&client_id=${apiKey}`);
    setSearchValue("");
    setSearchImage(searchValue);
  };
  const handleEnterSearch = (e) => {
    if (e.key === "Enter") {
      const query = encodeURIComponent(searchValue);
      const apiKey = "NG7Z32k63vkZNqX1zPOsNiwQVzqMiWLXDomJrqTmNYo";
      fetchData(`search/photos?page=1&query=${query}&client_id=${apiKey}`);
      setSearchValue("");
      setSearchImage(searchValue);
    }
  };

  return (
    <div className="flex">
      <input
        className="bg-white border border-gray-300 text-sm w-full indent-2 p-2.5 outline-none focus:border-black-500 focus:ring-2 rounded-tl rounded-bl"
        type="search"
        placeholder="Search Anything..."
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleEnterSearch}
      />
      <button
        onClick={handleButtonSearch}
        disabled={!searchValue}
        className="bg-[#e0e1dd] px-6 py-2.5 text-gray rounded-tr rounded-br focus:ring-2 focus:ring-gray-300 border-solid border-2 border-black-600 disabled:bg-[#e0e1dd]"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
