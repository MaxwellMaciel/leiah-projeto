
import React from 'react';
import MainLayout from '../components/layouts/MainLayout';
import SectionContainer from '../components/containers/SectionContainer';
import CardGrid from '../components/containers/CardGrid';
import ResearchCard from '../components/cards/ResearchCard';

const Pesquisas = () => {
  const researches = [
    {
      id: 1,
      title: "Interfaces Cérebro-Computador de Baixo Custo",
      description: "Investigação sobre novos métodos para captura e interpretação de sinais cerebrais utilizando hardware acessível, democratizando a tecnologia BCI.",
      image: "/lovable-uploads/46e4c554-1cb2-41a7-b44f-f0b4c93fcbf1.png",
      authors: ["Dr. Ana Silva", "Prof. Carlos Mendes", "João Oliveira"],
      year: "2024"
    },
    {
      id: 2,
      title: "Sistemas Embarcados para Monitoramento Ambiental",
      description: "Desenvolvimento de sensores de baixo consumo energético para coleta de dados ambientais em áreas remotas, com transmissão via rede mesh.",
      image: "/lovable-uploads/76a19141-aa6a-45c4-8e46-a7e7f622237f.png",
      authors: ["Dr. Paulo Santos", "Maria Ferreira"],
      year: "2023"
    },
    {
      id: 3,
      title: "Impacto das Tecnologias Assistivas",
      description: "Estudo qualitativo sobre os efeitos da introdução de tecnologias assistivas no bem-estar e autonomia de pessoas com deficiência.",
      image: "/lovable-uploads/ec9c3944-82f1-46d8-a21e-2c4f51ea1b51.png",
      authors: ["Dra. Luciana Costa", "Prof. Ricardo Almeida"],
      year: "2023"
    }
  ];

  return (
    <MainLayout>
      <div className="py-24">
        <SectionContainer 
          title="Nossas Pesquisas" 
          subtitle="Conheça as linhas de pesquisa e publicações do nosso laboratório"
        >
          <CardGrid columns={3} gap={6} className="mt-12">
            {researches.map((research, index) => (
              <ResearchCard 
                key={research.id}
                title={research.title}
                description={research.description}
                image={research.image}
                authors={research.authors}
                year={research.year}
                animationDelay={index + 1}
              />
            ))}
          </CardGrid>
        </SectionContainer>
      </div>
    </MainLayout>
  );
};

export default Pesquisas;
