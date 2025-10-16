import { Question, FormData } from './FormData';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface FormQuestionProps {
  question: Question;
  value: string;
  formData: FormData;
  onUpdate: (field: keyof FormData, value: string) => void;
}

const getDynamicLabel = (question: Question, formData: FormData): string => {
  if (question.id === 'faturamentoMensal') {
    const firstName = formData.nomeCompleto.split(' ')[0] || 'amigo';
    const companyName = formData.nomeEmpresa || 'sua empresa';
    return `Show ${firstName}! Qual é o faturamento médio mensal da ${companyName}?`;
  }
  return question.label;
};

export const FormQuestion = ({ question, value, formData, onUpdate }: FormQuestionProps) => {
  const displayLabel = getDynamicLabel(question, formData);
  if (question.type === 'select') {
    return (
      <div className="space-y-3">
        <Label className="text-sm font-medium">{displayLabel}</Label>
        <Select
          value={value}
          onValueChange={(newValue) => onUpdate(question.id, newValue)}
        >
          <SelectTrigger className="w-full bg-background">
            <SelectValue placeholder={question.placeholder || "Selecione uma opção..."} />
          </SelectTrigger>
          <SelectContent className="bg-background border border-border shadow-lg z-50">
            {question.options?.map((option) => (
              <SelectItem key={option.value} value={option.value} className="bg-background hover:bg-accent">
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        {question.hasOther && question.otherField && value === (question.options?.find(opt => opt.label.includes('Outro:'))?.value) && (
          <Input
            value={formData[question.otherField]}
            onChange={(e) => onUpdate(question.otherField!, e.target.value)}
            placeholder="Especifique..."
            className="mt-3"
          />
        )}
      </div>
    );
  }
  
  if (question.type === 'radio') {
    return (
      <div className="space-y-3">
        <Label className="text-sm font-medium">{displayLabel}</Label>
        <RadioGroup
          value={value}
          onValueChange={(newValue) => onUpdate(question.id, newValue)}
          className="space-y-2"
        >
          {question.options?.map((option) => (
            <div key={option.value} className="flex items-center space-x-3">
              <RadioGroupItem value={option.value} id={option.value} />
              <Label 
                htmlFor={option.value}
                className="text-sm font-normal cursor-pointer flex-1"
              >
                {option.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
        
        {question.hasOther && question.otherField && value === (question.options?.find(opt => opt.label.includes('Outro:'))?.value) && (
          <Input
            value={formData[question.otherField]}
            onChange={(e) => onUpdate(question.otherField!, e.target.value)}
            placeholder="Especifique..."
            className="mt-3"
          />
        )}
      </div>
    );
  }
  
  if (question.type === 'textarea') {
    return (
      <div className="space-y-2">
        <Label htmlFor={question.id} className="text-sm font-medium">
          {displayLabel}
        </Label>
        <Textarea
          id={question.id}
          value={value}
          onChange={(e) => onUpdate(question.id, e.target.value)}
          placeholder={question.placeholder}
          className="min-h-[100px] resize-none"
        />
      </div>
    );
  }
  
  return (
    <div className="space-y-2">
      <Label htmlFor={question.id} className="text-sm font-medium">
        {displayLabel}
      </Label>
      <Input
        id={question.id}
        type={question.type}
        value={value}
        onChange={(e) => onUpdate(question.id, e.target.value)}
        placeholder={question.placeholder}
        min={question.min}
        max={question.max}
      />
    </div>
  );
};