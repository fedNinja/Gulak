import React from 'react'
import MainImage from '../budget1.png'
import '../mainDiv.css'

function MainContainer(props){
	return(
		<div className='container'>
			<div className='container-left'>
				<img className='mainImg' src={MainImage} alt={'main image'}/>
			</div>
			<div className='container-right'>
				<h1 className='text-alignment'>What is Gullak?</h1>
				<h2><ul className='text-alignment'>
					<li>Savings box - family/individual</li>
					<li>Budget Planning</li>
					<li>Expense Tracking</li>
					<li>Absolute transparency</li>
					<li>Fully Secure</li>
					<li>Budget Approval</li>
					<li>Reports</li>
				</ul></h2>
				<h1 className='text-alignment'>How does it work?</h1>
				<h2><ul className='text-alignment'>
					<li>Signup for free</li>
					<li>Add family members</li>
					<li>Create expense buckets</li>
					<li>Assign expense limits</li>
					<li>Add expenses and track Savings</li>
					<li>Approve expenses of minors</li>
					<li>Increase Savings ($$$)</li>
				</ul></h2>
			</div>
		</div>
	)	
}

export default MainContainer;