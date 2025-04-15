
export interface AvatarPart {
  id: string;
  name: string;
  src: string;
}

export interface AvatarCategory {
  id: string;
  name: string;
  parts: AvatarPart[];
}

export interface AvatarState {
  skinTone: string;
  hair: string | null;
  eyes: string | null;
  mouth: string | null;
  outfit: string | null;
  accessories: string[];
  backgroundColor: string;
}

export interface AvatarCustomizationState extends AvatarState {
  setAvatar: (updates: Partial<AvatarState>) => void;
  resetAvatar: () => void;
  randomizeAvatar: () => void;
}
