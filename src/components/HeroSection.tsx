import { Button } from "@/components/ui/button";
import fotoSite from "@/assets/foto_site.jpg";

export const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById('application-form')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section 
      id="hero-section"
      className="min-h-[85vh] sm:min-h-screen flex flex-col justify-center sm:justify-end pb-4 sm:pb-20 relative"
    >
      {/* Photo Frame with Blue Border - Desktop */}
      <div className="hidden sm:block absolute top-6 sm:top-8 left-1/2 -translate-x-1/2 pointer-events-none z-10 px-4">
        <div className="relative">
          {/* Blue Frame Border */}
          <div className="absolute inset-0 rounded-lg border-2 sm:border-4 border-primary shadow-[0_0_20px_rgba(59,130,246,0.4)] sm:shadow-[0_0_30px_rgba(59,130,246,0.5)]"></div>
          
          {/* Photo Container */}
          <div className="relative overflow-hidden rounded-lg p-0.5 sm:p-1 bg-gradient-to-br from-primary/20 to-transparent">
            <img 
              src={fotoSite} 
              alt="Especialista em estruturação comercial" 
              className="w-auto h-[35vh] md:h-[42vh] object-cover rounded-md"
            />
          </div>
        </div>
      </div>
      
      {/* Content Container - Positioned Below Image */}
      <div className="container mx-auto px-5 sm:px-6 lg:px-8 text-center relative z-10 max-w-6xl pointer-events-none">
        {/* Photo Frame - Mobile Only */}
        <div className="sm:hidden flex justify-center mb-8 pointer-events-none">
          <div className="relative">
            {/* Blue Frame Border */}
            <div className="absolute inset-0 rounded-lg border-2 border-primary shadow-[0_0_20px_rgba(59,130,246,0.4)]"></div>
            
            {/* Photo Container */}
            <div className="relative overflow-hidden rounded-lg p-0.5 bg-gradient-to-br from-primary/20 to-transparent">
              <img 
                src={fotoSite} 
                alt="Especialista em estruturação comercial" 
                className="w-auto h-[28vh] object-cover rounded-md"
              />
            </div>
          </div>
        </div>

        <div className="space-y-3 sm:space-y-4 md:space-y-6">
          {/* Decorative Element */}
          <div className="w-10 sm:w-12 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full animate-pulse-slow pointer-events-none"></div>
          
          {/* Hero Content */}
          <div className="space-y-2 sm:space-y-3 md:space-y-4 pointer-events-none">
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white animate-fade-in-up in-view max-w-4xl mx-auto px-2 sm:px-4">
              Estruturo seu{" "}
              <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text font-extrabold">
                setor comercial
              </span>{" "}
              para alavancar suas vendas e crescer sua empresa
            </h1>
              
            <div className="text-xs sm:text-sm md:text-lg leading-relaxed text-white/90 animate-fade-in-up in-view max-w-2xl mx-auto px-5 sm:px-4" style={{ animationDelay: '0.2s' }}>
              <p>
                Transforme seu comercial de improviso em <strong className="text-primary">previsibilidade real de vendas</strong>.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-2 sm:space-y-3 animate-scale-in in-view" style={{ animationDelay: '0.4s' }}>
            <div className="inline-block mx-auto pointer-events-auto px-3">
              <Button 
                onClick={scrollToForm}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl font-semibold text-xs sm:text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 w-full sm:w-auto"
              >
                Aplicar para Reunião de Diagnóstico Gratuita
              </Button>
            </div>
            
            <p className="text-xs sm:text-sm md:text-base text-white/75 max-w-xl mx-auto animate-fade-in px-3 sm:px-4 pointer-events-none" style={{ animationDelay: '0.6s' }}>
              Sessão de clareza para empresas comprometidas
            </p>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/30 pointer-events-none"></div>
    </section>
  );
};