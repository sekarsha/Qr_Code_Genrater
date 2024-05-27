import { useState } from "react"


export const Qcode = () => {
let [img,setImg]=useState("");

let [loading,setloading]=useState(false);

let[qrData,setQrData]=useState("sekar");

let [qrsize,setqrdata]=useState(150)

async function gen_qr(){

  setloading(true);

  try{

    let url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrsize}x${qrsize}&data=${encodeURIComponent(qrData)}`;
    setImg(url)
  }
  catch(error){

    console.error("Error Gennerting QR Code",error);

  }
  
  finally{
    setloading(false);
  }
  
}

function down_qr(){

  fetch(img).then((response)=>response.blob()).then((blob)=>{

    let link=document.createElement("a");
    link.href=URL.createObjectURL(blob);
    link.download="Qr_Code.png"
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }).catch((error)=>{

    console.log("Eroor dowloding"+error);
  })

}

  
  return (
    <div className=" container">

        <div className="one  p-2">

        <h5  className=" text-center text-success fw-bold">Genrate QR Code</h5>
        <div className=" justify-content-center d-flex p-1">
        {loading && <p>Loading Please Wite...</p>}  
        {img && <img src={img} alt=""  />}

        </div>

        <div>
        
        <div className="m-1">
          <label htmlFor="datainput" className=" form-label"  >Data for Qr Code</label>
          <input type="text" value={qrData}    id="datainput" className="form-control  input-group"  placeholder="Enter data for QR code"   onChange={(e)=>setQrData(e.target.value)}  />
 
        </div>
       
       <div className="m-1">

       <label htmlFor="sizeinput" className=" form-label"  >Image size (e.g 150):</label>
        <input type="text" id="sizeinput" value={qrsize} onChange={(e)=>setqrdata(e.target.value)}     className=" form-control  input-group"    placeholder="Enter the image size" />

       </div>
       
       <div className="  d-flex m-2 gap-3">
       <button className=" btn btn-sm    btn-primary p-2" onClick={gen_qr}  >Genrate QR Code</button>
        <button className=" btn btn-sm   btn-success p-2" onClick={down_qr}   >Download QR Code</button>

       </div>
       
        </div>



        </div>

       <p className=" text-center text-muted">Designed By <a href="https://github.com/sekarsha">@sha</a></p>
       

    </div>
  )
}
