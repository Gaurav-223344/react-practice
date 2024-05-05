import React, { useState } from 'react'
import Welcome from './components/Welcome'
import Clock from './components/Clock'
import LoginControl from './components/LoginControl'
import Blog from './components/Blog'
import Form from './components/Form'
import SearchList from './components/SearchList'



function App() {
  // const [clockFlag, setClockFlag] = useState(true)
  // const userInfo = [
  //   {
  //     firstName : "Naruto",
  //     lastName : "Uzumaki"
  //   },
  //   {
  //     firstName : "Sasuke",
  //     lastName : "Uchiha"
  //   },
  //   {
  //     firstName : "Rock",
  //     lastName : "Lee"
  //   }
  // ]

  const posts = [
    {
      id : 1,
      title : "Artificial Intelligence",
      content : "Artificial Intelligence is the ability of a computer to mimic human intelligence",
    },
    {
      id : 2,
      title : "Machine Learning",
      content : "Machine Learning is the study of computer algorithms that improve automatically through experience and by learning",
    },
    {
      id : 3,
      title : "Deep Learning",
      content : "Deep Learning is part of a broader family of machine learning methods based on Artificial Intelligence",
    },
    {
      id : 4,
      title : "Cloud Computing",
      content : "Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user",
    },
    {
      id : 5,
      title : "Cyber Security",
      content : "Cybersecurity is the practice of defending computers, servers, mobile devices, electronic data, networks, and other sensitive information",
    },
    {
      id : 6,
      title : "IoT",
      content : "IoT is the use of Internet-of-Things technology to connect and exchange data with other devices and systems",
    },
    {
      id : 7,
      title : "Big Data",
      content : "Big Data is data that is stored and processed in massive quantities",
    },
    {
      id : 8,
      title : "Blockchain",
      content : "Blockchain is a distributed ledger that facilitates the creation and management of a decentralized database",
    }
  ]

  const list = ["Naruto", "Luffy", "Goku", "Vegita", "Saitama", "Garou"];
  const postList = posts.map(ele => ele.content)
  return (
    <div>
      <SearchList list={postList}/>

      {/* <h1>Namaste</h1> */}
      {/* <LoginControl /> */}
      {/* <Blog posts={posts}/> */}

      {/* <Form /> */}
      
      {/* <button onClick={()=> setClockFlag(!clockFlag)}>Clock Toggle</button> */}
      {/* <br /> */}
      {/* {clockFlag && <Clock />} */}

      {/* <Clock /> */}

      {/* <Welcome user={userInfo[0]}/>
      <Welcome user={userInfo[1]}/>
      <Welcome user={userInfo[2]}/> */}

      {/* {userInfo.map((user) => <Welcome user={user}/>)} */}

    </div>
  )
}

export default App