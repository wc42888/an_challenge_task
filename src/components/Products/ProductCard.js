import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { APP_FONT_FAMILY } from '../../constants/typography/font';

const ProductCard = ({ product }) => (
  /* eslint-disable jsx-a11y/img-redundant-alt */
  //  conflicting rules between jsx-a11y/img-redundant-alt and jsx-a11y/alt-text
  <ProductCardContainer>
    <ImageContainer>
      <ImageView>
        <img
          alt="failed to load image"
          src={product.get('product_image')}
          style={{ width: '100%', height: '100%' }}
        />
      </ImageView>
    </ImageContainer>
    <ProductInfo>
      <ProductTitle>
        {product.get('product_name')}
      </ProductTitle>
      <ProductDescription>
        {product.get('description')}
      </ProductDescription>
      <ProductPrice>
        {product.get('price')}
      </ProductPrice>
    </ProductInfo>
  </ProductCardContainer>
);


ProductCard.propTypes = {
  product: PropTypes.instanceOf(Map).isRequired,
};

const ProductCardContainer = styled.div`
  width: 280px;
  height: 260px;
  background-color: white;
  margin-bottom: 10px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 180px;
  border-bottom: 1px solid #EEEEEE;
`;

const ImageView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 160px;
`;

const ProductInfo = styled.div`
  margin: 5px;
`;

const ProductTitle = styled.div`
  font-family: ${APP_FONT_FAMILY};
  color: #898989;
`;

const ProductDescription = styled.div`
  margin-top: 5px;
  font-family: ${APP_FONT_FAMILY};
  color: #B5B5B6;
`;

const ProductPrice = styled.div`
  margin-top: 5px;
  font-family: ${APP_FONT_FAMILY};
  font-weight: bold;
`;

export default ProductCard;
