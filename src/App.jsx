import { useEffect, useState } from 'react'
import './App.css'
function JobsCard({id}){
  let [jobsInfo,SetjobInfo]=useState();

  async function pullJobsInfo() {
    let temp=await fetch("https://hacker-news.firebaseio.com/v0/item/"+id+".json");
    temp=await temp?.json();
    SetjobInfo(temp); 
    console.log(temp);   
  }

  useEffect(() => {
    pullJobsInfo();
  
   
  }, [])
   let mystyle={
    width:"33%",
    border: "solid black 2px",
    backgroundColor: "grey"
   }
  
  return (
    <div style={mystyle}>
      {jobsInfo?.title}
      <br>
      </br>
      posted by :: 
      {jobsInfo?.by}
      
    </div>

  );
}

function App() {

  let [jobsList,SetjobsList]=useState([]);

  async function pullJobs(){
    let temp=await fetch(" https://hacker-news.firebaseio.com/v0/jobstories.json");
    temp=await temp.json();
    // temp=temp?.data;
  
    SetjobsList(temp);
    console.log(temp);
  }

  useEffect(() => {

    pullJobs();
    
    return () => {
      
    }
  }, [])
  
  let divstyle={
    
    //textAlign:"center"
    marginLeft: "40%"

  }
  let headingStyle={
    color :"red",
    textAlign:"center"
  }

  return (
    <>
    <div style={headingStyle}>
      Hacker News Jobs Board
    </div>
    <div style={divstyle}>
      {jobsList.map((curr,index)=><JobsCard key={index} id={curr}></JobsCard>)}

    </div>
       
    </>
  )
}

export default App
