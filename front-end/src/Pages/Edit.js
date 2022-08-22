import SnackEditForm from "../Components/SnackEditForm";

export default function Edit() {
  return (
    <main className="block ">
      <div class="header  p-12">
        <div class="title">
          <p class="justify-center items-center text-center text-4xl font-bold text-gray-800 mb-4">
          Edit Snack
          </p>
        </div>
      </div>
      <SnackEditForm />
    </main>
  );
}