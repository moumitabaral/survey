import React from 'react';
import Logo from '../assets/img/images.png'

export default function Profile (){
  return(
    <section>
     <div className="container p-5">
      
      <div className="card p-4 bg-light">
        <div className="card-body">
           <div className="row">
             <div className="col-md-3">
              <img src={Logo} className="card-img-top mx-auto d-block" alt="..." style={{width: '200px' , height: 'auto', borderRadius: '100%' }} />
             </div>
             <div className="col-md-3 p-3">
               <h4>Name</h4>
               <h4>Designation</h4>
               <h4>Phoneno.</h4>
               <h4>Email</h4>
             </div>
             <div className="col-md-6 p-3">
                <p>: Moumita Baral</p>
                <p>: Junior Web Developer</p>
                <p>: +88017-********</p>
                <p>: example@example.com</p>
             </div>
           </div>
        </div>
      </div>
    </div>
  </section>
  )
}