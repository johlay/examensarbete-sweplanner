import { useState } from "react";
import { useAccordionButton } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const ToggleIconAccordion = ({ eventKey }) => {
  const [toggleAccordion, setToggleAccordion] = useState(false);

  const handleIconToggle = useAccordionButton(eventKey, () => {
    setToggleAccordion((prev) => !prev);
  });

  return (
    <>
      <span
        aria-label="toggle arrow icon"
        onClick={handleIconToggle}
        style={{ cursor: "pointer" }}
      >
        <FontAwesomeIcon
          icon={!toggleAccordion ? faAngleDown : faAngleUp}
          size="2x"
          color="dark"
        />
      </span>
    </>
  );
};

export default ToggleIconAccordion;
