export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-900 text-neutral-100 font-sans">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 lg:px-12 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold tracking-widest uppercase">The Brew Bar</h1>
        <button className="hidden md:block border border-neutral-100 px-5 py-2 text-sm uppercase tracking-wider hover:bg-neutral-100 hover:text-neutral-900 transition-colors">
          Book a Table
        </button>
      </nav>

      {/* Hero Section */}
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

      {/* Menu Highlights Section */}
      <section className="px-4 py-24 bg-neutral-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Curated Menu</h3>
            <p className="text-neutral-400">Handcrafted drinks for the perfect mood.</p>
          </div>

          {/* Grid for Menu Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              { name: "Espresso Macchiato", price: "$4.50", desc: "Rich espresso with a dollop of milk foam." },
              { name: "Pour Over V60", price: "$6.00", desc: "Single-origin beans brewed to perfection." },
              { name: "Cold Brew Tonic", price: "$5.50", desc: "Refreshing cold brew mixed with crisp tonic." },
              { name: "Iced Matcha Latte", price: "$5.00", desc: "Ceremonial grade matcha with creamy oat milk." }
            ].map((item, index) => (
              <div key={index} className="flex flex-col border-b border-neutral-800 pb-6 hover:border-neutral-500 transition-colors">
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="text-xl font-semibold">{item.name}</h4>
                  <span className="text-lg font-medium text-neutral-300">{item.price}</span>
                </div>
                <p className="text-neutral-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="text-sm uppercase tracking-widest text-neutral-400 hover:text-neutral-100 transition-colors border-b border-transparent hover:border-neutral-100 pb-1">
              View Full Menu
            </button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-neutral-900 border-t border-neutral-800 py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Brand */}
          <div>
            <h5 className="text-xl font-bold mb-4 tracking-widest uppercase">The Brew Bar</h5>
            <p className="text-neutral-500 text-sm">
              Crafting moments, one cup at a time. A space for ideas and espresso.
            </p>
          </div>
          
          {/* Location */}
          <div>
            <h5 className="text-sm font-semibold mb-4 uppercase tracking-widest text-neutral-300">Location</h5>
            <p className="text-neutral-500 text-sm leading-relaxed">
              123 Premium Lane<br />
              Koramangala, Bengaluru 560034
            </p>
          </div>

          {/* Hours */}
          <div>
            <h5 className="text-sm font-semibold mb-4 uppercase tracking-widest text-neutral-300">Hours</h5>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Mon - Fri: 8:00 AM - 9:00 PM<br />
              Sat - Sun: 9:00 AM - 11:00 PM
            </p>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto mt-16 pt-8 border-t border-neutral-800 text-center text-neutral-600 text-xs tracking-wider">
          © {new Date().getFullYear()} The Brew Bar. Designed by Your Agency Name.
        </div>
      </footer>

    </main>
  );
}