/**
 * compact: true
 */
import { DraggablePanel } from '@ant-design/pro-editor';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox style={{ height: 300 }}>
    <DraggablePanel placement={'top'} maxHeight={250} style={{ width: '100%', padding: 12 }}>
      顶部面板
    </DraggablePanel>
    <div style={{ flex: 1, padding: 12 }}>内容</div>
  </Flexbox>
);
