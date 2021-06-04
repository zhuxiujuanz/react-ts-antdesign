import React from 'react';
import "./styles/index.scss"
import Button, {ButtonType, ButtonSize} from "./components/Button/button";
import Alert from "./components/Alert/alert";
const App:React.FC = () =>{
  return (
    <div className="App">
      <header className="App-header">
        {/* <Button>hello</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Small} disabled>hello small</Button>

        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>hello large</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Large}>hello large</Button>

        <Button btnType={ButtonType.Link} href="http://www.baidu.com" target="_blank">hello href</Button> */}
        <Alert  title={'222'} /> 
      </header>
    </div>
  );
}

export default App;
