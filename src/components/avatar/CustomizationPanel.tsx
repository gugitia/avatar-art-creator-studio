
import React from "react";
import { useAvatar } from "@/contexts/AvatarContext";
import { avatarCategories, skinTones, backgroundColors } from "@/data/avatarData";
import ColorPicker from "./ColorPicker";
import PartSelector from "./PartSelector";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shuffle, RotateCcw } from "lucide-react";

export const CustomizationPanel: React.FC = () => {
  const avatar = useAvatar();

  const toggleAccessory = (accessoryId: string) => {
    if (avatar.accessories.includes(accessoryId)) {
      avatar.setAvatar({
        accessories: avatar.accessories.filter(id => id !== accessoryId)
      });
    } else {
      avatar.setAvatar({
        accessories: [...avatar.accessories, accessoryId]
      });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-md mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-primary">Personalize seu Avatar</h2>
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={avatar.resetAvatar}
            className="flex items-center gap-1"
          >
            <RotateCcw className="h-4 w-4" />
            Limpar
          </Button>
          <Button
            size="sm"
            onClick={avatar.randomizeAvatar}
            className="flex items-center gap-1 animate-pulse-slow"
          >
            <Shuffle className="h-4 w-4" />
            Aleatório
          </Button>
        </div>
      </div>

      <Tabs defaultValue="base" className="w-full">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="base">Base</TabsTrigger>
          <TabsTrigger value="features">Características</TabsTrigger>
          <TabsTrigger value="extras">Extras</TabsTrigger>
        </TabsList>

        <TabsContent value="base" className="space-y-4">
          <ColorPicker
            options={skinTones}
            selectedColor={avatar.skinTone}
            onChange={(color) => avatar.setAvatar({ skinTone: color })}
            label="Tom de Pele"
          />
          
          <ColorPicker
            options={backgroundColors}
            selectedColor={avatar.backgroundColor}
            onChange={(color) => avatar.setAvatar({ backgroundColor: color })}
            label="Cor de Fundo"
          />
        </TabsContent>

        <TabsContent value="features" className="space-y-4">
          {avatarCategories
            .filter(category => ["hair", "eyes", "mouth"].includes(category.id))
            .map(category => (
              <PartSelector
                key={category.id}
                parts={category.parts}
                selectedPartId={avatar[category.id as keyof typeof avatar] as string}
                onChange={(partId) => 
                  avatar.setAvatar({ [category.id]: partId } as any)
                }
                categoryName={category.name}
              />
            ))}
        </TabsContent>

        <TabsContent value="extras" className="space-y-4">
          <PartSelector
            parts={avatarCategories.find(c => c.id === "outfit")?.parts || []}
            selectedPartId={avatar.outfit}
            onChange={(partId) => avatar.setAvatar({ outfit: partId })}
            categoryName="Roupa"
          />
          
          <PartSelector
            parts={avatarCategories.find(c => c.id === "accessories")?.parts || []}
            selectedPartId={null}
            onChange={() => {}}
            categoryName="Acessórios"
            isMultiSelect
            selectedParts={avatar.accessories}
            togglePart={toggleAccessory}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CustomizationPanel;
