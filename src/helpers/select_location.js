// sort and removes duplicates (user's search history) - "SelectLocationField" component
const sortAndRemoveDuplicates = (searchHistory, name) => {
  const locationsList = searchHistory?.map((stop) => {
    if (name === "From") {
      return {
        value: stop?.from?.id,
        label: stop?.from?.name,
        created_at: stop?.created_at,
        data: stop?.from,
      };
    }

    if (name === "To") {
      return {
        value: stop?.to?.id,
        label: stop?.to?.name,
        created_at: stop?.created_at,
        data: stop?.to,
      };
    }

    return null;
  });

  // sort array out - latest search is on top.
  const sortedLocationsList = locationsList?.sort(
    (a, b) => new Date(b?.created_at) - new Date(a?.created_at)
  );

  // Create a new identical array without duplicates by storing unique values (older timestamps are removed and the latest timestamp is kept if the matching values is found)
  const uniqueLocationsList = Array.from(
    new Set(sortedLocationsList?.map((a) => a.value))
  )?.map((value) => sortedLocationsList?.find((a) => a.value === value));

  return uniqueLocationsList;
};

export { sortAndRemoveDuplicates };
