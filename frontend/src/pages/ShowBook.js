import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Loading";
import dayjs from "dayjs";
import { Card, CardContent, Typography } from "@mui/material";

function ShowBook() {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://bookstore-mern-stack-yvz9.onrender.com/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
        console.log(response.data);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="main-div ">
      <BackButton />
      <h1 className="centered-title">Book details</h1>
      {loading ? (
        <Spinner />
      ) : (
        <Card className=" max-w-lg p-4 mx-auto">
          <CardContent>
            <div className="my-4 grid grid-cols-3">
              <Typography variant="h6" className="mr-4 text-gray-500">
                Title
              </Typography>
              <Typography className="col-span-2" variant="h6">
                {book.title}
              </Typography>
            </div>
            <div className="my-4 grid grid-cols-3">
              <Typography variant="h6" className="mr-4 text-gray-500">
                Author
              </Typography>
              <Typography className="col-span-2" variant="h6">
                {book.author}
              </Typography>
            </div>
            <div className="my-4 grid grid-cols-3">
              <Typography variant="h6" className="mr-4 text-gray-500">
                Published Date
              </Typography>
              <Typography className="col-span-2" variant="h6">
                {book.publishYear}
              </Typography>
            </div>
            <div className="my-4 grid grid-cols-3">
              <Typography variant="h6" className="mr-4 text-gray-500">
                Record Added
              </Typography>
              <Typography className="col-span-2" variant="h6">
                {dayjs(book.createdAt).format("DD.MM.YYYY")}
              </Typography>
            </div>
            <div className="my-4 grid grid-cols-3">
              <Typography variant="h6" className="mr-4 text-gray-500">
                Last Updated
              </Typography>
              <Typography className="col-span-2" variant="h6">
                {dayjs(book.updatedAt).format("DD.MM.YYYY")}
              </Typography>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default ShowBook;
