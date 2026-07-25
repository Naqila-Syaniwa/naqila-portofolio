import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Naqila Syaniwa — Portofolio';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
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
                    backgroundColor: '#ffffff',
                    color: '#1a1a1a',
                }}
            >
                <div style={{ display: 'flex', fontSize: 80, fontWeight: 500 }}>
                    <span style={{ fontStyle: 'italic', fontFamily: 'serif' }}>N</span>
                    <span>&nbsp;aqila&nbsp;&nbsp;</span>
                    <span style={{ fontStyle: 'italic', fontFamily: 'serif' }}>S</span>
                    <span>&nbsp;yaniwa</span>
                </div>
                <div
                    style={{
                        marginTop: 12,
                        fontSize: 40,
                        fontStyle: 'italic',
                        fontFamily: 'serif',
                        color: '#1c6fd1',
                    }}
                >
                    Portofolio
                </div>
                <div style={{ marginTop: 28, fontSize: 24, color: '#6b6b6b' }}>
                    Software Engineer · UI/UX Designer · Game Developer
                </div>
            </div>
        ),
        { ...size }
    );
}