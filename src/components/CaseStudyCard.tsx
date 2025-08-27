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
    <div className="group relative">
      {/* Card */}
      <div className="bg-white border border-gray-100 rounded-3xl p-8 hover:border-hs-blue/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 h-full flex flex-col">
        
        {/* Logo */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex items-center justify-center group-hover:border-hs-blue/20 transition-colors duration-300">
            <img 
              src={logoSrc}
              alt={logoAlt}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Company Info */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-hs-blue transition-colors duration-300">
            {companyName}
          </h3>
          {industry && (
            <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">
              {industry}
            </p>
          )}
        </div>
        
        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
          {description}
        </p>
        
        {/* Action */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-400">Cliente</span>
          {websiteUrl !== "#" && (
            <a 
              href={websiteUrl}
              className="inline-flex items-center gap-2 text-hs-blue hover:text-hs-blue-light font-medium transition-all duration-300 group-hover:translate-x-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver sitio
              <ArrowRight className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
      
      {/* Subtle accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-hs-blue/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
}