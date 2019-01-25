import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as RRNavLink } from 'react-router-dom';
import { APP_FONT_FAMILY, LIGHTER_FONT_COLOR } from '../../constants/typography/font';

const PageRedirectLink = ({ disabled, redirectPageNumber, children }) => {
  const activeStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    backgroundColor: 'white',
    borderBottom: '3px solid black',
    color: 'black',
    height: '20px',
    width: '150px',
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
    width: '150px',
    marginBottom: '10px',
    marginTop: '10px',
    fontFamily: APP_FONT_FAMILY,
  };

  return (
    disabled ? (
      <div style={{ ...inactiveStyle, color: LIGHTER_FONT_COLOR }}>
        {children}
      </div>
    ) : (
      <RRNavLink
        activeStyle={activeStyle}
        style={inactiveStyle}
        to={`/products/page/${redirectPageNumber}`}
      >
        {children}
      </RRNavLink>
    )
  );
};


PageRedirectLink.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool.isRequired,
  redirectPageNumber: PropTypes.number.isRequired,
};

export default PageRedirectLink;
