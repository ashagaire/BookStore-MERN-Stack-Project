import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

function ActionBar({ setShowType }) {
  const navigate = useNavigate();

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

      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={() => navigate("/books/create")}
      >
        Add New
      </Button>
    </div>
  );
}

export default ActionBar;
