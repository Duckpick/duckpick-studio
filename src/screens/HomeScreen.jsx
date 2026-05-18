import { useState } from "react"

import Header from "../components/Header"
import GameCard from "../components/GameCard"
import Footer from "../components/Footer"

import { GAMES } from "../constants/games"
import { TEXT } from "../constants/text"
import { COLORS } from "../styles/theme"

const FILTERS = ["ALL", "MEMORY", "PUZZLE", "SIMULATION"]

export default function HomeScreen({
    onPageChange,
    language,
    setLanguage,
    installPrompt,
    setInstallPrompt,
  }) {
    const [filter, setFilter] = useState("ALL")

    const t = TEXT[language]

    const filteredGames =
        filter === "ALL"
            ? GAMES
            : GAMES.filter((game) => game.category === filter)

    return (
        <>
<Header
  t={t}
  installPrompt={installPrompt}
  onInstall={async () => {
    if (!installPrompt) {
      alert(
        language === "ko"
          ? "브라우저 메뉴에서 '홈 화면에 추가'를 선택하세요."
          : "Use your browser menu and choose 'Add to Home Screen'."
      )
      return
    }

    installPrompt.prompt()
    await installPrompt.userChoice
    setInstallPrompt(null)
  }}
  onShare={async () => {
    const shareData = {
      title: "DuckPick Studio",
      text:
        language === "ko"
          ? `설치 없이 바로 즐기는 다양한 모바일 웹게임을 플레이해보세요.\n\n${window.location.origin}`
          : `Play various mobile web games instantly with no installation required.\n\n${window.location.origin}`,
    }
  
    if (navigator.share) {
      try {
        await navigator.share(shareData)
      } catch {}
    } else {
      await navigator.clipboard.writeText(
        shareData.text
      )
  
      alert(
        language === "ko"
          ? "링크가 복사되었습니다."
          : "Link copied."
      )
    }
  }}
  onToggleLanguage={() => {
    setLanguage((prev) => (prev === "ko" ? "en" : "ko"))
  }}
/>

<div style={styles.filterSelectWrap}>
  <select
    value={filter}
    onChange={(e) => setFilter(e.target.value)}
    style={styles.filterSelect}
  >
    {FILTERS.map((item) => (
      <option key={item} value={item}>
        {t.filters[item]}
      </option>
    ))}
  </select>
  <div style={styles.selectArrow}>
  ▼
</div>
</div>

            {filteredGames.map((game) => (
                <GameCard
                    key={game.id}
                    game={game}
                    t={t}
                    language={language}
                />
            ))}

            <Footer t={t} onPageChange={onPageChange} />
        </>
    )
}

const styles = {
    filterRow: {
        display: "flex",
        gap: "8px",
        marginBottom: "18px",
        overflowX: "scroll",
        overflowY: "hidden",
        paddingBottom: "8px",
        WebkitOverflowScrolling: "touch",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        maxWidth: "100%",
        cursor: "grab",
    },

    filterBtn: {
        whiteSpace: "nowrap",
        flexShrink: 0,
        border: `1px solid ${COLORS.border}`,
        background: "rgba(255,255,255,0.7)",
        color: COLORS.text,
        borderRadius: "10px",
        padding: "9px 14px",
        fontSize: "12px",
        fontWeight: "900",
        cursor: "pointer",
    },

    filterBtnActive: {
        background: COLORS.green,
        color: COLORS.white,
        border: `1px solid ${COLORS.green}`,
    },
    filterSelectBox: {
        marginBottom: "18px",
      },
      
      filterSelect: {
        width: "100%",
        height: "48px",
        border: `1px solid ${COLORS.border}`,
        borderRadius: "16px",
        background: "#ffffff",
        color: COLORS.text,
        padding: "0 16px",
        fontSize: "15px",
        fontWeight: "700",
        outline: "none",
        appearance: "none",
        WebkitAppearance: "none",
        MozAppearance: "none",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        cursor: "pointer",
      },
      filterSelectWrap: {
        position: "relative",
        marginBottom: "18px",
      },
      selectArrow: {
        position: "absolute",
        right: "16px",
        top: "50%",
        transform: "translateY(-50%)",
        pointerEvents: "none",
        fontSize: "12px",
        color: COLORS.subText,
      },
}