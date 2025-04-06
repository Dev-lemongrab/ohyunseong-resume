type HeaderProps = {
  activeId: string;
  setActiveId: (id: string) => void;
};

export default function Header({ activeId, setActiveId }: HeaderProps) {
  const categories = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Work" },
    { id: "portfolio", label: "Portfolio" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-4xl mx-auto px-4 py-4 flex justify-center gap-80">
        {categories.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={() => setActiveId(id)}
            className={`relative text-sm font-medium transition-all ${
              activeId === id ? "text-blue-600" : "text-gray-700 hover:text-blue-400"
            }`}
          >
            <span className="relative z-10">{label}</span>
            {activeId === id && (
              <span className="absolute left-0 bottom-0 h-2 w-full bg-blue-100 rounded z-0"></span>
            )}
          </a>
        ))}
      </nav>
    </header>
  );
}

