
import SectionContainer from '../containers/SectionContainer';
import CardGrid from '../containers/CardGrid';
import FeatureCard from '../cards/FeatureCard';
import SectionTitle from '../SectionTitle';
import { User, Users, UserRound } from 'lucide-react';

const AreasSection = () => {
  const integrantes = [
    { icon: <User size={40} className="animate-bounce-custom" />, title: "Pesquisador 1", delay: 1 },
    { icon: <Users size={40} className="animate-pulse-slow" />, title: "Pesquisador 2", delay: 2 },
    { icon: <UserRound size={40} className="animate-rotate" />, title: "Pesquisador 3", delay: 3 },
    { icon: <User size={40} className="animate-bounce-custom" />, title: "Pesquisador 4", delay: 4 },
    { icon: <Users size={40} className="animate-pulse-slow" />, title: "Pesquisador 5", delay: 5 }
  ];

  return (
    <section className="section-padding bg-leiah-blue text-white">
      <div className="container mx-auto px-4">
        <SectionTitle title="Conheça nossos integrantes" color="light" />
        
        <CardGrid columns={5} gap={8}>
          {integrantes.map((integrante) => (
            <FeatureCard 
              key={integrante.title}
              icon={integrante.icon}
              title={integrante.title}
              animationDelay={integrante.delay}
              className="bg-leiah-blue/20 backdrop-blur-md border border-white/10 text-white hover-rotate"
            />
          ))}
        </CardGrid>
      </div>
    </section>
  );
};

export default AreasSection;
