interface FeatureCardProps {
    title: string,
    desc: string,
}

export function FeatureCard({ title, desc }: FeatureCardProps) {
  return (
    <div className="bg-[#fcfcfc] p-5 rounded-xl border border-gray-100 hover:shadow-md hover:border-[#9D5C63]/30 transition-all duration-300">
      <h4 className="font-bold text-[#9D5C63] text-lg mb-2">{title}</h4>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}