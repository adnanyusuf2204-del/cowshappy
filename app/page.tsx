import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-12 md:py-16 text-center">

        {/* Home / Hero */}
        <section
          id="home"
          className="mb-20 md:mb-28 scroll-mt-24"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-[#1F3D2B] leading-tight">
            Everyone Depends on Healthy Cows
          </h1>

          <p className="text-lg md:text-xl text-[#556B5D] max-w-3xl mx-auto mb-10">
            Healthy cows support healthy food, healthy farms,
            thriving communities and a sustainable future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#1F3D2B] text-white hover:bg-[#294F39] px-6 py-3 rounded-lg transition">
              Learn More
            </button>

            <button className="border-2 border-[#1F3D2B] text-[#1F3D2B] hover:bg-[#1F3D2B] hover:text-white px-6 py-3 rounded-lg transition">
              Join The Movement
            </button>
          </div>
        </section>

        {/* Journey */}
        <section
          id="journey"
          className="mb-24 scroll-mt-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F3D2B] mb-8">
            The Journey
          </h2>

          <div className="bg-[#FCFAF6] border border-[#D9D1C7] rounded-xl p-10 shadow-md">
            <p className="text-lg text-[#556B5D]">
              Journey content coming soon.
            </p>
          </div>
        </section>

        {/* Why Healthy Cows Matter */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F3D2B] mb-12">
            Why Healthy Cows Matter
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-[#FCFAF6] p-8 rounded-xl border border-[#D9D1C7] shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <div className="text-5xl mb-6">🐄</div>

              <h3 className="font-bold text-xl text-[#1F3D2B] mb-4">
                Animal Welfare
              </h3>

              <p className="text-[#556B5D] leading-relaxed">
                Supporting healthier, happier cows through better care,
                nutrition, and farming practices.
              </p>
            </div>

            <div className="bg-[#FCFAF6] p-8 rounded-xl border border-[#D9D1C7] shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <div className="text-5xl mb-6">🌱</div>

              <h3 className="font-bold text-xl text-[#1F3D2B] mb-4">
                Sustainable Farming
              </h3>

              <p className="text-[#556B5D] leading-relaxed">
                Encouraging environmentally responsible farming methods
                that protect land and resources.
              </p>
            </div>

            <div className="bg-[#FCFAF6] p-8 rounded-xl border border-[#D9D1C7] shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <div className="text-5xl mb-6">🥛</div>

              <h3 className="font-bold text-xl text-[#1F3D2B] mb-4">
                Better Food Systems
              </h3>

              <p className="text-[#556B5D] leading-relaxed">
                Connecting healthy livestock with healthier food
                production and stronger communities.
              </p>
            </div>

          </div>
        </section>

        {/* Knowledge Hub */}
        <section
          id="knowledge-hub"
          className="mb-24 scroll-mt-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F3D2B] mb-8">
            Knowledge Hub
          </h2>

          <div className="bg-[#FCFAF6] border border-[#D9D1C7] rounded-xl p-10 shadow-md">
            <p className="text-lg text-[#556B5D]">
              Articles, resources and educational content coming soon.
            </p>
          </div>
        </section>

        {/* Impact */}
        <section
          id="impact"
          className="pb-12 scroll-mt-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F3D2B] mb-12">
            Our Impact
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-[#FCFAF6] p-8 rounded-xl shadow-md border border-[#D9D1C7] hover:shadow-lg transition">
              <p className="text-4xl font-bold text-[#1F3D2B]">500+</p>
              <p className="text-[#556B5D] mt-2">Farms Reached</p>
            </div>

            <div className="bg-[#FCFAF6] p-8 rounded-xl shadow-md border border-[#D9D1C7] hover:shadow-lg transition">
              <p className="text-4xl font-bold text-[#1F3D2B]">10,000+</p>
              <p className="text-[#556B5D] mt-2">Cows Supported</p>
            </div>

            <div className="bg-[#FCFAF6] p-8 rounded-xl shadow-md border border-[#D9D1C7] hover:shadow-lg transition">
              <p className="text-4xl font-bold text-[#1F3D2B]">50+</p>
              <p className="text-[#556B5D] mt-2">Educational Resources</p>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}