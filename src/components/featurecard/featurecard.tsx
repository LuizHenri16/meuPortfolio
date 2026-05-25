interface FeatureCardProps {
    title: string;
    desc: string;
}

export function FeatureCard({ title, desc }: FeatureCardProps) {
    return (
        <div className="p-4 rounded-2xl border border-gray-100 bg-[#FAFAFA] hover:border-terracota-100/30 hover:bg-[#FFF8F8] transition-all duration-200">
            <h4 className="font-[Sora] font-bold text-terracota-800 text-sm mb-1.5">{title}</h4>
            <p className="font-[Sora] text-text2 text-xs leading-relaxed font-light">{desc}</p>
        </div>
    );
}
