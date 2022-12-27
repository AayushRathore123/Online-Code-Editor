import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import HomeNav from './homenav';
import data from './data';
import './Problem.css'
const Problem=() => {

    // useEffect(()=>{
    //     getAllProbs();
    // },[]);

    // const getAllProbs = async () => {
    //     let response = await Problemm();
    //     console.log(response);
    // }
    return (
    <div >
        <HomeNav/>
      <table>
        <tr>
          <th>S.No.</th>
          <th>Question</th>
          <th>Type</th>
          <th>Difficulty</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
                <td>{val.sno}</td>
              <Link  className="ques" to={val.link}><td>{val.name}</td></Link>
              <td>{val.type}</td>
              <td>{val.difficulty}</td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default Problem
