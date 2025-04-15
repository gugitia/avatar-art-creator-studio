
import React from "react";
import { AvatarPart } from "@/types/avatar";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PartSelectorProps {
  parts: AvatarPart[];
  selectedPartId: string | null;
  onChange: (partId: string) => void;
  categoryName: string;
  isMultiSelect?: boolean;
  selectedParts?: string[];
  togglePart?: (partId: string) => void;
}

export const PartSelector: React.FC<PartSelectorProps> = ({
  parts,
  selectedPartId,
  onChange,
  categoryName,
  isMultiSelect = false,
  selectedParts = [],
  togglePart,
}) => {
  if (isMultiSelect && !togglePart) {
    console.error("togglePart must be provided for multi-select mode");
    return null;
  }

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium">{categoryName}</h3>
      <div className="flex flex-wrap gap-2">
        {parts.map((part) => {
          const isSelected = isMultiSelect
            ? selectedParts.includes(part.id)
            : selectedPartId === part.id;

          return (
            <Button
              key={part.id}
              variant={isSelected ? "default" : "outline"}
              className={cn(
                "text-xs h-auto py-1.5 px-2.5",
                isSelected ? "bg-primary text-primary-foreground" : ""
              )}
              onClick={() =>
                isMultiSelect && togglePart
                  ? togglePart(part.id)
                  : onChange(part.id)
              }
            >
              {part.name}
              {isSelected && (
                <Check className="ml-1 h-3 w-3" />
              )}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default PartSelector;
