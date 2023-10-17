import React from 'react';
import photo from './catagory_photo.jpg';
import { Link } from 'react-router-dom';
const productData = [
  {
    id: 1,
    title: 'The Catalyzer',
    description: 'lorem23 text  on the catalyzer',

    imageUrl: photo
  },
  {
    id: 2,
    title: 'Shooting Stars',
    description: 'lorem23 text  on the catalyzer',

    imageUrl: photo
  },
  {
    id: 3,
    title: 'Neptune',
    description: 'lorem23 text  on the catalyzer',

    imageUrl: photo
  },
  {
    id: 4,
    title: 'The 400 Blows',
    description: 'lorem23 text  on the catalyzer',

    imageUrl: photo
  },
  {
    id: 5,
    title: 'The Catalyzer',
    description: 'lorem23 text  on the catalyzer',
    imageUrl: photo
  }
];

const BuyProducts = () => {
  return (
    <section className="text-gray-600 body-font">
      <h1 className="text-3xl font-bold">Choose Category</h1>
      <div className="container px-5 py-12 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {productData.map((product) => (
            <Link to="Products">
              <div key={product.id} className="bg-white rounded shadow-lg">
                <a className="block relative h-48 rounded-t overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full" src={product.imageUrl} />
                </a>
                <div className="p-4">
                  <h2 className="text-gray-900 text-2xl font-medium">{product.title}</h2>
                  <p className="text-gray-400 text-lg">{product.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuyProducts;
