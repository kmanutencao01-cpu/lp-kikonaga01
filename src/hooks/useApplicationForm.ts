import { useState } from 'react';
import { FormData, defaultFormData } from '@/components/form/FormData';
import { questions } from '@/components/form/FormQuestions';
import { useToast } from '@/hooks/use-toast';

export const useApplicationForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>(defaultFormData);
  const { toast } = useToast();

  const updateFormData = (field: keyof FormData, value: string) => {
    // Validações específicas
    
    if (field === 'email' && value) {
      // Validação básica do email: deve conter @
      if (!value.includes('@')) {
        // Permite digitar até encontrar @
      }
    }
    
    if (field === 'whatsapp' && value) {
      // Remove caracteres não numéricos
      const cleanValue = value.replace(/\D/g, '');
      // Só aceita entre 10 e 11 dígitos
      if (cleanValue.length > 11) {
        return;
      }
      // Formata o telefone para exibição
      let formattedValue = cleanValue;
      if (cleanValue.length >= 2) {
        formattedValue = `(${cleanValue.slice(0, 2)})`;
        if (cleanValue.length > 2) {
          formattedValue += ` ${cleanValue.slice(2, cleanValue.length === 11 ? 7 : 6)}`;
          if (cleanValue.length > (cleanValue.length === 11 ? 7 : 6)) {
            formattedValue += `-${cleanValue.slice(cleanValue.length === 11 ? 7 : 6)}`;
          }
        }
      }
      setFormData(prev => ({ ...prev, [field]: formattedValue }));
      return;
    }
    
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const getCurrentQuestions = () => questions[currentStep] || [];

  const getFilledFieldsCount = () => {
    const currentQuestions = getCurrentQuestions();
    return currentQuestions.filter(question => {
      const value = formData[question.id];
      return value && value.trim() !== '';
    }).length;
  };

  const isStepValid = () => {
    const currentQuestions = getCurrentQuestions();
    const filledCount = getFilledFieldsCount();
    return filledCount >= Math.min(3, currentQuestions.length);
  };

  const nextStep = () => {
    if (isStepValid() && currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getProgressPercentage = () => {
    return (currentStep / (questions.length - 1)) * 100;
  };

  const handleSubmit = async () => {
    if (!isStepValid()) return;
    
    setIsSubmitting(true);
    
    try {
      // Send form data to webhook
      const response = await fetch('https://autowebhook.atendenteiagencia.shop/webhook/resposta-site-kiko', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Falha ao enviar formulário');
      }

      toast({
        title: "Aplicação enviada com sucesso!",
        description: "Nossa equipe analisará seu perfil e entrará em contato em breve.",
      });
      
      setCurrentStep(questions.length); // Success page
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      toast({
        title: "Erro ao enviar",
        description: "Ocorreu um erro ao enviar sua aplicação. Por favor, tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && isStepValid()) {
      if (currentStep < questions.length - 1) {
        nextStep();
      } else {
        handleSubmit();
      }
    }
  };

  return {
    currentStep,
    isSubmitting,
    formData,
    updateFormData,
    getCurrentQuestions,
    getFilledFieldsCount,
    isStepValid,
    nextStep,
    prevStep,
    getProgressPercentage,
    handleSubmit,
    handleKeyPress
  };
};