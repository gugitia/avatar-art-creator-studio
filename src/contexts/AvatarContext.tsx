
import React, { createContext, useContext, useState } from "react";
import { AvatarState, AvatarCustomizationState } from "@/types/avatar";
import { skinTones, backgroundColors, avatarCategories } from "@/data/avatarData";

const defaultAvatarState: AvatarState = {
  skinTone: skinTones[0].color,
  hair: "hair-1",
  eyes: "eyes-1",
  mouth: "mouth-1",
  outfit: "outfit-1",
  accessories: [],
  backgroundColor: backgroundColors[0].color,
};

const AvatarContext = createContext<AvatarCustomizationState>({
  ...defaultAvatarState,
  setAvatar: () => {},
  resetAvatar: () => {},
  randomizeAvatar: () => {},
});

export const useAvatar = () => useContext(AvatarContext);

export const AvatarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [avatarState, setAvatarState] = useState<AvatarState>(defaultAvatarState);

  const setAvatar = (updates: Partial<AvatarState>) => {
    setAvatarState((prev) => ({
      ...prev,
      ...updates,
    }));
  };

  const resetAvatar = () => {
    setAvatarState(defaultAvatarState);
  };

  const randomizeAvatar = () => {
    const randomSkinTone = skinTones[Math.floor(Math.random() * skinTones.length)].color;
    const randomHair = avatarCategories.find(c => c.id === "hair")?.parts[
      Math.floor(Math.random() * 5)
    ].id || "hair-1";
    const randomEyes = avatarCategories.find(c => c.id === "eyes")?.parts[
      Math.floor(Math.random() * 5)
    ].id || "eyes-1";
    const randomMouth = avatarCategories.find(c => c.id === "mouth")?.parts[
      Math.floor(Math.random() * 5)
    ].id || "mouth-1";
    const randomOutfit = avatarCategories.find(c => c.id === "outfit")?.parts[
      Math.floor(Math.random() * 5)
    ].id || "outfit-1";
    const randomBg = backgroundColors[Math.floor(Math.random() * backgroundColors.length)].color;
    
    // Random 0-2 accessories
    const accessoryCategory = avatarCategories.find(c => c.id === "accessories");
    const allAccessories = accessoryCategory?.parts.map(p => p.id) || [];
    const numAccessories = Math.floor(Math.random() * 3);
    const randomAccessories: string[] = [];
    
    for (let i = 0; i < numAccessories; i++) {
      if (allAccessories.length > 0) {
        const randomIndex = Math.floor(Math.random() * allAccessories.length);
        const selected = allAccessories[randomIndex];
        randomAccessories.push(selected);
        // Remove this accessory to avoid duplicates
        allAccessories.splice(randomIndex, 1);
      }
    }

    setAvatarState({
      skinTone: randomSkinTone,
      hair: randomHair,
      eyes: randomEyes,
      mouth: randomMouth,
      outfit: randomOutfit,
      accessories: randomAccessories,
      backgroundColor: randomBg,
    });
  };

  return (
    <AvatarContext.Provider
      value={{
        ...avatarState,
        setAvatar,
        resetAvatar,
        randomizeAvatar,
      }}
    >
      {children}
    </AvatarContext.Provider>
  );
};
