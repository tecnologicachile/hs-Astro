import { ArrowRight } from 'lucide-react';

interface CaseStudyCardProps {
  companyName: string;
  description: string;
  logoSrc: string;
  logoAlt: string;
  websiteUrl?: string;
  industry?: string;
}

export default function CaseStudyCard({
  companyName,
  description,
  logoSrc,
  logoAlt,
  websiteUrl = "#",
  industry
}: CaseStudyCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-hs-blue/30 hover:shadow-sm transition-all duration-200 h-full flex flex-col">
      {/* Logo */}
      <div className="mb-5">
        <div className="w-16 h-16 bg-gray-50 rounded-lg border border-gray-100 p-3 flex items-center justify-center">
          <img
            src={logoSrc}
            alt={logoAlt}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Company Info */}
      <div className="mb-4">
        <h3 className="text-base font-semibold text-gray-900 mb-1">
          {companyName}
        </h3>
        {industry && (
          <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">
            {industry}
          </p>
        )}
      </div>

      {/* Description */}
      <p className="text-sm text-gray-500 leading-6 mb-6 flex-grow">
        {description}
      </p>

      {/* Action */}
      {websiteUrl !== "#" && (
        <div className="pt-4 border-t border-gray-100">
          <a
            href={websiteUrl}
            className="inline-flex items-center gap-1.5 text-sm text-hs-blue font-medium hover:text-hs-blue-light transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver sitio
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      )}
    </div>
  );
}
