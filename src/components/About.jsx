import React from 'react';

import AboutPhoto1 from '../assets/about-photo-1.png'
import AboutPhoto2 from '../assets/about-photo-2.png'
import AboutPhoto3 from '../assets/about-photo-3.png'
import AboutPhoto4 from '../assets/about-photo-4.png'


const About = () => {
    return (
        <section id='about' className='mb-24 max-w-screen-2xl mx-auto px-12'>
                    <div className='flex flex-col xs:flex-row justify-between items-start mb-12'>
                        <div className='mr-6'>
                            <h1 className='mb-2 sm:mb-4 font-bold text-5xl text-heading-color leading-tight text-start'>Бидний тухай</h1>
                            <p className='text-p-color font-normal text-xl'>Шинэ өнгө, дээр бид бахархалтайгаар <br /> бидний үнэт зүйлс – үйлчилгээ, шударга байдал, <br /> мөн төгс байдал.</p>
                        </div>

                     
                    </div>
                <div className='flex flex-col-reverse xl:flex-row justify-between xl:my-0 my-6'>
                    <div className='justify-start sm:justify-center md:justify-start grid md:grid-cols-8'>
                        <div className='flex xl:hidden'></div>
                        <div className='text-heading-color mr-12 col-span-3 xl:col-span-4 row-span-1'>
                            <h2 className='text-2xl font-extrabold leading-relaxed sm:text-3xl'>
                                <span className='text-5xl leading-normal'>1.</span> <br />
                                Бидний тухай
                            </h2>
                            <p className='text-p-color font-normal text-lg'>
                            Шинэ өнгө тавилгын дэлгүүрт, тавтай морил,  <br />орчин үеийн тавилга гар урлал чанар, шинэчлэлтэй учирдаг
                            </p>
                        </div>
                        <div className='text-heading-color col-span-3 xl:col-span-4 row-span-1'>
                            <h2 className='text-2xl font-extrabold leading-relaxed sm:text-3xl'>
                                <span className='text-5xl leading-normal'>2.</span> <br />
                               Манай тавилгууд
                            </h2>
                            <p className='text-p-color font-normal text-lg'>
                            Таны амьдрах орчныг дээшлүүлэх сонирхолд  <br /> нийцэх орчин үеийн тавилгын   гайхалтай <br /> цуглуулгыг  манайхаас олох боломжтой 
                            </p>
                        </div>
                        <div className='flex xl:hidden'></div>
                        <div className='flex xl:hidden'></div>
                        <div className='text-heading-color mr-12 col-span-3 xl:col-span-4 row-span-1'>
                            <h2 className='text-2xl font-extrabold leading-relaxed sm:text-3xl'>
                                <span className='text-5xl leading-normal'>3.</span> <br />
                                Бид хэрхэн туслах вэ
                            </h2>
                            <p className='text-p-color font-normal text-lg'>
                            Манай мэргэжлийн зөвлөгөө, сонгосон агуулга,<br/> хувийн зөвлөлгөөний тусламжтайгаар <br/>таны гэрийг өөрчлөн шинэчлэе
                            </p>
                        </div>
                        <div className='text-heading-color col-span-3 xl:col-span-4 row-span-1'>
                            <h2 className='text-2xl font-extrabold leading-relaxed sm:text-3xl'>
                                <span className='text-5xl leading-normal'>4.</span> <br />
                                Жаргалтай үйлчлүүлэгч
                            </h2>
                            <p className='text-p-color font-normal text-lg'>
                            Бидэнтэй хамтран өөрсдийн орон зайг шинэчлэн <br/>өөрчилсөн үйлчлүүлэгчдийн урам зоригтой <br/>  амжилтын түүхүүдтэй нээгдэнэ үү.
                            </p>
                        </div>
                        <div className='flex xl:hidden'></div>
                    </div>
                    <div className='xl:my-0 flex items-center justify-center xl:justify-end mb-12'>
                        <div className='grid grid-cols-2 grid-rows-[7] items-center xl:gap-4 gap-6'>
                            <img src={AboutPhoto1} className='col-span-1 row-span-2 self-end pt-12 rounded-sm '/>
                            <img src={AboutPhoto2} className='col-span-1 row-span-5 self-start rounded-sm'/>
                            <img src={AboutPhoto3} className='col-span-1 row-span-5 self-end rounded-sm'/>
                            <img src={AboutPhoto4} className='col-span-1 row-span-2 self-start pb-12 rounded-sm'/>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default About;