import { IMAGES } from "../constants/images"
import { COLORS, SHADOWS } from "../styles/theme"

export default function Header({ t, onToggleLanguage }) {
  return (
    <div style={styles.wrap}>
      <div style={styles.topRow}>
        <button style={styles.langBtn} onClick={onToggleLanguage}>
          {t.langButton}
        </button>
      </div>

      <div style={styles.brandBox}>
        <img src={IMAGES.brand.symbol} alt="DuckPick" style={styles.logo} />
        <div style={styles.title}>{t.title}</div>
      </div>

      <div style={styles.descBox}>{t.desc}</div>
    </div>
  )
}

const styles = {
  wrap: {
    marginBottom: "20px",
  },

  topRow: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "10px",
  },

  langBtn: {
    border: `1px solid ${COLORS.border}`,
    background: "rgba(255,255,255,0.8)",
    color: COLORS.text,
    borderRadius: "10px",
    padding: "7px 10px",
    fontSize: "11px",
    fontWeight: "900",
    cursor: "pointer",
  },

  brandBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },

  logo: {
    width: "52px",
    height: "52px",
    objectFit: "contain",
  },

  title: {
    fontSize: "29px",
    fontWeight: "700",
    color: COLORS.text,
    lineHeight: 1,
    letterSpacing: "-0.8px",
  },

  descBox: {
    marginTop: "14px",
    padding: "14px",
    borderRadius: "18px",
    background: "rgba(255,255,255,0.75)",
    border: `1px solid ${COLORS.border}`,
    color: COLORS.subText,
    fontSize: "14px",
    lineHeight: 1.45,
    letterSpacing: "-0.2px",
    fontWeight: "500",
    textAlign: "center",
    boxShadow: SHADOWS.card,
  },
}