const card = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "column",
  boxShadow: "2px 2px",
  padding: "10px",
  textAlign: "center",
  backgroundColor: "white",
  border: "1px solid",
  height: "100%",
};

const imgStyle = {
  maxWidth: "100%",
  maxHeight: "50%",
};

const nameStyle = {
  margin: "0",
};

const descStyle = {
  fontSize: "14px",
  margin: "0",
};
const priceStyle = {
  margin: "0",
  fontStyle: "italic",
};

const buttonStyle = {
  padding: "8px",
  borderRadius: "10px",
};

const itemAdded = {
  position: "fixed",
  bottom: "0",
  right: "0",
  width: "300px",
  color: "white",
  backgroundColor: "green",
  padding: "10px",


};

const shopStyle = {
  card,
  imgStyle,
  nameStyle,
  descStyle,
  priceStyle,
  buttonStyle,
  itemAdded,
};

export default shopStyle;
