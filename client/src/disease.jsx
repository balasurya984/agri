import './disease.css'
import DiseaseForm from './DiseaseForm/DiseaseForm';
import React,{useEffect} from 'react'
import { useState } from 'react';
import axios from 'axios';
import Card4 from './card4';
import './card4.scss'

const Disease = ()=>{
    const [dis,setDis]=useState(false)
    const [disease,setDisease]=useState()
    const getData =async()=>{
        const data= await axios.get('http://localhost:8080/disease')
        setDisease(data.data)
    }
    useEffect(()=>{
        getData()
    },[])
    useEffect(()=>{
        if(disease){
            setDis(true)
        }
    },[disease])
{
    return(
        <div >
            <div class="title">
                <h1>Choose the plant and identify disease!!</h1>
            </div >
            {dis &&
            <div class="image-block">
                {/* <tr >
                    <th>S.No</th>
                    <th>Image</th>
                    <th>Plant Name</th>
                    <th>View</th>
                </tr> */}
              {disease.map((d,idx)=>(
                // <tr key={d._id}>
                //     <td>{idx}</td>
                //     <td className='plantimg'><img src={d?.image} height="150px" alt="" /></td>
                //     <td>{d.name}</td>
                //     <td>{d.disease}</td>
                // </tr>
                <figure >
                    <h1>{d.name}</h1>
                    <img src={d?.image} alt="" />
                    <figcaption>
                        <h3>
                          {d.name}
                        </h3>
                        <p>{d.disease}</p>
                        <button>
                            More Info
                        </button>
                    </figcaption>
                </figure>

              ))}


            </div>
}

<div>
            {/* <figure class="image-block">
	<h1>{d.name}</h1>
	<img src={d?.image} alt="" />
	<figcaption>
		<h3>
			More Info
		</h3>
		<p>{d.disease}</p>
		<button>
			More Info
		</button>
	</figcaption>
</figure> */}
        </div>         
        </div>
    )
}
}
export default Disease;