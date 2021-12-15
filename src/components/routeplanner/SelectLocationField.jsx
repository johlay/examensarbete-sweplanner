import { Typeahead, withAsync } from "react-bootstrap-typeahead";

const AsyncTypeahead = withAsync(Typeahead);

const SelectLocationField = () => {
  return <AsyncTypeahead />;
};

export default SelectLocationField;
