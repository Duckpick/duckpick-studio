import { useState } from "react"

import HomeScreen from "./screens/HomeScreen"
import { TEXT } from "./constants/text"
import { COLORS, LAYOUT, FONT } from "./styles/theme"

export default function App() {
  const [page, setPage] = useState("home")
  const [language, setLanguage] = useState("ko")
  const t = TEXT[language]

  return (
    <div style={styles.page}>
      <div style={styles.app}>
        {page === "home" && (
          <HomeScreen
            onPageChange={setPage}
            language={language}
            setLanguage={setLanguage}
          />
        )}

        {page !== "home" && (
          <div style={styles.infoPage}>
            <div style={styles.pageTabs}>
              <button style={styles.homeBtn} onClick={() => setPage("home")}>
                Home
              </button>
              <button style={styles.tabBtn} onClick={() => setPage("about")}>
                {t.about}
              </button>

              <button style={styles.tabBtn} onClick={() => setPage("privacy")}>
                {t.privacy}
              </button>

              <button style={styles.tabBtn} onClick={() => setPage("contact")}>
                {t.contact}
              </button>

              <button style={styles.tabBtn} onClick={() => setPage("support")}>
                {t.support}
              </button>

            </div>

            <div style={styles.contentBox}>
              {page === "about" && (
                <>
                  <h1 style={styles.title}>{t.pages.aboutTitle}</h1>
                  <p style={styles.text}>{t.pages.about1}</p>
                  <p style={styles.text}>{t.pages.about2}</p>
                  <p style={styles.text}>{t.pages.about3}</p>
                </>
              )}

              {page === "privacy" && (
                <>
                  <h1 style={styles.title}>{t.pages.privacyTitle}</h1>
                  <p style={styles.text}>{t.pages.privacy1}</p>
                  <p style={styles.text}>{t.pages.privacy2}</p>
                  <p style={styles.text}>{t.pages.privacy3}</p>
                  <p style={styles.text}>{t.pages.privacy4}</p>
                </>
              )}

              {page === "contact" && (
                <>
                  <h1 style={styles.title}>{t.pages.contactTitle}</h1>
                  <p style={styles.text}>{t.pages.contact1}</p>

                  <div style={styles.emailBox}>
                    {t.pages.contactEmail}
                  </div>

                  <p style={styles.text}>{t.pages.contact2}</p>
                </>
              )}

              {page === "support" && (
                <>
                  <h1 style={styles.title}>{t.pages.supportTitle}</h1>
                  <p style={styles.text}>{t.pages.support1}</p>
                  <p style={styles.text}>{t.pages.support2}</p>
                  <p style={styles.text}>{t.pages.support3}</p>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const styles = {
  page: {
    width: "100vw",
    minHeight: "100vh",
    background: COLORS.background,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    fontFamily: FONT.family,
    letterSpacing: "-0.2px",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    textRendering: "optimizeLegibility",
  },

  app: {
    width: "100%",
    maxWidth: `${LAYOUT.appWidth}px`,
    minHeight: `${LAYOUT.appMinHeight}px`,
    background: COLORS.appBackground,
    padding: "18px",
    boxSizing: "border-box",
  },

  infoPage: {
    paddingTop: "20px",
  },

  pageTabs: {
    display: "flex",
    justifyContent: "center",
    gap: "6px",
    marginBottom: "16px",
    flexWrap: "wrap",
  },

  tabBtn: {
    border: `1px solid ${COLORS.border}`,
    background: "#fff",
    color: COLORS.text,
    borderRadius: "10px",
    padding: "8px 10px",
    fontWeight: "700",
    fontSize: "13px",
    whiteSpace: "nowrap",
    cursor: "pointer",
  },

  contentBox: {
    marginTop: "10px",
    padding: "22px",
    borderRadius: "24px",
    background: "rgba(255,255,255,0.72)",
    border: `1px solid ${COLORS.border}`,
  },

  title: {
    fontSize: "30px",
    fontWeight: "700",
    color: COLORS.text,
    textAlign: "center",
    marginBottom: "18px",
    letterSpacing: "-0.8px",
  },

  text: {
    marginTop: "14px",
    color: COLORS.subText,
    lineHeight: 1.75,
    fontSize: "15px",
    fontWeight: "500",
    wordBreak: "keep-all",
  },

  emailBox: {
    marginTop: "18px",
    padding: "16px",
    borderRadius: "16px",
    background: "#ffffff",
    border: `1px solid ${COLORS.border}`,
    textAlign: "center",
    fontSize: "18px",
    fontWeight: "700",
    color: COLORS.text,
  },
  homeBtn: {
    border: `1px solid ${COLORS.green}`,
    background: COLORS.green,
    color: COLORS.white,
    borderRadius: "10px",
    padding: "8px 10px",
    fontWeight: "700",
    fontSize: "13px",
    whiteSpace: "nowrap",
    cursor: "pointer",
  },
}