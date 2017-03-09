import React from 'react'
{/*import logo from '../logo2.jpeg'*/}
import '../Navbar.css'

function NavBar(props){
		return (
			<nav>
				<div className='leftDiv'>
					{/*<img className='logoSpec' src={logo} alt={'logo'}/>*/}
					<span className='titleSpecs'>Gullak</span>
				</div>
				<div className='rightDiv'>
					<ul className='wideDiv'>
						<li><a href='#'>LogIn</a></li>
						<li><a href='#'>SignUp</a></li>
					</ul>
				</div>
			</nav>
			);
		}

export default NavBar;


