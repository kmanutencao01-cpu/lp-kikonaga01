import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";

export const FinalCtaSection = () => {
  const scrollToForm = () => {
    document.getElementById('application-form')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="relative min-h-[80vh] sm:min-h-screen flex items-center py-8 sm:py-12">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 z-0"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
      
      <div className="container-narrow relative z-10">
        <div className="text-center space-y-8 sm:space-y-12">
          {/* Main Message */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold leading-tight max-w-4xl mx-auto">
              Enquanto você lê isso, seus concorrentes com{" "}
              <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">processos definidos</span> estão vendendo
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-destructive to-red-400 mx-auto rounded-full"></div>
            
            <div className="space-y-3 sm:space-y-4 text-white/90 max-w-4xl mx-auto">
              <p className="text-white font-semibold text-base sm:text-lg">
                A falta de um comercial estruturado não é um problema de amanhã.
              </p>
              <p className="text-base sm:text-lg">
                É uma <span className="text-destructive font-bold">perda de dinheiro</span> hoje.
              </p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-primary/15 to-[#1a1a1a] border-4 border-primary rounded-2xl p-6 shadow-[0_0_30px_rgba(59,130,246,0.5)] max-w-2xl mx-auto">
              <div className="space-y-3">
                <p className="text-base sm:text-lg text-accent font-semibold">
                  A agenda de diagnóstico é limitada e prioriza empresas com potencial de crescimento e prontas para a ação.
                </p>
                <p className="text-base sm:text-lg text-white font-bold">
                  Garanta a sua agora.
                </p>
              </div>
            </div>
            
            <Button 
              onClick={scrollToForm}
              className="btn-primary-neon text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-10 group shadow-2xl w-full max-w-md mx-auto"
            >
              <span className="text-center">Aplicar para Diagnóstico Estratégico</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2 flex-shrink-0" />
            </Button>
            
            <p className="text-sm sm:text-base text-white/75 max-w-lg mx-auto">
              Uma sessão de <strong className="text-white">clareza</strong> para empresas comprometidas com o próximo nível
            </p>

            {/* Trust Indicators */}
            <div className="flex justify-center items-center text-sm sm:text-base text-muted-foreground pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Apenas comprometidos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};