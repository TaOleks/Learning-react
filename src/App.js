
import React from "react"
import './styles/App.css'
import PostItem from "./components/PostItem";

function App() {




  return (


    <div className="App">
      <PostItem post={{id:1, title:'Javascript', body:'Description my post'}} />
      <PostItem post={{id:2, title:'Javascript', body:'Description my post'}} />
      <PostItem post={{id:3, title:'Javascript', body:'Description my post'}} />
      <PostItem post={{id:4, title:'Javascript', body:'Description my post'}} />
      <PostItem post={{id:5, title:'Javascript', body:'Description my post'}} />


    </div>
  );
}

export default App;
