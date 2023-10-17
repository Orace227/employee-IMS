import React from 'react';
import photo from './catagory_photo.jpg';
import { Link, useParams } from 'react-router-dom';

const productData = [
  {
    id: 1,
    title: 'The Catalyzer',
    category: 'TheCatalyzers',
    description: 'lorem23 text on the catalyzer',
    imageUrl: photo
  },
  {
    id: 2,
    title: 'Shooting Stars',
    category: 'TheCatalyzers',
    description: 'lorem23 text on the catalyzer',
    imageUrl: photo
  },
  {
    id: 6,
    title: 'Shooting Stars',
    category: 'Shooting Stars',
    description: 'lorem23 text on the catalyzer',
    imageUrl: photo
  },
  {
    id: 7,
    title: 'Shooting Stars',
    category: 'Shooting Stars',
    description: 'lorem23 text on the catalyzer',
    imageUrl: photo
  },
  {
    id: 3,
    title: 'Neptune',
    category: 'TheCatalyzers',
    description: 'lorem23 text on the catalyzer',
    imageUrl: photo
  },
  {
    id: 4,
    title: 'The 400 Blows',
    category: 'TheCatalyzers',
    description: 'lorem23 text on the catalyzer',
    imageUrl: photo
  },
  {
    id: 5,
    title: 'The Catalyzer',
    category: 'TheCatalyzers',
    description: 'lorem23 text on the catalyzer',
    imageUrl: photo
  }
];

const Products = () => {
  const { category } = useParams();
  //   console.log(category);

  // Filter the product data based on the category
  const filteredProducts = category ? productData.filter((product) => product.category === category) : productData;

  return (
    <section className="text-gray-600 body-font">
      <h1 className="text-3xl font-bold mb-2">Choose Products</h1>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded shadow-lg p-4 m-3">
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
                  <Link to={`/BuyProducts/${product.category}`}>
                    <img alt="ecommerce" className="object-cover object-center w-full h-48 rounded-t" src={product.imageUrl} />
                  </Link>
                </div>
                <div className="w-full sm:w-1/2 pl-4 my-auto">
                  <h2 className="text-gray-900 text-3xl font-medium">{product.title}</h2>
                  <p className="text-gray-400 text-lg">{product.description}</p>
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-full mt-4 hover:bg-blue-600 shadow-md transform transition-transform duration-300 hover:scale-105">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
