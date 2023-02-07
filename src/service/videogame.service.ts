import makeVideogameModel from '../model/videogame.model';
import { PostVideogameInput } from '../schema/videogame.schema';

const makeVideogameService = (collectionName: string) => {
  const VideogameModel = makeVideogameModel(collectionName);
  return {
    insertVideogame(input: Partial<PostVideogameInput>) {
      return VideogameModel.create(input);
    },
    getAllVideogame() {
      return VideogameModel.find();
    },
    getVideogameById(id: string) {
      return VideogameModel.findById(id);
    },
    updateVideogame(id: string, input: Partial<PostVideogameInput>) {
      return VideogameModel.findByIdAndUpdate(id, input);
    },
    deleteVideogame(id: string) {
      return VideogameModel.findByIdAndDelete(id);
    },
    findVideogameByName(name: string) {
      return VideogameModel.findOne({ name });
    },
  };
};

type VideogameService = ReturnType<typeof makeVideogameService>;

export { makeVideogameService, VideogameService };
