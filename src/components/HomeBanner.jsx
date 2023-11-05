import React from 'react';
import { useContent } from '@croct/plug-react';
import { useNavigate } from 'react-router-dom';

export function HomeBanner() {
  const navigate = useNavigate();
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
  
  const { title, subtitle, cta: { label } } = content;
  
  const handleClick = () => {
    navigate('/cep');
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
