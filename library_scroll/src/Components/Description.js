function Description(props) {
  const descr = !props.descr
    ? 'No description available'
    : props.descr.length > 800
    ? props.descr.slice(0, 800) + '...'
    : props.descr;
  return (
    <div style={{ height: '30%', fontSize: '1.5em', paddingTop: '20px' }}>
      {descr}
    </div>
  );
}

export default Description;
