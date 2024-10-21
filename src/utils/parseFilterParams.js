const parseType = (type) => {
  const isString = typeof type === 'string';
  if (!isString) return;
  const isValidType = (type) => ['work', 'home', 'personal'].includes(type);

  if (isValidType(type)) return type;
};

const parseIsFavourite = (value) => {
  const isString = typeof value === 'string';
  if (!isString) return;
  const isValidValue = (value) => ['true', 'false'].includes(value);

  if (isValidValue(value)) return value;
};

export const parseFilterParams = (query) => {
  const { contactType, isFavourite } = query;

  const parsedType = parseType(contactType);
  const parsedIsFavourite = parseIsFavourite(isFavourite);

  return {
    contactType: parsedType,
    isFavourite: parsedIsFavourite,
  };
};
