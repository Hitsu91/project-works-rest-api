import { number, object, string, TypeOf } from 'zod';

export const VideogameSchema = object({
  title: string({
    required_error: 'Title is required',
  }),
  category: string({
    required_error: 'Category is required',
  }),
  imageUrl: string().optional(),
  releaseDate: string({
    required_error: 'Release Date is required',
  }),
  genre: string({
    required_error: 'Genre is required',
  }),
  softwareHouse: string({ required_error: 'Software House is required' }),
  publisher: string({ required_error: 'Publisher is required' }),
  numberOfPlayers: number({
    required_error: 'Number of Player is required',
  }),
  languages: object({
    voice: string().array().optional(),
    text: string().array().optional(),
  }),
  pegi: string().optional(),
  coverImage: string().optional(),
});

export type PostVideogameInput = TypeOf<typeof VideogameSchema>;

/*
Data di uscita
1 Febbraio 2023
Tipologia di gioco
Manageriale, Sportivo
Sviluppato:
Sports Interactive
Pubblicato:
SEGA
Giocatori
nd
Lingua
Ita (testi)
PEGI
nd+
*/
