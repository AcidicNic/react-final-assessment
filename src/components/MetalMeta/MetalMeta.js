import data from '../../metal.json';

export default function MetalMeta() {
  const totalBands = data.length;
  const totalStyles = 0;

  return (
    <div className="metal-meta">
      <p>Total Bands: { totalBands }</p>
      <p>Styles: { totalStyles }</p>
    </div>
  );
}
