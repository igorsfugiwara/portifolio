import { useEffect, useRef } from 'react';

interface PromoVideoProps {
  src: string;
  poster: string;
  label: string;
  className?: string;
}

/**
 * Vídeo de apresentação de projeto (os anúncios verticais): mudo, em loop, com
 * os controles do navegador para ligar o som.
 *
 * Só carrega e toca enquanto está na tela: a home tem dois, e baixar os dois
 * de uma vez (15 MB) para quem nem rolou até eles é gasto à toa. Fora da tela,
 * pausa. Antes de carregar, mostra o pôster (primeiro quadro, ~40 kB).
 *
 * O `muted` vai pelo ref: o React não escreve o atributo, e sem ele o
 * navegador bloqueia o autoplay. Pausado pela pessoa, não volta sozinho. Com
 * movimento reduzido no sistema, não toca sozinho.
 */
export default function PromoVideo({ src, poster, label, className }: PromoVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.muted = true;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let visible = false;
    let pausedByUser = false;
    let pausingOurselves = false;

    const tryPlay = () => {
      if (!visible || pausedByUser || document.hidden || !video.paused) return;
      video.play().catch(() => {
        /* autoplay recusado (economia de dados, por exemplo): fica o botão de play */
      });
    };
    const pauseQuietly = () => {
      if (video.paused) return;
      pausingOurselves = true;
      video.pause();
    };
    const onPause = () => {
      if (!pausingOurselves && !document.hidden) pausedByUser = true;
      pausingOurselves = false;
    };
    const onPlay = () => { pausedByUser = false; };
    const onVisibility = () => (document.hidden ? pauseQuietly() : tryPlay());

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) tryPlay();
      else pauseQuietly();
    }, { threshold: 0.4 });

    observer.observe(video);
    video.addEventListener('canplay', tryPlay);
    video.addEventListener('pause', onPause);
    video.addEventListener('play', onPlay);
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      observer.disconnect();
      video.removeEventListener('canplay', tryPlay);
      video.removeEventListener('pause', onPause);
      video.removeEventListener('play', onPlay);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [src]);

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      poster={poster}
      aria-label={label}
      loop
      playsInline
      controls
      preload="none"
    />
  );
}
