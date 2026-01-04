import React from 'react';

interface MarqueeProps {
  items: string[];
}

const StarIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C12 0 15 9 24 12C15 15 12 24 12 24C12 24 9 15 0 12C9 9 12 0 12 0Z" />
  </svg>
);

export const Marquee: React.FC<MarqueeProps> = ({ items }) => {
  return (
    <div className="relative flex overflow-x-hidden bg-brand-green text-black py-4 font-bold uppercase tracking-wider text-lg w-screen left-1/2 -translate-x-1/2 select-none">
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {/* Set 1 */}
        {items.map((item, index) => (
          <React.Fragment key={`m1-${index}`}>
            <span className="mx-6">{item}</span>
            <StarIcon className="w-5 h-5 text-black" />
          </React.Fragment>
        ))}
        {/* Set 2 */}
        {items.map((item, index) => (
          <React.Fragment key={`m1-dup-${index}`}>
            <span className="mx-6">{item}</span>
            <StarIcon className="w-5 h-5 text-black" />
          </React.Fragment>
        ))}
        {/* Set 3 */}
        {items.map((item, index) => (
          <React.Fragment key={`m1-trip-${index}`}>
            <span className="mx-6">{item}</span>
            <StarIcon className="w-5 h-5 text-black" />
          </React.Fragment>
        ))}
        {/* Set 4 */}
        {items.map((item, index) => (
          <React.Fragment key={`m1-quad-${index}`}>
            <span className="mx-6">{item}</span>
            <StarIcon className="w-5 h-5 text-black" />
          </React.Fragment>
        ))}
        {/* Set 5 */}
        {items.map((item, index) => (
          <React.Fragment key={`m1-quint-${index}`}>
            <span className="mx-6">{item}</span>
            <StarIcon className="w-5 h-5 text-black" />
          </React.Fragment>
        ))}
        {/* Set 6 */}
        {items.map((item, index) => (
          <React.Fragment key={`m1-sext-${index}`}>
            <span className="mx-6">{item}</span>
            <StarIcon className="w-5 h-5 text-black" />
          </React.Fragment>
        ))}
      </div>

      <div className="absolute top-0 py-4 animate-marquee2 whitespace-nowrap flex items-center">
        {/* Set 1 */}
        {items.map((item, index) => (
          <React.Fragment key={`m2-${index}`}>
            <span className="mx-6">{item}</span>
            <StarIcon className="w-5 h-5 text-black" />
          </React.Fragment>
        ))}
        {/* Set 2 */}
        {items.map((item, index) => (
          <React.Fragment key={`m2-dup-${index}`}>
            <span className="mx-6">{item}</span>
            <StarIcon className="w-5 h-5 text-black" />
          </React.Fragment>
        ))}
        {/* Set 3 */}
        {items.map((item, index) => (
          <React.Fragment key={`m2-trip-${index}`}>
            <span className="mx-6">{item}</span>
            <StarIcon className="w-5 h-5 text-black" />
          </React.Fragment>
        ))}
        {/* Set 4 */}
        {items.map((item, index) => (
          <React.Fragment key={`m2-quad-${index}`}>
            <span className="mx-6">{item}</span>
            <StarIcon className="w-5 h-5 text-black" />
          </React.Fragment>
        ))}
        {/* Set 5 */}
        {items.map((item, index) => (
          <React.Fragment key={`m2-quint-${index}`}>
            <span className="mx-6">{item}</span>
            <StarIcon className="w-5 h-5 text-black" />
          </React.Fragment>
        ))}
        {/* Set 6 */}
        {items.map((item, index) => (
          <React.Fragment key={`m2-sext-${index}`}>
            <span className="mx-6">{item}</span>
            <StarIcon className="w-5 h-5 text-black" />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};