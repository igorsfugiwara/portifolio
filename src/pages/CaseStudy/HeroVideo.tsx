import { useEffect, useRef } from 'react';

interface HeroVideoProps {
  src: string;
  label: string;
}

/**
 * Vídeo de apresentação ao lado do hero: começa mudo e em loop, com os
 * controles do navegador para ligar o som.
 *
 * O `muted` vai pelo ref, não como atributo: o React não escreve `muted` no
 * HTML (nem no pré-renderizado), e sem ele o navegador bloqueia o autoplay.
 * Quem pediu movimento reduzido no sistema vê o vídeo parado no primeiro
 * quadro e dá play quando quiser.
 */
export default function HeroVideo({ src, label }: HeroVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.muted = true;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    /* Tenta tocar agora, quando der para tocar e quando a aba voltar a ficar
       visível: o navegador segura vídeo em aba escondida e antes de ter dados,
       e um play() só, cedo demais, some sem erro. Depois que a pessoa pausa,
       não volta a tocar sozinho. */
    let pausedByUser = false;
    const tryPlay = () => {
      if (pausedByUser || document.hidden || !video.paused) return;
      video.play().catch(() => {
        /* autoplay recusado (economia de dados, por exemplo): fica o botão de play */
      });
    };
    const onPause = () => { if (!document.hidden) pausedByUser = true; };
    const onPlay = () => { pausedByUser = false; };

    tryPlay();
    video.addEventListener('canplay', tryPlay);
    video.addEventListener('pause', onPause);
    video.addEventListener('play', onPlay);
    document.addEventListener('visibilitychange', tryPlay);
    return () => {
      video.removeEventListener('canplay', tryPlay);
      video.removeEventListener('pause', onPause);
      video.removeEventListener('play', onPlay);
      document.removeEventListener('visibilitychange', tryPlay);
    };
  }, [src]);

  return (
    <video
      ref={ref}
      className="case__video"
      // #t=0.1: sem pôster, mostra o primeiro quadro em vez de um retângulo preto
      src={`${src}#t=0.1`}
      aria-label={label}
      loop
      playsInline
      controls
      preload="metadata"
    />
  );
}
