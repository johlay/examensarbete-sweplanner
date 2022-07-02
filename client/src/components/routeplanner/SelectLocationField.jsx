import { useState } from "react";
import {
  Menu,
  MenuItem,
  Highlighter,
  Typeahead,
  withAsync,
} from "react-bootstrap-typeahead";
import { getLocationName } from "../../services/Api_v2";
import { sortAndRemoveDuplicates } from "../../helpers/";

const AsyncTypeahead = withAsync(Typeahead);

const SelectLocationField = ({
  accessToken,
  name,
  searchHistory,
  placeholder,
  select,
  setShowHttpErrorModal,
}) => {
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
    const { data: locations, error } = await getLocationName(
      encodeURI(query),
      accessToken
    );

    // if an error occured, show http error modal
    if (error) {
      return setShowHttpErrorModal({ error, status: true });
    }

    // if there is data, store the data inside state variable
    if (locations) {
      return setLocations(locations);
    }
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
                  if (index < 4) {
                    return (
                      <MenuItem
                        option={location}
                        key={`${index}-${location.value}`}
                      >
                        {location.label}
                      </MenuItem>
                    );
                  } else {
                    return null;
                  }
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
