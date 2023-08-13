import React from 'react';

import { InputFilter, Title, FilterContainer } from './FilterStyled';

export const Filter = ({ value, onChange }) => (
  <FilterContainer>
    <Title>Find contacts by name</Title>
    <InputFilter type="text" value={value} onChange={onChange} />
  </FilterContainer>
);
