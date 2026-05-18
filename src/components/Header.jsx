import { IMAGES } from "../constants/images"
import { COLORS, SHADOWS } from "../styles/theme"

export default function Header({ t, onToggleLanguage, onInstall, onShare }) {
    return (
        <div style={styles.wrap}>
            <div style={styles.topRow}>
                <button style={styles.installBtn} onClick={onInstall}>
                    {t.install}
                </button>
                <button style={styles.shareBtn} onClick={onShare}>
                    {t.share}
                </button>

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
        gap: "8px",
        marginBottom: "10px",
    },

    langBtn: {
        border: `1px solid ${COLORS.border}`,
        background: "rgba(255,255,255,0.9)",
        color: COLORS.text,
        borderRadius: "10px",
        padding: "7px 10px",
        fontSize: "11px",
        fontWeight: "700",
        cursor: "pointer",
      
        height: "32px",
        minWidth: "52px",
      
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
    installBtn: {
        border: "1px solid #d7efb2",
        background: "#eef9d8",
        color: "#5f8f1f",
        borderRadius: "10px",
        padding: "7px 10px",
        fontSize: "11px",
        fontWeight: "700",
        cursor: "pointer",
      
        height: "32px",
        minWidth: "52px",
      
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    shareBtn: {
        border: "1px solid #e6d8ff",
        background: "#f3ecff",
        color: "#6b4fcf",
        borderRadius: "10px",
        padding: "7px 10px",
        fontSize: "11px",
        fontWeight: "700",
        cursor: "pointer",
      
        height: "32px",
        minWidth: "52px",
      
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
}