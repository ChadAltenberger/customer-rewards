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

	// convert amount to dollar value
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD'
	});

	return (
		<div className='App'>
			<h1>Customer Transactions</h1>
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
							<tr key={customer.transId}>
								<td>{customer.name}</td>
								<td>{customer.date}</td>
								<td>{formatter.format(customer.amount)}</td>
								<td>{calculatePoints(customer.amount)}</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
			<h1>Total Rewards Points</h1>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Customer</th>
						<th>Total Points</th>
					</tr>
				</thead>
				<tbody>
					{custData.map(customer => {
						if (customer.name === 'Screech') {
							let total = 0;
							let count = calculatePoints(customer.amount);
							total += count;
							return (
								<tr key={customer.transId}>
									<td>{customer.name}</td>
									<td>{calculatePoints(customer.amount)}</td>
								</tr>
							);
						}
					})}
				</tbody>
			</Table>
		</div>
	);
}

export default App;
