
import SectionTitle from '../SectionTitle';
import CardGrid from '../containers/CardGrid';
import ResearchCard from '../cards/ResearchCard';
import CustomButton from '../ui/custom-button';

const ResearchSection = () => {
  const researches = [
    {
      id: 1,
      title: "Detecção Automática de Objetos Estranhos na Região das Pernas em Raio-X",
      image: "/lovable-uploads/76cd2964-2ba3-4615-80e8-09cb324d4619.png",
      year: "2022",
      delay: 1
    },
    {
      id: 2,
      title: "Quality inspection using active infrared thermography",
      image: "/lovable-uploads/9a52cafe-b18a-42b1-9b48-e3965c144493.png",
      year: "2021",
      delay: 3
    },
    {
      id: 3,
      title: "An automatic inspection system for dimensional and quality control",
      image: "/lovable-uploads/2451aba7-ddc5-46e5-923c-78f20ef7502b.png",
      year: "2020",
      delay: 5
    }
  ];

  return (
    <section className="section-padding bg-leiah-orange">
      <div className="container mx-auto px-4">
        <SectionTitle title="Pesquisas" color="light" />
        
        <CardGrid columns={3} gap={8}>
          {researches.map((research) => (
            <ResearchCard 
              key={research.id}
              title={research.title}
              image={research.image}
              year={research.year}
              animationDelay={research.delay}
            />
          ))}
        </CardGrid>
        
        <div className="mt-12 text-center">
          <CustomButton 
            variant="outlined" 
            color="primary"
            href="/pesquisas"
            className="border-white text-white hover:bg-white/10"
            animationDelay={6}
          >
            Ver todas as pesquisas
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
