
type SectionProps = {
  id : string;
  title: string;
  children: React.ReactNode;
  isActive: boolean;
};

export default function Section({ id, title, children, isActive }: SectionProps) {
  return (
    <section id={id}
             className={`
              scroll-mt-20 my-8 p-6 transition-all
              ${isActive ? "bg-white shadow-md rounded-lg border border-blue-200" : ""}
      `}>
      <h2 className="text-xl font-bold inline-block mb-4 relative">
        <span className="z-10 relative">{title}</span>
        <span className="absolute left-0 bottom-1 w-full h-2 bg-blue-100 z-0 rounded"></span>
      </h2>
      <div className="text-gray-800">{children}</div>
    </section>
  );
}
