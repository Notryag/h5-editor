import styles from './index.less';
import Editor from './Editor/editor';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export default function IndexPage() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Editor></Editor>
    </DndProvider>
  );
}
