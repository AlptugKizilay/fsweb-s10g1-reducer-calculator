import React, { useReducer } from 'react';

import {CHANGE_OPERATION, APPLY_NUMBER, CLEAR_DISPLAY, MEMORY_ADD, MEMORY_R, MEMORY_C} from "./actions/index"
import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import reducer, { initialState } from './reducers';

function App() {
  const [state, dispatch] = useReducer(reducer,initialState)
  const click = (e) => {
    const btnValue = parseInt(e.target.value, 10);
     dispatch({type:APPLY_NUMBER,payload: btnValue})
  }
  
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">

            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} onClick={ () => dispatch({type: MEMORY_ADD})} />
              <CalcButton value={"MR"} onClick={ () => dispatch({type: MEMORY_R})}/>
              <CalcButton value={"MC"} onClick={ () => dispatch({type: MEMORY_C})}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={click}/>
              <CalcButton value={2} onClick={click}/>
              <CalcButton value={3} onClick={click}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={click} />
              <CalcButton value={5} onClick={click} />
              <CalcButton value={6} onClick={click} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={click} />
              <CalcButton value={8} onClick={click} />
              <CalcButton value={9} onClick={click} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={()=>dispatch({type:CHANGE_OPERATION,payload: "+"})}/>
              <CalcButton value={"*"} onClick={()=>dispatch({type:CHANGE_OPERATION,payload: "*"})}/>
              <CalcButton value={"-"} onClick={()=>dispatch({type:CHANGE_OPERATION,payload: "-"})}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={()=>dispatch({type:CLEAR_DISPLAY})} />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
