import React from 'react';
import "./styles/index.scss"
import Button, {ButtonType, ButtonSize} from "./components/Button/button";
import Alert from "./components/Alert/alert";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
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

        <Menu  onSelect={(index) => alert(index)} defaultIndex={0}>
          <MenuItem index={0} >
          aaa
          </MenuItem>
          <MenuItem index={1} disabled>
          bbb
          </MenuItem>
          <MenuItem index={2}>
          ccc
          </MenuItem>
        </Menu>
        <Menu  mode="vertical" onSelect={(index) => alert(index)} defaultIndex={0}>
          <MenuItem index={0} >
          aaa
          </MenuItem>
          <MenuItem index={1} disabled>
          bbb
          </MenuItem>
          <MenuItem index={2}>
          ccc
          </MenuItem>
        </Menu>
      </header>
    </div>
  );
}

export default App;
