import { ArrowRight } from 'lucide-react';

interface Step {
  title: string;
  description: string;
}

interface HowItWorksProps {
  title?: string;
  subtitle?: string;
  steps: Step[];
  serviceName: string;
  background?: string;
}

export default function HowItWorks({
  title = "¿Cómo Funciona?",
  subtitle = "Proceso simple y eficiente para comenzar",
  steps,
  serviceName,
  background = "bg-gray-50"
}: HowItWorksProps) {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": `Cómo contratar ${serviceName}`,
    "description": subtitle,
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.title,
      "text": step.description
    })),
    "totalTime": "PT48H",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "CLP",
      "value": "Consultar"
    }
  };

  return (
    <section className={`${background} py-16 sm:py-20`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            {title}
          </h2>
          <p className="text-base text-gray-500 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-6 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-px bg-gray-200 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-hs-blue/30 hover:shadow-sm transition-all duration-200 h-full flex flex-col">
                  {/* Step number */}
                  <div className="flex items-center justify-center w-10 h-10 bg-hs-blue rounded-lg text-white font-semibold text-sm mb-5 mx-auto lg:mx-0">
                    {index + 1}
                  </div>

                  <h3 className="text-base font-semibold text-gray-900 mb-2 text-center lg:text-left">
                    {step.title}
                  </h3>

                  <p className="text-sm text-gray-500 leading-relaxed text-center lg:text-left flex-1">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="/contacto"
            className="inline-flex items-center gap-2 px-6 py-3 bg-hs-blue text-white rounded-lg text-sm font-semibold hover:bg-hs-blue-light transition-colors duration-200 shadow-sm hover:shadow-md"
          >
            Comenzar Ahora
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
