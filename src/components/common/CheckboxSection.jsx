
import React from 'react';
import { CheckboxContainer, CheckboxField, CheckboxLabel } from '../../styles/CheckboxSectionStyles'



const CheckboxSection = ({ id, fieldName, hovered, setHovered }) => {
  return (
    <CheckboxContainer>
      <CheckboxField type="checkbox" id={id} name={fieldName} />
      <CheckboxLabel
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        htmlFor={id}
      >
        <span>I agree to the terms&nbsp;</span> {hovered && <span className="f7">and I'll bring nice fika every Friday ;)</span>}
      </CheckboxLabel>
    </CheckboxContainer>
  );
};

export default CheckboxSection;