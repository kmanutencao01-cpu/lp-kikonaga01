import finclassLogo from "@/assets/finclass-logo-updated.png";
import thiagoNigro from "@/assets/thiago-nigro.jpg";
import flavioAugusto from "@/assets/flavio-augusto.jpg";
import brunoPerini from "@/assets/bruno-perini.jpg";
import luizBarsi from "@/assets/luiz-barsi.jpg";
import pauloGuedes from "@/assets/paulo-guedes.jpg";

export const AuthoritySection = () => {
  const authorities = [
    {
      name: "Finclass",
      image: finclassLogo,
      type: "logo"
    },
    {
      name: "Thiago Nigro",
      image: thiagoNigro,
      type: "person"
    },
    {
      name: "Flávio Augusto",
      image: flavioAugusto,
      type: "person"
    },
    {
      name: "Bruno Perini",
      image: brunoPerini,
      type: "person"
    },
    {
      name: "Luiz Barsi",
      image: luizBarsi,
      type: "person"
    },
    {
      name: "Paulo Guedes",
      image: pauloGuedes,
      type: "person"
    }
  ];

  return (
    <section id="authority-section" className="relative min-h-[80vh] sm:min-h-screen flex items-center py-8 sm:py-12">
      <div className="container-medium text-center relative z-10">
        <div className="space-y-8 sm:space-y-12">
          <div className="space-y-6">
            <h2 className="text-section-title text-primary font-bold max-w-5xl mx-auto">
              Já estive no campo de batalha das{" "}
              <span className="text-transparent bg-gradient-to-r from-accent to-primary bg-clip-text">maiores operações do Brasil</span>.
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-6 sm:space-y-8 text-body-large text-muted-foreground max-w-5xl mx-auto text-left px-4 sm:px-0">
            <p>
              De vendedor de paçoca no semáforo, cheguei ao comercial de grandes operações do mercado digital.
            </p>
            <p>
              Atuei como closer em projetos de nomes como <strong className="text-primary">Thiago Nigro</strong>, <strong className="text-primary">Flávio Augusto</strong>, <strong className="text-primary">Bruno Perini</strong>, <strong className="text-primary">Luis Barsi</strong> entre outras referências.
              Aprendendo por dentro o que realmente faz um time performar.
            </p>
            <p>
              Depois de viver na prática e dominar os processos que realmente funcionam, passei a treinar vendedores, estruturar operações comerciais e desenvolvi meu próprio método.
            </p>
            <p>
              Hoje, ajudo empresas a alinhar cultura, processos e execução, porque <strong className="text-accent">já vi na prática o que funciona e o que derruba um comercial</strong>.
            </p>
          </div>
        </div>

        {/* Company Logos Wall */}
        <div className="mt-16 sm:mt-20">
          <div className="space-y-6 mb-12">
            <h3 className="text-card-title font-semibold text-white">
              Presente nos bastidores de gigantes do mercado:
            </h3>
            <p className="text-sm text-muted-foreground uppercase tracking-wider">
              Projetos e operações onde atuei diretamente
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {authorities.map((authority, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1a1a1a] to-[#151515] border-4 border-primary rounded-2xl p-6 shadow-[0_0_20px_rgba(59,130,246,0.3)] group cursor-pointer hover:border-primary hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300 text-center overflow-hidden"
              >
                <div className="aspect-square mb-4 relative overflow-hidden rounded-lg">
                  <img 
                    src={authority.image} 
                    alt={authority.name}
                    className={`w-full h-full ${authority.type === 'person' ? 'object-cover object-top' : 'object-contain p-4'} group-hover:scale-105 transition-transform duration-300`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="pb-4">
                  <h4 className="text-sm font-bold text-muted-foreground group-hover:text-primary transition-colors duration-300">
                    {authority.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 sm:mt-20 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-primary/10 to-[#1a1a1a] border-4 border-primary rounded-2xl p-8 shadow-[0_0_30px_rgba(59,130,246,0.5)] space-y-6 text-left">
            <div className="text-center space-y-4">
              <h3 className="text-card-title text-primary font-bold">
                Acesso Direto às Operações de Elite
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-4 sm:space-y-6 text-body text-foreground">
              <p>
                <strong className="text-primary">Não é teoria</strong>. É experiência real adquirida dentro das operações 
                comerciais de alguns dos maiores nomes do mercado digital brasileiro.
              </p>
              <p>
                Tive acesso direto às metodologias, processos e estratégias que fazem esses negócios 
                <strong className="text-accent"> movimentarem milhões</strong> todos os meses.
              </p>
              <p>
                Agora trago essa bagagem para estruturar e acelerar o comercial da sua empresa com método 
                <strong className="text-primary"> testado e aprovado no campo de batalha</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};