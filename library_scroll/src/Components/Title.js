function Title(props) {
  const { title } = props;
  return (
    <div style={{ height: '20vh', fontSize: '3em', paddingTop: '50px' }}>
      {title}
    </div>
  );
}

export default Title;
