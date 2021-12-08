import data from '../../metal.json';

export default function MetalMeta() {

  const styles = new Set();
  data.forEach( (band) => {
    band.style.split(',').forEach( (style) => {
      styles.add(style);
    });
  });

  const totalBands = data.length;
  const totalStyles = styles.size;

  return (
    <div className="metal-meta">
      <p>Total Bands: { totalBands }</p>
      <p>Styles: { totalStyles }</p>
    </div>
  );
}
