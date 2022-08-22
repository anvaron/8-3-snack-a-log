import Snacks from "../Components/Snacks";

export default function Index() {
  return (
    <main className="sm:flex flex-wrap justify-center items-center text-center">
      <div class="header flex items-end justify-between mb-12 p-12">
      <div class="title">
            <p class="text-4xl font-bold text-gray-800 mb-4">
            Snacks list
            </p>
            <p class="text-2xl font-light text-gray-400">
              All snacks listed, see the details to get health information 
            </p>
      </div>
      {/* <div class="text-end">
        <form class="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
          <div class=" relative ">
            <input type="text" id="&quot;form-subscribe-Search" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Enter a snack"/>
          </div>
          <button class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
              Search
          </button>
        </form>
      </div> */}
      </div>
      <Snacks />
    </main>
  );
}