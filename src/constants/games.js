import { IMAGES } from "./images"

export const GAMES = [
  {
    id: "memory-trap",
    title: {
      ko: "3초 기억 트랩",
      en: "3 Second Memory Trap",
    },
    description: {
      ko: "3초 안에 카드를 기억하고 함정을 피하세요.",
      en: "Memorize the cards in 3 seconds and survive the trap.",
    },
    icon: IMAGES.game.memoryTrap,
    url: "https://3-second-memory-trap.vercel.app",
    category: "MEMORY",
  },
  {
    id: "photo-puzzle",
    title: {
      ko: "내 사진 퍼즐",
      en: "My Photo Puzzle",
    },
    description: {
      ko: "원하는 사진으로 나만의 퍼즐을 만들어보세요.",
      en: "Create your own puzzle using your favorite photos.",
    },
    icon: IMAGES.game.photoPuzzle,
    url: "https://my-photo-puzzle.vercel.app",
    category: "PUZZLE",
  },
  {
    id: "horse-betting",
    title: {
      ko: "덕픽 경마 시뮬레이터",
      en: "DuckPick Horse",
    },
    description: {
      ko: "기수를 선택하고 레이스 시뮬레이션에 도전하세요.",
      en: "Choose your horse and challenge the race simulator.",
    },
    icon: IMAGES.game.horseBetting,
    url: "https://duckpick-horse.vercel.app",
    category: "SIMULATION",
  },
]