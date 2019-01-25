import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as RRNavLink } from 'react-router-dom';
import { APP_FONT_FAMILY } from '../../constants/typography/font';

const PageNavLink = ({ page }) => {
  const activeStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    backgroundColor: 'white',
    borderBottom: '3px solid black',
    color: 'black',
    height: '20px',
    width: '30px',
    marginBottom: '10px',
    marginTop: '10px',
    fontFamily: APP_FONT_FAMILY,
  };

  const inactiveStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'black',
    height: '20px',
    width: '30px',
    marginBottom: '10px',
    marginTop: '10px',
    fontFamily: APP_FONT_FAMILY,
  };

  return (
    <RRNavLink
      activeStyle={activeStyle}
      style={inactiveStyle}
      to={`/products/page/${page}`}
    >
      {page}
    </RRNavLink>
  );
};


PageNavLink.propTypes = {
  page: PropTypes.number.isRequired,
};

export default PageNavLink;
