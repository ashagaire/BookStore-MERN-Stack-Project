import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

function BooksTable({ books }) {
  return (
    <div className="p-4">
      <TableContainer component={Paper} className="p-4">
        <Table className="">
          <TableHead>
            <TableRow>
              <TableCell sx={{ display: { xs: "none", sm: "table-cell" } }}>
                No.
              </TableCell>
              <TableCell align="center">Title</TableCell>
              <TableCell
                align="center"
                sx={{ display: { xs: "none", sm: "table-cell" } }}
              >
                Author
              </TableCell>
              <TableCell
                align="center"
                sx={{ display: { xs: "none", sm: "table-cell" } }}
              >
                Publish Year
              </TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((book, index) => (
              <TableRow key={book._id}>
                <TableCell sx={{ display: { xs: "none", sm: "table-cell" } }}>
                  {index + 1}
                </TableCell>
                <TableCell>{book.title}</TableCell>
                <TableCell sx={{ display: { xs: "none", sm: "table-cell" } }}>
                  {book.author}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ display: { xs: "none", sm: "table-cell" } }}
                >
                  {book.publishYear}
                </TableCell>
                <TableCell align="center">
                  <div className="flex justify-center gap-x-4">
                    <Link to={`/books/details/${book._id}`}>
                      <BsInfoCircle className="text-2xl text-green-800" />
                    </Link>
                    <Link to={`/books/edit/${book._id}`}>
                      <AiOutlineEdit className="text-2xl text-yellow-600" />
                    </Link>
                    <Link to={`/books/delete/${book._id}`}>
                      <MdOutlineDelete className="text-2xl text-red-600" />
                    </Link>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default BooksTable;
