import { FlexRow } from './customComponents';

function Description(props) {
  const {descr} = props
  return (
    <div style={{height: "30%"}} >
      {descr}
    </div>
  );
}

export default Description;
