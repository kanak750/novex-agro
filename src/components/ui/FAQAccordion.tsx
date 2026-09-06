import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FAQItem } from '@/types';

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div 
            key={i} 
            className={`bg-white border rounded-xl overflow-hidden transition-all duration-300 ${
              isOpen ? 'border-brand-green/30 shadow-md shadow-brand-green/5' : 'border-navy/8 hover:border-navy/20 hover:shadow-sm'
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/30"
              aria-expanded={isOpen}
            >
              <span className={`font-semibold text-base sm:text-lg transition-colors ${isOpen ? 'text-brand-green' : 'text-ink'}`}>
                {item.question}
              </span>
              <div className={`flex items-center justify-center w-8 h-8 rounded-full transition-colors ${isOpen ? 'bg-brand-green/10 text-brand-green' : 'bg-cream text-muted group-hover:bg-brand-green/5'}`}>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </div>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 px-5 ${
                isOpen ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-muted leading-relaxed pr-8">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
