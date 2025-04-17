
import SectionTitle from '../SectionTitle';

const AboutSection = () => {
  return (
    <section id="quem-somos" className="section-padding">
      <div className="container mx-auto px-4">
        <SectionTitle title="Quem Somos" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-right">
            <p className="text-lg mb-6">
              O Laboratório de Eletrônica, Informática Aplicada e Humanidades (LEIAH) é um grupo de pesquisa vinculado ao Instituto Federal de São Paulo (IFSP), dedicado à promoção da inovação por meio de projetos de Pesquisa, Desenvolvimento e Inovação (PD&I).
            </p>
            <p className="text-lg mb-6">
              Desde o ano de 2020, temos atuado na vanguarda da tecnologia, desenvolvendo soluções em parcerias estratégicas nas áreas de tecnologia da informação e comunicação, visão computacional, inteligência artificial, aprendizado de máquina, processamento de linguagem natural e áreas correlatas.
            </p>
            <p className="text-lg">
              Com um portfólio diversificado, já conquistamos resultados significativos em diversos projetos. Nossa equipe multidisciplinar é composta por pesquisadores mestres e doutores altamente qualificados, além de alunos entusiasmados dos mais diversos níveis de ensino.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center animate-slide-up delay-100 hover-lift">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-leiah-orange">
                <img src="/lovable-uploads/46e4c554-1cb2-41a7-b44f-f0b4c93fcbf1.png" alt="Excelência e competência" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-leiah-orange font-semibold mb-2">Excelência e competência</h3>
            </div>
            
            <div className="flex flex-col items-center text-center animate-slide-up delay-300 hover-lift">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-leiah-orange">
                <img src="/lovable-uploads/6c320fdb-d69a-4a8d-9b91-a0d1b604ea09.png" alt="Compromisso, ética e produtividade" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-leiah-orange font-semibold mb-2">Compromisso, ética e produtividade</h3>
            </div>
            
            <div className="flex flex-col items-center text-center animate-slide-up delay-500 hover-lift">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-leiah-orange">
                <img src="/lovable-uploads/97efc92e-c66d-44f9-937f-d947f2a892b6.png" alt="Apoiando a transformação do mercado" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-leiah-orange font-semibold mb-2">Apoiando a transformação</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
