import { Collections, ServiceMap } from '../../utils/collections';

function makeService<T>(fn: (collectionName: string) => T): ServiceMap<T> {
  const service = {} as any;

  for (let coll of Collections) {
    service[coll] = fn(coll);
  }

  return service as ServiceMap<T>;
}

export { makeService };
