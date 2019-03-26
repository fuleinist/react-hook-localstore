import React, {useReducer, useEffect} from 'react';
import useLocalState from './useLocalState'

function reducer(state, action) {
  switch (action.type) {
    case 'updated':
      return {fruit: action.payload};
    case 'reseted':
      return {fruit: 'Reseted'};
    default:
      throw new Error();
  }
}

const Vegi = () => {
	const [state, dispatch] = useReducer(reducer, {fruit: localStorage.getItem('fruit')});

	const LocalStateUpdate = () => {
		console.log('fired ' + state.fruit)
		dispatch({type: 'updated', payload: window.localStorage.fruit})	
	}
	
	useEffect(() => {
		window.addEventListener('fruit', LocalStateUpdate);
		return () => {
			window.removeEventListener('fruit', LocalStateUpdate);
		}
	});

	const [vegi, setVegi] = useLocalState('vegitable');
	return (
		<div>
		<p>Fruit: {state.fruit}</p>
		<p>Vegitable: {vegi}</p>
			<button onClick={() => setVegi('Cabbage')}>Cabbage</button>
			<button onClick={() => setVegi('Karrot')}>Karrot</button>
		</div>
	)
}

export default Vegi;