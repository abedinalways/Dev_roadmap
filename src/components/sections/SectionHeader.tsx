interface SectionHeaderProps {
  number: string;
  title: string;
  titleBn: string;
  icon: string;
}

export default function SectionHeader({
  number,
  title,
  titleBn,
  icon,
}: SectionHeaderProps) {
  return (
    <div className="flex items-start gap-5 mb-8">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-xl flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-1">
          Section {number}
        </p>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{title}</h2>
        <p className="text-sm sm:text-base text-blue-600 font-medium">{titleBn}</p>
      </div>
    </div>
  );
}
