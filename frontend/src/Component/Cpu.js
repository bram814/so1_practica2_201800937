import './css/Cpu.css'
import CircleChart from './Chart/CircleChart';
import React, { useState, useEffect } from 'react';
import { getCpu } from '../Api/Route';


function Cpu(props){

	const [free , setFree] 	 = useState(0);
	const [used , setUsed]   = useState(0);
	const [total, setTotal]  = useState(0);

	useEffect(() => {
		(async () => {
			var query = await getCpu();
			var result = await query.json();
			console.log(result)
			result.map(i => {
				console.log(i.total)
				setUsed(i.total)
			})
	    })()
	 }, [])

	return(
		<div className="cpu">
			<center><h3>CPU</h3></center>
			<br />
		<div className="row">

				
				<div className="col">
					<table className="table text-white">
					  <thead>
					    <tr>
					      <th scope="col">Total</th>
					      <th scope="col">Libre</th>
					      <th scope="col">Ocupada</th>
					    </tr>
					  </thead>
					  <tbody className="table-group-divider">

	                	
					    <tr>
					      <td>{100}%</td>
					      <td>{(1-used)*100} %</td>
					       <td>{(used)*100} %</td>
					    </tr> 
								
		                
					  </tbody>
					</table>
				</div>

				<div className="col">
						
					<CircleChart 

						dataRam = {
						[
							
							{ title: 'Libre', value: (1-used)*100, color: '#0a8a00' },
    						{ title: 'Ocupado', value:(used)*100, color: '#a20000' }
						]
						}
					/>
				</div>
				
			
		</div>
		</div>
	);
}

export default Cpu;