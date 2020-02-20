import React from 'react'
import {Link} from 'react-router-dom'
import Header from './layout/Header'

export default function MarketingList (){
  return(

    <section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-10"></div>
          <div className="col-lg-2 text-right pt-3 pr-5">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search here" />
              <div className="input-group-append">
                <button className="btn btn-secondary" type="button">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="table-responsive">
              <table className="table table-bordered mt-3">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Company Name</th>
                    <th scope="col">Business-type</th>
                    <th scope="col">Company Address</th>
                    <th scope="col">Contact-title</th>
                    <th scope="col">Designation</th>
                    <th scope="col">Contact-by</th>
                    <th scope="col">Contact no.</th>
                    <th scope="col">Date Visited</th>
                    <th scope="col">Discussed-topics</th>
                    <th scope="col">Discussed-price</th>
                    <th scope="col">Discussed Business</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
              
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td> <Link to="/"><i className="far fa-eye"></i></Link> <Link to="/"><i className="far fa-edit"></i></Link> <Link to="/"><i className="far fa-trash-alt"></i></Link></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td> <Link to="/"><i className="far fa-eye"></i></Link> <Link to="/"><i className="far fa-edit"></i></Link> <Link to="/"><i className="far fa-trash-alt"></i></Link></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td> <Link to="/"><i className="far fa-eye"></i></Link> <Link to="/"><i className="far fa-edit"></i></Link> <Link to="/"><i className="far fa-trash-alt"></i></Link></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
   
}