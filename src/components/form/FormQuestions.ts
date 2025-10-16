import { Question } from './FormData';

export const questions: Question[][] = [
  // Etapa 1 - Dados Pessoais e Empresa
  [
    { id: 'nomeCompleto', type: 'input', label: '1. Qual é o seu nome completo?', placeholder: 'Digite seu nome completo' },
    { id: 'nomeEmpresa', type: 'input', label: '2. Qual é o nome da sua empresa?', placeholder: 'Digite o nome da empresa' },
    { 
      id: 'cargo', 
      type: 'select', 
      label: '3. Qual é o seu cargo/função dentro da empresa?', 
      placeholder: 'Selecione seu cargo',
      options: [
        { value: 'ceo', label: 'CEO/Fundador' },
        { value: 'diretor', label: 'Diretor' },
        { value: 'gerente', label: 'Gerente' },
        { value: 'proprietario', label: 'Proprietário' },
        { value: 'coordenador', label: 'Coordenador' },
        { value: 'supervisor', label: 'Supervisor' },
        { value: 'vendedor', label: 'Vendedor' },
        { value: 'outro', label: 'Outro' }
      ]
    }
  ],
  // Etapa 2 - Segmento e Contato
  [
    { 
      id: 'segmentoAtuacao', 
      type: 'select', 
      label: '4. Em qual segmento de atuação sua empresa está inserida?', 
      placeholder: 'Selecione o segmento',
      hasOther: true,
      otherField: 'segmentoOutro',
      options: [
        { value: 'tecnologia', label: 'Tecnologia' },
        { value: 'saude', label: 'Saúde' },
        { value: 'educacao', label: 'Educação' },
        { value: 'financeiro', label: 'Financeiro' },
        { value: 'varejo', label: 'Varejo' },
        { value: 'industria', label: 'Indústria' },
        { value: 'servicos', label: 'Serviços' },
        { value: 'consultoria', label: 'Consultoria' },
        { value: 'marketing', label: 'Marketing' },
        { value: 'imobiliario', label: 'Imobiliário' },
        { value: 'alimentacao', label: 'Alimentação' },
        { value: 'construcao', label: 'Construção Civil' },
        { value: 'ecommerce', label: 'E-commerce' },
        { value: 'outro', label: 'Outro' }
      ]
    },
    { id: 'whatsapp', type: 'input', label: '5. Qual seu número de contato?', placeholder: '(11) 99999-9999' },
    { id: 'instagram', type: 'input', label: '6. Qual é o Instagram (pessoal e/ou empresarial)?', placeholder: '@seuinstagram ou digite "não tenho"' }
  ],
  // Etapa 3 - Email Final
  [
    { id: 'email', type: 'email', label: '7. Melhor e-mail de contato:', placeholder: 'seu@email.com' }
  ],
  // Etapa 4 - Faturamento e Vendas (Parte 1)
  [
    { id: 'faturamentoMensal', type: 'input', label: '', placeholder: 'Ex: R$ 50.000', isDynamic: true },
    { 
      id: 'novosClientes', 
      type: 'input', 
      label: 'Com base no faturamento mensal, quanto vem de novos clientes?', 
      placeholder: 'Ex: R$ 20.000 ou 40%' 
    },
    { 
      id: 'clientesRecorrentes', 
      type: 'input', 
      label: 'E quanto vem de clientes recorrentes?', 
      placeholder: 'Ex: R$ 30.000 ou 60%' 
    }
  ],
  // Etapa 5 - Faturamento e Vendas (Parte 2)
  [
    { id: 'ticketMedio', type: 'input', label: 'Qual seria seu ticket médio?', placeholder: 'Ex: R$ 5.000' },
    { id: 'canaisVenda', type: 'textarea', label: 'Hoje, quais são seus canais de venda?', placeholder: 'Ex: Instagram, site, indicações, parcerias...' },
    { 
      id: 'clarezaProcesso', 
      type: 'select', 
      label: 'De 0 a 10, qual é o nível de clareza que você tem sobre seu processo comercial?', 
      placeholder: 'Selecione uma nota',
      options: [
        { value: '0', label: '0 - Nenhuma clareza' },
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5', label: '5' },
        { value: '6', label: '6' },
        { value: '7', label: '7' },
        { value: '8', label: '8' },
        { value: '9', label: '9' },
        { value: '10', label: '10 - Total clareza' }
      ]
    }
  ],
  // Etapa 6 - Time e Conversão
  [
    { 
      id: 'timeComercial', 
      type: 'radio', 
      label: 'Você já possui um time comercial estruturado?', 
      options: [
        { value: 'sim', label: 'Sim' },
        { value: 'nao', label: 'Não' },
        { value: 'parcial', label: 'Parcialmente' }
      ]
    },
    { 
      id: 'taxaConversao', 
      type: 'input', 
      label: 'Qual é a sua taxa de conversão atual? Por exemplo: quantos clientes fecham de cada 100 leads que chegam?', 
      placeholder: 'Ex: 5 de cada 100 ou não sei' 
    }
  ],
  // Etapa 7 - Desafios e Automação
  [
    { 
      id: 'principalDesafio', 
      type: 'textarea', 
      label: 'Qual é o principal desafio na sua empresa hoje?', 
      placeholder: 'Descreva seu principal desafio...' 
    },
    { 
      id: 'automatizacao', 
      type: 'radio', 
      label: 'Atualmente você possui algum tipo de automatização comercial ou de marketing?', 
      options: [
        { value: 'sim', label: 'Sim' },
        { value: 'nao', label: 'Não' },
        { value: 'basica', label: 'Apenas básica' }
      ]
    }
  ],
  // Etapa 8 - Processos e Gestão
  [
    { 
      id: 'tarefaRepetitiva', 
      type: 'textarea', 
      label: 'Qual é a tarefa repetitiva no seu processo comercial que consome mais seu tempo ou da equipe?', 
      placeholder: 'Descreva a tarefa...' 
    },
    { 
      id: 'tempoPerdido', 
      type: 'input', 
      label: 'Quanto você acredita que perde de tempo fazendo essa tarefa repetitiva?', 
      placeholder: 'Ex: 2 horas por dia, 10 horas por semana...' 
    }
  ],
  // Etapa 9 - CRM e Visibilidade
  [
    { 
      id: 'utilizaCRM', 
      type: 'radio', 
      label: 'Você já utiliza algum CRM para gestão de clientes e oportunidades?', 
      options: [
        { value: 'sim', label: 'Sim' },
        { value: 'nao', label: 'Não' },
        { value: 'planilha', label: 'Uso planilhas' }
      ]
    },
    { 
      id: 'visibilidadeNumeros', 
      type: 'radio', 
      label: 'Hoje você tem visibilidade clara dos números e resultados do seu comercial (taxa de conversão, ticket médio, funil, etc.)?', 
      options: [
        { value: 'sim', label: 'Sim, tenho total visibilidade' },
        { value: 'parcial', label: 'Parcialmente' },
        { value: 'nao', label: 'Não tenho' }
      ]
    }
  ]
];

export const stepTitles = [
  "Dados Pessoais e Empresa",
  "Segmento e Contato", 
  "E-mail de Contato",
  "Faturamento e Vendas",
  "Canais e Processo",
  "Time e Conversão",
  "Desafios e Automação",
  "Processos Repetitivos",
  "CRM e Visibilidade"
];

export const sectionTitles = [
  "Informações Básicas",
  "Informações Básicas", 
  "Informações Básicas",
  "Análise Financeira",
  "Análise Comercial",
  "Estrutura de Vendas",
  "Oportunidades",
  "Eficiência Operacional",
  "Gestão e Métricas"
];