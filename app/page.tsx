export default function Landing() {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src="hero.svg" style={{ height: 'auto', width: '100%', alignSelf: 'center' }} alt="hero" />
      <div className="flex flex-col items-center justify-center">
        <h2>Track your Active Lifestyle</h2>
        <h3>Find your way to the perfect body</h3>
        <div className="mt-12">
          <a href="/home" className="py-6 px-12 rounded-2xl bg-black text-white">Get Started</a>
        </div>
      </div>
    </div>
  );
}
