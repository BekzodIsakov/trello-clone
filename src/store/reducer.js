const initialState = {
  tasks: {
    'task-1': {
      id: 'task-1',
      content: 'Take out the garbage',
      tags: ['javascript', 'css'],
    },
    'task-2': {
      id: 'task-2',
      content: 'Watch my favourite show',
      tags: ['html', 'typecript'],
    },
    'task-3': {
      id: 'task-3',
      content: 'Charge my phone',
      tags: ['typescript', 'github'],
    },
    'task-4': {
      id: 'task-4',
      content: 'Cook dinner',
      tags: ['bitbucket', 'trello'],
    },
    'task-5': {
      id: 'task-5',
      content: 'Read a book',
      tags: ['html', 'javascript'],
    },
    'task-6': {
      id: 'task-6',
      content: 'Play a videogame',
      tags: ['sass', 'github'],
    },
    'task-7': {
      id: 'task-7',
      content: 'Workout',
      tags: ['bitbucket', 'trello'],
    },
    'task-8': {
      id: 'task-8',
      content: 'Fix the bed',
      tags: ['bitbucket', 'trello'],
    },
    'task-9': {
      id: 'task-9',
      content: 'Make a cake',
      tags: ['bitbucket', 'trello'],
    },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To do',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
    },
    'column-2': {
      id: 'column-2',
      title: 'In progress',
      taskIds: ['task-5', 'task-6', 'task-7'],
    },
    'column-3': {
      id: 'column-3',
      title: 'Done',
      taskIds: ['task-8', 'task-9'],
    },
  },
  columnOrder: ['column-1', 'column-2', 'column-3'],
  users: {
    'user-1': {
      id: 'user-1',
      name: 'John Doe',
      avatar: 'man_1',
      taskIds: ['task-1', 'task-2', 'task-4'],
    },
    'user-2': {
      id: 'user-2',
      name: 'Philip Lahm',
      avatar: 'man_2',
      taskIds: ['task-3', 'task-1'],
    },
    'user-3': {
      id: 'user-3',
      name: 'Jack Layman',
      avatar: 'man_3',
      taskIds: ['task-4'],
    },
    'user-4': {
      id: 'user-4',
      name: 'Sandra Bullock',
      avatar: 'woman_4',
      taskIds: ['task-2'],
    },
  },
  tags: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DROP_TASK':
      return action.newState;
    case 'ADD_LIST':
      let { column, title } = action;
      const newColumnOrder = [...state.columnOrder, column];
      return {
        ...state,
        columns: {
          ...state.columns,
          [column]: {
            id: column,
            title,
            taskIds: [],
          },
        },
        columnOrder: [...newColumnOrder],
      };
    case 'ADD_TASK':
      return action.newState;
    case 'ADD_TAGS':
      return {
        ...state,
        tags: action.newTags,
      };
    case 'ASSIGN_TASK':
      return action.newState;
    default:
      return state;
  }
};
