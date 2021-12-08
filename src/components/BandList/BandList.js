import './BandList.css';
import data from '../../metal.json';
import Band from '../Band/Band';

export default function BandList() {

  const bands = data
  .map( (band) => {
    const { ID, band_name, fans, formed, origin, split, style } = band
    return (
      <Band
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
    <div className="band-list">
      { bands }
    </div>
  );
}
