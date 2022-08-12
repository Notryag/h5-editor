import { useDrag, useDrop } from 'react-dnd';

export default function Container() {

  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    // "type" is required. It is used by the "accept" specification of drop targets.
    type: 'BOX',
    // The collect function utilizes a "monitor" instance (see the Overview for what this is)
    // to pull important pieces of state from the DnD system.
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: 'BOX',
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
  return <div>
    <div className="box" ref={drag}>
      121232323
    </div>
    <div className="drap" ref={drop}></div>
  </div>;
}
