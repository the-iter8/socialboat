export const debounce = (func, wait = 1000) => {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      func(...args);
    }, wait);
  };
};

export function getUniqueTags(data) {
  const uniqueTags = {};

  data.forEach((item) => {
    item.tags.forEach((tag) => {
      uniqueTags[tag] = true;
    });
  });

  return Object.keys(uniqueTags);
}

export function filterDataByTags(data, selectedTags) {
  if (selectedTags.length === 0) {
    return data;
  } else {
    const selectedTagsMap = new Map();
    for (const tag of selectedTags) {
      selectedTagsMap.set(tag, true);
    }

    return data.filter((item) => {
      for (const tag of item.tags) {
        if (selectedTagsMap.has(tag)) {
          return true;
        }
      }
      return false;
    });
  }
}
