import React from 'react';
import { FaPhoneAlt, FaFacebookSquare } from 'react-icons/fa';
import img from '../../images/banner6.jpg'
import img2 from '../../images/img1 (3).jpg'

const About = () => {
    return (
        <div className="container mb-2">
           <h2 className="text-primary fw-bold">==About Us==</h2>
           <div className="">
            <img style={{width: '50%'}} src={img} alt="" /> 
            <h4 className="text-primary fw-bold">We Care About Your Business</h4>
            <h6 className="text-warning">excellent service by team</h6>
           <p>The professional sales team will always provide all-in-one solutions for your eyewear business and help you generate more sales revenue and keep fast growing your eyewear business.As a leading supplier of private label sunglasses and eyewear in Metal,Plastic, Metal/Plastic, Acetate and Titanium, Yingchang has built its reputation by providing not only the consistent high quality and value-added solution(helping customers develop best seller sunglasses and eyeglasses)in the industry, but also providing a total commitment to customer satisfaction. It has always been our mission to be a true value-added manufacturer by providing services beyond value and quality to build strong and sustainable customer relationships. We pride ourselves on our extensive product knowledge and unparalleled customer support, allowing our customers the unique opportunity to increase and sustain business through personalized service, stable quality, product innovation, and integrated solutions. Our emphasis on a complete customer experience has allowed Yingchang to become a reliable supplier of long-term business partner in China.</p>
           </div>
           <div>
            <img style={{width: '50%'}} src={img2} alt="" />
            <h4 className="text-primary fw-bold">We're Always Near Around You</h4>
            <h6 className="text-warning">Trade show in Mido,Silmo,VVE...</h6>
           <p>Meet you at different trade shows like Mido,Silmo,VVE,Hongkong, Shanghai,Beijing etc with new released eyewear and sunglasses style.As a leading supplier of private label sunglasses and eyewear in Metal,Plastic, Metal/Plastic, Acetate and Titanium, Yingchang has built its reputation by providing not only the consistent high quality and value-added solution(helping customers develop best seller sunglasses and eyeglasses)in the industry. but also providing a total commitment to customer satisfaction. It has always been our mission to be a true value-added manufacturer by providing services beyond value and quality to build strong and sustainable customer relationships. We pride ourselves on our extensive product knowledge and unparalleled customer support, allowing our customers the unique opportunity to increase and sustain business through personalized service, stable quality, product innovation, and integrated solutions. Our emphasis on a complete customer experience has allowed Yingchang to become a reliable supplier of long-term business partner in China.</p> 
            <hr/>
            <h3 className="text-primary fw-bold">Contact Us for <br/>MORE NEW DESIGNS</h3>
            <h6 className="text-warning">Don't be afraid to reach out. YOU + US = Awesome.</h6>
            <p>At the forefront of the industry, we actively promote the Integrated Product Development Management system to create a market-oriented R&D and innovation system. Our 20 R&D engineers created more than 100 new fashion trendy designs every month. Whether you need classic sunglasses or fashionable sunglasses, you can always find them from us People & Show</p>
            <div className="contact-icon fw-bold text-info">
                <FaPhoneAlt /><span> +1 8 800 555 35 35</span>
            </div>
            <div className="contact-icon fw-bold text-info mb-5">
                <FaFacebookSquare /><span> www.mordern.eyeglasses.facebook.com</span>
            </div>
           </div>
        </div>
    );
};

export default About;