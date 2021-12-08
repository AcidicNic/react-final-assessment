import './Band.css';
import Like from '../Like/Like';

export default function Band(props) {
  const { id, band_name, fans, formed, origin, split, style, likes } = props;

  const styleList = style.split(',').map( (styleName) => <li>{ styleName }</li>);
  const formattedFans = (fans * 1000).toLocaleString('en');

  let like = null;
  if (split === '-') {
    like =
      <Like
        likes={ likes }
      />
  }

  return (
    <div className='Band'>
      <h1 className='band-name'>{ band_name }</h1>
      <p>
        <b>Origin</b>: { origin }<br/>
        <b>Fans</b>: { formattedFans }<br/>
        <b>Formed</b>: { formed }<br/>
        <b>Split</b>: { split }
      </p>
      <ul>
        { styleList }
      </ul>
      { like }
    </div>
  );
}
