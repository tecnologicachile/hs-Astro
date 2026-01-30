import { useState, useId } from 'react';
import { ChevronDown } from 'lucide-react';
import { clsx } from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

interface AccordionItem {
  question: string;
  answer: string;
}

type AccordionVariant = 'default' | 'bordered' | 'separated';

interface AccordionProps {
  items: AccordionItem[];
  variant?: AccordionVariant;
  allowMultiple?: boolean;
  defaultOpenIndex?: number | null;
  className?: string;
}

const variantClasses: Record<AccordionVariant, {
  container: string;
  item: string;
  button: string;
  content: string;
}> = {
  default: {
    container: 'divide-y divide-gray-200',
    item: '',
    button: 'py-6',
    content: 'pb-6',
  },
  bordered: {
    container: 'space-y-3',
    item: 'border border-gray-200 rounded-xl overflow-hidden',
    button: 'p-5 hover:bg-gray-50',
    content: 'px-5 pb-5',
  },
  separated: {
    container: 'space-y-4',
    item: 'bg-white rounded-2xl shadow-sm border border-gray-100',
    button: 'p-6 hover:bg-gray-50',
    content: 'px-6 pb-6',
  },
};

export default function Accordion({
  items,
  variant = 'bordered',
  allowMultiple = false,
  defaultOpenIndex = null,
  className,
}: AccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(
    defaultOpenIndex !== null ? new Set([defaultOpenIndex]) : new Set()
  );
  const baseId = useId();

  const toggle = (index: number) => {
    setOpenIndexes((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        if (!allowMultiple) {
          newSet.clear();
        }
        newSet.add(index);
      }
      return newSet;
    });
  };

  const isOpen = (index: number) => openIndexes.has(index);
  const styles = variantClasses[variant];

  return (
    <div className={clsx(styles.container, className)}>
      {items.map((item, index) => {
        const itemId = `${baseId}-item-${index}`;
        const headerId = `${itemId}-header`;
        const panelId = `${itemId}-panel`;
        const open = isOpen(index);

        return (
          <div key={index} className={styles.item}>
            <h3>
              <button
                id={headerId}
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={open}
                aria-controls={panelId}
                className={clsx(
                  'flex w-full items-center justify-between text-left transition-colors duration-200',
                  styles.button
                )}
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  className={clsx(
                    'h-5 w-5 text-gray-500 flex-shrink-0 transition-transform duration-300',
                    open && 'rotate-180'
                  )}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={headerId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className={styles.content}>
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

// Also export a simpler FAQ wrapper for common use case
interface FAQSectionProps {
  title?: string;
  description?: string;
  items: AccordionItem[];
  variant?: AccordionVariant;
  className?: string;
}

export function FAQSection({
  title = 'Preguntas Frecuentes',
  description,
  items,
  variant = 'bordered',
  className,
}: FAQSectionProps) {
  return (
    <section className={clsx('py-16 sm:py-20', className)}>
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-lg text-gray-600">
              {description}
            </p>
          )}
        </div>
        <Accordion items={items} variant={variant} />
      </div>
    </section>
  );
}
