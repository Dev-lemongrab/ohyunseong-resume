
type SectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function Section({ title, children }: SectionProps) {
  return (
    <section className="bg-white shadow-md rounded-lg p-6 my-8 border border-gray-100">
      <h2 className="text-xl font-bold inline-block mb-4 relative">
        <span className="z-10 relative">{title}</span>
        <span className="absolute left-0 bottom-1 w-full h-2 bg-blue-100 z-0 rounded"></span>
      </h2>
      <div className="text-gray-800">{children}</div>
    </section>
  );
}
