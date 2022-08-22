import Snacks from "../Components/Snacks";

export default function Index() {
  return (
    <main className="sm:flex flex-wrap justify-center items-center text-center">
      <div className="header flex items-end justify-between  p-12">
        <div className="title">
          <p className="text-4xl font-bold text-gray-800 mb-4">
          Snacks list
          </p>
          <p className="text-2xl font-light text-gray-400">
            All snacks listed, see the details to get health information 
          </p>
        </div>
      </div>
      <Snacks />
    </main>
  );
}