import { Link } from "react-router-dom";
import { useState } from "react"
import { useNavigate } from "react-router-dom";



export default function NavBar() {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate(`/songs/new`);
  }

  // const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <nav>
      <h1>
        <Link to="/snacks">Snacks</Link>
      </h1>
      <button>
        <Link to="/snacks/new">New Snack</Link>
      </button>
    </nav>
  );
}