import { ImageResponse } from "next/og";
import { SITE_CONFIG } from "@/lib/constants";

export const alt = "TEI-HA Construction Services Ltd";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(160deg, #0c1929 0%, #1a365d 40%, #1e3a5f 60%, #0f172a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 80px",
          position: "relative",
        }}
      >
        {/* Blueprint grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.06,
            backgroundImage:
              "linear-gradient(rgba(14,165,233,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.3) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        {/* Architectural line accent - left */}
        <div
          style={{
            position: "absolute",
            left: "0",
            top: "0",
            width: "4px",
            height: "100%",
            background: "linear-gradient(180deg, #0ea5e9 0%, #22c55e 50%, #8b5cf6 100%)",
          }}
        />
        {/* Floating building silhouette */}
        <div
          style={{
            position: "absolute",
            right: "60px",
            bottom: "60px",
            width: "200px",
            height: "160px",
            opacity: 0.1,
            borderLeft: "3px solid #0ea5e9",
            borderRight: "3px solid #0ea5e9",
            borderBottom: "3px solid #0ea5e9",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <div style={{ width: "30%", height: "40%", borderLeft: "2px solid #22c55e", borderRight: "2px solid #22c55e", borderBottom: "2px solid #22c55e", opacity: 0.6 }} />
          <div style={{ width: "60%", height: "30%", borderLeft: "2px solid #22c55e", borderRight: "2px solid #22c55e", borderBottom: "2px solid #22c55e", opacity: 0.4 }} />
        </div>
        {/* Gradient accents */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            left: "-80px",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(14,165,233,0.15) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-60px",
            right: "-60px",
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 70%)",
          }}
        />
        {/* Logo badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            marginBottom: "20px",
            padding: "10px 24px",
            borderRadius: "50px",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #0ea5e9, #22c55e)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              fontWeight: 800,
              color: "white",
            }}
          >
            TH
          </div>
          <span style={{ fontSize: "16px", fontWeight: 600, color: "#94a3b8", letterSpacing: "0.05em" }}>
            CONSTRUCTION SERVICES
          </span>
        </div>
        {/* Main Title */}
        <h1
          style={{
            fontSize: "52px",
            fontWeight: 800,
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.15,
            marginBottom: "12px",
            maxWidth: "850px",
            letterSpacing: "-0.02em",
          }}
        >
          {SITE_CONFIG.name}
        </h1>
        {/* Tagline with accent */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "24px",
          }}
        >
          <div style={{ width: "30px", height: "2px", background: "#0ea5e9" }} />
          <span style={{ fontSize: "18px", fontWeight: 500, color: "#22c55e", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            {SITE_CONFIG.tagline}
          </span>
          <div style={{ width: "30px", height: "2px", background: "#22c55e" }} />
        </div>
        {/* Location */}
        <p
          style={{
            fontSize: "18px",
            color: "#64748b",
            textAlign: "center",
          }}
        >
          {SITE_CONFIG.business.address.addressLocality}, {SITE_CONFIG.business.address.addressRegion},{" "}
          {SITE_CONFIG.business.address.addressCountry}
        </p>
        {/* Bottom accent bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "linear-gradient(90deg, #0ea5e9, #22c55e, #8b5cf6)",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
