export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Nav */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <span className="text-xl font-bold tracking-tight">
          Dating<span className="text-rose-500">Mapp</span>
        </span>
        <a
          href="#waitlist"
          className="bg-rose-500 hover:bg-rose-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
        >
          Get Early Access
        </a>
      </header>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-28 text-center">
        <div className="inline-block bg-rose-500/10 text-rose-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-8 border border-rose-500/20">
          Stop leaving love to chance
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-6">
          Find the best place to{" "}
          <span className="text-rose-500">meet your match</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          DatingMapp is a search engine that ranks real-world venues and events
          by your odds of meeting someone compatible — powered by supply &amp;
          demand economics, demographics, and social behavior data.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#waitlist"
            className="bg-rose-500 hover:bg-rose-600 text-white font-bold px-8 py-4 rounded-full text-lg transition-colors shadow-lg shadow-rose-500/20"
          >
            Find Your Spot →
          </a>
          <a
            href="#how-it-works"
            className="border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors"
          >
            How it works
          </a>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">
            The odds are everything
          </h2>
          <p className="text-gray-400 text-center max-w-xl mx-auto mb-16">
            The right venue on the right night makes all the difference. We do
            the math so you don't have to.
          </p>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-2xl p-8">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-lg font-bold mb-2">Supply &amp; Demand</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We analyze the ratio of singles to couples, gender balance, and
                activity level at venues near you — so you know where demand
                meets opportunity.
              </p>
            </div>
            <div className="bg-gray-800 rounded-2xl p-8">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-lg font-bold mb-2">Compatibility Filters</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Filter by age range, interests, vibe, and more. Find places
                packed with people who match your ideal partner profile, not
                just a crowd.
              </p>
            </div>
            <div className="bg-gray-800 rounded-2xl p-8">
              <div className="text-3xl mb-4">🗺️</div>
              <h3 className="text-lg font-bold mb-2">Real-Time Insights</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                See ranked recommendations by neighborhood, day of week, and
                time of day — updated continuously with live social data and
                event signals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">
            Three steps to better odds
          </h2>
          <p className="text-gray-400 text-center max-w-xl mx-auto mb-16">
            No algorithms trying to match you with a photo — just real places
            where real connections happen.
          </p>
          <div className="space-y-10">
            {[
              {
                step: "01",
                title: "Tell us what you're looking for",
                desc: "Set your preferences: who you want to meet, when you're free, what kind of setting you enjoy.",
              },
              {
                step: "02",
                title: "Get a ranked venue map",
                desc: "We score every bar, park, event, and café nearby on your personal compatibility likelihood — and rank them.",
              },
              {
                step: "03",
                title: "Go in confident",
                desc: "Head to the top spot knowing the numbers are on your side. No more guessing which Friday night hangout is worth your time.",
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex gap-6 items-start">
                <span className="text-rose-500 font-extrabold text-2xl w-10 shrink-0">
                  {step}
                </span>
                <div>
                  <h3 className="text-lg font-bold mb-1">{title}</h3>
                  <p className="text-gray-400 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Waitlist */}
      <section id="waitlist" className="bg-gray-900 py-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-4">
            Ready to stack the odds?
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Join the waitlist and be first to know when DatingMapp launches in
            your city.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-3 justify-center"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-gray-800 border border-gray-700 text-white placeholder-gray-500 px-5 py-4 rounded-full focus:outline-none focus:border-rose-500 transition-colors"
            />
            <button
              type="submit"
              className="bg-rose-500 hover:bg-rose-600 text-white font-bold px-8 py-4 rounded-full transition-colors shadow-lg shadow-rose-500/20 whitespace-nowrap"
            >
              Join Waitlist
            </button>
          </form>
          <p className="text-gray-600 text-sm mt-4">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between text-gray-600 text-sm border-t border-gray-800">
        <span>
          © 2026 Dating<span className="text-rose-500">Mapp</span>. All rights reserved.
        </span>
        <span>Built on Vevria</span>
      </footer>
    </div>
  );
}
