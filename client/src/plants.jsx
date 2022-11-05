import logo from './logo.svg';
import './App.css';
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';  
import Button from "react-bootstrap/Button";
import Table from 'react-bootstrap/Table';
import PlantForm from './PlantForm/PlantForm';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import './card3';

function Plant() {
  const [plant,setPlants]=useState()
  const [dis,setDis]=useState(false)
  const getData =async(req,res)=>{
      const data = await axios.get('http://localhost:8080/plant')
      console.log(data.data)
      setPlants(data.data)
  }
  useEffect(()=>{
    getData()
  },[])
  useEffect(()=>{
      if(plant){
        setDis(true)
      }
  },[plant])
  return (
    <div>

          <div class="title">
            <h1>Discover our featured plants!!!</h1>
          </div >
{dis &&
          <div class="cards3">
                {/* <tr >
                    <th>S.No</th>
                    <th>Plant Image</th>
                    <th>Plant Name</th>
                    <th>Price</th>
                    <th>Buy</th>
                </tr> */}
                  {plant.map((p,idx)=>(
                    // <tr key={p._id}>
                    //   <td>{idx+1}</td>
                    //     <td className='plantimg'><img  height= "150px" src={p.image} alt="" /></td>
                    //     <td>{p.name}</td>
                    //     <td>{p.prize}</td>
                    //     <td><button className='btn btn-success' style={{fontSize:"12px",color:"black"}}> <a href={`${p.link}`}>Buy Now</a></button></td>
                    // </tr>
                    <ul class="cards3">
  <li>
    <a href="" class="card">
      <img src={p.image} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img class="card__thumb" src={p.image} alt="" />
          <div class="card__header-text">
            <h3 class="card__title3"><strong>{p.name}</strong></h3>            
            <span class="card__status">₹ {p.prize}</span>
          </div>
        </div>
        <p class="card__description"><button className='btn btn-success' style={{fontSize:"12px",color:"black"}}> <a href={`${p.link}`}>Buy Now</a></button></p>
      </div>
    </a>      
  </li>
  
</ul>
                ))}
            </div>
}



    </div>
  );
}

export default Plant;
