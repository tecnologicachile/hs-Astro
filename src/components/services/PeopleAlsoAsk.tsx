import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface Question {
  question: string;
  answer: string;
}

interface PeopleAlsoAskProps {
  title?: string;
  questions: Question[];
}

export default function PeopleAlsoAsk({
  title = "Preguntas Frecuentes",
  questions
}: PeopleAlsoAskProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          {title}
        </h2>

        <div className="space-y-3">
          {questions.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-4 pb-4 text-gray-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
