
import React from "react";
import { useAvatar } from "@/contexts/AvatarContext";
import { avatarCategories } from "@/data/avatarData";

export const AvatarVisualizer: React.FC = () => {
  const avatar = useAvatar();
  const [animate, setAnimate] = React.useState(false);
  
  React.useEffect(() => {
    // Add a small animation when avatar changes
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 500);
    return () => clearTimeout(timer);
  }, [avatar.skinTone, avatar.hair, avatar.eyes, avatar.mouth, avatar.outfit, avatar.accessories]);

  // Create a stylized visual representation of the avatar
  return (
    <div 
      className={`relative w-full h-full flex items-center justify-center transition-all duration-300 ${animate ? 'scale-105' : 'scale-100'}`}
      style={{ backgroundColor: avatar.backgroundColor }}
    >
      {/* Base head/face */}
      <div 
        className="relative w-40 h-40 rounded-full shadow-md"
        style={{ backgroundColor: avatar.skinTone }}
      >
        {/* Eyes */}
        {avatar.eyes && avatar.eyes === "eyes-1" && (
          <div className="absolute w-full top-12 flex justify-center gap-6">
            <div className="w-4 h-4 rounded-full bg-black"></div>
            <div className="w-4 h-4 rounded-full bg-black"></div>
          </div>
        )}
        
        {avatar.eyes && avatar.eyes === "eyes-2" && (
          <div className="absolute w-full top-12 flex justify-center gap-6">
            <div className="w-4 h-0.5 rounded-full bg-black"></div>
            <div className="w-4 h-0.5 rounded-full bg-black"></div>
          </div>
        )}
        
        {avatar.eyes && avatar.eyes === "eyes-3" && (
          <div className="absolute w-full top-12 flex justify-center gap-6">
            <div className="w-4 h-4 rounded-full border-2 border-black flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
            </div>
            <div className="w-4 h-4 rounded-full border-2 border-black flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
            </div>
          </div>
        )}
        
        {avatar.eyes && avatar.eyes === "eyes-4" && (
          <div className="absolute w-full top-12 flex justify-center gap-6">
            <div className="w-4 h-2 border-b-2 border-black"></div>
            <div className="w-4 h-2 border-b-2 border-black"></div>
          </div>
        )}
        
        {avatar.eyes && avatar.eyes === "eyes-5" && (
          <div className="absolute w-full top-12 flex justify-center gap-6">
            <div className="w-5 h-5 rounded-full border-2 border-black"></div>
            <div className="w-5 h-5 rounded-full border-2 border-black"></div>
          </div>
        )}
        
        {/* Mouth */}
        {avatar.mouth && avatar.mouth === "mouth-1" && (
          <div className="absolute w-full top-28 flex justify-center">
            <div className="w-10 h-2 bg-black rounded-b-full"></div>
          </div>
        )}
        
        {avatar.mouth && avatar.mouth === "mouth-2" && (
          <div className="absolute w-full top-28 flex justify-center">
            <div className="w-10 h-4 bg-black rounded-b-full"></div>
          </div>
        )}
        
        {avatar.mouth && avatar.mouth === "mouth-3" && (
          <div className="absolute w-full top-28 flex justify-center">
            <div className="w-10 h-0.5 bg-black"></div>
          </div>
        )}
        
        {avatar.mouth && avatar.mouth === "mouth-4" && (
          <div className="absolute w-full top-28 flex justify-center">
            <div className="w-6 h-6 rounded-full border-2 border-black"></div>
          </div>
        )}
        
        {avatar.mouth && avatar.mouth === "mouth-5" && (
          <div className="absolute w-full top-28 flex justify-center">
            <div className="w-8 h-2 bg-black rounded-b-full relative">
              <div className="absolute w-3 h-3 bg-red-500 rounded-full top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>
        )}
        
        {/* Hair */}
        {avatar.hair && avatar.hair === "hair-1" && (
          <div className="absolute w-full top-0 flex justify-center">
            <div className="w-44 h-10 bg-black rounded-t-full"></div>
          </div>
        )}
        
        {avatar.hair && avatar.hair === "hair-2" && (
          <div className="absolute w-full top-0 flex justify-center">
            <div className="w-44 h-14 bg-black rounded-t-full"></div>
          </div>
        )}
        
        {avatar.hair && avatar.hair === "hair-3" && (
          <div className="absolute w-full top-0 flex justify-center">
            <div className="w-44 h-20 bg-black rounded-t-full"></div>
          </div>
        )}
        
        {avatar.hair && avatar.hair === "hair-4" && (
          <div className="absolute w-52 h-52 top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4">
            <div className="w-full h-full rounded-full border-8 border-black border-dotted"></div>
          </div>
        )}
        
        {/* Accessories */}
        {avatar.accessories.includes("acc-1") && (
          <div className="absolute w-full top-14 flex justify-center">
            <div className="w-28 h-4 border-t-2 border-black flex items-start justify-center">
              <div className="w-3 h-3 rounded-full border border-black mx-1"></div>
              <div className="w-3 h-3 rounded-full border border-black mx-1"></div>
            </div>
          </div>
        )}
        
        {avatar.accessories.includes("acc-2") && (
          <div className="absolute w-full -top-4 left-0 flex justify-center">
            <div className="w-32 h-6 bg-red-500 rounded-t-full"></div>
          </div>
        )}
        
        {avatar.accessories.includes("acc-3") && (
          <div className="absolute w-full bottom-0 left-0 flex justify-center">
            <div className="w-6 h-12 bg-blue-500 rounded-b-sm"></div>
          </div>
        )}
        
        {avatar.accessories.includes("acc-4") && (
          <div className="absolute w-full bottom-4 left-0 flex justify-center">
            <div className="w-32 h-4 bg-purple-400 rounded-full"></div>
          </div>
        )}
        
        {avatar.accessories.includes("acc-5") && (
          <div className="absolute -right-10 bottom-0">
            <div className="w-8 h-10 bg-yellow-400 rounded-md"></div>
          </div>
        )}
      </div>
      
      {/* Outfit */}
      {avatar.outfit && (
        <div className="absolute w-full h-full flex items-end justify-center pb-4">
          <div 
            className={`w-48 h-20 rounded-t-3xl ${
              avatar.outfit === "outfit-1" ? "bg-blue-500" :
              avatar.outfit === "outfit-2" ? "bg-gray-800" :
              avatar.outfit === "outfit-3" ? "bg-green-500" :
              avatar.outfit === "outfit-4" ? "bg-purple-500" :
              "bg-orange-400"
            }`}
          ></div>
        </div>
      )}
    </div>
  );
};

export default AvatarVisualizer;
