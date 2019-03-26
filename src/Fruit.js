import React from 'react';
import useLocalState from './useLocalState'

const Fruit = () => {
	//const [fruit, setFruit]
	const [fruit, setFruit] = useLocalState('fruit');
	return (
		<div>
			<p>Fruit: {fruit}</p>
				<button onClick={() => setFruit('Apple')}>Apple</button>
				<button onClick={() => setFruit('Banana')}>Banana</button>
		</div>
	)
}

export default Fruit;