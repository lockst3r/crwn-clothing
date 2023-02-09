import * as React from 'react'

import CategoryItem from '../category-item/category-item.component';

import './directory.styles.scss';
import { Category } from '../../types'

interface DerictoryProps {
  categories: Category[]
}


const Directory: React.FC<DerictoryProps>  = ({ categories }) => {
  return (
    <div className='directory-container'>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;