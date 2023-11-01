import React from 'react';
// import photo from './catagory_photo.jpg';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const Categories = () => {
  const [category, setCategory] = useState([]);

  const fetchCategory = async () => {
    try {
      const Category = await axios.get('/GetCategory');
      if (Category) {
        console.log(Category.data.findCategories);

        const allCategories = Category.data.findCategories.map((category) => ({
          ...category,
          categoryImgPath: `http://localhost:4469/${category.categoryImgPath.replace('\\', '/')}`
        }));
        setCategory(allCategories);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);
  return (
    <section className="text-gray-600 body-font">
      <h1 className="text-3xl font-bold">Choose Category</h1>
      <div className="container px-5 py-10 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {category.map((product) => (
            <div key={product.id} className="bg-white rounded shadow-lg">
              <Link to={`/BuyProducts/${product.categoryName}`}>
                <a className="block relative h-48 rounded-t overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full" src={product.categoryImgPath} />
                </a>
                <div className="p-4">
                  <h2 className="text-gray-900 text-2xl font-medium">{product.categoryName}</h2>
                  {/* <p className="text-gray-400 text-lg">{product.description}</p> */}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
