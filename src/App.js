import './App.css';
import { Table } from 'react-bootstrap';
import { custData } from './custData';

function App() {
	const calculatePoints = amount => {
		let points = 0;
		if (amount > 50 && amount < 100) {
			points = amount - 50;
			return points;
		} else if (amount > 100) {
			points = (amount - 100) * 2 + 50;
			return points;
		} else return 0;
	};

	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD'
	});

	return (
		<div className='App'>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Customer</th>
						<th>Transaction Date</th>
						<th>Amount</th>
						<th>Points</th>
					</tr>
				</thead>
				<tbody>
					{custData.map(customer => {
						return (
							<tr key={customer.id}>
								<td>{customer.name}</td>
								<td>{customer.date}</td>
								<td>{formatter.format(customer.amount)}</td>
								<td>{calculatePoints(customer.amount)}</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</div>
	);
}

export default App;
