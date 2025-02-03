import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import { useSnackbar } from "notistack";
import { Button, CircularProgress, Box } from "@mui/material";

function DeleteBook() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { id } = useParams();

  const handelDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`https://bookstore-mern-stack-yvz9.onrender.com/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book deleted sucessfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("An error occured", { variant: "error" });
      });
  };

  return (
    <div className="main-div">
      <h1 className="text-3xl my-4 flex justify-center">Delete Book</h1>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
          <h3 className="text-2xl">
            Are you sure you want to delete this book record?
          </h3>
          <div className="flex justify-between w-full m-8">
            <Button
              variant="contained"
              size="medium"
              sx={{
                backgroundColor: "red",
                "&:hover": { backgroundColor: "darkred" },
              }}
              onClick={() => navigate("/")}
            >
              Cancel
            </Button>
            <Button
              size="medium"
              variant="contained"
              color="primary"
              onClick={handelDeleteBook}
            >
              Yes, Delete it
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DeleteBook;
