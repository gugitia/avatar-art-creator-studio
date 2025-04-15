
import React from "react";
import { useAvatar } from "@/contexts/AvatarContext";
import { avatarCategories } from "@/data/avatarData";
import AvatarVisualizer from "./AvatarVisualizer";

export const AvatarDisplay: React.FC = () => {
  const avatar = useAvatar();

  // Helper function to get the part by id
  const getPartById = (categoryId: string, partId: string | null) => {
    if (!partId) return null;
    const category = avatarCategories.find(c => c.id === categoryId);
    return category?.parts.find(p => p.id === partId);
  };

  return (
    <div 
      className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-lg mx-auto animate-float"
      style={{ backgroundColor: avatar.backgroundColor }}
    >
      {/* Visual representation of the avatar */}
      <AvatarVisualizer />
      
      {/* Labels for the selected parts (optional) */}
      <div className="absolute bottom-2 right-2 bg-white/70 rounded-lg p-1 text-xs flex flex-col opacity-50 hover:opacity-100 transition-opacity">
        <span>{getPartById("hair", avatar.hair)?.name}</span>
        <span>{getPartById("eyes", avatar.eyes)?.name}</span>
        <span>{getPartById("mouth", avatar.mouth)?.name}</span>
        <span>{getPartById("outfit", avatar.outfit)?.name}</span>
      </div>
    </div>
  );
};

export default AvatarDisplay;
