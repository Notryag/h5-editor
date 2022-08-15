import React, { useState } from 'react';
import './editor.less';
import BasicTemplate from '@/components/template';
import Workspace from '@/components/Workspace';

import TemplateBox from '../TemplateBox/templateBox';
import { useDrag, useDrop } from 'react-dnd';
import { useDispatch, useSelector } from 'umi';

export default function Page() {
  const dispatch = useDispatch()
  let allType = BasicTemplate.map(v => v.type)
  
  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: allType,
      canDrop: () => true,
      drop: (item: { h: number; type: string; x: number }, monitor) => {
        dispatch({
          type: 'editor/addNode',
          payLoad: {
            ...item
          }
        })
      },
      collect: monitor => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
        item: monitor.getItem()
      }),
    })
  )

  // const state = useSelector(state => state.count)
  

  return (
    <div className="editor-wrap">
      <div className="page-left">
        {BasicTemplate.map((v, i) => {
          return <TemplateBox item={v} key={i}/>;
        })}
      </div>
      <div className="page-center">
        <div id="display-canvas" ref={drop}>
           <Workspace/>
        </div>
      </div>
      <div className="page-right">rigth</div>
    </div>
  );
}
