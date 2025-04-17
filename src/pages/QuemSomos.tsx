
import { useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';

const QuemSomos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <NavBar />
      
      <section className="pt-32 pb-16 bg-leiah-blue text-white">
        <div className="container mx-auto px-4">
          <SectionTitle title="Quem Somos" color="light" />
        </div>
      </section>
      
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-8">
              O Laboratório de Engenharia e Inovação Aplicada Humanizada (LEIAH) é um grupo de pesquisa vinculado ao Instituto Federal de São Paulo (IFSP), dedicado à promoção da inovação por meio de projetos de Pesquisa, Desenvolvimento e Inovação (PD&I). Desde o ano de 2020, temos atuado na vanguarda da tecnologia, desenvolvendo soluções em parcerias estratégicas nas áreas de tecnologia da informação e comunicação, visão computacional, inteligência artificial, aprendizado de máquina, processamento de linguagem natural e áreas correlatas.
            </p>
            
            <p className="text-lg mb-8">
              Com um portfólio diversificado, já conquistamos resultados significativos em diversos projetos. Nossa equipe multidisciplinar é composta por pesquisadores mestres e doutores altamente qualificados, além de alunos entusiasmados dos mais diversos níveis de ensino. Possuímos competências complementares e vasta experiência em suas respectivas áreas de atuação, permitindo-nos abordar desafios complexos e entregar soluções inovadoras. Valorizamos a melhoria contínua, a atualização constante e a disseminação do conhecimento, buscando sempre estar na vanguarda das últimas tendências e descobertas.
            </p>
            
            <p className="text-lg mb-8">
              Além disso, priorizamos parcerias estratégicas com outras instituições de pesquisa, empresas e organizações governamentais. Essas colaborações fortalecem nossos projetos, permitindo-nos aproveitar conhecimentos complementares e recursos adicionais. Através dessas parcerias, buscamos impulsionar a inovação, compartilhar conhecimentos e contribuir para o desenvolvimento tecnológico em nossa região e além. Atuamos em projetos de inovação tecnológica, projetos EMBRAPII, projetos de Lei de Informática, Lei do Bem, Rota 2030 e outros incentivos.
            </p>
            
            <p className="text-lg mb-12">
              Valorizamos a colaboração, a ética e a dedicação em nossas atividades de pesquisa, buscando contribuir para o progresso científico, tecnológico e social. Continuamos a expandir nosso portfólio de projetos, desenvolvendo soluções disruptivas que impactam positivamente diversos setores, desde a área médica até a segurança pública, passando pela indústria e outras esferas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-leiah-orange">
                <img src="public/lovable-uploads/46e4c554-1cb2-41a7-b44f-f0b4c93fcbf1.png" alt="Excelência e competência" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-leiah-blue mb-4">Excelência e competência</h3>
              <p className="text-leiah-gray">
                Nossa equipe é formada por profissionais altamente qualificados com vasta experiência em suas áreas de especialização.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-leiah-orange">
                <img src="public/lovable-uploads/6c320fdb-d69a-4a8d-9b91-a0d1b604ea09.png" alt="Compromisso, ética e produtividade" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-leiah-blue mb-4">Compromisso, ética e produtividade</h3>
              <p className="text-leiah-gray">
                Trabalhamos com integridade, responsabilidade e dedicação em todos os projetos que desenvolvemos.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-leiah-orange">
                <img src="public/lovable-uploads/97efc92e-c66d-44f9-937f-d947f2a892b6.png" alt="Apoiando a transformação do mercado e da sociedade" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-leiah-blue mb-4">Apoiando a transformação do mercado e da sociedade</h3>
              <p className="text-leiah-gray">
                Desenvolvemos soluções que impactam positivamente diversos setores, contribuindo para o progresso científico, tecnológico e social.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default QuemSomos;
