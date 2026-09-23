export default function Footer() {
    return (
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
    )
}