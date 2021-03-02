export default {
  get: {
    _embedded: {
      items: [
        {
          code: 'testPM',
          enabled: true,
          family: 'tables',
          categories: ['diningtables'],
        },
      ],
    },
  },
  getAll: {
    items_count: 105,
    _embedded: {
      items: [
        {
          code: 'testPM',
          enabled: true,
          family: 'tables',
          categories: ['diningtables'],
        },
      ],
    },
  },
  getOne: {
    code: 'testPM',
    enabled: true,
    family: 'tables',
    categories: ['diningtables'],
  },
};
