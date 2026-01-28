import { CheckCircle } from 'lucide-react';

interface Step {
  title: string;
  description: string;
}

interface HowItWorksProps {
  title?: string;
  subtitle?: string;
  steps: Step[];
  serviceName: string;
}

export default function HowItWorks({
  title = "¿Cómo Funciona?",
  subtitle = "Proceso simple y eficiente para comenzar",
  steps,
  serviceName
}: HowItWorksProps) {
  // Generate HowTo schema
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
    <section className="bg-gradient-to-br from-gray-50 to-white py-16 sm:py-20">
      {/* HowTo Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-hs-blue via-hs-blue-light to-hs-blue-lighter -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow h-full">
                  {/* Step number */}
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-hs-blue to-hs-blue-light rounded-full text-white font-bold text-lg mb-4 mx-auto lg:mx-0">
                    {index + 1}
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center lg:text-left">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed text-center lg:text-left">
                    {step.description}
                  </p>

                  {/* Checkmark for completed feeling */}
                  <div className="flex justify-center lg:justify-start mt-4">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-hs-blue text-white rounded-xl font-semibold hover:bg-hs-blue-light transition-colors shadow-lg hover:shadow-xl"
          >
            Comenzar Ahora
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
