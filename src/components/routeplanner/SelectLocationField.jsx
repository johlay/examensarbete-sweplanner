import { useState } from "react";
import {
  Menu,
  MenuItem,
  Highlighter,
  Typeahead,
  withAsync,
} from "react-bootstrap-typeahead";
import { getLocationName } from "../../services/Api";
import { sortAndRemoveDuplicates } from "../../helpers/";

const AsyncTypeahead = withAsync(Typeahead);

const SelectLocationField = ({ name, searchHistory, placeholder, select }) => {
  const [locations, setLocations] = useState([]);
  const userSearchedLocations = sortAndRemoveDuplicates(searchHistory, name);

  const handleOnChange = (selected) => {
    switch (name) {
      case "From": {
        select.setSelectFrom({ ...selected[0] });
        break;
      }
      case "To": {
        select.setSelectTo({ ...selected[0] });
        break;
      }
      default: {
        break;
      }
    }
  };

  const handleSearch = async (query) => {
    const locations = await getLocationName(encodeURI(query));

    setLocations(locations);
  };

  const renderCustomMenu = (results, menuProps, state) => {
    const newMenuProps = { ...menuProps };

    // delete attributes which interferes with DOM and is not needed
    delete newMenuProps["newSelectionPrefix"];
    delete newMenuProps["paginationText"];
    delete newMenuProps["renderMenuItemChildren"];

    return (
      <Menu {...newMenuProps}>
        {results.length > 0 ? (
          <>
            {userSearchedLocations.length > 0 && (
              <>
                <Menu.Header>You recently searched for:</Menu.Header>
                {userSearchedLocations?.map((location, index) => {
                  return (
                    <MenuItem
                      option={location}
                      key={`${index}-${location.value}`}
                    >
                      {location.label}
                    </MenuItem>
                  );
                })}
                <Menu.Divider />
              </>
            )}
            {results?.map((result, index) => {
              return (
                <MenuItem option={result} position={index} key={index}>
                  <Highlighter search={state.text}>{result.label}</Highlighter>
                </MenuItem>
              );
            })}
          </>
        ) : null}
      </Menu>
    );
  };

  return (
    <AsyncTypeahead
      emptyLabel="No matches found."
      id={`unique-selector-${name}`}
      isLoading={false}
      onChange={handleOnChange}
      onSearch={handleSearch}
      options={locations}
      placeholder={placeholder}
      renderMenu={renderCustomMenu}
    />
  );
};

export default SelectLocationField;
