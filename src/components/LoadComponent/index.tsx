import React from 'react';
import styles from './index.less';
import Loadable from 'react-loadable';

export default function LoadComponent(props:any) {
  const {type, catetory} = props

  const DynamicComponent = (type, catetory) => {
    return Loadable({
      // loader: () => import(`@/`)
    })  
  }


  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
