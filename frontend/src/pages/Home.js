import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import BooksCard from "../components/home/BooksCard";
import BooksTable from "../components/home/BooksTable";
import ActionBar from "../components/ActionBar";

function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://bookstore-mern-stack-yvz9.onrender.com/books")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  const handleSearch = (keyword) => {
    if (keyword === "") {
      return books;
    }
    axios
      .get(`http://localhost:5555/books/search`, {
        params: { keyword },
      })
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Search Error:", error);
      });
  };

  return (
    <div className=" main-div">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8 mx-auto"> Books</h1>
      </div>
      <ActionBar
        setShowType={setShowType}
        handleSearch={handleSearch}
        setSearchKeyword={setSearchKeyword}
      />

      <main />
      <div className="flex justify-between items-center"></div>
      {loading ? (
        <Loading />
      ) : showType === "card" ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
}

export default Home;
