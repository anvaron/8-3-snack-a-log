import SnackEditForm from "../Components/SnackEditForm";

export default function Edit() {
  return (
    <main className="block ">
      <div className="header p-12">
        <div className="title">
          <p className="justify-center items-center text-center text-4xl font-bold text-gray-800 mb-4">
          Edit Snack
          </p>
        </div>
      </div>
      <SnackEditForm />
    </main>
  );
}