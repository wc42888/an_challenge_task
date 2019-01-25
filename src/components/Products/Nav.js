import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PageNavLink from './PageNavLink';
import PageRedirectLink from './PageRedirectLink';

const Nav = ({ numberOfPages, pageNumber }) => {
  const renderPageNavLink = () => {
    const pageNumberArray = [];
    for (let page = 1; page <= numberOfPages; page++) {
      pageNumberArray.push(page);
    }

    return pageNumberArray
      .map(page => <PageNavLink key={page} page={page} />);
  };

  return (
    <NavContainer>
      <PageRedirectLink
        disabled={pageNumber <= 1}
        redirectPageNumber={pageNumber - 1}
      >
        {'< Previous page'}
      </PageRedirectLink>
      <PageNavLinkContainer>
        {renderPageNavLink()}
      </PageNavLinkContainer>
      <PageRedirectLink
        disabled={pageNumber >= numberOfPages}
        redirectPageNumber={pageNumber + 1}
      >
        {'Next page >'}
      </PageRedirectLink>
    </NavContainer>
  );
};

Nav.propTypes = {
  numberOfPages: PropTypes.number.isRequired,
  pageNumber: PropTypes.number.isRequired,
};

const NavContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const PageNavLinkContainer = styled.div`
  display: flex;
  max-width: 400px;
  height: '100%';
  flex-wrap: wrap;
`;

export default Nav;
