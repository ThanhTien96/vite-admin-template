import React, {useState} from 'react'
import Context, { IContextValue } from './SharedContext';
import { Drawer } from 'components/shared';


export interface ISharedProviderProps {
    children?: React.ReactNode;
}

function SharedProvider(props: ISharedProviderProps) {

    const states = useState<IContextValue>({
        drawer: {},
    })

    const [state, setState] = states;
  return (
    <Context.Provider value={[state, setState]}>
        {props.children}
        <Drawer {...state.drawer} />
    </Context.Provider>
  )
}

export default SharedProvider