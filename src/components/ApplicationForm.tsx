import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, AlertCircle } from "lucide-react";
import { FloatingParticles } from "@/components/ScrollAnimations";
import { useApplicationForm } from "@/hooks/useApplicationForm";
import { FormQuestion } from "@/components/form/FormQuestion";
import { FormProgress } from "@/components/form/FormProgress";
import { FormNavigation } from "@/components/form/FormNavigation";
import { FormStepIndicator } from "@/components/form/FormStepIndicator";
import { questions, stepTitles, sectionTitles } from "@/components/form/FormQuestions";

export const ApplicationForm = () => {
  const {
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
  } = useApplicationForm();

  // Success page
  if (currentStep === questions.length) {
    return (
      <section id="application-form" className="relative min-h-screen flex items-center py-4 bg-[#0a0a0a] overflow-hidden">
        <FloatingParticles />
        <div className="container mx-auto max-w-2xl relative z-10">
          <Card className="card-premium text-center space-y-6">
            <CardHeader>
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 glow-primary">
                <CheckCircle className="h-10 w-10 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl text-primary">
                Aplicação Enviada com Sucesso!
              </CardTitle>
              <CardDescription className="text-lg">
                Obrigado pelas suas respostas.
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="space-y-4 text-foreground">
                <p>
                  Nosso time vai analisar seu perfil e, caso haja alinhamento, entraremos em contato para marcar sua reunião de diagnóstico.
                </p>
                
                <div className="flex items-start space-x-3 bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                  <AlertCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <div className="space-y-2 text-left">
                    <div className="w-8 h-0.5 bg-destructive mb-2"></div>
                    <p className="font-semibold text-destructive">Importante:</p>
                    <p className="text-sm">
                      Nossa agenda é limitada e priorizamos empresas realmente comprometidas em destravar, ganhar ritmo e escalar seus resultados comerciais.
                    </p>
                    <p className="text-sm font-semibold">
                      Se for o seu caso, você já estará um passo à frente para transformar seu negócio.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  const currentQuestions = getCurrentQuestions();
  const filledCount = getFilledFieldsCount();
  const requiredCount = Math.min(3, currentQuestions.length);

  return (
    <section id="application-form" className="relative min-h-screen flex items-center py-4 bg-[#0a0a0a] overflow-hidden">
      <FloatingParticles />
      <div className="container mx-auto max-w-2xl relative z-10">
        <Card className="border-4 border-primary bg-gradient-to-br from-primary/10 to-[#1a1a1a] shadow-[0_0_30px_rgba(59,130,246,0.5)] rounded-2xl p-3 sm:p-4" onKeyPress={handleKeyPress}>
          <CardHeader className="text-center space-y-1.5 p-2 sm:p-3 pb-1">
            <CardTitle className="text-base sm:text-lg text-primary">
              Aplicação para Reunião de Diagnóstico
            </CardTitle>
            
            <FormProgress 
              currentStep={currentStep}
              totalSteps={questions.length}
              progressPercentage={getProgressPercentage()}
            />
          </CardHeader>
          
          <CardContent className="space-y-2.5 p-2 sm:p-3 pt-1.5">
            {/* Section Title */}
            <div className="text-center space-y-0.5">
              <h3 className="text-sm sm:text-base font-semibold text-primary">{sectionTitles[currentStep]}</h3>
              <p className="text-xs text-muted-foreground">{stepTitles[currentStep]}</p>
            </div>
            
            {/* Current Questions */}
            <div className="space-y-2.5">
              {currentQuestions.map((question) => (
                <FormQuestion
                  key={question.id}
                  question={question}
                  value={formData[question.id]}
                  formData={formData}
                  onUpdate={updateFormData}
                />
              ))}
            </div>

            <FormStepIndicator 
              filledCount={filledCount}
              requiredCount={requiredCount}
              isValid={isStepValid()}
            />

            <FormNavigation
              currentStep={currentStep}
              totalSteps={questions.length}
              isStepValid={isStepValid()}
              isSubmitting={isSubmitting}
              onPrevStep={prevStep}
              onNextStep={nextStep}
              onSubmit={handleSubmit}
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};