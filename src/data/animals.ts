// src/data/animals.ts

export interface Animal {
  id: string;
  name: string;
  type: string;
  breed: string;
  image: string;
  description: string;
}

export const animals: Animal[] = [
  { id: "1", name: "Charlie", type: "Chien", breed: "Pug", image: "/images/alan-king.jpg", description: "Un petit compagnon joyeux qui adore les siestes au soleil." },
  { id: "2", name: "Mia", type: "Chat", breed: "Européen", image: "/images/chan-swan.jpg", description: "Très calme et observatrice, elle cherche un foyer paisible." },
  { id: "3", name: "Coco", type: "Chien", breed: "Golden", image: "/images/charlesdeluvio.jpg", description: "Toujours partant pour une balade, il est le meilleur ami de la famille." },
  { id: "4", name: "Lapi", type: "Lapin", breed: "Nain", image: "/images/jae-park.jpg", description: "Curieux et sociable, il adore les légumes frais et les caresses." },
  { id: "5", name: "Felix", type: "Chat", breed: "Gris", image: "/images/manja-vitolic.jpg", description: "Un explorateur agile qui aime se percher en hauteur." },
  { id: "6", name: "Luna", type: "Chat", breed: "Siamois", image: "/images/melanie-kreutz.jpg", description: "Très bavarde et attachante, elle ne vous quittera plus." },
  { id: "7", name: "Rocky", type: "Chien", breed: "Berger", image: "/images/peri-stojnic.jpg", description: "Intelligent et protecteur, il a besoin d'espace pour courir." },
  { id: "8", name: "Simba", type: "Chat", breed: "Persan", image: "/images/yosei-g-.jpg", description: "Une boule de poils majestueuse qui apprécie le confort du canapé." },
  { id: "9", name: "Bella", type: "Chien", breed: "Beagle", image: "/images/dog-beagle-01.jpg", description: "Un flair incroyable et un caractère très doux." },
  { id: "10", name: "Max", type: "Chien", breed: "Berger Allemand", image: "/images/dog-shepherd-01.jpg", description: "Fidèle et obéissant, un compagnon de vie exceptionnel." },
  { id: "11", name: "Praline", type: "Rongeur", breed: "Gerbille", image: "/images/gerbil-01.jpg", description: "Vive et amusante à observer dans ses tunnels." },
  { id: "12", name: "Hamtaro", type: "Rongeur", breed: "Hamster Russe", image: "/images/hamster-russian-01.jpg", description: "Petit mais plein de caractère, adore sa roue." },
  { id: "13", name: "Souris", type: "Rongeur", breed: "Domestique", image: "/images/mouse-01.jpg", description: "Discrète et mignonne, idéale pour un premier petit animal." },
  { id: "14", name: "Gribouille", type: "Lapin", breed: "Bélier", image: "/images/rabbit-lop-01.jpg", description: "Ses oreilles tombantes le rendent irrésistible." },
  { id: "15", name: "Nala", type: "Chat", breed: "Maine Coon", image: "/images/cat-maine-01.jpg", description: "Un géant au cœur tendre qui adore l'eau." },
  { id: "16", name: "Saphir", type: "Chat", breed: "Sacré de Birmanie", image: "/images/alin-luna.jpg", description: "Ses yeux bleus profonds vous feront craquer instantanément." },
  { id: "17", name: "Plume", type: "Oiseau", breed: "Perruche", image: "/images/budgie-01.jpg", description: "Apporte de la couleur et des chants mélodieux à votre intérieur." },
  { id: "18", name: "Moustache", type: "Rongeur", breed: "Chinchilla", image: "/images/chinchilla-01.jpg", description: "Possède le pelage le plus doux au monde." },
  { id: "19", name: "Goldy", type: "Chien", breed: "Golden Retriever", image: "/images/dog-golden-01.jpg", description: "La patience incarnée, adore les enfants." },
  { id: "20", name: "Clochette", type: "Hamster", breed: "Doré", image: "/images/hamster-gold-01.jpg", description: "Un petit gourmand qui remplit ses abajoues." },
  { id: "21", name: "Nygi", type: "Chat", breed: "Européen", image: "/images/nygi-.jpg", description: "Un chat plein de vie qui demande beaucoup de jeux." },
  { id: "22", name: "Dumbo", type: "Rongeur", breed: "Rat Dumbo", image: "/images/rat-dumbo-01.jpg", description: "Extrêmement intelligent et proche de l'humain." }
];