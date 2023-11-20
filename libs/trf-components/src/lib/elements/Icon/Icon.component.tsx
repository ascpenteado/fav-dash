import React, { FC, useEffect, useState } from 'react';
import DOMPurify from 'dompurify';
import s from './Icon.style.module.scss';
import classNames from 'classnames';

type IconProps = {
  iconUrl: string;
  withCurrentColor?: boolean;
};

const Icon: FC<IconProps> = ({ iconUrl, withCurrentColor = true }) => {
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

  const wrapperClasses = classNames({
    [s.iconWrapper]: true,
    [s.withCurrentColor]: withCurrentColor,
  });

  return (
    <div
      className={wrapperClasses}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    ></div>
  );
};

export default Icon;
