
import React from 'react';
import ProductDetail from '@/components/Product/ProductDetail';
import { useParams } from 'react-router-dom';

const ProductPage: React.FC = () => {
  const { id } = useParams();
  // Check if the product ID starts with "special-edition"
  const isSpecialEdition = id?.startsWith('special-edition');
  
  return <ProductDetail specialEdition={isSpecialEdition} />;
};

export default ProductPage;
