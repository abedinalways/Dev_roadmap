interface InfoBoxProps {
  type: 'tip' | 'warning' | 'info';
  title: string;
  content: string;
  contentBn?: string;
}

export default function InfoBox({ type, title, content, contentBn }: InfoBoxProps) {
  const styles = {
    tip: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      icon: '✅',
      titleColor: 'text-green-800',
    },
    warning: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-200',
      icon: '⚠️',
      titleColor: 'text-yellow-800',
    },
    info: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      icon: '💡',
      titleColor: 'text-blue-800',
    },
  };

  const style = styles[type];

  return (
    <div className={`${style.bg} ${style.border} border rounded-xl p-4`}>
      <div className="flex gap-3">
        <span className="text-xl flex-shrink-0">{style.icon}</span>
        <div>
          <h4 className={`font-semibold ${style.titleColor} mb-1`}>{title}</h4>
          <p className="text-sm text-gray-700 leading-relaxed">{content}</p>
          {contentBn && (
            <p className="text-sm text-gray-600 leading-relaxed mt-2 italic">
              {contentBn}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
