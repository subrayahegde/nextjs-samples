import { useLayoutEffect, useState, useEffect} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import airports from '../../data/airports.js';
import AirportDetailNew from './AirportDetailNew';
import AirportDetailLatest from './AirportDetailLatest';

export default function AirportPage() {

 const [airport, setairport] = useState('');
 const [code, setcode] = useState('');
 
 const router = useRouter();


 useLayoutEffect(() => {  
   const code = router.query.id;    
   const airport = airports.filter(airport => airport.abbreviation === code.toUpperCase())[0];
   setairport(airport);
   setcode(airport.abbreviation);
 });

 const pStyle1 = { color: 'red', fontWeight: 'bold' };
 const pStyle2 = { color: 'green', fontWeight: 'bold' };
 const pStyle3 = { color: 'blue', fontWeight: 'bold' };
 const pStyle4 = { color: 'purple', fontWeight: 'bold' };

 return (  
  <div className="container mx-auto my-5">
    <h1 className="text-2xl leading-7 font-semibold">This is the Main Page</h1>
    <p>This page contains the specific information about the <strong>{ airport.abbreviation }</strong> airport.</p> 
    <Link href={'AirportDetail?id='+ airport.abbreviation}>Show Details Page</Link>
    <p>Showing the details using Child components</p>
    <br />
    <p style={ pStyle1 }>------To a child component by passing query parameter--------</p>
    <AirportDetailNew code={router.query.id} />
    <br />
    <p style={ pStyle2 }>------To a child component by passing session data (string)--------</p>
    <AirportDetailNew code={code} />
    <br />
    <p style={ pStyle3 }>------To a child component by passing session data (element of an object)---TODO-----</p>
    <AirportDetailNew code={code} />
    <br />
    <p style={ pStyle4 }>------To a new child component by passing session data (object itself)--------</p>
    <AirportDetailLatest airport={airport} /> 
    <br />
   </div>
  );
}

