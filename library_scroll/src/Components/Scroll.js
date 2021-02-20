import '../App.css';
import { FlexRow } from './customComponents';

function Scroll(props) {
  return (
    <FlexRow alignCenter flex="3">
      {props.pics.map((e, i) => {
        if (!e || !e.imageLinks) {
          return (
            <img key={i} src="https://books.google.com/googlebooks/images/no_cover_thumb.gif" />
          );
        }
        console.log("check here for a thumbnail", e)
        return <img src={e.imageLinks.thumbnail} />;
      })}
    </FlexRow>
  );
}

export default Scroll;
