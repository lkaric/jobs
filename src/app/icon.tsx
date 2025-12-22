import { ImageResponse } from 'next/og';

export const size = {
  width: 32,
  height: 32,
};

export const contentType = 'image/png';

const Icon = (): ImageResponse => {
  return new ImageResponse(
    <div
      style={{
        fontSize: 24,
        background: 'black',
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
      }}
    >
      J
    </div>,
    {
      ...size,
    },
  );
};

export default Icon;
