import React from 'react';

const ProductsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header with buttons */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Products</h1>
        <div className="flex space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
            Add Product
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors">
            Delete Product
          </button>
        </div>
      </div>

      {/* Page content */}
      <div className="bg-white rounded-lg shadow p-6">
        {/* Your product content will go here */}
        <p className="text-gray-600">Product list will appear here</p>
      </div>
    </div>
  );
};

export default ProductsPage;