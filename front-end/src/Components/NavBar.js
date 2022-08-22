import { Link } from "react-router-dom";
import { useState } from "react"
import { useNavigate } from "react-router-dom";


export default function NavBar() {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate(`/snacks/new`);
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
    // <nav>
    //   <h1>
    //     <Link to="/snacks">Snacks</Link>
    //   </h1>
    //   <button>
    //     <Link to="/snacks/new">New Snack</Link>
    //   </button>
    // </nav>
    <header className=" body-font bg-indigo-600 sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <a className="mr-5 text-white hover:text-gray-900 font-bold" href="/snacks">Snacks</a>
          <a className="mr-5 text-white hover:text-gray-900 font-bold" href="/snacks/new">Project</a>
        </nav>

        <a href="/" className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">
          <span className="mr-1 text-3xl font-extrabold text-white">Snack</span>
          {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
          </svg> */}
          {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" viewBox="0 0 24 24" fill="none">
            <path d="M11.5 12.25C11.5 11.8358 11.8358 11.5 12.25 11.5C12.6642 11.5 13 11.1642 13 10.75C13 10.3358 12.6642 10 12.25 10C11.0074 10 10 11.0074 10 12.25C10 12.6642 10.3358 13 10.75 13C11.1642 13 11.5 12.6642 11.5 12.25Z" fill="#FFFFFF"/>
            <path d="M13.5 2.00001C10.3825 2.00001 7.68778 3.82516 6.21453 6.49359C5.97424 6.92883 5.60623 7.30733 5.15906 7.6095C3.24846 8.90056 2 11.179 2 13.75C2 17.6964 4.96668 21 8.75 21C9.07376 21 9.39261 20.9755 9.70494 20.928C10.5741 20.7957 11.4969 20.9274 12.2716 21.3089C13.1708 21.7517 14.1825 22 15.25 22C18.9779 22 22 18.9779 22 15.25C22 14.8298 21.9615 14.4179 21.8877 14.0179C21.8188 13.645 21.8072 13.2794 21.8641 12.9356C21.9535 12.3963 22 11.8413 22 11.275C22 6.22144 18.2601 2.00001 13.5 2.00001ZM17.25 12.5C17.25 15.1234 15.1234 17.25 12.5 17.25C9.87665 17.25 7.75 15.1234 7.75 12.5C7.75 9.87665 9.87665 7.75 12.5 7.75C15.1234 7.75 17.25 9.87665 17.25 12.5Z" fill="#FFFFFF"/>
          </svg> */}
          <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" viewBox="0 0 24 24" fill="none">
            <path d="M8.25 9C7.83579 9 7.5 9.33579 7.5 9.75V14.25C7.5 14.6642 7.83579 15 8.25 15H12.75C13.1642 15 13.5 14.6642 13.5 14.25V9.75C13.5 9.33579 13.1642 9 12.75 9H8.25ZM9 13.5V10.5H12V13.5H9Z" fill="#FFFFFF"/>
            <path d="M2 7.75C2 5.12665 4.12665 3 6.75 3H17.2501C19.8734 3 22.0001 5.12665 22.0001 7.75C22.0001 8.98811 21.5256 10.1164 20.7501 10.9613V18.75C20.7501 19.9926 19.7427 21 18.5001 21H5.5C4.25736 21 3.25 19.9926 3.25 18.75V10.9613C2.47451 10.1164 2 8.98811 2 7.75ZM6.75 4.5C4.95507 4.5 3.5 5.95507 3.5 7.75C3.5 8.67951 3.88924 9.51689 4.51572 10.1102C4.66528 10.2518 4.75 10.4488 4.75 10.6548V18.75C4.75 19.1642 5.08579 19.5 5.5 19.5H15.5C15.9142 19.5 16.25 19.1642 16.25 18.75V11.0577C16.25 10.8096 16.3726 10.5776 16.5776 10.4379C17.4378 9.85165 18 8.86637 18 7.75C18 5.95507 16.5449 4.5 14.75 4.5H6.75Z" fill="#FFFFFF"/>
          </svg>
          <span className="ml-1 text-3xl font-extrabold text-white">'Log</span>
        </a>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <button
            onClick={() => handleClick()}
            type="button"
            className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          >
            Create Snack
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}