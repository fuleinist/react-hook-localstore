import {useState} from 'react';

function useLocalState(localItem) {
	const [loc, setState] = useState(localStorage.getItem(localItem));
	
	const setLoc = (newItem) => {
		if(localItem !== newItem) {
			localStorage.setItem(localItem, newItem);
			//Use window to tunnel through actions
			window.dispatchEvent( new Event(localItem) );
			setState(newItem);
		}
	}
	
	return [loc, setLoc];
}

export default useLocalState;