import { useState } from 'react';
import { sarcasmLines } from '../content/sarcasmLines';

export function SarcasmOfTheMomentSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getNextLine = () => {
    setCurrentIndex((prev) => (prev + 1) % sarcasmLines.length);
  };

  return (
    <section id="sarcasm" className="py-24 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Sarcasm of the Moment
          </h2>
          
          <div className="bg-card border-2 border-border rounded-lg p-8 md:p-12 shadow-lg min-h-[200px] flex items-center justify-center">
            <p className="text-2xl md:text-3xl font-medium leading-relaxed text-card-foreground italic">
              "{sarcasmLines[currentIndex]}"
            </p>
          </div>
          
          <button
            onClick={getNextLine}
            className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
          >
            Show Me Another Gem
          </button>
          
          <p className="text-sm text-muted-foreground">
            Click as many times as you want. We're not judging. (We totally are.)
          </p>
        </div>
      </div>
    </section>
  );
}
