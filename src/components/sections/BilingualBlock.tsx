interface BilingualBlockProps {
  titleBn: string;
  contentBn: string;
  titleEn: string;
  contentEn: string;
  tag?: string;
}

export default function BilingualBlock({
  titleBn,
  contentBn,
  titleEn,
  contentEn,
  tag,
}: BilingualBlockProps) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 border-b border-gray-200">
        <h3 className="font-semibold text-gray-900">{titleBn}</h3>
        {tag && (
          <span className="px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">
            {tag}
          </span>
        )}
      </div>
      <div className="p-4 space-y-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Bangla
            </span>
          </div>
          <p className="text-gray-700 leading-relaxed">{contentBn}</p>
        </div>
        <hr className="border-gray-200" />
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              English
            </span>
          </div>
          <p className="text-gray-600 leading-relaxed">{contentEn}</p>
        </div>
      </div>
    </div>
  );
}
