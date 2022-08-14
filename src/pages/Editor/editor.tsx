import React from 'react';
import './editor.less';
import BasicTemplate from '@/components/template';
import TemplateBox from '../TemplateBox/templateBox';
import { useDrop } from 'react-dnd';

export default function Page() {
  let allType = BasicTemplate.map(v => v.type)
  
  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: allType,
      canDrop: () => true,
      drop: (item: { h: number; type: string; x: number }, monitor) => {
        console.log('drap',item);
      },
      collect: monitor => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
        item: monitor.getItem()
      }),
    })
  )
  return (
    <div className="editor-wrap">
      <div className="page-left">
        {BasicTemplate.map((v, i) => {
          return <TemplateBox item={v} key={i}/>;
        })}
      </div>
      <div className="page-center">
        <div id="display-canvas" ref={drop}>
           zhanshiqu456123
        </div>
      </div>
      <div className="page-right">rigth</div>
    </div>
  );
}
