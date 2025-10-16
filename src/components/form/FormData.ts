export interface FormData {
  // Dados Básicos
  nomeCompleto: string;
  nomeEmpresa: string;
  cargo: string;
  segmentoAtuacao: string;
  segmentoOutro: string;
  whatsapp: string;
  instagram: string;
  email: string;
  // Faturamento e Vendas
  faturamentoMensal: string;
  novosClientes: string;
  clientesRecorrentes: string;
  ticketMedio: string;
  canaisVenda: string;
  clarezaProcesso: string;
  timeComercial: string;
  taxaConversao: string;
  // Desafios e Automação
  principalDesafio: string;
  automatizacao: string;
  tarefaRepetitiva: string;
  tempoPerdido: string;
  utilizaCRM: string;
  visibilidadeNumeros: string;
}

export interface Question {
  id: keyof FormData;
  type: 'input' | 'textarea' | 'email' | 'number' | 'radio' | 'select';
  label: string;
  placeholder?: string;
  options?: { value: string; label: string }[];
  min?: number;
  max?: number;
  hasOther?: boolean;
  otherField?: keyof FormData;
  isDynamic?: boolean;
}

export const defaultFormData: FormData = {
  nomeCompleto: "",
  nomeEmpresa: "",
  cargo: "",
  segmentoAtuacao: "",
  segmentoOutro: "",
  whatsapp: "",
  instagram: "",
  email: "",
  faturamentoMensal: "",
  novosClientes: "",
  clientesRecorrentes: "",
  ticketMedio: "",
  canaisVenda: "",
  clarezaProcesso: "",
  timeComercial: "",
  taxaConversao: "",
  principalDesafio: "",
  automatizacao: "",
  tarefaRepetitiva: "",
  tempoPerdido: "",
  utilizaCRM: "",
  visibilidadeNumeros: ""
};