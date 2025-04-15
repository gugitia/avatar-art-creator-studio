
import React from "react";
import { cn } from "@/lib/utils";

interface ColorOption {
  id: string;
  name: string;
  color: string;
}

interface ColorPickerProps {
  options: ColorOption[];
  selectedColor: string;
  onChange: (color: string) => void;
  label: string;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({
  options,
  selectedColor,
  onChange,
  label,
}) => {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium">{label}</h3>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option.id}
            className={cn(
              "w-8 h-8 rounded-full transition-all ring-offset-2",
              selectedColor === option.color
                ? "ring-2 ring-primary scale-110"
                : "hover:scale-105"
            )}
            style={{ backgroundColor: option.color }}
            onClick={() => onChange(option.color)}
            title={option.name}
            aria-label={`${label} ${option.name}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
