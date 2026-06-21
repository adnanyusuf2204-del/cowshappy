export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center p-8 text-center">
      <h1 className="text-5xl font-bold mb-6">
        Everyone Depends on Healthy Cows
      </h1>

      <p className="text-xl max-w-2xl mb-8">
        Healthy cows support healthy food, healthy farms,
        thriving communities and a sustainable future.
      </p>

      <div className="flex gap-4">
        <button className="bg-black text-white px-6 py-3 rounded-lg">
          Learn More
        </button>

        <button className="border border-black px-6 py-3 rounded-lg">
          Join The Movement
        </button>
      </div>
    </main>
  );
}