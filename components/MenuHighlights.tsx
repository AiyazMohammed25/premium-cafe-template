export default function MenuHighlights() {
    return (
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
    )
}