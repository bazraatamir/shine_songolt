import React, { useState } from 'react';
import ArrowRight from '../../assets/arrow-right.svg'
import ArrowRightBG from '../../assets/arrow-right-bg.svg'
import MoreIcon from '../../assets/menu.svg'
import CloseIcon from '../../assets/close.svg'
import ProductImage1 from '../../assets/Image.png'
import ProductImage2 from '../../assets/Image-4.png'
import ProductImage3 from '../../assets/Image-2.png'
import ProductImage4 from '../../assets/Image-1.png'
import ProductImage5 from '../../assets/Image-3.png'
import ProductImage6 from '../../assets/Image-5.png'
import ProductImage7 from '../../assets/Image-6.png'
import ProductImage8 from '../../assets/Image-7.png'
import ProductImage10 from '../../assets/Image-8.png'
import ProductImage9 from '../../assets/Image-9.png'
import ProductCard from './ProductCard';
import ProductsHeader from './ProductsHeader';

const Products = () => {
    const [togglerState, setTogglerState] = useState(false)
    const handleToggle = (isToggled) => {
        setTogglerState(isToggled);
    }

    const [productCards] = useState([
        {cardTitle: 'Орчин үеийн ор', cardPrice: '269.000', cardPriceDisabled: '399.000', productImage: ProductImage7, id: 'beds'},
        {cardTitle: 'Гар хийцийн ламп', cardPrice: '350.000', cardPriceDisabled: '550.000', productImage: ProductImage1, id: 'lights'},
        {cardTitle: 'Түүхт сандал', cardPrice: '650.00', cardPriceDisabled: '950.00', productImage: ProductImage5, id: 'chairs'},
        {cardTitle: 'Лампны хэрэгсэл', cardPrice: '350.00', cardPriceDisabled: '450.00', productImage: ProductImage3, id: 'lights'},
        {cardTitle: 'Орчин үеийн модон ор', cardPrice: '$299.00', cardPriceDisabled: '$399.00', productImage: ProductImage8, id: 'beds'},
        {cardTitle: 'Дараалж тавьж болох сандал', cardPrice: '870.00', cardPriceDisabled: '970.00', productImage: ProductImage6, id: 'chairs'},
        {cardTitle: 'Цагаан орчин үеийн диван', cardPrice: '179.000', cardPriceDisabled: '199.00', productImage: ProductImage10, id: 'sofas'},
        {cardTitle: 'Загварлаг сандал', cardPrice: '450.00', cardPriceDisabled: '550.00', productImage: ProductImage4, id: 'chairs'},
        {cardTitle: 'Орчин үеийн диван', cardPrice: '179.000', cardPriceDisabled: '199.000', productImage: ProductImage9, id: 'sofas'},

    ])
    const [modifiedProductCards, setModifiedProductCards] = useState(productCards)
    

    return (
        <section id='products' className='flex flex-col mb-64 justify-between max-w-screen-2xl mx-auto px-12'>
            <div className='flex flex-row justify-between max-w-screen-2xl items-center my-6'>
                <h1 className='font-bold text-4xl text-heading-color leading-tight text-start
                                sm:text-5xl'>Products</h1>
                <button className='space-x-6 font-montserrat font-medium text-lg flex flex-row items-center group'>
                    {/* <p className='text-heading-color-3 hover:text-p-color'>See All</p> */}
                    <div className='flex justify-center items-center'>
                        <img src={ArrowRightBG}/>
                        <img className='absolute mr-5 animate-bounceRight' src={ArrowRight}/>
                    </div>
                </button> 
                <button className='flex hover:opacity-60 lg:hidden justify-center items-center animate-scaleIn' onClick={() => togglerState === false ?  handleToggle(true) : handleToggle(false)}>
                    {togglerState === false
                        ? <img src={MoreIcon} className='w-6'/>
                        : <img src={CloseIcon} className='w-6'/>
                    }
                </button> 
            </div>
            <ProductsHeader productCards={productCards} modifiedProductCards={modifiedProductCards} setModifiedProductCards={setModifiedProductCards} togglerState={togglerState}/>
            <div className='grid gap-x-12 gap-y-32 grid-cols-1 md:grid-cols-2 xlg:grid-cols-3 justify-center'>
                {modifiedProductCards.map((productCard) =>
                    <ProductCard productCard={productCard}/>)
                }
            </div>

        </section>
    );
};

export default Products;