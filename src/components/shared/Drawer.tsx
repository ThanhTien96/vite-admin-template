import {useContext} from 'react'
import SharedContext from 'components/wrapper/SharedProvider/SharedContext';
import { Drawer as AntDrawer ,DrawerProps } from 'antd';


const Drawer: React.FC<DrawerProps> = (props) => {
    const [state, setState] =  useContext(SharedContext);

    const handleClose: DrawerProps["onClose"] = (e) => {
        props.onClose && props.onClose(e);
        setState({
            ...state,
            drawer: {
                ...state.drawer,
                open: false
            }
        })
    }
  return (
    <AntDrawer {...props} open={state.drawer.open} onClose={handleClose}/>
  )
}

export default Drawer