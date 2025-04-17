
import React from 'react';
import MainLayout from '../components/layouts/MainLayout';
import SectionContainer from '../components/containers/SectionContainer';
import CardGrid from '../components/containers/CardGrid';
import ProjectCard from '../components/cards/ProjectCard';

const Projetos = () => {
  const projects = [
    {
      id: 1,
      title: "Sistema de Monitoramento IoT",
      description: "Desenvolvimento de uma plataforma IoT para monitoramento de ambientes hospitalares, com foco em eficiência energética e segurança de pacientes.",
      image: "/lovable-uploads/76cd2964-2ba3-4615-80e8-09cb324d4619.png",
      category: "IoT & Saúde",
      status: "Em andamento"
    },
    {
      id: 2,
      title: "Assistente Virtual para Idosos",
      description: "Interface de voz inteligente focada nas necessidades da população idosa, com comandos simplificados e suporte a emergências.",
      image: "/lovable-uploads/0216cb00-7ae5-450b-9e1d-1f1d82d3a4f0.png",
      category: "Acessibilidade Digital",
      status: "Concluído"
    },
    {
      id: 3,
      title: "Rede Neural para Diagnóstico",
      description: "Algoritmo de aprendizado profundo para auxílio no diagnóstico precoce de condições neurológicas a partir de imagens médicas.",
      image: "/lovable-uploads/8bebbdff-a81f-4777-b113-10c72319bced.png",
      category: "IA & Medicina",
      status: "Em andamento"
    }
  ];

  return (
    <MainLayout>
      <div className="py-24">
        <SectionContainer 
          title="Nossos Projetos" 
          subtitle="Conheça as iniciativas desenvolvidas pelo LEIAH"
        >
          <CardGrid columns={3} gap={6} className="mt-12">
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                category={project.category}
                status={project.status}
                link={`/projeto/${project.id}`}
                animationDelay={index + 1}
              />
            ))}
          </CardGrid>
        </SectionContainer>
      </div>
    </MainLayout>
  );
};

export default Projetos;
