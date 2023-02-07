import { getModelForClass } from '@typegoose/typegoose';
import { AnyParamConstructor } from '@typegoose/typegoose/lib/types';

function getModelForClassOfCollection<U extends AnyParamConstructor<any>>(
  cl: U,
  collectionName: string
) {
  const className = cl.name;
  const customName = `${collectionName}-${className.toLocaleLowerCase()}`;
  return getModelForClass(cl, {
    options: { customName },
  });
}

export { getModelForClassOfCollection };
