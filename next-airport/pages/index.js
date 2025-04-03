import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import { useState} from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [airportCode, setairportCode] = useState('cvg');
  const [myLink, setmyLink] = useState('airport/cvg');
  
  const handleChange = (event) => {   
    setairportCode(event.target.value);
    setmyLink("airport/" + event.target.value);
  };
  
  const bStyle = { width: "100px", height: "40px", color: 'red', fontWeight: 'bold' };
   
  return (  
    <div>    
      <h2>This is home page</h2>     
      <ul>
        <li><Link href="/about">About page</Link></li>
        <br />
        <p>Enter Airport Code below: </p>               
        <input type="text" id ="airportCode" name="airportCode" value={airportCode} onChange={handleChange} />
        <p>Link is: { myLink }</p>      
         <br />
        <Link href={ myLink }><b> <button style={bStyle}>Click Here</button></b></Link>
      </ul>            
    </div>
   );
 
}

