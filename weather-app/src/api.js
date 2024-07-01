import React, { useEffect, useState } from 'react';
import img from "./sun.jpg";
import "./Api.css";
const convert = (val) => {
    const value = val - 273.15;
    return Math.floor(value);
//   console.log(value) 

  };
 
function Api() {
  const [get, setApp] = useState("");
  const[value,setVal] = useState("indore")
  const [City, setCity] = useState(value);
  // console.log(get.weather[0].main);
 
  
//   console.log(get.main);
//   const temp = get.main;
  // console.log(get)
// const a = useRef(0);

  

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

// const v = "srinagar";
async function res() {
      try {
        await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=8add16cc84c3df32147feb99c5355c55`, requestOptions)
          .then(response => response.json())
          .then(result => {
            // console.log(result);
            setApp(result);
            // console.log(result);
            // setCity(result.name);
            // console.log(result.name);
        
          });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
res();
    // fetchData();
  }, [City]);

  return (
    
    <>
    
      
      {get ? (<>

       
        
        {convert(get.main.temp)>20 ? (<>
 
    
  <img className="back" src="https://news-fair.com/wp-content/uploads/2021/09/How-to-Say-It-is-sunny-outside-edited.jpg" alt="sunny" />    

  <div className='child white'>
 
  <input className='search' type="search" placeholder='search' onChange={(e)=>setVal(e.target.value)}/>
  <input  className="button" type="button" onClick={()=>setCity(value)} />
  <img src={img} alt="sunny" className='icon' />
  <h1 >{get.name}</h1> 

  <h1 >wind:{get.wind.speed}</h1> 
  <h1> {convert(get.main.temp)+"c"}</h1>
  
  </div>
        
        
            
    
      
      
       </> ):(<>
        
       <img className="back" src="https://wallpaperaccess.com/full/5206949.jpg" alt="oooppp" />
     
       <div className='child white'>
       <img src="https://img.freepik.com/free-psd/3d-icon-weather-conditions-with-freezing-temperature_23-2150108723.jpg" alt="ssddsdf" className='icon2' />
       <input className='search' type="search" placeholder='search' onChange={(e)=>setVal(e.target.value)}/>
  <input  className="button" type="button"  onClick={()=>setCity(value)} />
       <h1>{get.name}</h1>
       <h1>{convert(get.main.temp)+"c"}</h1>
       <h1 >wind:{get.wind.speed}</h1> 
       </div>
       </>)}
       
  

 
        
      
            
    
      
      
      </> ):(<>Loding....</>)}
    
      
    </>
  );
}

export default Api;
