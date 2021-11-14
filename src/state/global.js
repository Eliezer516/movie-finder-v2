import {createGlobalState} from 'react-hooks-global-state'

const initialState = { busqueda: [], pagina: 1 };
const { useGlobalState } = createGlobalState(initialState);

export default useGlobalState;