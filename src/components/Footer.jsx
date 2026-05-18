import { COLORS } from "../styles/theme"

export default function Footer({ t, onPageChange }) {
  return (
    <div style={styles.wrap}>
      <button style={styles.link} onClick={() => onPageChange("privacy")}>
        {t.privacy}
      </button>

      <button style={styles.link} onClick={() => onPageChange("contact")}>
        {t.contact}
      </button>

      <button style={styles.link} onClick={() => onPageChange("about")}>
        {t.about}
      </button>

      <button style={styles.link} onClick={() => onPageChange("support")}>
        {t.support}
      </button>
    </div>
  )
}

const styles = {
  wrap: {
    marginTop: "28px",
    paddingBottom: "40px",
    display: "flex",
    justifyContent: "center",
    gap: "8px",
    flexWrap: "wrap",
  },

  link: {
    border: `1px solid ${COLORS.border}`,
    background: "rgba(255,255,255,0.75)",
    color: COLORS.text,
    borderRadius: "10px",
    padding: "10px 12px",
    fontSize: "12px",
    fontWeight: "700",
    cursor: "pointer",
  },
}