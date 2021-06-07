import React from 'react';
import "./styles/index.scss"
import Button, {ButtonType, ButtonSize} from "./components/Button/button";
import Alert from "./components/Alert/alert";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from './components/Menu/subMenu'

const App:React.FC = () =>{
  return (
    <div className="App">
      <header className="App-header">
        {/* <Button>hello</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Small} disabled>hello small</Button>

        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>hello large</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Large}>hello large</Button>

        <Button btnType={ButtonType.Link} href="http://www.baidu.com" target="_blank">hello href</Button> */}
        {/* <Alert  title={'222'} />  */}

        {/* <Menu defaultIndex={'0'} onSelect={(index) => {alert(index)}}>
          <MenuItem>
            cool link
          </MenuItem>
          <MenuItem disabled>
            cool link 2
          </MenuItem> 
          <SubMenu title="dropdown">
            <MenuItem>
              dropdown 1
            </MenuItem>
            <MenuItem>
              dropdown 2
            </MenuItem>
          </SubMenu>        
          <MenuItem>
            cool link 3
          </MenuItem>
        </Menu> */}

        <Menu defaultIndex={'0'} onSelect={(index) => {alert(index)}} mode="vertical" defaultOpenSubMenus={['2']}>
          <MenuItem>
            cool link
          </MenuItem>
          <MenuItem disabled>
            cool link 2
          </MenuItem> 
          <SubMenu title="dropdown">
            <MenuItem>
              dropdown 1
            </MenuItem>
            <MenuItem>
              dropdown 2
            </MenuItem>
          </SubMenu>        
          <MenuItem>
            cool link 3
          </MenuItem>
        </Menu>
      </header>
    </div>
  );
}

export default App;
