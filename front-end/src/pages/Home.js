import React from 'react';
import '../assets/css/component/Home/home.scss';
import Foot from '../component/foot/foot';
import Header from '../component/head/head';
import Banner from '../component/Home/Banner/banner';
import Card_Slide from '../component/Home/Card_Slide/card_slide';
import Saleup from '../component/Home/SaleUp/SaleUp';
import Service from '../component/Home/Service/service';
import SectionSlide from '../component/Home/Slide/slide';
import SuggestionProduct from '../component/suggestion_product/suggestion_product';

const Home = () => {
  return (<div>
    <Header />
    <SectionSlide />
    <Service />
    <Saleup />
    <Banner />
    <SuggestionProduct />
    <Card_Slide />
    <Foot />
  </div>)
}

export default Home