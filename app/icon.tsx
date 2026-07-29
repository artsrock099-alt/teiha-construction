import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Favicon generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1e3a5f 0%, #d4a017 100%)",
          borderRadius: 6,
          fontSize: 18,
          fontWeight: 800,
          color: "white",
          fontFamily: "Arial",
        }}
      >
        T
      </div>
    ),
    {
      ...size,
    }
  );
}
