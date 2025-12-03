function ProfileBox() {
  const boxStyle = {
    padding: "16px",
    backgroundColor: "#f4f4f4",
    borderRadius: "8px",
    marginBottom: "20px",
  };

  const nameStyle = {
    color: "blue",
    fontSize: "20px",
    fontWeight: "bold",
  };

  const bioStyle = {
    color: "gray",
    fontStyle: "italic",
  };

  return (
    <div style={boxStyle}>
      <h2 style={nameStyle}>Nama Santri</h2>
      <p style={bioStyle}>Belajar React dengan Inline Styles</p>
    </div>
  );
}

export default ProfileBox;
