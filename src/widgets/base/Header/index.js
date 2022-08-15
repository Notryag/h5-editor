import React from 'react';
import styles from './index.less';

const Header = (props) => {
  const { bgColor, logo, logoText, fontSize, color } = props;
  return (
    <header
      className={styles.header}
      style={{
        backgroundColor: bgColor,
        overflow: 'hidden',
        position: 'absolute',
        width: `${props.baseWidth}%`,
        height: `${props.baseHeight}%`,
        borderRadius: props.baseRadius,
        transform: `translate(${props.baseLeft}px,${props.baseTop}px) 
        scale(${props.baseScale / 100}) 
        rotate(${props.baseRotate}deg)`,
      }}
    >
      <div className={styles.logo}>
        <img src={logo && logo[0].url} alt={logoText} />
      </div>
      <div className={styles.title} style={{ fontSize, color }}>
        {logoText}
      </div>
    </header>
  );
};

export default Header;
