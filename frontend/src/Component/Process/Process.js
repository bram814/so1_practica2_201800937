import '../css/Proceso.css'

function Process(props){

	return(
		<table className="table text-white">
		  <thead>
		    <tr>
		      <th scope="col">#</th>
		      <th scope="col">Pid</th>
		      <th scope="col">Name</th>
		      <th scope="col">State</th>
		      <th scope="col">User</th>
		      <th scope="col">Parent</th>
		    </tr>
		  </thead>
		  <tbody className="table-group-divider">
		    <tr>
		      <th scope="row">1</th>
		      <td>Mark</td>
		      <td>Otto</td>
		      <td>@mdo</td>
		      <td>@mdo</td>
		      <td>@mdo</td>
		    </tr> 
		    <tr>
		      <th scope="row">1</th>
		      <td>Mark</td>
		      <td>Otto</td>
		      <td>@mdo</td>
		      <td>@mdo</td>
		      <td>@mdo</td>
		    </tr>
		  </tbody>
		</table>
	);
}

export default Process;