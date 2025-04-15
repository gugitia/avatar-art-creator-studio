
import { AvatarCategory } from "@/types/avatar";

export const skinTones = [
  { id: "skin-1", name: "Claro", color: "#FFE0BD" },
  { id: "skin-2", name: "Médio", color: "#F8D5AC" },
  { id: "skin-3", name: "Bronzeado", color: "#EDB98A" },
  { id: "skin-4", name: "Escuro", color: "#D08B5B" },
  { id: "skin-5", name: "Muito Escuro", color: "#A26F54" },
  { id: "skin-6", name: "Marrom", color: "#8D5524" },
];

export const backgroundColors = [
  { id: "bg-1", name: "Roxo", color: "#9b87f5" },
  { id: "bg-2", name: "Azul", color: "#33C3F0" },
  { id: "bg-3", name: "Verde", color: "#4ade80" },
  { id: "bg-4", name: "Amarelo", color: "#fcd34d" },
  { id: "bg-5", name: "Laranja", color: "#fb923c" },
  { id: "bg-6", name: "Rosa", color: "#f472b6" },
  { id: "bg-7", name: "Vermelho", color: "#ef4444" },
  { id: "bg-8", name: "Branco", color: "#ffffff" },
  { id: "bg-9", name: "Cinza", color: "#d1d5db" },
];

export const avatarCategories: AvatarCategory[] = [
  {
    id: "hair",
    name: "Cabelo",
    parts: [
      { id: "hair-1", name: "Curto", src: "/avatars/hair/short.svg" },
      { id: "hair-2", name: "Médio", src: "/avatars/hair/medium.svg" },
      { id: "hair-3", name: "Longo", src: "/avatars/hair/long.svg" },
      { id: "hair-4", name: "Cacheado", src: "/avatars/hair/curly.svg" },
      { id: "hair-5", name: "Careca", src: "/avatars/hair/bald.svg" },
    ]
  },
  {
    id: "eyes",
    name: "Olhos",
    parts: [
      { id: "eyes-1", name: "Redondo", src: "/avatars/eyes/round.svg" },
      { id: "eyes-2", name: "Fechado", src: "/avatars/eyes/closed.svg" },
      { id: "eyes-3", name: "Feliz", src: "/avatars/eyes/happy.svg" },
      { id: "eyes-4", name: "Cansado", src: "/avatars/eyes/tired.svg" },
      { id: "eyes-5", name: "Surpreso", src: "/avatars/eyes/surprised.svg" },
    ]
  },
  {
    id: "mouth",
    name: "Boca",
    parts: [
      { id: "mouth-1", name: "Sorriso", src: "/avatars/mouth/smile.svg" },
      { id: "mouth-2", name: "Risada", src: "/avatars/mouth/laugh.svg" },
      { id: "mouth-3", name: "Sério", src: "/avatars/mouth/serious.svg" },
      { id: "mouth-4", name: "Surpreso", src: "/avatars/mouth/surprised.svg" },
      { id: "mouth-5", name: "Língua", src: "/avatars/mouth/tongue.svg" },
    ]
  },
  {
    id: "outfit",
    name: "Roupa",
    parts: [
      { id: "outfit-1", name: "Casual", src: "/avatars/outfit/casual.svg" },
      { id: "outfit-2", name: "Formal", src: "/avatars/outfit/formal.svg" },
      { id: "outfit-3", name: "Esportivo", src: "/avatars/outfit/sporty.svg" },
      { id: "outfit-4", name: "Elegante", src: "/avatars/outfit/elegant.svg" },
      { id: "outfit-5", name: "Praia", src: "/avatars/outfit/beach.svg" },
    ]
  },
  {
    id: "accessories",
    name: "Acessórios",
    parts: [
      { id: "acc-1", name: "Óculos", src: "/avatars/accessories/glasses.svg" },
      { id: "acc-2", name: "Chapéu", src: "/avatars/accessories/hat.svg" },
      { id: "acc-3", name: "Gravata", src: "/avatars/accessories/tie.svg" },
      { id: "acc-4", name: "Cachecol", src: "/avatars/accessories/scarf.svg" },
      { id: "acc-5", name: "Bolsa", src: "/avatars/accessories/bag.svg" },
    ]
  },
];

// Note: In a real application, we would have actual SVG files for each part
// For this demo, we'll create simple representations with CSS and divs
