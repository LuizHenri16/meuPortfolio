interface FeatureCardProps {
    title: string;
    desc: string;
}

export function FeatureCard({ title, desc }: FeatureCardProps) {
    return (
        <div className="p-4 bg-white brutal-border brutal-shadow-sm brutal-card-hover">
            <h4 className="font-sans font-black text-ink text-sm mb-1.5 uppercase tracking-[-0.01em]">{title}</h4>
            <p className="font-sans text-ink text-xs font-[500] leading-relaxed">{desc}</p>
        </div>
    );
}
