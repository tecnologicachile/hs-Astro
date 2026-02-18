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
    <div className="bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Preguntas Frecuentes sobre {serviceName}
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-500">
              Resolvemos las dudas más comunes sobre nuestros servicios
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-center justify-between p-5 text-left"
                >
                  <span className="text-base font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDownIcon
                    className={clsx(
                      'h-5 w-5 text-gray-400 transition-transform duration-200 flex-shrink-0',
                      openIndex === index ? 'rotate-180' : ''
                    )}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-5 pb-5">
                    <p className="text-sm text-gray-500 leading-6">
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
