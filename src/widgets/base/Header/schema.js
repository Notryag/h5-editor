import { baseEditData, baseDefaultValue } from '../../common';
import header from './header.png';

const Header = {
  category: 'base',
  type: 'Header',
  x: 0,
  h: 56,
  display: {
    thum: header,
    name: '页头组件',
  },
  editData: [
    ...baseEditData,
    {
      key: 'bgColor',
      name: '背景色',
      type: 'Color',
    },
    {
      key: 'height',
      name: '高度',
      type: 'Number',
    },
    {
      key: 'logo',
      name: 'logo',
      type: 'Upload',
      isCrop: true,
      cropRate: 1000 / 618,
    },
    {
      key: 'logoText',
      name: 'logo文字',
      type: 'Text',
    },
    {
      key: 'color',
      name: '文字颜色',
      type: 'Color',
    },
    {
      key: 'fontSize',
      name: '文字大小',
      type: 'Number',
    },
  ],
  defaultValue: {
    ...baseDefaultValue,
    bgColor: 'rgba(0,0,0,1)',
    logo: [
      {
        uid: '001',
        name: 'image.png',
        status: 'done',
        url: 'http://49.234.61.19/uploads/3_1740be8a482.png',
      },
    ],
    logoText: '页头Header',
    fontSize: 20,
    color: 'rgba(255,255,255,1)',
    height: 50,
  },
};

export default Header;
