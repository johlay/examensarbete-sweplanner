import { useState } from "react";
import { Typeahead, withAsync } from "react-bootstrap-typeahead";
import { getLocationName } from "../../services/Api";

const AsyncTypeahead = withAsync(Typeahead);

const SelectLocationField = ({ placeholder, name }) => {
  const [locations, setLocations] = useState([]);

  const handleSearch = async (query) => {
    const locations = await getLocationName(query);

    setLocations(locations);
  };

  return (
    <AsyncTypeahead
      id={`unique-selector-to-${name}`}
      isLoading={false}
      onSearch={handleSearch}
      options={locations}
      placeholder={placeholder}
    />
  );
};

export default SelectLocationField;
