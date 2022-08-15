import React from 'react';
import { useDrag } from 'react-dnd';
import { useSelector } from 'umi';
import schemaH5 from '../../components/schema';
import styles from './templateBox.less';

export default function Page(props: any) {
  const nodeData = useSelector(state => state.editor)
  console.log('%c [ nodeData ]-9', 'font-size:13px; background:#e1cc5a; color:#ffff9e;', nodeData)



  let { item } = props
  
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    type: item.type,
    item: item,
    confit: schemaH5[item.type].config,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <>
      <div className="module" ref={drag} style={{opacity: isDragging ? 0.4 : 1}}>
        <div className="module-content"></div>
        <div className="module-title">{item.displayName}</div>
      </div>
    </>
  );
}
