const NAME = 'MENU';

const initialState = {
  menu: [
    {
      id: 'item1',
      label: 'Main',
      link: '',
    },
    {
      id: 'item2',
      label: 'Why',
      link: 'why',
    },
    {
      id: 'item3',
      label: 'About',
      link: 'about',
    },
    {
      id: 'item4',
      label: 'NoMatch',
      link: 'nomatch',
    },
    {
      id: 'item5',
      label: 'Filmz',
      link: 'films',
    },
  ],
};

function reducer(state = initialState) {
  switch (state.type) {
    default:
      return state;
  }
}

export const getMenu = (state) => state[NAME].menu;

export default { [NAME]: reducer };
