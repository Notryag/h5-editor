import text from './text.png';

const Text = {
  category: 'base',
  type: 'Text',
  x: 0,
  h: 40,
  display: {
    thum: text,
    name: '文本组件',
  },
  attributes: [
    {
      key: 'text',
      name: '文字',
      type: 'Text',
    },
    {
      key: 'color',
      name: '标题颜色',
      type: 'Color',
    },
    {
      key: 'fontSize',
      name: '字体大小',
      type: 'Number',
    },
    {
      key: 'align',
      name: '对齐方式',
      type: 'Select',
      range: [
        {
          key: 'left',
          text: '左对齐',
        },
        {
          key: 'center',
          text: '居中对齐',
        },
        {
          key: 'right',
          text: '右对齐',
        },
      ],
    },
    {
      key: 'lineHeight',
      name: '行高',
      type: 'Number',
    },
  ],
  defaultValue: {
    text: '我是文本',
    color: 'rgba(60,60,60,1)',
    fontSize: 18,
    align: 'center',
    lineHeight: 2,
  },
};

export default Text;
