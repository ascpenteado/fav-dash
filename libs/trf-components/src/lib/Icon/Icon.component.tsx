import React, { FC, useEffect, useState } from 'react';
import DOMPurify from 'dompurify';
import s from './Icon.style.module.scss';

type IconProps = {
  iconUrl: string;
};

const Icon: FC<IconProps> = ({ iconUrl }) => {
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
