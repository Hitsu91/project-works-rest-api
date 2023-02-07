const Collections = [
  'group-i',
  'group-ii',
  'group-iii',
  'group-iv',
  'group-v',
] as const;

type CollectionType = typeof Collections[number];

type CollectionParam = { col: CollectionType };

export { CollectionType, Collections, CollectionParam };
