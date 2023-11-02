import { useContent } from '@croct/plug-react';
import AppContext from '../context/AppContext';
import { useContext } from 'react';

export function HomeBanner() {
  const { banner, setBanner } = useContext(AppContext);
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
    setBanner(false);
  };

  return banner && (
    <div id="hero-banner">
      <h1>{title}</h1>
      <p className="subtitle">{subtitle}</p>
      <button className="cta" onClick={() => handleClick()}>
        {label}
      </button>
    </div>
  )
  
}
