
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export default {
  namespace: 'editor',
  state: {
    nodeData: [],
    currNode: null,
  },
  reducers: {
    add(state: any) {
      state.num += 1;
    },
    addNode(state: any, { payLoad: node }) {
      const nodeData = state.nodeData.concat(node)
      return { ...state, nodeData }
    },
    removeNode(state: any, { payLoad: node }) {
      return state.nodeData.filter((item: any) => item.id !== node.id)
    }
  },
  effects: {
    *addAsync(_action: any, { put }: any) {
      yield delay(1000);
      yield put({ type: 'add' });
    },
  },
};
