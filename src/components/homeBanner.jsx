import { useContent } from '@croct/plug-react';

export function HomeBanner() {
  const content = useContent('homepage-hero', {
    initial: null,
    fallback: {
      title: 'Your static title',
      subtitle: 'Your static subtitle',
      cta: 'Your static CTA',
    },
  });

  if (content === null) {
    return <div>🪄 Personalizing...</div>;
  }

  const {title, subtitle, cta: {label} } = content

  const handleClick = () => {
    window.croct.track('banner-clicked', {
      banner: 'homepage-hero',
    });
  };

  return (
    <div id="hero-banner">
      <h1>{title}</h1>
      <p className="subtitle">{subtitle}</p>
      <button className="cta" onClick={() => handleClick()}>
        {label}
      </button>
    </div>
  );
}
