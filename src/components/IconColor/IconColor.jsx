import React from 'react'

import angularIcon from './assets/Angular.svg'
import cssIcon from './assets/CSS.svg'
import flutterIcon from './assets/Flutter.svg'
import htmlIcon from './assets/HTML.svg'
import reactIcon from './assets/React.svg'
import gatsbyIcon from './assets/Gatsby.svg'
import vueIcon from './assets/Vue.svg'
import jsIcon from './assets/JS.svg'

const icons = {
    angular: angularIcon,
    css: cssIcon,
    flutter: flutterIcon,
    html: htmlIcon,
    react: reactIcon,
    gatsby: gatsbyIcon,
    vue: vueIcon,
    js: jsIcon
  };

export const IconColor = ({ alt, language }) => {
  const icon = icons[language.toLowerCase()];

  if (!icon) {
    return null; 
  }

  return (
    <img  src={icon} alt={alt} />
  );
};