import { useState } from 'react';
import { ChevronDownIcon } from 'lucide-react';
import { clsx } from 'clsx';

interface FAQ {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  faqs: FAQ[];
  serviceName: string;
}

export default function ServiceFAQ({ faqs, serviceName }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Preguntas Frecuentes sobre {serviceName}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Resolvemos las dudas más comunes sobre nuestros servicios de hosting
            </p>
          </div>
          
          <div className="mt-16 space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-200">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDownIcon
                    className={clsx(
                      'h-5 w-5 text-gray-500 transition-transform',
                      openIndex === index ? 'rotate-180' : ''
                    )}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-7">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}