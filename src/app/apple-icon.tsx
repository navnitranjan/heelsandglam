import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0B0B0C',
          borderRadius: 36,
        }}
      >
        <span
          style={{
            fontSize: 110,
            fontFamily: 'Georgia, serif',
            fontWeight: 300,
            color: '#C5A059',
            lineHeight: 1,
            marginTop: -4,
          }}
        >
          H
        </span>
        <span
          style={{
            fontSize: 26,
            fontFamily: 'Georgia, serif',
            fontWeight: 300,
            color: '#C89E88',
            lineHeight: 1,
            marginTop: -4,
            letterSpacing: 6,
          }}
        >
          G
        </span>
      </div>
    ),
    { ...size }
  );
}
