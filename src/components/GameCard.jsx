import { COLORS, SHADOWS } from "../styles/theme"

export default function GameCard({ game, t, language }) {
  return (
    <a href={game.url} target="_blank" rel="noreferrer" style={styles.card}>
      <img src={game.icon} alt={game.title[language]} style={styles.icon} />

      <div style={styles.content}>
        <div style={styles.title}>{game.title[language]}</div>

        <div style={styles.category}>{t.filters[game.category]}</div>

        <div style={styles.description}>
          {game.description[language]}
        </div>
      </div>

      <div style={styles.playButton}>
        {t.play}
      </div>
    </a>
  )
}

const styles = {
  card: {
    display: "grid",
    gridTemplateColumns: "82px 1fr",
    gap: "14px",
    textDecoration: "none",
    background: COLORS.cardBackground,
    border: `1px solid ${COLORS.border}`,
    borderRadius: "22px",
    padding: "12px",
    marginBottom: "14px",
    boxShadow: SHADOWS.card,
  },

  icon: {
    width: "82px",
    height: "82px",
    borderRadius: "18px",
    objectFit: "cover",
    background: "#000",
    gridColumn: "1",
    gridRow: "1",
  },

  content: {
    minWidth: 0,
    textAlign: "left",
    gridColumn: "2",
    gridRow: "1",
  },

  title: {
    fontSize: "19px",
    fontWeight: "700",
    color: COLORS.text,
    lineHeight: 1.18,
    letterSpacing: "-0.5px",
    textAlign: "left",
  },

  category: {
    marginTop: "6px",
    fontSize: "13px",
    fontWeight: "600",
    color: COLORS.green,
    textAlign: "left",
    letterSpacing: "-0.3px",
  },

  description: {
    marginTop: "10px",
    fontSize: "14px",
    lineHeight: 1.42,
    color: COLORS.subText,
    fontWeight: "400",
    textAlign: "left",
    wordBreak: "keep-all",
  },

  playButton: {
    gridColumn: "1 / -1",
    height: "42px",
    width: "100%",
    borderRadius: "12px",
    background: COLORS.green,
    color: COLORS.white,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "600",
    fontSize: "15px",
    letterSpacing: "0.2px",
  },
}