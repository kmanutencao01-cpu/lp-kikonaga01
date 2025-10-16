import { Progress } from "@/components/ui/progress";

interface FormProgressProps {
  currentStep: number;
  totalSteps: number;
  progressPercentage: number;
}

export const FormProgress = ({ currentStep, totalSteps, progressPercentage }: FormProgressProps) => {
  return (
    <div className="space-y-4">
      <div className="w-full bg-muted rounded-full h-2">
        <div 
          className="bg-primary h-2 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      
      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          Etapa {currentStep + 1} de {totalSteps} • {Math.round(progressPercentage)}% completo
        </p>
      </div>
    </div>
  );
};