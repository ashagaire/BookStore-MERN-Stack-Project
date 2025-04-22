import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

function ActionBar({ setShowType, handleSearch, setSearchKeyword }) {
  const navigate = useNavigate();

  const onSearchChange = (e) => {
    const keyword = e.target.value;
    setSearchKeyword(keyword);
    handleSearch(keyword);
  };

  return (
    <div className="flex p-4 justify-between">
      <div className="flex justify-center items-center gap-x-4">
        <Button
          className="bg-green-300 hover:bg-sky-600"
          variant="contained"
          onClick={() => setShowType("table")}
        >
          Card
        </Button>
        <Button
          className="bg-sky-300 hover:bg-sky-600"
          variant="contained"
          onClick={() => setShowType("card")}
        >
          Table
        </Button>
      </div>
      <div className="flex justify-center items-center gap-x-4">
        <input
          type="text"
          placeholder="Search books..."
          className="search-input-style"
          onChange={onSearchChange}
        />
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => navigate("/books/create")}
        >
          Add New
        </Button>
      </div>
    </div>
  );
}

export default ActionBar;
