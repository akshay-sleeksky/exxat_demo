import { createReducer } from '@ngrx/store';
import { Song } from './song.model';

export const initialState: ReadonlyArray<Song> = [
  {
    id: '1',
    title: 'Trampoline',
    singer: 'Aman Jat',
    rating: 5,
  },
  {
    id: '2',
    title: 'Talking to the moon',
    singer: 'Aman Jat',
    rating: 4,
  },
];

export const songReducer = createReducer(initialState);
