import { useState } from 'react';
import './BandList.css';
import data from '../../metal.json';
import Band from '../Band/Band';

export default function BandList() {
  const [ query, setQuery ] = useState('')
  const bands = data
  .filter( (band) => {
    const inName = band.band_name.toLowerCase().includes(query.toLowerCase())
    const inStyle = band.style.toLowerCase().includes(query.toLowerCase())
    return inStyle || inName
  }).map( (band) => {
    const { ID, band_name, fans, formed, origin, split, style } = band;

    return (
      <Band
        key={ ID }
        id={ ID }
        band_name={ band_name }
        fans={ fans }
        formed={ formed }
        origin={ origin }
        split={ split }
        style={ style }
      />
    )
  });

  return (
    <div>
      <form className='search-form'>
        <input
          className='search-bar'
          value={query}
          placeholder='Search...'
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      <div className='BandList'>
        { bands }
      </div>
    </div>
  );
}
