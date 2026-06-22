
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-24 text-center">

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
          Everyone Depends on Healthy Cows
        </h1>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          Healthy cows support healthy food, healthy farms,
          thriving communities and a sustainable future.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-black text-white px-6 py-3 rounded-lg">
            Learn More
          </button>

          <button className="border border-black px-6 py-3 rounded-lg">
            Join The Movement
          </button>
        </div>

      </main>
    </div>
  );
}