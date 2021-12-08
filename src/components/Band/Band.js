export default function Band(props) {
  const { id, band_name, fans, formed, origin, split, style } = props

  const styleList = style.split(',').map( (styleName) =>
    <li>{ styleName }</li>
  );

  const formattedFans = (fans * 1000).toLocaleString('en');

  return (
    <div className="band">
      <h1>{ band_name }</h1>
      <p>
        <b>Origin:</b> { origin }<br/>
        <b>Fans:</b> { formattedFans }<br/>
        <b>Formed:</b> { formed }<br/>
        <b>Split:</b> { split }
      </p>
      <ul>
        { styleList }
      </ul>
    </div>
  );
}
