'use client'

import { useState, useEffect} from 'react';
import airports from '../../data/airports.js';
import { useRouter } from 'next/router'
import { useSearchParams } from 'next/navigation'

export default function AirportDetail() {
const [airport, setairport] = useState('');

const router = useRouter();
const searchParams = useSearchParams();

useEffect(() => {  
     const code = searchParams.get("id");    
     const airport = airports.filter(airport => airport.abbreviation === code.toUpperCase())[0];
     setairport(airport);
});

return (  
   <div class="container mx-auto grid grid-cols-9 mt-5 gap-5">
    <aside class="col-span-2"> 
      <div class="shadow-md shadow-black mt-5 border p-5 rounded text-center">
        <p class="text-3xl font-bold">{ airport.abbreviation }</p>
        <p>An airport located in { airport.city }, { airport.state }</p>
      </div>
    </aside>
    <main class="col-span-7">  
      <h1 class="text-3xl font-bold mt-5">{ airport.name }</h1> 
    </main>
  </div> 
  );
}

