import { useEffect } from 'react';

/**
 * Anima os elementos .reveal conforme entram na tela.
 *
 * Duas garantias que a versão anterior não dava:
 * 1. O conteúdo só fica escondido depois que o JS assume (classe reveal-ready no
 *    <html>). Sem JS, ou se algo quebrar antes daqui, tudo aparece normalmente.
 * 2. Elementos criados depois — trocar de idioma recria cards — também são
 *    observados, via MutationObserver. Antes eles ficavam presos em opacity: 0,
 *    deixando um buraco em branco no meio da grade.
 */
export function useReveal() {
  useEffect(() => {
    const raiz = document.documentElement;

    // Sem IntersectionObserver ou com movimento reduzido: nada de animação.
    const movimentoReduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (typeof IntersectionObserver === 'undefined' || movimentoReduzido) {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('reveal--active'));
      return;
    }

    raiz.classList.add('reveal-ready');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const observar = (el: Element) => {
      if (!el.classList.contains('reveal--active')) observer.observe(el);
    };

    document.querySelectorAll('.reveal').forEach(observar);

    // Pega o que o React montar depois (troca de idioma, listas recriadas)
    const mutacoes = new MutationObserver((registros) => {
      registros.forEach((registro) => {
        registro.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          if (node.classList.contains('reveal')) observar(node);
          node.querySelectorAll?.('.reveal').forEach(observar);
        });
      });
    });

    mutacoes.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutacoes.disconnect();
      raiz.classList.remove('reveal-ready');
    };
  }, []);
}
