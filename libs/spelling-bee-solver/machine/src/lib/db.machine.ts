import { createMachine, assign } from 'xstate';
import { openDB } from 'idb';
import { WORDS } from '@joshorepo/spelling-bee-solver/data';

const DB_NAME = 'spelling-bee-solver-db';
const DB_OBJECT_STORE = 'words';
const DB_VERSION = 1;

export const dbMachine = createMachine(
  {
    id: 'database',
    initial: 'openDb',
    states: {
      openDb: {
        invoke: {
          id: 'open-db',
          src: () =>
            openDB(DB_NAME, DB_VERSION, {
              upgrade(db) {
                if (!db.objectStoreNames.contains(DB_OBJECT_STORE)) {
                  const store = db.createObjectStore(DB_OBJECT_STORE, {
                    keyPath: 'id',
                    autoIncrement: true,
                  });
                  store.createIndex('word', ['word'], { unique: true });
                }
              },
            }),
          onDone: {
            target: 'populate',
            actions: assign({
              db: (_, event) => {
                console.log('no idea what is going on', event.data);
                return event.data;
              },
            }),
          },
          onError: {
            target: 'idle',
            actions: (_, event) => {
              console.error(event);
            },
          },
        },
      },
      populate: {
        invoke: {
          id: 'populate-db',
          src: (context: any) => {
            const tx = context.db.transaction([DB_OBJECT_STORE], 'readwrite');
            const txStore = tx.objectStore(DB_OBJECT_STORE);
            return Promise.all([
              ...WORDS.map((word) => txStore.add({ word })),
              tx.done,
            ]);
          },
          onDone: {
            target: 'idle',
          },
          onError: {
            target: 'idle',
          },
        },
      },
      idle: {
        type: 'final',
      },
    },
  },
  {
    actions: {},
  }
);
