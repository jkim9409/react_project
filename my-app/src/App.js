import logo from './logo.svg';
import "./style.css"

import BucketList from './BucketList';
// import {BucketList} from "./BucketList";



import LifecycleEx from './LifecycleEx';
import React from 'react';


// function App() {
//   return (
//     <div className="App">
//       <BucketList/>
//     </div>
//   );
// }

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      list: ["영화관 가기", "매일 책읽기", "수영배우기"],
    }

  }

  render(){
    return (
      <div className="App">
        <div className="container">
          <h1>내 버킷리스트</h1>
          <hr className="line"/>
          <BucketList here={this.state.list}/>
        </div>
      </div>
    )
  }



}

export default App;
