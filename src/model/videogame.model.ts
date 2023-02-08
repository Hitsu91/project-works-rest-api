import { prop } from '@typegoose/typegoose';
import { getModelForClassOfCollection } from '../../utils/model-for-class-collection';

class VideogameLanguage {
  @prop({ type: String })
  voice: string[];

  @prop({ type: String })
  text: string[];
}

export class Videogame {
  @prop({ required: true })
  title: string;

  @prop({ required: true })
  category: string;

  @prop()
  imageUrl: string;

  @prop()
  releaseDate: string;

  @prop()
  genre: string;

  @prop()
  softwareHouse: string;

  @prop()
  publisher: string;

  @prop()
  numberOfPlayers: number;

  @prop({ _id: false })
  languages: VideogameLanguage;

  @prop()
  pegi: string;

  @prop()
  coverImage: string;
}

const makeVideogameModel = (collectionName: string) =>
  getModelForClassOfCollection(Videogame, collectionName);

export default makeVideogameModel;
