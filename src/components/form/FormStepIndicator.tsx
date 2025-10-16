interface FormStepIndicatorProps {
  filledCount: number;
  requiredCount: number;
  isValid: boolean;
}

export const FormStepIndicator = ({ filledCount, requiredCount, isValid }: FormStepIndicatorProps) => {
  const percentage = Math.min((filledCount / requiredCount) * 100, 100);
  
  return (
    <div className="text-center py-4">
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">
          Campos preenchidos: {filledCount} (mínimo {requiredCount} necessários)
        </p>
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${percentage}%` }}
          />
        </div>
        {!isValid && (
          <p className="text-xs text-accent">
            Preencha pelo menos {requiredCount - filledCount} campos para continuar
          </p>
        )}
      </div>
    </div>
  );
};