import React from 'react';
import styles from './demo.less';
import { useDrop, useDrag, DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const ItemTypes = {
  APP: 'demo-app'
}

const Child = () => {
  const [{isDragging},drag, dragPreview] = useDrag(() => ({
    type: ItemTypes.APP,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return <div className={styles.child} style={{ opacity: isDragging ? 0.5 : 1 }} ref={drag}>
    Child
  </div>
}

const Container = () => {
  const [{ isOver }, drag] = useDrop(() => ({
    accept: ItemTypes.APP,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
      item: monitor.getItem(),
    }),
  }))

  return <div className={styles.container} ref={drag} style={{ background: isOver ? '#FFAA00' : '#FFFFFF' }}>
    Container
  </div>
}

export default () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.app}>
        <Container />
        <Child />
      </div>
    </DndProvider>
  );
}