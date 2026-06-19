import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
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
        }}
      >
        <span
          style={{
            fontSize: 22,
            fontFamily: 'Georgia, serif',
            fontWeight: 300,
            color: '#C5A059',
            lineHeight: 1,
            marginTop: -1,
          }}
        >
          H
        </span>
      </div>
    ),
    { ...size }
  );
}
