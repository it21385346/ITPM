import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Search from './Search';
import {useDispatch, useSelector} from 'react-redux';
import {DropdownButton, Dropdown, Image} from 'react-bootstrap';
import { logout } from '../../actions/userActions';
import './Header.css'

export default function Header () {
    const { isAuthenticated, user } = useSelector(state => state.authState);
    const { items:cartItems } = useSelector(state => state.cartState)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logoutHandler = () => {
      dispatch(logout);
    }


    return (
    <nav className="navbar row">
        <div className="col-4 col-md-3">
          <div className="navbar-brand">
            <Link to="/">
              <img width="100px" alt='JVLcart Logo' src="/images/logo1.png" />
             
            </Link>
            </div>
        </div>
      
        <div>
          <ul className='menu-bar'>
          <div>Digital Fashion</div>
          <Dropdown>
                  <Dropdown.Toggle variant='default text-white' id='dropdown-basic'>
                  
                  
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                     <Link to={'/product/'} id="view_btn" className="btn btn-block">Women</Link>
                      <Dropdown.Item onClick={() => {navigate('/')}} className='text-dark'>TOPS</Dropdown.Item>
                      <Dropdown.Item onClick={() => {navigate('/')}} className='text-dark'>DRESSES & Jumpsuits</Dropdown.Item>
                      <Dropdown.Item onClick={() => {navigate('/')}} className='text-dark'>OUTERWEAR</Dropdown.Item>
                      <Dropdown.Item onClick={() => {navigate('/')}} className='text-dark'>BOTTOMS</Dropdown.Item>
                      <Dropdown.Item onClick={() => {navigate('/')}} className='text-dark'>SWIMWEAR</Dropdown.Item>
                      
                      <Link to={'/product/'} id="view_btn" className="btn btn-block">Men</Link>
                      <Dropdown.Item onClick={() => {navigate('/')}} className='text-dark'>SUITS & BLAZERS</Dropdown.Item>
                      <Dropdown.Item onClick={() => {navigate('/')}} className='text-dark'>PANTS & SHORTS</Dropdown.Item>
                      <Dropdown.Item onClick={() => {navigate('/')}} className='text-dark'>SHIRTS</Dropdown.Item>
                      <Dropdown.Item onClick={() => {navigate('/')}} className='text-dark'>Activewer</Dropdown.Item>
                      <Dropdown.Item onClick={() => {navigate('/')}} className='text-dark'>BOTTOMS</Dropdown.Item>
                      
                  </Dropdown.Menu>
              </Dropdown>
         <div><Link to="/virual">Virual Fitting</Link></div>
         <div><Link to="/">AR</Link></div>
         <div><Link to="/fav">Favourite</Link></div>
         <div><Link to="/admin/reviews">Feedback</Link></div>
          </ul>
        </div>
        <div className="  col-3 col-md-2 mt-2 mt-md-0">
           <Search/>
        </div>
  
        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
          { isAuthenticated ? 
            (
              <Dropdown className='d-inline' >
                  <Dropdown.Toggle variant='default text-white pr-5' id='dropdown-basic'>
                    <figure className='avatar avatar-nav'>
                      <Image width="50px" src={user.avatar??'./images/default_avatar.png'}  />
                    </figure>
                    <span>{user.name}</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                      { user.role === 'admin' && <Dropdown.Item onClick={() => {navigate('admin/dashboard')}} className='text-dark'>Dashboard</Dropdown.Item> }
                      <Dropdown.Item onClick={() => {navigate('/myprofile')}} className='text-dark'>Profile</Dropdown.Item>
                      <Dropdown.Item onClick={() => {navigate('/orders')}} className='text-dark'>Orders</Dropdown.Item>
                      
                      <a href="http://localhost:3001/">QrCodeGenerator</a>

                      <Dropdown.Item onClick={logoutHandler} className='text-danger'>Logout</Dropdown.Item>
                      
                  </Dropdown.Menu>
              </Dropdown>
            )
          
          :
            <Link to="/login"  className="btn" id="login_btn">Login</Link>
          }
          <Link to="/cart"><span id="cart" className="ml-3">Items</span></Link>
          <span className="ml-1" id="cart_count">{cartItems.length}</span>
        </div>
    </nav>
    )
}