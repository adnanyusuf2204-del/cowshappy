export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        <div className="flex items-center gap-3">
          <span className="text-3xl">🐄</span>

          <div>
            <h1 className="font-bold text-xl">
              CowsHappy
            </h1>

            <p className="text-xs text-gray-500">
              Healthy cows. Healthy food.
            </p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 font-medium">
          <a href="#">Home</a>
          <a href="#">Journey</a>
          <a href="#">Knowledge Hub</a>
          <a href="#">Impact</a>

          <button className="bg-black text-white px-4 py-2 rounded-lg">
            Join
          </button>
        </div>

      </div>
    </nav>
  );
}
