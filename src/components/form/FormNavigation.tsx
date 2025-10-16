import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";

interface FormNavigationProps {
  currentStep: number;
  totalSteps: number;
  isStepValid: boolean;
  isSubmitting: boolean;
  onPrevStep: () => void;
  onNextStep: () => void;
  onSubmit: () => void;
}

export const FormNavigation = ({
  currentStep,
  totalSteps,
  isStepValid,
  isSubmitting,
  onPrevStep,
  onNextStep,
  onSubmit
}: FormNavigationProps) => {
  return (
    <div className="flex justify-between pt-6 border-t border-border">
      <Button
        variant="outline"
        onClick={onPrevStep}
        disabled={currentStep === 0}
        className="flex items-center space-x-2"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Voltar</span>
      </Button>
      
      {currentStep < totalSteps - 1 ? (
        <Button
          onClick={onNextStep}
          disabled={!isStepValid}
          className="btn-primary-neon flex items-center space-x-2"
        >
          <span>Próximo</span>
          <ArrowRight className="h-4 w-4" />
        </Button>
      ) : (
        <Button
          onClick={onSubmit}
          disabled={!isStepValid || isSubmitting}
          className="btn-primary-neon flex items-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground" />
              <span>Enviando...</span>
            </>
          ) : (
            <>
              <span>Enviar Aplicação</span>
              <CheckCircle className="h-4 w-4" />
            </>
          )}
        </Button>
      )}
    </div>
  );
};