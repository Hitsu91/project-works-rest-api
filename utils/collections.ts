const Collections = [
  'GROUP-I',
  'GROUP-II',
  'GROUP-III',
  'GROUP-IV',
  'GROUP-V',
] as const;

type CollectionType = typeof Collections[number];

type CollectionParam = { col: CollectionType };

export { CollectionType, Collections, CollectionParam };
