import React, {useState, useEffect} from "react";

import Card from "../components/Card/Card";

function Api() {
    const[data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.disneyapi.dev/character')
        .then(response => response.json())
        .then(datas => {
            console.log(datas)
            setData(datas.data);
        });
    }, []);

    

    return(
        <>
        <h1>Lista de Filmes</h1>

        <div>
            {data.map(item => (
                <Card key={item._id} titulo={item.name} image={item.imageUrl} />
            ))}
        </div>
        
      {/* <ul>
        {data.map(item => (
          <li key={item._id}>
            {<Card titulo={item.name} image={item.imageUrl}/>}
          </li>
        ))}
        {/* {data.map(item => (
          <li key={item._id}>
            {item._id} <strong>{item.name}</strong> - Filmes: {item.films.join(', ')}
          </li>
        ))} 
      </ul> */}

      {data.forEach(item => {
        
      })}
  
        </>
    )
}

export default Api;