
import { useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Linkedin, Mail, GraduationCap } from 'lucide-react';

const Integrantes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const equipe = [
    {
      id: 1,
      nome: "Dra. Ana Silva",
      cargo: "Coordenadora",
      area: "Eletrônica Biomédica",
      descricao: "Pesquisadora com 15 anos de experiência em interfaces cérebro-computador e sistemas embarcados para monitoramento de saúde.",
      foto: "/lovable-uploads/6c320fdb-d69a-4a8d-9b91-a0d1b604ea09.png",
      linkedin: "https://linkedin.com",
      email: "ana.silva@leiah.edu.br"
    },
    {
      id: 2,
      nome: "Prof. Carlos Mendes",
      cargo: "Pesquisador Sênior",
      area: "Inteligência Artificial",
      descricao: "Especialista em algoritmos de aprendizado profundo e processamento de sinais biomédicos, com ênfase em aplicações médicas.",
      foto: "/lovable-uploads/309f4163-b60f-49d5-b27c-9da0fb0da7d3.png",
      linkedin: "https://linkedin.com",
      email: "carlos.mendes@leiah.edu.br"
    },
    {
      id: 3,
      nome: "Dra. Luciana Costa",
      cargo: "Pesquisadora",
      area: "Humanidades Digitais",
      descricao: "Antropóloga e cientista de dados, estudando os impactos sociais da adoção de tecnologias assistivas em comunidades vulneráveis.",
      foto: "/lovable-uploads/97efc92e-c66d-44f9-937f-d947f2a892b6.png",
      linkedin: "https://linkedin.com",
      email: "luciana.costa@leiah.edu.br"
    },
    {
      id: 4,
      nome: "João Oliveira",
      cargo: "Doutorando",
      area: "Sistemas Embarcados",
      descricao: "Desenvolvendo novas arquiteturas de hardware para processamento eficiente de dados em dispositivos médicos vestíveis.",
      foto: "/lovable-uploads/9a52cafe-b18a-42b1-9b48-e3965c144493.png",
      linkedin: "https://linkedin.com",
      email: "joao.oliveira@leiah.edu.br"
    },
    {
      id: 5,
      nome: "Maria Ferreira",
      cargo: "Mestranda",
      area: "IoT e Redes de Sensores",
      descricao: "Pesquisa focada no desenvolvimento de redes de sensores wirelessly para monitoramento ambiental em áreas remotas.",
      foto: "/lovable-uploads/2451aba7-ddc5-46e5-923c-78f20ef7502b.png",
      linkedin: "https://linkedin.com",
      email: "maria.ferreira@leiah.edu.br"
    },
    {
      id: 6,
      nome: "Prof. Ricardo Almeida",
      cargo: "Pesquisador Associado",
      area: "Computação Humanizada",
      descricao: "Trabalha na interseção entre design de experiência do usuário e acessibilidade digital para populações idosas.",
      foto: "/lovable-uploads/ab237fc0-e28b-4d7e-a25b-fca2e6cb227f.png",
      linkedin: "https://linkedin.com",
      email: "ricardo.almeida@leiah.edu.br"
    }
  ];

  return (
    <div className="min-h-screen">
      <NavBar />
      
      <div className="container mx-auto px-4 py-24">
        <SectionTitle 
          title="Nossa Equipe" 
          className="text-center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {equipe.map((membro) => (
            <Card key={membro.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-leiah-blue to-leiah-blue-dark p-6 flex justify-center">
                  <Avatar className="h-32 w-32 border-4 border-white">
                    <AvatarImage src={membro.foto} alt={membro.nome} />
                    <AvatarFallback className="text-3xl">{membro.nome.charAt(0)}</AvatarFallback>
                  </Avatar>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-leiah-blue mb-1">{membro.nome}</h3>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-leiah-red font-medium">{membro.cargo}</span>
                    <Separator orientation="vertical" className="h-4" />
                    <span className="text-gray-600 text-sm">{membro.area}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm">{membro.descricao}</p>
                  
                  <div className="flex space-x-3">
                    <a href={membro.linkedin} className="text-leiah-blue hover:text-leiah-red transition-colors">
                      <Linkedin size={20} />
                    </a>
                    <a href={`mailto:${membro.email}`} className="text-leiah-blue hover:text-leiah-red transition-colors">
                      <Mail size={20} />
                    </a>
                    <a href="#" className="text-leiah-blue hover:text-leiah-red transition-colors">
                      <GraduationCap size={20} />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Integrantes;
