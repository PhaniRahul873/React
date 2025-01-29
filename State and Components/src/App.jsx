import React from 'react'
import { useState } from 'react';
import { PostComponent } from './Post';

function App() {
  const [count, setCount] = useState(0)

  const [posts, setPosts] = useState([]);

  const postComponents = posts.map(post => <PostComponent
    name={post.name}
    subtitle={post.subtitle}
    time={post.title}
    image={post.image}
    description={post.description}
  />)

  function addPost() {
    setPosts([...posts, {
      name: "harkirat",
      subtitle: "10000 followers",
      time: "2m ago",
      image: "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
      description: "What to know how to win big? Check out how these folks won $6000 in bounties."
    }])}

  return (
    <div>
      <Button count={count} setCount={setCount}></Button>
      <ToggleMessage/>
      <ToggleMessage/>
      <ToggleMessage/>
      <div style={{background: "#dfe6e9", height: "100vh", }}>
      <button onClick={addPost}>Add post</button>
      <div style={{display: "flex", justifyContent: "center" }}>
        <div >
          {postComponents}
        </div>
      </div>
    </div>
    </div>
   
  )
}


function Button(props){
  function onButtonClick(){
    props.setCount(props.count + 1);
  }
  return <button onClick={onButtonClick}>Counter {props.count}</button>
}

const ToggleMessage = () => {
  let [notificationCount, setNotificationCount] = useState(0);
  console.log("rerender");
  const increment = ()=> setNotificationCount(notificationCount+1);

  return (
    <div>
      <button onClick={increment}>Increment Count</button>
      {notificationCount}
    </div>
  )
}

export default App
