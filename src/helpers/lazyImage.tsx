import { useEffect, useState } from 'react';

export default function ThemeToggle({
    src,
    preview,
    className
}: {
    src: string;
    preview: string;
    className?: string;
}) {
    const [usedSrc, setUsedSrc] = useState(preview);
    const [usedEffectStyle, setUsedEffectStyle] = useState({ filter: 'blur(5px)', clipPath: 'inset(0)' });

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            console.log("test");
            setUsedSrc(img.src);
            setUsedEffectStyle({ filter: 'blur(5px)', clipPath: 'inset(0)' });
        }
    }, [src]);

    return <img src={usedSrc} className={className} style={{ transition: 'filter 0.1s ease-out', ...usedEffectStyle }} alt='' />;
}