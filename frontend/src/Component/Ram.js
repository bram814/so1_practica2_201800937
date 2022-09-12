import './css/Ram.css'
import CircleChart from './Chart/CircleChart';
import React, { useState, useEffect } from 'react';
import { getRam } from '../Api/Route';


function Ram(props){

	const [free , setFree] 	 = useState(0);
	const [used , setUsed]   = useState(0);
	const [total, setTotal]  = useState(0);

	useEffect(() => {
		(async () => {
			var query = await getRam();
			var result = await query.json();
			result.map(i => {

				setFree(i.free);
				setUsed(i.used);
				setTotal(i.total)

			})
	    })()
	 }, [])

	return(
		<div className="ram">
			<center><h3>RAM</h3></center>
			
		<div className="ram row">

				<div className="col">
						
					<CircleChart 

						dataRam = {
						[
							
							{ title: 'Libre', value: Math.round(((total-used)/total)*100,2), color: '#23ff37' },
    						{ title: 'Ocupado', value: Math.round(((total-free)/total)*100,2), color: '#ff0000' }
						]
						}
					/>
				</div>
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
					      <td>{((total/100)/1024).toFixed(2)} MB </td>
					      <td>{((free/100)/1024).toFixed(2)} MB</td>
					      <td>{((used/100)/1024).toFixed(2)}</td>
					    </tr> 
					    <tr>
					      <td>{(total/total)*100}%</td>
					       <td>{Math.round(((total-used)/total)*100,2)} %</td>
					      <td>{Math.round(((total-free)/total)*100,2)} %</td>
					    </tr> 
								
		                
					  </tbody>
					</table>
				</div>
				
			
		</div>
		</div>
	);
}

export default Ram;