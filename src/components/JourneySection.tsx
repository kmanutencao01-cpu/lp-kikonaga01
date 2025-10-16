import { TrendingUp, Users, Target } from "lucide-react";
import journeyZeroAoTopo from "@/assets/journey-zero-ao-topo.jpg";
import journeyThiagoNigro from "@/assets/journey-thiago-nigro.jpg";
import journeyMetodoProprio from "@/assets/journey-metodo-proprio.jpg";

export const JourneySection = () => {
  const milestones = [
    {
      icon: TrendingUp,
      title: "Do Zero ao Topo",
      description: "De vender paçoca no semáforo, cheguei ao comercial de grandes operações do mercado digital.",
      image: journeyZeroAoTopo
    },
    {
      icon: Users,
      title: "Dentro das Operações",
      description: "Atuei como closer em projetos de Thiago Nigro e outros grandes nomes do mercado digital.",
      image: journeyThiagoNigro
    },
    {
      icon: Target,
      title: "Método Próprio",
      description: "Depois dessa experiência, passei a treinar pessoas, desenvolver vendedores e criar o meu próprio método.",
      image: journeyMetodoProprio
    }
  ];

  return (
    <section id="journey-section" className="relative min-h-[80vh] sm:min-h-screen flex items-center py-8 sm:py-12">
      <div className="container-medium relative z-10">
        <div className="text-center space-y-8 sm:space-y-12 mb-16 sm:mb-20">
          <div className="space-y-6">
            <h2 className="text-section-title text-white font-bold">
              Minha <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">Trajetória</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            <p className="text-body-large text-muted-foreground max-w-4xl mx-auto">
              Uma jornada de transformação que me levou do zero ao centro das maiores operações comerciais do país.
            </p>
          </div>
        </div>

        <div className="grid-responsive-3 mb-16 sm:mb-20">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Photo above the card */}
              <div className="w-full max-w-[280px] sm:max-w-[320px] mb-6 rounded-2xl overflow-hidden border-4 border-primary shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                <img 
                  src={milestone.image} 
                  alt={milestone.title}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Card content */}
              <div className="w-full bg-gradient-to-br from-[#1a1a1a] to-[#151515] border-4 border-primary rounded-2xl shadow-[0_0_20px_rgba(59,130,246,0.3)] text-center group hover:border-primary hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300">
                <div className="px-6 py-8 sm:px-8 sm:py-10">
                  <div className="mb-4 mx-auto w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-br from-primary/90 to-accent/90 rounded-full flex items-center justify-center shadow-lg">
                    <milestone.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-primary px-2">
                    {milestone.title}
                  </h3>
                  <div className="w-10 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto mb-3 rounded-full"></div>
                  <p className="text-sm sm:text-base text-foreground leading-relaxed px-2">
                    {milestone.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-primary/10 to-[#1a1a1a] border-4 border-primary rounded-2xl p-8 shadow-[0_0_30px_rgba(59,130,246,0.5)] space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full translate-x-20 -translate-y-20"></div>
            
            <div className="relative z-10">
              <div className="text-center space-y-6">
                <h3 className="text-card-title text-primary font-bold">
                  Hoje, Ajudo Empresas a Crescer com Método
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
              </div>
              
              <div className="space-y-4 sm:space-y-6 text-body text-foreground">
                <p>
                  <strong className="text-accent">Apliquei, vivi e aprendi</strong> no dia a dia como funcionam times de alta performance.
                </p>
                <p>
                  Tive acesso aos bastidores das operações que mais vendem no Brasil.
                </p>
                <p>
                  Depois dessa experiência, passei a treinar pessoas, desenvolver vendedores e estruturar operações comerciais.
                </p>
                <p>
                  Criar o meu próprio método foi o resultado natural dessa jornada.
                </p>
                <p>
                  <strong className="text-primary">Hoje, ajudo empresas a alinhar cultura, processos e ritmo</strong> porque já vi na prática o que funciona e o que derruba um comercial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};