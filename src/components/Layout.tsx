export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-screen bg-[#0f1117]">
      {/* Sidebar */}
      <div className="w-64 h-full bg-[#1a1d27] border-r border-white/10 flex flex-col p-4">
        <div className="text-white font-bold text-xl mb-8">Goplexa</div>
        <nav className="flex flex-col gap-2">
          <a
            href="/"
            className="text-white/70 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg transition"
          >
            Dashboard
          </a>
          <a
            href="/writing"
            className="text-white/70 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg transition"
          >
            Writing
          </a>
          <a
            href="/voice"
            className="text-white/70 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg transition"
          >
            Voice
          </a>
          <a
            href="/meetings"
            className="text-white/70 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg transition"
          >
            Meetings
          </a>
          <a
            href="/interview"
            className="text-white/70 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg transition"
          >
            Interview
          </a>
          <a
            href="/settings"
            className="text-white/70 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg transition"
          >
            Settings
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <div className="h-14 border-b border-white/10 flex items-center px-6">
          <span className="text-white/50 text-sm">Goplexa — AI Super App</span>
        </div>
        <div className="flex-1 overflow-auto p-6">{children}</div>
      </div>
    </div>
  );
}
