
import React from "react";
import { Button } from "@/components/ui/button";
import { Download, Share2, Camera } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog";

export const AvatarDownload: React.FC = () => {
  const { toast } = useToast();

  const handleDownload = () => {
    // In a real application, we would convert the avatar to an image and download it
    toast({
      title: "Avatar salvo!",
      description: "Em uma aplicação real, seu avatar seria baixado como uma imagem.",
      duration: 3000,
    });
  };

  const handleShare = () => {
    toast({
      title: "Avatar compartilhado!",
      description: "Em uma aplicação real, você poderia compartilhar seu avatar nas redes sociais.",
      duration: 3000,
    });
  };

  return (
    <div className="w-full space-y-3 mt-4">
      <Button 
        onClick={handleDownload} 
        className="w-full animate-bounce-light"
        size="lg"
      >
        <Download className="mr-2 h-4 w-4" />
        Baixar Avatar
      </Button>
      
      <div className="flex gap-2 w-full">
        <Button
          variant="outline"
          className="flex-1"
          onClick={handleShare}
        >
          <Share2 className="mr-2 h-4 w-4" />
          Compartilhar
        </Button>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="secondary" className="flex-1">
              <Camera className="mr-2 h-4 w-4" />
              Visualizar
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Seu Avatar</DialogTitle>
            </DialogHeader>
            <div className="py-6 flex items-center justify-center">
              <div className="w-64 h-64 rounded-full bg-avatar-purple flex items-center justify-center">
                <p className="text-white text-center">
                  Aqui seria exibida uma versão de alta qualidade do seu avatar
                </p>
              </div>
            </div>
            <DialogFooter className="flex sm:justify-between">
              <Button
                type="button"
                variant="secondary"
                onClick={handleShare}
              >
                <Share2 className="mr-2 h-4 w-4" />
                Compartilhar
              </Button>
              <Button type="button" onClick={handleDownload}>
                <Download className="mr-2 h-4 w-4" />
                Baixar
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default AvatarDownload;
