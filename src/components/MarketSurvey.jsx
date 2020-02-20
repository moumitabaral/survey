import React from 'react'
import {Link} from 'react-router-dom'
import Header from './layout/Header'

export default function MarketSurvey(){
   return(

    <section>
      <div className="container shadow mt-3 p-4">
        <h3 className="text-center text-danger mt-2">Market Survey</h3>
        <div className="row mt-5 ">
          <div className="col-md-6">
            <form>
              <div className="form-group">
                <label for="examplInputName1" className="h6 text-muted">Name of the Company:</label>
                <input type="text" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" />
              </div>
              <div className="form-group">
                <label for="exampleInputDate1" className="h6 text-muted">Date visited:</label>
                <input type="date" className="form-control" id="exampleInputDate1" />
              </div>
              <div className="form-group">
                <label for="examplInputName2" className="h6 text-muted">Contact Person:</label>
                <input type="text" className="form-control" id="exampleInputName2" aria-describedby="nameHelp" />
              </div>
              <div className="form-group">
                <label for="examplInputName3" className="h6 text-muted">Contact By:</label>
                <input type="text" className="form-control" id="exampleInputName3" aria-describedby="nameHelp" />
              </div>
              <div className="form-group">
                <label for="examplInputName4" className="h6 text-muted">Discussed Topics:</label>
                <input type="text" className="form-control" id="exampleInputName4" aria-describedby="nameHelp" />
              </div>
              <div className="form-group dropright" >
                <label for="exampleFormControlSelect1" className="h6 text-muted">Discussed Business for:</label>
                <select className="form-control" id="exampleFormControlSelect1"> 
                  <option>Software</option>
                  <option>Webpage</option>
                  <option>Training</option>
                </select>
              </div>
            
            </form>
          </div>
          <div className="col-md-6">
            <form>
              <div className="form-group">
                <label for="examplInputName1" className="h6 text-muted">Business Type:</label>
                <input type="text" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" />
              </div>
              <div className="form-group">
                <label for="exampleInputAddress1" className="h6 text-muted">Company Address:</label>
                <input type="address" className="form-control" id="exampleInputAddress1" />
              </div>
              <div className="form-group">
                <label for="examplInputName2" className="h6 text-muted">Contact Designation:</label>
                <input type="text" className="form-control" id="exampleInputName2" aria-describedby="nameHelp" />
              </div>
              <div className="form-group">
                <label for="examplInputNumber2" className="h6 text-muted">Contact no:</label>
                <input type="number" className="form-control" id="exampleInputNumber2" aria-describedby="nameHelp" />
              </div>
              
              <div className="form-group dropright">
                <label for="Price" className="h6 text-muted">Discussed Contract Price:</label>
                <input type="number" className="form-control" id="Price" aria-describedby="nameHelp" />
              </div>
              <div className="form-group dropright" >
                <label for="exampleFormControlSelect1" className="h6 text-muted">Status:</label>
                <select className="form-control" id="exampleFormControlSelect1">
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>
            </form>

          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12">
            <form>
              <div className="form-group">
                <label for="exampleFormControlTextarea1" className="h6 text-muted">Footnote</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
            </form>
          </div>
          <button type="button" className="btn btn-secondary btn-lg btn-block">Add Visit</button>
        </div>
      </div>
      
    </section>

   )



}