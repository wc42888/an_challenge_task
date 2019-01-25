import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { List } from 'immutable';
import { withRouter } from 'react-router-dom';
import { Header, Nav, ProductCard } from '../components/Products';
import { getProducts } from '../redux/actions/products';
import { setItemsPerPage } from '../redux/actions/itemsPerPage';
import { getDisplayedProducts, getNumberOfProducts } from '../selectors/products';

class Products extends Component {
  static propTypes = {
    displayProducts: PropTypes.instanceOf(List).isRequired,
    getProducts: PropTypes.func.isRequired,
    itemsPerPage: PropTypes.number.isRequired,
    numberOfProducts: PropTypes.number.isRequired,
    pageNumber: PropTypes.number.isRequired,
    setItemsPerPage: PropTypes.func.isRequired,
  }

  async componentDidMount() {
    const { getProducts: getAllProducts } = this.props;
    await getAllProducts();
  }

  render() {
    const {
      numberOfProducts,
      itemsPerPage,
      setItemsPerPage: setItemsPerPageAction,
      pageNumber,
      displayProducts,
    } = this.props;

    return (
      <Container>
        <Header
          itemsPerPage={itemsPerPage}
          numberOfProducts={numberOfProducts}
          setItemsPerPage={setItemsPerPageAction}
        />
        <ProductCardsContainer>
          {displayProducts.size ? displayProducts.map(product => <ProductCard key={product.get('id')} product={product} />) : null}
        </ProductCardsContainer>
        <Nav
          numberOfPages={Math.ceil(numberOfProducts / itemsPerPage)}
          pageNumber={pageNumber}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  displayProducts: getDisplayedProducts(state, ownProps),
  numberOfProducts: getNumberOfProducts(state),
  itemsPerPage: state.get('itemsPerPage'),
});

const Container = styled.div`
  padding: 0px 10px;
  background-color: #EEEEEE;
`;

const ProductCardsContainer = styled.div`
  margin: 10px 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default withRouter(connect(mapStateToProps, { getProducts, setItemsPerPage })(Products));
