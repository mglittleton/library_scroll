import { FlexRow } from './customComponents';

function Description(props) {
  console.log(props.books)
  return (
    <div style={{height: "30%"}} >
      {props.books.description}
    </div>
  );
}

export default Description;
