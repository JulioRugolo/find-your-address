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

  const {title, subtitle, cta: {link, label} } = content

  return (
    <div id="hero-banner">
      <h1>{title}</h1>
      <p className="subtitle">{subtitle}</p>
      <a className="cta" href={link}>
        {label}
      </a>
    </div>
  );
}
