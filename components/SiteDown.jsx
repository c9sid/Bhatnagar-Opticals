import { Lock } from "lucide-react";

export default function SiteDown() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-red-950 via-black to-red-900 text-white px-6 overflow-hidden">

      {/* Glow background */}
      <div className="absolute w-[500px] h-[500px] bg-red-600/30 blur-[140px] rounded-full top-20 left-20"></div>
      <div className="absolute w-[400px] h-[400px] bg-red-500/30 blur-[140px] rounded-full bottom-20 right-20"></div>

      <div className="relative backdrop-blur-xl bg-white/10 border border-red-500/30 shadow-2xl rounded-3xl p-10 max-w-xl w-full text-center">

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-red-500/10 p-4 rounded-full border border-red-500/30">
            <Lock size={32} className="text-red-400" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold mb-2 text-red-400">
          Website Temporarily Disabled
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 mb-8 text-sm">
          This website is currently unavailable.  
          Please contact the developer to restore it.
        </p>

        {/* Restore Button */}
        <a
          href="https://instagram.com/jpg.siddharth"
          target="_blank"
          rel="noopener noreferrer"
          title="Contact Developer to Restore Site"
          className="flex items-center justify-center gap-2 border border-red-500/40 py-3 rounded-xl hover:bg-red-600/20 hover:border-red-400 transition-all duration-300"
        >
          Restore Site
        </a>
      </div>
    </div>
  );
}