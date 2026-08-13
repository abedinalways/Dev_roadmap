import Card from '@/components/ui/Card';

interface InterviewQuestionProps {
  question: string;
  answer: string;
  answerBn: string;
}

function InterviewQuestion({ question, answer, answerBn }: InterviewQuestionProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <p className="font-medium text-gray-900 mb-2">{question}</p>
      <div className="space-y-3">
        <div>
          <p className="text-sm text-gray-700 leading-relaxed">{answer}</p>
        </div>
        <div className="border-t border-gray-200 pt-3">
          <p className="text-sm text-gray-600 leading-relaxed italic">{answerBn}</p>
        </div>
      </div>
    </div>
  );
}

interface InterviewBoxProps {
  title: string;
  questions: InterviewQuestionProps[];
}

export default function InterviewBox({ title, questions }: InterviewBoxProps) {
  return (
    <Card className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
      <h3 className="flex items-center gap-2 text-lg font-semibold text-purple-700 mb-4">
        <span className="text-xl">💬</span>
        {title}
      </h3>
      <div className="space-y-3">
        {questions.map((q, index) => (
          <InterviewQuestion key={index} {...q} />
        ))}
      </div>
    </Card>
  );
}
