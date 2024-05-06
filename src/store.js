export let color = [
  {
    id: 1,
    color: 'grey',
    hex: '#C9D1D3'
  },
  {
    id: 2,
    color: 'green',
    hex: '#42B883'
  },
  {
    id: 3,
    color: 'blue',
    hex: '#64C4ED'
  },
  {
    id: 4,
    color: 'pink',
    hex: '#FFBBCC'
  },
  {
    id: 5,
    color: 'lime',
    hex: '#B6E6BD'
  },
  {
    id: 6,
    color: 'purple',
    hex: '#C355F5'
  },
  {
    id: 7,
    color: 'black',
    hex: '#110133'
  },
  {
    id: 8,
    color: 'red',
    hex: '#FF6464'
  },
]

export let test = [
  {
    id: 1,
    color: color[7].color,
    name: 'Фронтенд',
    tasks: [
      {
        id: 1,
        icon: 'check',
        name: 'Изучить JavaScript',
        done: false
      },
      {
        id: 2,
        icon: 'check',
        name: 'Изучить паттерны проектирования',
        done: true
      },
      {
        id: 3,
        icon: 'check',
        name: 'ReactJS Hooks (useState, useReducer, useEffect и т.д.)',
        done: false
      },
    ],
    active: true
  },
  {
    id: 2,
    color: color[2].color,
    name: 'Покупки',
    tasks: [
      {
        id: 1,
        icon: 'check',
        name: 'Изучить Покупки',
        done: false
      },
    ],
    active: false
  },
]

console.log(test);