import { useEffect, useState} from 'react';

export default function AirportDetailLatest(props) {
const [airport, setairport] = useState('');

useEffect(() => {     
     setairport(props.airport);
});

return (
   <div class="container mx-auto grid grid-cols-9 mt-5 gap-5">
    <aside class="col-span-2">   
     <h2 class="text-2xl leading-7 font-semibold">This is the new Child Page</h2>
      <div class="shadow-md shadow-black mt-5 border p-5 rounded text-center">
        <main 
        class="col-span-7">   
      <h2 class="text-3xl font-bold mt-5">{ airport.name }</h2>  
      </main>    
        <table border="1">
          <tr>
            <td>Abbreviation</td><td>{ airport.abbreviation }</td>
          </tr>
          <tr>
            <td>An airport located in </td><td>{ airport.city }, { airport.state }</td>
          </tr>        
        </table>
      </div>
    </aside>  
  </div>
 );
}


