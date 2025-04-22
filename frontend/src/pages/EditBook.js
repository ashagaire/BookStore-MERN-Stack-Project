import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import { Button, CircularProgress, Box } from "@mui/material";

function EditBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://bookstore-mern-stack-yvz9.onrender.com/books/${id}`)
      .then((response) => {
        setAuthor(response.data.author);
        setPublishYear(response.data.publishYear);
        setTitle(response.data.title);
        setLoading(false);
        console.log(response.data.publishYear);
      })
      .catch((error) => {
        setLoading(false);
        alert("An error occured. Please check console");
      });
  }, []);

  const handelEditBook = () => {
    const data = { title, author, publishYear };
    setLoading(true);
    axios
      .put(`https://bookstore-mern-stack-yvz9.onrender.com/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book updated sucessfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("An error occured", { variant: "error" });
      });
  };

  return (
    <div className="main-div">
      <h1 className="centered-title"> Edit Book </h1>
      <div className="my-4 hidden">{loading ? <CircularProgress /> : ""}</div>
      <Box
        component="form"
        className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto"
      >
        <div className="my-4">
          <label className="form-lable">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input-style"
          />
        </div>
        <div className="my-4">
          <label className="form-lable">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="input-style"
          />
        </div>
        <div className="my-4">
          <label className="form-lable">Publish Year</label>
          <input
            type="date"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="input-style"
          />
        </div>
        <Box className="edit-buttons-group">
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
            onClick={handelEditBook}
          >
            Save
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default EditBook;
