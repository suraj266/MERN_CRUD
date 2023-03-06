import React, { useEffect, useState } from 'react'
import { myProfile } from '../component/services/context';


const Home = () => {

  const [name, setName] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')) {
      myProfile().then((res) => {
        setName(res[0].name);
      })
    }
  }, []);
  return (<>
    <>
      <div style={{ marginTop: '10em' }}>
        <div className='con-1'>
          <div className='con-c-1'>Helping You Every Step Of The Way</div>
          <div className='con-img-c-2'>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h2>Welcome</h2>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h1>{name.toUpperCase()}</h1>
        </div>
      </div>
    </>
  </>
  )
}

export default Home;