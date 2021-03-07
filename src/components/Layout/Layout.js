import Auxiliary from '../../hoc/Auxiliary';

const Layout =(props )=>(
    <Auxiliary>
        <div>ToolBar, SideDrawer, Backdrop </div>
        <main className="Content">
            {props.children}
        </main>
    </Auxiliary>
 

);

export default Layout