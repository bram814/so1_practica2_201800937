import './css/Proceso.css';
import React, { useState, useEffect } from 'react';
import { getProcess } from '../Api/Route';

function Proceso(props){
	const [proceso , setProceso] = useState([]);
	const [running , setRunning] = useState(0);
	const [sleping , setSleping] = useState(0);
	const [stop    , setStop] 	 = useState(0);
	const [zombie  , setZombie]  = useState(0);
	const [total   , setTotal]   = useState(0);



	useEffect(() => {
		(async () => {
	      	
	      	var query = await getProcess();
			var result = await query.json();

			await setProceso(result);
			// busncando 
			var contRun = 0, contStop = 0, contWaking = 0;
			result.map(i => {

				if (i.state == 0 || i.state == 1 || i.state == 2 ){ // Running
					contRun++;	
				}

				if (i.state == 4 ) {
					contStop++;
				}

				if (i.state != 0 && i.state != 1 && i.state != 2 && i.state != 4) {
					contWaking++;
				}

				
			})
			setRunning(contRun);
			setStop(contStop);
			setSleping(contWaking);
			setTotal(contRun + contStop + contWaking)

	    })()
	 }, [])

	async function handleChargeProcess(e) {
		e.preventDefault();

		try {
			var query = await getProcess();
			var result = await query.json();

			await setProceso(result);
			// busncando 
			var contRun = 0, contStop = 0, contWaking = 0;
			result.map(i => {

				if (i.state == 0 || i.state == 1 || i.state == 2 ){ // Running
					contRun++;	
				}

				if (i.state == 4 ) {
					contStop++;
				}

				if (i.state != 0 && i.state != 1 && i.state != 2 && i.state != 4) {
					contWaking++;
				}

				
			})
			setRunning(contRun);
			setStop(contStop);
			setSleping(contWaking);
			setTotal(contRun + contStop + contWaking)

		} catch(e){
			alert(e);
		}

	}

	return(
		<div className="proceso container">

			<center><h1>Resumen de Procesos</h1></center>
			<div className="row">

				<table className="table text-white">
				  <thead>
				    <tr>
				      <th scope="col">Ejecución</th>
				      <th scope="col">Dormidos</th>
				      <th scope="col">Detenidos</th>
				      <th scope="col">Zombie</th>
				      <th scope="col">Total</th>
				    </tr>
				  </thead>
				  <tbody className="table-group-divider">

                	<tr>
				      <td>{running}</td>
				      <td>{sleping}</td>
				      <td>{stop}</td>
				      <td>{zombie}</td>
				      <td>{total}</td>
				    </tr> 
							
	                
				  </tbody>
				</table>

			</div>
			<br />
			<center><h1>Procesos</h1></center>
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
							)}
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