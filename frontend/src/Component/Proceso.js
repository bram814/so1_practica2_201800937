import './css/Proceso.css';
import React, { useState, useEffect } from 'react';
import Process from './Process/Process';
import { getProcess } from '../Api/Route';

function Proceso(props){
	const [proceso , setProceso] = useState([]);


	useEffect(() => {
		(async () => {
	      	
	      	var query = await getProcess();
			var result = await query.json();

			await setProceso(result);


	    })()
	 }, [])

	async function handleChargeProcess(e) {
		e.preventDefault();

		try {
			var query = await getProcess();
			var result = await query.json();

			await setProceso(result);
		} catch(e){
			alert(e);
		}

	}

	return(
		<div className="proceso container">
			<center>
				<h1>Proceso</h1>
			</center>
			<br />
			<div className="row">
				<button type="button" className="btn btn-outline-primary" onClick={handleChargeProcess}>Search</button>
			</div>
			<br />
			<div className="row">

				<table className="table text-white">
				  <thead>
				    <tr>
				      <th scope="col">Pid</th>
				      <th scope="col">Name</th>
				      <th scope="col">State</th>
				      <th scope="col">User</th>
				      <th scope="col">Parent</th>
				    </tr>
				  </thead>
				  <tbody className="table-group-divider">
				
				    {
	                    proceso.map(i => {
	                    	if(i.parent == 0){
	                    		return(
	                        	 <tr>
							     
							      <td>{i.pid}</td>
							      <td>{i.name}</td>
							      <td>{i.state}</td>
							      <td>{i.user}</td>
							      <td>{i.parent}</td>
							    </tr> 
							)
	                    	}
	                    	
	                        
	                    })
	                }
				  </tbody>
				</table>
			

			</div>
			<br />
			<center><h1>Sub-Proceso</h1></center>
				<br />
			<div className="row">

				<table className="table text-white">
				  <thead>
				    <tr>
				      <th scope="col">Pid</th>
				      <th scope="col">Name</th>
				      <th scope="col">State</th>
				      <th scope="col">User</th>
				      <th scope="col">Parent</th>
				    </tr>
				  </thead>
				  <tbody className="table-group-divider">
				
				    {
	                    proceso.map(i => {
	                    	if(i.parent != 0){
	                    		return(
	                        	 <tr>
							     
							      <td>{i.pid}</td>
							      <td>{i.name}</td>
							      <td>{i.state}</td>
							      <td>{i.user}</td>
							      <td>{i.parent}</td>
							    </tr> 
							)
	                    	}
	                    	
	                        
	                    })
	                }
				  </tbody>
				</table>

			</div>
				
		</div>
	);
}

export default Proceso;