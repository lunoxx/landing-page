

import './Assets/CSS/App.css';

import React from 'react';

// Animations
import { XyzTransitionGroup } from '@animxyz/react'
import { XyzTransition } from '@animxyz/react'
import "@animxyz/core";

// Layouts
const Header = React.lazy(() => import('./Layouts/Header'));
const Footer = React.lazy(() => import('./Layouts/Footer'));

// Components
const HeroSection = React.lazy(() => import('./Components/HeroSection'));
const AboutSection = React.lazy(() => import('./Components/AboutSection'));;
const ActiveOffers = React.lazy(() => import('./Components/ActiveOffers'));;


function App() {

	return (
		<div className="mx-auto max-w-screen-xl px-3 py-6">
			
			<Header />

			<div className="my-10 px-5 md:px-0 md:my-28">

				<XyzTransitionGroup appear duration="auto" xyz="fade duration-10 xyz-in small out-down stagger ease-out-back ">

					<div ><HeroSection /></div>
					<div ><AboutSection /></div>
					<div ><ActiveOffers /></div>

				</XyzTransitionGroup>
			</div>

			<XyzTransition appear duration="auto" xyz="fade duration-10 xyz-in small out-down stagger ease-out-back ">
				<div><Footer /></div>
			</XyzTransition>

		</div>
	);
}

export default App;
