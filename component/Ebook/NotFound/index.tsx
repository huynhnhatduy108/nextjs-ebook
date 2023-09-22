
function EbookNotFound() {
  return (
    <div style={{ position: "relative" , height:"100vh"}}>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <p style={{margin:0, textAlign:"center", fontSize:"20px", fontWeight:"500", color:"#448ad9"}}>404 </p>
        <p style={{margin:"10px", textAlign:"center", color:"#448ad9"}}>Khong tim thay sach </p>
      </div>
    </div>
  );
}

export default EbookNotFound;
