import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

interface TopicCardProps {
  icon: string;
  title: string;
  titleBn: string;
  description: string;
  tags: string[];
}

export default function TopicCard({
  icon,
  title,
  titleBn,
  description,
  tags,
}: TopicCardProps) {
  return (
    <Card className="p-5 hover:border-blue-300 transition-colors">
      <span className="text-2xl mb-3 block">{icon}</span>
      <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
      <p className="text-sm text-blue-600 mb-2">{titleBn}</p>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2 mt-3">
        {tags.map((tag) => (
          <Badge key={tag} variant="info" size="sm">
            {tag}
          </Badge>
        ))}
      </div>
    </Card>
  );
}
