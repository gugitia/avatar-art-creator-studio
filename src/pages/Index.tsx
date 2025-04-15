
import React from "react";
import { AvatarProvider } from "@/contexts/AvatarContext";
import AvatarDisplay from "@/components/avatar/AvatarDisplay";
import CustomizationPanel from "@/components/avatar/CustomizationPanel";
import AvatarDownload from "@/components/avatar/AvatarDownload";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const Index = () => {
  return (
    <AvatarProvider>
      <div className="min-h-screen bg-gradient-to-br from-accent/30 via-background to-primary/10 py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Sparkles className="h-8 w-8 text-primary animate-pulse-slow" />
              <h1 className="text-3xl md:text-4xl font-bold text-primary animate-pulse-slow">
                Estúdio de Criação de Avatar
              </h1>
              <Sparkles className="h-8 w-8 text-primary animate-pulse-slow" />
            </div>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Crie e personalize seu avatar único com nosso criador intuitivo. Escolha cores, 
              características, roupas e muito mais!
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <Card className="bg-white/80 backdrop-blur-sm overflow-visible border-primary/10">
              <CardContent className="p-6">
                <AvatarDisplay />
                <AvatarDownload />
              </CardContent>
            </Card>

            <CustomizationPanel />
          </div>

          <footer className="text-center mt-12 text-sm text-muted-foreground">
            <div className="flex flex-col items-center justify-center space-y-2">
              <p className="flex items-center gap-1">
                <span className="text-primary">★</span>
                Criado com Lovable
                <span className="text-primary">★</span>
              </p>
              <p>© 2025 Estúdio de Criação de Avatar. Todos os direitos reservados.</p>
            </div>
          </footer>
        </div>
      </div>
    </AvatarProvider>
  );
};

export default Index;
