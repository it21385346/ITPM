import React from 'react'
import { Link } from 'react-router-dom'
import img from '../Asset/th2.jpg'
import './Virual.css'
import img1 from '../Asset/th.jpg'
import img2 from '../Asset/5.jpg'
import img4 from '../Asset/th4.jpg'
import img5 from '../Asset/th5.jpg'


const FavBooks = () => {
  return (
   <div className='all'>
   
        
       <div className='first'> 
       <img src={img} alt="" className='img-1'/>
   
       <h2>A New Way to Experience Digital Fashion</h2>
       <Link to='/'><button className='button-3'>Digital Fashion</button></Link>
       <Link to='/'><button className='button-2'>Virual  Fitting</button></Link>
       
       </div>
       
        
       
       
       <img src={img1} alt="" className='button-11' />
       <h2 className='button-text'> Upload Your Photo</h2>
      
                     

        <div className='md:w-1/2'>
           
                    
                    <p className='md-10 text-lg md:w-5/6'>That sounds fascinating! Creating digital experiences for fashion can revolutionize
                     how consumers engage with clothing and accessories. From virtual try-on tools to immersive virtual fashion shows, there's
                      a wide range of possibilities to explore</p>

                    
                        {/*Statos*/}

                      <div><img src={img2} alt=''/></div>
                      <div className='explor'>
                        <div>
                            <h3 className='text-3x1 font-bold'>800K+</h3>
                            <p className='text-base'>Dress Byers</p>
                        </div>
                        <div>
                            <h3 className='text-3x1 font-bold'>550K+</h3>
                            <p className='text-base'>Register Users</p>
                        </div>
                        <div>
                            <h3 className='text-3x1 font-bold'>12,000+</h3>
                            <p className='text-base'>Dress</p>
                        </div>
                      

                     <button className='button-expl'>Explore More</button>
                     </div>
                     
                     
        </div>

        </div>
  )
}

export default FavBooks