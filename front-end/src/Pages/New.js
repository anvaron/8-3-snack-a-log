import SnackNewForm from "../Components/SnackNewForm";

export default function New() {
  return (
    <main className="block ">
      <div className="header p-12">
        <div className="title">
          <p className="justify-center items-center text-center text-4xl font-bold text-gray-800 mb-4">
          New Snack
          </p>
        </div>
      </div>
      <SnackNewForm />
    </main>
  );
}