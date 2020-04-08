import React, { useReducer } from 'react';

export default(reducer, actions, initialstate)=>{

    const Context = React.createContext();

    const Provider=({children})=>{

        const [state, dispatch] = useReducer(reducer, initialstate);

        const boundActions = {};

        for(let keys in actions){
            boundActions[keys] = actions[keys](dispatch);
        }
        return(
            <Context.Provider value={{state,...boundActions}}>
                {children}
            </Context.Provider>
        );
    }
    return {Context, Provider};
}