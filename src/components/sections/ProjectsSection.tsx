
import SectionTitle from '../SectionTitle';
import CardGrid from '../containers/CardGrid';
import ProjectCard from '../cards/ProjectCard';
import CustomButton from '../ui/custom-button';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "SALE - Sistema Automático para Leitura de Encartes",
      image: "/lovable-uploads/8bebbdff-a81f-4777-b113-10c72319bced.png",
      category: "VAREJO",
      delay: 1
    },
    {
      id: 2,
      title: "ANGIOTC - Reconstrução 3D em tempo real",
      image: "/lovable-uploads/0216cb00-7ae5-450b-9e1d-1f1d82d3a4f0.png",
      category: "SAÚDE",
      categoryColor: "bg-green-600",
      delay: 3
    },
    {
      id: 3,
      title: "Sistema para perícia forense de imagens",
      image: "/lovable-uploads/309f4163-b60f-49d5-b27c-9da0fb0da7d3.png",
      category: "SEGURANÇA",
      categoryColor: "bg-gray-700",
      delay: 5
    }
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <SectionTitle title="Projetos" />
        
        <CardGrid columns={3} gap={8}>
          {projects.map((project) => (
            <ProjectCard 
              key={project.id}
              title={project.title}
              image={project.image}
              category={project.category}
              categoryColor={project.categoryColor || "bg-green-500"}
              animationDelay={project.delay}
            />
          ))}
        </CardGrid>
        
        <div className="mt-12 text-center">
          <CustomButton 
            color="primary"
            href="/projetos"
            animationDelay={6}
          >
            Ver todos os projetos
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
