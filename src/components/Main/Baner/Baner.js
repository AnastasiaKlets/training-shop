import React from 'react';
import img1 from "../../../img/img1.svg";
import img2 from "../../../img/img2.svg";
import img3 from "../../../img/img3.svg";
import img4 from "../../../img/img4.svg";
import './Baner.css';

function Baner(props) {
    return (
        <div className="container">
			<section className="content">
				<div className="contentItems">
					<div className="contentItem contentItemBig">
						<div className="contentItemsImage">
							{/* <img src={img1} alt="img1" /> */}
							<div className="slider">
								<div className="contentSlider">
									<div className="rightControl sliderControl">
										<div className="arrow left"></div>
									</div>									
									<div className="SliderContent">
										<div className="title">BUNNER</div>
										<div className="text">YOUR TITLE TEXT</div>
									</div>
									<div className="leftControl sliderControl">
										<div className="arrow right"></div>
									</div>									
								</div>
							</div>
						</div>
					</div>


					<div className="contentItem small_item_1">					
						<div className="columnLittle">
							<div className="columnImage">
								<div className="blockLink">
									<a href="/" className="link">Woman</a>
								</div>
							</div>
						</div>						
					</div>

					<div className="contentItem small_item_2">						
						<div className="columnLittle">
							<div className="columnImage">
								<div className="blockLink">
									<a href="/" className="link">Men</a>
								</div>
							</div>								
						</div>
					</div>

					<div className="contentItem avg_item">
						<div className="middle">
							<div className="blockLink">
								<a href="/" className="link">Accessories</a>
							</div>
						</div>
					</div>
				</div>				
			</section>
		</div>
    );
}

export default Baner;