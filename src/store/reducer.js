const initialState = {
  tasks: {
    'task-1': {
      id: 'task-1',
      content: 'Take out the garbage',
      tags: ['javascript', 'css'],
      assignees: [],
    },
    'task-2': {
      id: 'task-2',
      content: 'Watch my favourite show',
      tags: ['html', 'typecript'],
      assignees: [],
    },
    'task-3': {
      id: 'task-3',
      content: 'Charge my phone',
      tags: ['typescript', 'github'],
      assignees: [],
    },
    'task-4': {
      id: 'task-4',
      content: 'Cook dinner',
      tags: ['bitbucket', 'trello'],
      assignees: [],
    },
    'task-5': {
      id: 'task-5',
      content: 'Read a book',
      tags: ['html', 'javascript'],
      assignees: [],
    },
    'task-6': {
      id: 'task-6',
      content: 'Play a videogame',
      tags: ['sass', 'github'],
      assignees: [],
    },
    'task-7': {
      id: 'task-7',
      content: 'Workout',
      tags: ['bitbucket', 'trello'],
      assignees: [],
    },
    'task-8': {
      id: 'task-8',
      content: 'Fix the bed',
      tags: ['bitbucket', 'trello'],
      assignees: [],
    },
    'task-9': {
      id: 'task-9',
      content: 'Make a cake',
      tags: ['bitbucket', 'trello'],
      assignees: [],
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
      taskIds: [],
    },
    'user-2': {
      id: 'user-2',
      name: 'Philip Lahm',
      avatar: 'man_2',
      taskIds: [],
    },
    'user-3': {
      id: 'user-3',
      name: 'Jack Layman',
      avatar: 'man_3',
      taskIds: [],
    },
    'user-4': {
      id: 'user-4',
      name: 'Sandra Bullock',
      avatar: 'woman_4',
      taskIds: [],
    },
  },
  tags: [],
  selectedTag: [],
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
    case 'REMOVE_SELECTED_TAG':
      return {
        ...state,
        selectedTag: 'empty',
      };
    case 'SELECT_TAG':
      let { newSelectedTag } = action;
      return {
        ...state,
        selectedTag: newSelectedTag,
      };
    default:
      return state;
  }
};
