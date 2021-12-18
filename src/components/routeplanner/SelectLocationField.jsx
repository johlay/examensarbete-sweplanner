import { useState } from "react";
import { Typeahead, withAsync } from "react-bootstrap-typeahead";
import { getLocationName } from "../../services/Api";

const AsyncTypeahead = withAsync(Typeahead);

const SelectLocationField = ({ name, placeholder, select }) => {
  const [locations, setLocations] = useState([]);

  const handleOnChange = (selected) => {
    switch (name) {
      case "From": {
        select.setSelectFrom(selected);
        break;
      }
      case "To": {
        select.setSelectTo(selected);
        break;
      }
      default: {
        break;
      }
    }
  };

  const handleSearch = async (query) => {
    const locations = await getLocationName(query);

    setLocations(locations);
  };

  return (
    <AsyncTypeahead
      id={`unique-selector-to-${name}`}
      isLoading={false}
      onChange={handleOnChange}
      onSearch={handleSearch}
      options={locations}
      placeholder={placeholder}
    />
  );
};

export default SelectLocationField;
