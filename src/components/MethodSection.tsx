import { useState } from "react";
import { Compass, Route, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const MethodSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const methodSteps = [
    {
      icon: Compass,
      title: "1. Alinhamento",
      description: "Clareza de metas, cultura e expectativas do time."
    },
    {
      icon: Route,
      title: "2. Direção", 
      description: "Processos comerciais que criam previsibilidade."
    },
    {
      icon: Zap,
      title: "3. Ação",
      description: "Execução prática que gera resultado no campo de batalha."
    }
  ];

  return (
    <section className="relative min-h-[80vh] sm:min-h-screen flex items-center py-8 sm:py-12">
      <div className="container-medium relative z-10">
        <div className="text-center space-y-4 sm:space-y-8 mb-8 sm:mb-16">
          <div className="space-y-3 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary font-bold animate-fade-in-up px-4">
              O Método <span className="text-transparent bg-gradient-to-r from-accent to-primary bg-clip-text">ADa</span>: simples, direto e imbatível.
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full animate-scale-in"></div>
          </div>
        </div>

        {/* Mobile: Icon Tabs + Content Below */}
        <div className="md:hidden space-y-6">
          {/* Icon Tabs */}
          <div className="flex justify-center gap-4">
            {methodSteps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
                  activeStep === index
                    ? 'bg-gradient-to-br from-primary/40 to-accent/40 shadow-[0_0_30px_rgba(59,130,246,0.5)] scale-110'
                    : 'bg-gradient-to-br from-primary/10 to-accent/10 opacity-50'
                }`}
              >
                <step.icon className={`h-10 w-10 transition-colors duration-300 ${
                  activeStep === index ? 'text-primary' : 'text-primary/50'
                }`} />
              </button>
            ))}
          </div>

          {/* Active Step Content */}
          <div className="bg-gradient-to-br from-primary/10 to-[#1a1a1a] border-4 border-primary rounded-2xl p-6 shadow-[0_0_20px_rgba(59,130,246,0.3)] text-center min-h-[200px] flex flex-col justify-center">
            <h3 className="text-xl font-bold text-primary mb-4">
              {methodSteps[activeStep].title}
            </h3>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4"></div>
            <p className="text-base text-foreground/90">
              {methodSteps[activeStep].description}
            </p>
          </div>
        </div>

        {/* Desktop: Original 3 Cards Side by Side */}
        <div className="hidden md:flex flex-wrap justify-center gap-6">
          {methodSteps.map((step, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-primary/10 to-[#1a1a1a] border-4 border-primary rounded-2xl p-8 shadow-[0_0_20px_rgba(59,130,246,0.3)] group relative text-center animate-fade-in-up flex-1 min-w-[280px] max-w-[320px] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:from-primary/40 group-hover:to-accent/40 transition-all duration-500 shadow-lg hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)]">
                <step.icon className="h-12 w-12 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              <div className="space-y-4 relative z-10">
                <h3 className="text-card-title font-bold text-primary">
                  {step.title}
                </h3>
                <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
                <p className="text-body text-foreground/90">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};