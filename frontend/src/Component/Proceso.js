// import M from '@materializecss/materialize/dist/js/materialize.min';
import './css/Proceso.css';
import Process from './Process/Process';

function Proceso(props){

	return(
		<div className="proceso">
			<center>
				<h1>Proceso</h1>
				<br />
				<div className="row">
				</div>
				<div className="row">
					<Process />
				</div>
				<br />
				<h1>Sub-Proceso</h1>
				<br />
			</center>
				
		</div>
	);
}

export default Proceso;