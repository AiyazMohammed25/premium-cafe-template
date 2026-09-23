export default function HeroSection() {
  return (
     <section className="flex flex-col items-center justify-center text-center px-4 pt-32 pb-24">
        <h2 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
          Artisan Coffee <br className="hidden md:block" /> & Minimal Vibe
        </h2>
        <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mb-10">
          Experience the finest roasted beans in a space designed for focus, deep conversations, and perfect moments.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-neutral-100 text-neutral-900 px-8 py-3 font-semibold hover:bg-neutral-300 transition-colors">
            Explore Menu
          </button>
          <button className="border border-neutral-500 text-neutral-300 px-8 py-3 font-semibold hover:border-neutral-100 hover:text-neutral-100 transition-colors">
            Our Story
          </button>
        </div>
      </section>
  )}