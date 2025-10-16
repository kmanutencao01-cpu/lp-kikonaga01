import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const TargetAudienceSection = () => {
  return (
    <section className="relative min-h-[80vh] sm:min-h-screen flex items-center py-8 sm:py-12">
      <div className="container-wide relative z-10">
        {/* Comparison Cards - Direct Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch relative">
          {/* Divider Line */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-border to-transparent transform -translate-x-1/2 animate-fade-in" style={{ animationDelay: '0.4s' }}></div>
          
          {/* Para quem É - LEFT SIDE */}
          <div className="border-4 border-primary bg-gradient-to-br from-primary/10 to-[#1a1a1a] h-full animate-fade-in-left rounded-2xl p-4 sm:p-6 shadow-[0_0_30px_rgba(59,130,246,0.5)]">
            <div className="text-center mb-3 sm:mb-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4 glow-primary animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <Check className="h-6 w-6 sm:h-8 sm:w-8 text-primary-foreground" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-primary mb-2 animate-fade-in-up px-2 leading-tight" style={{ animationDelay: '0.3s' }}>
                ESSE PROCESSO É PARA QUEM LEVA VENDAS A SÉRIO
              </h3>
              <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full animate-scale-in" style={{ animationDelay: '0.4s' }}></div>
            </div>
            
            <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
              {[
                "Já entendeu que o comercial é o coração da empresa",
                "Quer previsibilidade e ritmo de vendas",
                "Está pronto para ajustar cultura, processos e execução",
                "Valoriza clareza, método e resultado"
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start p-2 sm:p-3 rounded-xl bg-primary/10 border border-primary/30 hover:bg-primary/15 transition-all duration-300 hover:scale-[1.02] animate-fade-in-up"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <span className="text-sm sm:text-base text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-auto pt-4 border-t border-primary/20">
              <Button 
                onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary-neon text-sm sm:text-base animate-scale-in"
                style={{ animationDelay: '0.9s' }}
              >
                Quero aplicar agora
              </Button>
            </div>
          </div>

          {/* Para quem NÃO É - RIGHT SIDE */}
          <div className="border-4 border-destructive bg-gradient-to-br from-destructive/10 to-[#1a1a1a] h-full animate-fade-in-right rounded-2xl p-4 sm:p-6 shadow-[0_0_30px_rgba(239,68,68,0.5)]" style={{ animationDelay: '0.2s' }}>
            <div className="text-center mb-3 sm:mb-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-destructive rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4 animate-scale-in" style={{ animationDelay: '0.4s' }}>
                <X className="h-6 w-6 sm:h-8 sm:w-8 text-destructive-foreground" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-destructive mb-2 animate-fade-in-up px-2 leading-tight" style={{ animationDelay: '0.5s' }}>
                NÃO É PARA VOCÊ SE
              </h3>
              <div className="w-16 h-0.5 bg-destructive mx-auto rounded-full animate-scale-in" style={{ animationDelay: '0.6s' }}></div>
            </div>
            
            <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
              {[
                "Procura apenas preço baixo",
                "Não sabe se quer investir no crescimento",
                "Espera resultado sem esforço",
                "Não leva o próprio negócio a sério"
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start p-2 sm:p-3 rounded-xl bg-destructive/10 border border-destructive/30 hover:bg-destructive/15 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${0.7 + index * 0.1}s` }}
                >
                  <span className="text-sm sm:text-base text-foreground">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-auto pt-4 border-t border-destructive/20">
              <div className="inline-flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-destructive/80 to-destructive rounded-full shadow-lg animate-scale-in" style={{ animationDelay: '1.1s' }}>
                <X className="w-4 h-4 text-white" />
                <span className="text-white font-bold text-xs sm:text-sm">NÃO É IDEAL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};