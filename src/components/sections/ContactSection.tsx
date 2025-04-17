
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import SectionTitle from '../SectionTitle';
import MaterialButton from '../MaterialButton';

const ContactSection = () => {
  return (
    <section id="contato" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle title="Entre em Contato" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-right">
            <h3 className="text-2xl font-semibold mb-6 text-leiah-blue">Estamos prontos para atender você</h3>
            <p className="text-lg mb-8">
              Entre em contato com nossa equipe para mais informações sobre nossos projetos, 
              parcerias ou para agendar uma visita ao nosso laboratório.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-leiah-red/10 flex items-center justify-center mr-4">
                  <Mail className="text-leiah-red" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Email</h4>
                  <p className="text-gray-600">contato@leiah.com.br</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-leiah-red/10 flex items-center justify-center mr-4">
                  <Phone className="text-leiah-red" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Telefone</h4>
                  <p className="text-gray-600">(11) 98765-4321</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-leiah-red/10 flex items-center justify-center mr-4">
                  <MapPin className="text-leiah-red" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Endereço</h4>
                  <p className="text-gray-600">Rua do Instituto Federal, 100 - São Paulo/SP</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 animate-slide-left">
            <h4 className="text-xl font-semibold mb-6 text-leiah-blue">Envie uma mensagem</h4>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-leiah-red"
                  placeholder="Seu nome"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-leiah-red"
                  placeholder="Seu email"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Assunto</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-leiah-red"
                  placeholder="Assunto da mensagem"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-leiah-red resize-none"
                  placeholder="Sua mensagem"
                ></textarea>
              </div>
              
              <div className="pt-2">
                <MaterialButton 
                  color="primary"
                  className="w-full flex items-center justify-center"
                >
                  <Send size={16} className="mr-2" />
                  Enviar mensagem
                </MaterialButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
