const ColorButton = (props) => {
  const { colorName, setSelectedColor } = props;

  return (
    <button onClick={() => setSelectedColor(colorName)}>
      {colorName}
    </button>
  );
};

export default ColorButton
