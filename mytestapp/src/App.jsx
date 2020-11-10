import React ,{Component} from 'react';
import Header from './components/Header'
import Footer from './components/Footer' 
import BasicTextFields from './components/TextField'
import MediaCard from './components/Media'
import ImageAvatars from './components/ImageAvator'
import   './App.css'










//Class Function--------------------------------
//import React,{Component}from 'react';

//class sai bahir varaibale bi banasaktaihai varname="Amna"
// class App  extends React.Component{
// render(){
//   var name="Amna"
// let todos=[{text:"namaz"},{text:"quran"}]
//   return(
// //jsx
// <div><h1>Learn React!@{name}</h1></div>
//   )

// }


// }

// export default App;



//map----------------------------------array object
// class App  extends React.Component{
//   render(){
//     var name="Amna"
//   let todos=[{text:"namaz"},{text:"quran"}]
//     return(
//   //jsx
//   <div><ul>
    
//     {todos.map((item,index)=>{

// //index her element ka index number index no unique   key propattribute
//       return<li key={index}>{item.text}</li>
//       //item array object
//       //console.log(item)
//     })}
//     </ul></div>
//     )
  
//   }
  
//   }
  
  // export default App;
  

//Component Name First Letter Capital
  //another way  class function render method let variable array object properties  render in map


// class App extends React.Component{
//   render(){
//     let todos =[{text:"Amna"},{text:"Faryaal"
//     }];
//     return(
//       <div>
//         <ul>
//           <li>{todos[0].text}</li>
//           <li>{todos[1].text}</li>
//      </ul>
//       </div>
//     )
    
//   }
// }

// export default App;

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^Header Footer Main Components^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^Three Components

// class Header extends Component{
//   render(){
//     return(
// <div><h1 className="header">Header</h1></div>
//     )
//   }
// }

// class Footer extends Component{
//   render(){
//     return(
// <div><h1 className="footer" >Footer</h1></div>
//     )
//   }
//  }

//SelfClosing Tag-----<Header/>

class App extends Component{
    render(){
      return(
        <div>
       <Header/> 
      
            <h1 style={{color:'blueviolet',fontSize:24}}>Main Component</h1>
            <br></br>
            {/* <button type="button" className="btn btn-dark">Dark</button> */}

            <MediaCard/>
            {/* <img src="https://i.insider.com/5e149aa5855cc2541511f9cc?width=1100&format=jpeg&auto=webp" alt="car" width="100"/>
             */}

             <br></br>
             <BasicTextFields/>
             <br></br>

             <ImageAvatars/>

      <Footer/> 
        </div>
      )
      
    }
  }

  export default App;






//Shortcut key//cahnge extension set files  .jsx index.js   files import changing--------------------------



///////////////////////
// function App(){

//     return(
//       <div><h1>React Function</h1></div>
//     )

// }

// export default App;














// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React!
//         </a>
//       </header>
//     </div>
//   );
// }

