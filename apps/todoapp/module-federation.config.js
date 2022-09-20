module.exports = {
  name: 'todoapp',
  exposes: {
    './Module': 'apps/todoapp/src/app/remote-entry/entry.module.ts',
  },
};
