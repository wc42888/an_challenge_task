import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Select from 'react-select';
import {
  LARGE_SIZE_FONT,
  APP_FONT_FAMILY,
  APP_FONT_WEIGHT,
  LIGHTER_FONT_COLOR,
} from '../../constants/typography/font';

const Header = ({ numberOfProducts, itemsPerPage, setItemsPerPage }) => {
  const options = [
    { value: 24, label: '24 per page' },
    { value: 48, label: '48 per page' },
    { value: 96, label: '96 per page' },
  ];

  const setValue = ({ value }) => setItemsPerPage(value);

  const selectTagStyle = {
    container: style => ({ ...style, width: 150 }),
    control: style => ({
      ...style,
      border: '0 !important',
      boxShadow: '0 !important',
      backgroundColor: '#EEEEEE',
    }),
    dropdownIndicator: style => ({ ...style, color: 'black' }),
    indicatorSeparator: () => ({ }),
    singleValue: style => ({
      ...style,
      color: LIGHTER_FONT_COLOR,
      fontFamily: APP_FONT_FAMILY,
    }),
  };

  const findSelectedOption = () => options.find(option => option.value === itemsPerPage);

  return (
    <HeaderContainer>
      <Title>All Products</Title>
      <Subheader>
        <Subtitle>{`${numberOfProducts} products`}</Subtitle>
        <Select
          onChange={setValue}
          options={options}
          styles={selectTagStyle}
          value={findSelectedOption()}
        />
      </Subheader>
    </HeaderContainer>
  );
};

Header.propTypes = {
  itemsPerPage: PropTypes.number.isRequired,
  numberOfProducts: PropTypes.number.isRequired,
  setItemsPerPage: PropTypes.func.isRequired,
};

const HeaderContainer = styled.div`
  border-bottom: 1px solid ${LIGHTER_FONT_COLOR};
  font-family: ${APP_FONT_FAMILY};
`;

const Title = styled.div`
  font-size: ${LARGE_SIZE_FONT};
  font-weight: ${APP_FONT_WEIGHT}
`;

const Subtitle = styled.div`
  font-weight: ${APP_FONT_WEIGHT};
`;

const Subheader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${LIGHTER_FONT_COLOR};
  margin-top: 6pt;
`;

export default Header;
