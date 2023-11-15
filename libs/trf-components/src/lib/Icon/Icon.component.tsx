import React, { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';
import s from './Icon.style.module.scss';

type IconProps = {
  iconUrl: string;
  altText?: string;
};

const Icon: React.FC<IconProps> = ({ iconUrl, altText = 'Icon' }) => {
  const [svgContent, setSvgContent] = useState<string>('');

  useEffect(() => {
    const fetchIcon = async () => {
      try {
        const response = await fetch(iconUrl);
        const svgText = await response.text();
        const sanitizedSvg = DOMPurify.sanitize(svgText);
        setSvgContent(sanitizedSvg);
      } catch (error) {
        console.error('Error fetching SVG:', error);
      }
    };

    fetchIcon();
  }, [iconUrl]);

  return (
    <div
      className={s.iconWrapper}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    ></div>
  );
};

export default Icon;
