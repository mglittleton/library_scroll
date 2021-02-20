import '../App.css';
import { FlexRow } from './customComponents';

function Scroll(props) {
  return (
    <FlexRow alignCenter flex='3' >
      <img src={`https://covers.openlibrary.org/b/id/${props.pics[0]}-M.jpg`}/>
      <img src={`https://covers.openlibrary.org/b/id/${props.pics[1]}-M.jpg`}/>
    </FlexRow>
  );
}

export default Scroll;
