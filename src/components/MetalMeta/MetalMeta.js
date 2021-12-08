import data from '../../metal.json';
import './MetalMeta.css';

export default function MetalMeta() {
  let totalFans = 0;
  const styles = new Set();

  data.forEach( (band) => {
    totalFans += band.fans;
    band.style.split(',').forEach( (style) => {
      styles.add(style);
    });
  });

  const totalBands = data.length;
  const totalStyles = styles.size;
  totalFans = (totalFans * 1000).toLocaleString('en');

  return (
    <div className='MetalMeta'>
      <span><b>Total Bands</b>: { totalBands },</span>
      <span><b>Total Styles</b>: { totalStyles },</span>
      <span><b>Total Fans</b>: { totalFans }</span>
    </div>
  );
}
