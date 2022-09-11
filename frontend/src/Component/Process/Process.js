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
		      <td>{props.Key}</td>
		      <td>{props.dataPid}</td>
		      <td>{props.dataName}</td>
		      <td>{props.dataState}</td>
		      <td>{props.dataUser}</td>
		      <td>{props.dataParent}</td>
		    </tr> 
		  </tbody>
		</table>
	);
}

export default Process;