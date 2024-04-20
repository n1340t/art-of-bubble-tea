import { version } from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="h-screen bg-gradient-to-br from-[#d1d9ff] to-[#5850ad]/60">
      <header className="text-white bg-[#282c34] p-3">
        <h1 className="text-2xl font-medium text-center">The Art of Bubble Tea</h1>
        <p className="text-center">Version: {version}</p>
      </header>
      <div className="flex w-full h-full flex-wrap justify-center items-center gap-5">
        <Link to="/recipes" className="bg-[#282c34] p-5 rounded-md w-1/3 text-2xl font-medium text-white text-center">
            Recipes
        </Link>
      </div>
    </div>
  );
}