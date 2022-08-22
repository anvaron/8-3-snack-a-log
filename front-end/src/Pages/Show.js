import SnackDetails from "../Components/SnackDetails";

export default function Show() {
  return (
    <main className="sm:flex flex-wrap justify-center items-center text-center">
      <div className="header w-full items-end justify-between p-12">
        <div className=" title">
          <p className="text-4xl font-bold text-gray-800 mb-4">
            Snack details
          </p>
        </div>
      </div>
      <SnackDetails />
    </main>
  );
}