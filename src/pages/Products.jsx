import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data/solarData';

const Products = () => {
  const [activeTab, setActiveTab] = useState('All');

  // Derive all unique product categories plus 'All'
  const filterCategories = ['All', ...new Set(PRODUCTS.map(p => p.category))];

  const filteredProducts = activeTab === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeTab);

  return (
    <div className="bg-slate-50/50 min-h-screen">
      
      {/* 1. Page Header */}
      <section className="bg-primary text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-90" />
        <div className="absolute top-[-100%] right-[-20%] w-[500px] h-[500px] bg-secondary/15 rounded-full blur-3xl opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <span className="text-xs uppercase font-extrabold tracking-widest text-secondary block mb-2 font-mono">
            Equipment Catalogue
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Our Solar Products
          </h1>
          <p className="mt-3 text-sm md:text-base text-emerald-100/80 max-w-xl">
            Sourced and engineered by Riyansh Solar Power Plus Pvt Ltd. Certified tier-1 efficiency and performance.
          </p>
        </div>
      </section>

      {/* 2. Filter Navigation & Product Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Filters Scrollable Tabs Container */}
        <div className="mb-12 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-thin">
          <div className="flex flex-nowrap md:flex-wrap gap-2 md:justify-center min-w-max md:min-w-0">
            {filterCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all select-none border focus:outline-none ${
                  activeTab === category
                    ? 'bg-primary border-primary text-white shadow-md'
                    : 'bg-white border-slate-200 text-slate-655 hover:bg-slate-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white border border-slate-200 rounded-3xl p-8 max-w-sm mx-auto">
            <p className="text-sm text-slate-500 font-semibold">No products found under this category.</p>
          </div>
        )}

      </section>

      {/* 3. Warranty & Attribution Footer Banner */}
      <section className="bg-white border-t border-slate-200 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionHeading 
            overline="Warranty Standard" 
            title="Premium Performance Assurances" 
            subtitle="All engineering, parts configurations, solar fan assemblies, and structural mounts carry original warranty coverages backed by Riyansh Solar Power Plus Pvt Ltd. Our systems are built to withstand Indian tropical elements."
          />
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-600 font-medium">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <span className="block text-primary font-bold text-lg mb-1">25 Years</span>
              Solar Panel Performance
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <span className="block text-primary font-bold text-lg mb-1">Up to 15 Years</span>
              Solar Ceiling Fan Coverage
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <span className="block text-primary font-bold text-lg mb-1">Up to 5 Years</span>
              Optimized Street Light Life
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Products;
