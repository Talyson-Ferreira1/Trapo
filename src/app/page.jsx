'use client'
import { useState } from 'react';

import Carousel from '@/components/Home-page-components/carousel/carousel';
import Search_Product from '@/components/Home-page-components/search-product/search-product';
import Shirts from '@/components/Home-page-components/Shirts-components/Shirts';

import './style.homePage.css';

export default function Home() {
  const [searchProduct, setSearchProduct] = useState(null)

  const getNameProduct = (name) => {
    setSearchProduct(name)
  }

  return (
    <main>
      <article className="article-homePage">
        <Carousel />
        <Search_Product nameProduct={getNameProduct} />
      </article>
      <Shirts />
      <p>Homepage</p>
    </main>
  );
}
