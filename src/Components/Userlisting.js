import React from 'react'

function Userlisting() {
  return (
    <div>
    <table class="table table-success table-striped">

  <thead>
    <tr>
      <th scope="col">Code</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Role</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>kebe</td>
      <td>kebe@gamil</td>
      <td>5348539</td>
      <td>staff</td>
      <td>
      <button type="button" className="btn btn-warning">Warning</button>  
      <button type="button" className="btn btn-danger">Danger</button>
      </td>
      
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default Userlisting
