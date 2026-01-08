
import React, { useState, useEffect } from 'react';
import { 
  AlertTriangle, 
  XCircle, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  Package, 
  TrendingDown, 
  DollarSign,
  Calculator,
  FileText,
  Lock,
  UserCheck,
  Zap
} from 'lucide-react';

// --- Types ---
interface FAQItem {
  question: string;
  answer: string;
}

// --- Components ---

const SectionTitle: React.FC<{ children: React.ReactNode; dark?: boolean; centered?: boolean }> = ({ children, dark, centered }) => (
  <h2 className={`text-3xl md:text-4xl font-extrabold mb-8 ${centered ? 'text-center' : ''} ${dark ? 'text-white' : 'text-slate-900'}`}>
    {children}
  </h2>
);

const Button: React.FC<{ children: React.ReactNode; onClick?: () => void; className?: string }> = ({ children, onClick, className }) => (
  <button
    onClick={onClick}
    className={`bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 active:scale-95 text-xl cta-glow ${className}`}
  >
    {children}
  </button>
);

const FAQ: React.FC = () => {
  const faqs: FAQItem[] = [
    { question: "Funciona para qualquer área?", answer: "Sim! O guia traz tabelas específicas para Design, Dev, Redação, Marketing, VA, Consultoria e muito mais." },
    { question: "Sou iniciante, funciona pra mim?", answer: "COM CERTEZA! Tem um módulo inteiro dedicado a precificação para iniciantes." },
    { question: "E se eu não gostar?", answer: "Devolvo 100% em até 7 dias. Sem perguntas." },
    { question: "Quando vou receber?", answer: "Assim que o pagamento for aprovado, você recebe IMEDIATAMENTE no seu email." },
    { question: "As planilhas funcionam no celular?", answer: "Sim! São compatíveis com Excel, Google Sheets e funcionam no celular." },
    { question: "Tem suporte?", answer: "Sim, via email com resposta em até 24h." },
    { question: "Preciso pagar mensalidade?", answer: "NÃO! Você paga UMA VEZ e tem acesso VITALÍCIO + atualizações gratuitas." },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex justify-between items-center p-5 text-left font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
          >
            {faq.question}
            {openIndex === index ? <ChevronUp className="text-orange-500" /> : <ChevronDown className="text-slate-400" />}
          </button>
          {openIndex === index && (
            <div className="p-5 pt-0 text-slate-600 animate-fadeIn">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const App: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(2723); // 45:23 in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Sticky Header with Timer Only (Price removed) */}
      <div className="fixed top-0 left-0 w-full z-50 bg-red-600 text-white py-2 text-center text-sm font-bold animate-pulse shadow-lg">
        🚨 ATENÇÃO: Esta oferta especial expira em {formatTime(timeLeft)}
      </div>

      {/* Hero Section */}
      <header className="gradient-bg text-white pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-7xl font-black mb-10 leading-tight tracking-tight max-w-5xl">
            VOCÊ ESTÁ COBRANDO <span className="text-orange-500">BARATO DEMAIS</span> E NEM PERCEBE
          </h1>

          {/* New Image below H1 */}
          <div className="w-full max-w-4xl mx-auto mb-12 rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-800/50">
            <img 
              src="https://images.unsplash.com/photo-1553484771-047a44eee27b?auto=format&fit=crop&q=80&w=1600" 
              alt="Freelancer Profissional" 
              className="w-full h-auto object-cover"
            />
          </div>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl font-medium">
            Descubra em 5 minutos quanto você <span className="text-white font-bold underline">REALMENTE</span> deveria estar cobrando.
          </p>

          <Button onClick={scrollToOffer} className="mb-8">
            REVELAR MEU PREÇO REAL AGORA
          </Button>

          <div className="flex items-center space-x-4 text-slate-400 text-sm">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map(i => (
                <img key={i} src={`https://picsum.photos/seed/${i + 20}/40/40`} className="w-8 h-8 rounded-full border-2 border-slate-900" alt="Avatar" />
              ))}
            </div>
            <span>+3.427 Freelancers precificando com segurança</span>
          </div>
        </div>
      </header>

      {/* Quick Questions Section */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200 p-8 md:p-12 rounded-3xl shadow-xl -mt-20">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <ArrowRight className="text-orange-500" />
            Responda rápido:
          </h3>
          <div className="space-y-4 mb-10">
            {[
              "Você já aceitou um projeto por um valor ridículo só pra 'não perder o cliente'?",
              "Fica com aquele frio na barriga na hora de passar o orçamento, com medo de perder o job?",
              "Vê colegas cobrando 2x, 3x mais que você... mas não sabe COMO eles chegaram naquele valor?",
              "Trabalha MUITO, mas no final do mês a conta não fecha?",
              "Tem vergonha de cobrar o que realmente vale o seu trabalho?"
            ].map((q, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
                <XCircle className="text-red-500 shrink-0 mt-1" />
                <p className="text-slate-700 font-medium leading-relaxed">{q}</p>
              </div>
            ))}
          </div>
          <div className="text-center p-6 bg-orange-50 border border-orange-200 rounded-2xl">
            <p className="text-lg font-semibold text-orange-900">
              Se você respondeu <span className="font-black">SIM</span> para pelo menos uma dessas perguntas... essa página foi feita especialmente para você.
            </p>
          </div>
        </div>
      </section>

      {/* Invisible Pain Section */}
      <section className="py-20 px-6 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                A DOR INVISÍVEL QUE ESTÁ <span className="text-red-500">MATANDO</span> O SEU NEGÓCIO
              </h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Sabe qual é o maior erro dos freelancers brasileiros? Não é falta de talento. Não é falta de cliente. É cobrar <span className="text-white font-bold">MENOS DO QUE DEVERIA</span>.
              </p>
              <div className="space-y-3">
                {[
                  "Trabalha mais horas do que deveria",
                  "Aceita alterações infinitas sem cobrar mais",
                  "Fica refém de clientes que pagam migalhas",
                  "Nunca consegue sair do 'aperto' financeiro",
                  "Sente que trabalha MUITO mas ganha POUCO"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 shrink-0" size={20} />
                    <span className="text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-2xl relative">
              <div className="absolute -top-4 -right-4 bg-orange-600 px-4 py-2 rounded-lg font-bold text-sm">O RESULTADO?</div>
              <h4 className="text-2xl font-bold mb-4 text-white">Você virou escravo do próprio negócio.</h4>
              <p className="text-slate-400 mb-6 italic">
                "Enquanto isso, outros freelancers com O MESMO nível de habilidade que você estão faturando 3x, 5x, até 10x mais... fazendo exatamente o mesmo trabalho."
              </p>
              <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-700">
                <p className="font-bold text-orange-500">A diferença? Eles sabem EXATAMENTE quanto cobrar. E você... ainda está chutando.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Formula Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <SectionTitle centered>E SE EU TE DISSESSE QUE EXISTE UMA FÓRMULA EXATA?</SectionTitle>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">Imagine acordar amanhã e saber com TOTAL SEGURANÇA:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: <Clock />, text: "Quanto cobrar por hora" },
              { icon: <Package />, text: "Quanto cobrar por projeto" },
              { icon: <TrendingDown />, text: "Cálculo de preço mínimo sem prejuízo" },
              { icon: <ArrowRight />, text: "Quando e como aumentar seus valores" },
              { icon: <Star />, text: "Como responder pedidos de desconto" },
              { icon: <UserCheck />, text: "Valor ideal mesmo sendo iniciante" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center p-6 bg-slate-50 rounded-2xl border border-slate-100 transition-all hover:bg-slate-100">
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <span className="font-bold text-slate-800">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 rounded-3xl p-1 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 blur-[100px] rounded-full"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/3 flex justify-center">
                 <div className="w-full max-w-[280px] bg-white rounded-xl shadow-2xl p-4 rotate-3 transform transition-transform hover:rotate-0">
                    <div className="h-40 bg-slate-200 rounded flex items-center justify-center text-slate-400">
                       <FileText size={64} />
                    </div>
                    <div className="mt-4 space-y-2">
                       <div className="h-4 w-3/4 bg-slate-200 rounded"></div>
                       <div className="h-4 w-1/2 bg-slate-100 rounded"></div>
                    </div>
                    <div className="mt-6 flex justify-between items-center">
                       <div className="h-8 w-20 bg-orange-500 rounded"></div>
                       <div className="flex -space-x-1">
                          {[1,2,3].map(i => <div key={i} className="w-6 h-6 rounded-full bg-slate-200 border border-white"></div>)}
                       </div>
                    </div>
                 </div>
              </div>
              <div className="md:w-2/3 text-left">
                <span className="bg-orange-600 text-white text-xs font-black px-3 py-1 rounded-full mb-4 inline-block tracking-widest uppercase">Lançamento 2025</span>
                <h3 className="text-3xl md:text-4xl font-black mb-4">GUIA DEFINITIVO DE PRECIFICAÇÃO PARA FREELANCERS</h3>
                <p className="text-xl text-slate-300 mb-8 italic">O único material que ensina você a calcular seu preço REAL em menos de 5 minutos.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Custo-hora REAL", "Tabela de preços 2025", "4 métodos de precificação", "Scripts de negociação", "Como apresentar preço", "Lidando com objeções"
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={18} />
                      <span className="text-sm font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">BÔNUS EXCLUSIVOS</h2>
            <p className="text-slate-500 text-lg">Você vai levar mais de R$125 em materiais extras totalmente grátis.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { id: 1, title: "Planilha Automática", desc: "Insira seus dados e descubra instantaneamente quanto cobrar.", val: "R$27", icon: <Calculator /> },
              { id: 2, title: "Calculadora de Impostos", desc: "Saiba quanto vai sobrar REALMENTE no seu bolso.", val: "R$17", icon: <DollarSign /> },
              { id: 3, title: "10 Modelos de Proposta", desc: "Copy pronta pra você só personalizar e enviar.", val: "R$37", icon: <FileText /> },
              { id: 4, title: "Checklist de Custos Ocultos", desc: "47 custos que você provavelmente está esquecendo.", val: "R$17", icon: <Zap /> },
              { id: 5, title: "Script de Negociação", desc: "O que falar quando o cliente pede desconto.", val: "R$27", icon: <ArrowRight /> },
              { id: 6, title: "Acesso Vitalício", desc: "Pague uma vez e receba todas as atualizações futuras.", val: "R$47", icon: <Lock /> },
            ].map((bonus) => (
              <div key={bonus.id} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all relative overflow-hidden group">
                <div className="absolute -top-1 -right-1 bg-green-500 text-white text-[10px] font-bold py-1 px-3 rounded-bl-xl uppercase tracking-tighter">Bônus #{bonus.id}</div>
                <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {bonus.icon}
                </div>
                <h4 className="text-xl font-bold mb-2">{bonus.title}</h4>
                <p className="text-slate-500 text-sm mb-4 leading-relaxed">{bonus.desc}</p>
                <div className="flex items-center gap-2">
                   <span className="text-slate-400 text-xs line-through">Valor: {bonus.val}</span>
                   <span className="text-green-600 font-bold text-xs">GRÁTIS</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Math Section */}
      <section className="py-24 px-6 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle centered dark>QUANTO VALE SABER PRECIFICAR CORRETAMENTE?</SectionTitle>
          <div className="bg-orange-700/50 p-8 md:p-12 rounded-3xl border border-orange-500 mb-12 backdrop-blur-sm">
            <p className="text-2xl mb-8 leading-relaxed">Se você cobra <span className="font-black text-white">R$50/h</span> e deveria cobrar <span className="font-black text-white">R$150/h</span>...</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="p-4 bg-orange-800/50 rounded-xl">
                <p className="text-sm uppercase font-bold text-orange-200 mb-1">Por Semana</p>
                <p className="text-3xl font-black">- R$ 2.000</p>
              </div>
              <div className="p-4 bg-orange-800/50 rounded-xl">
                <p className="text-sm uppercase font-bold text-orange-200 mb-1">Por Mês</p>
                <p className="text-3xl font-black">- R$ 8.000</p>
              </div>
              <div className="p-4 bg-orange-800/50 rounded-xl">
                <p className="text-sm uppercase font-bold text-orange-200 mb-1">Por Ano</p>
                <p className="text-4xl font-black">- R$ 96.000</p>
              </div>
            </div>
            <p className="text-xl font-bold">Você está deixando de ganhar QUASE 100 MIL REAIS simplesmente por não saber quanto cobrar.</p>
          </div>
          <Button onClick={scrollToOffer} className="bg-white text-orange-600 hover:bg-slate-100 cta-glow">
            PARAR DE PERDER DINHEIRO AGORA
          </Button>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="offer" className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-slate-900 text-white rounded-[2.5rem] p-8 md:p-16 relative shadow-2xl">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-red-600 px-6 py-2 rounded-full font-black text-sm uppercase tracking-widest animate-bounce">
              OFERTA ESPECIAL
            </div>
            
            <h3 className="text-3xl font-bold mb-4">Acesso Imediato ao Guia + Todos os Bônus</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
               <span className="text-slate-400 text-2xl line-through">De R$ 97,00</span>
               <span className="text-slate-400 hidden md:block">por apenas</span>
               <div className="flex items-start">
                  <span className="text-3xl font-bold mt-2">R$</span>
                  <span className="text-7xl font-black text-orange-500">37,00</span>
               </div>
            </div>
            
            <p className="text-slate-400 mb-10 text-lg italic">"Ou em 12x de R$ 3,67 no cartão"</p>
            
            <div className="space-y-4 max-w-sm mx-auto mb-10">
              {[
                "E-book completo (40 páginas)",
                "Planilha calculadora automática",
                "Calculadora de impostos",
                "10 modelos de proposta",
                "Acesso vitalício e imediato"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-left">
                  <CheckCircle className="text-green-500 shrink-0" size={20} />
                  <span className="text-slate-200 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Button className="w-full md:w-auto px-16 mb-8">
              ✅ QUERO MINHA CÓPIA AGORA
            </Button>

            <div className="flex items-center justify-center gap-4 text-xs text-slate-500 mb-8">
              <span className="flex items-center gap-1"><Lock size={12} /> Compra 100% Segura</span>
              <span className="flex items-center gap-1"><ShieldCheck size={12} /> Garantia de 7 Dias</span>
              <span className="flex items-center gap-1"><Clock size={12} /> Acesso Imediato</span>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl flex flex-col md:flex-row items-center gap-6">
              <div className="w-20 h-20 shrink-0">
                <img src="https://picsum.photos/seed/medal/200/200" alt="Selo Garantia" className="w-full h-full object-contain" />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-xl mb-1 uppercase tracking-tighter">Garantia Blindada de 7 Dias</h4>
                <p className="text-slate-400 text-sm">Se em 7 dias você não conseguir calcular seu preço com segurança ou não achar que vale 10x o investimento, eu devolvo 100% do seu dinheiro. Sem perguntas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <SectionTitle centered>O QUE OUTROS FREELANCERS ESTÃO DIZENDO:</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Marina", role: "Designer Gráfica", text: "Eu cobrava R$30 por logo. Depois do guia, passei a cobrar R$350. Em 1 mês já recuperei o investimento 200x." },
              { name: "Rafael", role: "Desenvolvedor Web", text: "Finalmente entendi quanto REALMENTE custa minha hora. Estava perdendo R$3.000 por mês sem saber!" },
              { name: "Juliana", role: "Redatora Freelancer", text: "A planilha automática mudou minha vida. Em 2 minutos eu calculo qualquer orçamento com confiança." },
              { name: "Carlos", role: "Social Media", text: "Usei o script de negociação e consegui fechar um cliente que queria desconto. Fechei pelo preço cheio!" },
            ].map((t, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex gap-1 text-orange-500 mb-4">
                  {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                </div>
                <p className="text-slate-600 text-sm italic mb-4 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-200"></div>
                  <div>
                    <p className="font-bold text-slate-800 text-sm">{t.name}</p>
                    <p className="text-slate-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionTitle centered>PERGUNTAS FREQUENTES:</SectionTitle>
          <FAQ />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 gradient-bg text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black mb-8">É AGORA OU NUNCA.</h2>
          <p className="text-xl text-slate-300 mb-12">
            Invista R$37 hoje e descubra quanto você DEVERIA estar ganhando. O risco é ZERO e a mudança é imediata.
          </p>
          <Button onClick={scrollToOffer} className="px-20 py-6 text-2xl">
            QUERO MINHA CÓPIA AGORA POR R$37
          </Button>
          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="flex items-center gap-6">
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Hotmart_logo.png" alt="Hotmart" className="h-6 opacity-50 grayscale invert" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-4 opacity-50 grayscale invert" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-8 opacity-50 grayscale invert" />
            </div>
            <p className="text-slate-500 text-xs">P.S.: Freelancers que aplicaram este sistema aumentaram sua renda média em 140% nos primeiros 30 dias.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-950 text-slate-500 px-6 border-t border-slate-900 text-center text-sm">
        <div className="max-w-6xl mx-auto">
          <p className="mb-4">© 2025 - Guia de Precificação para Freelancers | Todos os direitos reservados</p>
          <p className="mb-6">CNPJ: XX.XXX.XXX/0001-XX | Suporte: contato@seuemail.com</p>
          <div className="flex justify-center gap-4 underline">
            <a href="#">Termos de Uso</a>
            <a href="#">Privacidade</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
