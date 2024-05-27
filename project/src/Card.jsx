let data=[

  { name:"Jose",
   city:"Palakad",
   des:"Front-End-Developer",
   skils:"Skils",
   online:true,
   image:"images/male.jpg" ,
   skil:["UI/UX","Front-End-Developer","HTML","CSS","Bootstrap","Java-Script"]},

   { name:"Rosy",
   city:"Tirusur",
   des:"Full-Stack-Developer",
   skils:"Skils",
   online:false,
   image:"images/female.jpg" ,
   skil:["UI/UX","Front-End-Developer","HTML","CSS","Bootstrap","Java-Script","MogoDB","Node JS"]},

]




function User(props) {

    return (

        

            <div className=" col one p-3 justify-content-center   m-3  rounded two ">
              
              <div className="mt-3 ms-3">
              <span className={props.online?"online":"ofline"}>{props.online?"ONLINE":"OFLINE"}</span>
              </div>
               

                <div >

                    <div className=" d-flex justify-content-center">
                        <img src={props.image} alt="" width={"150px"} height={"150px"}  />
                    </div>
                    
                   <div className=" text-white text-center p-2">
                    <h4>{props.name}</h4>
                    <h5>{props.city}</h5>
                    <h6>{props.des}</h6>
                    
                   </div>

                   <div className=" d-flex justify-content-evenly">
                    <button className=" btn btn-primary ps-4 pe-4">Message</button>
                    <button className="  btn btn-outline-primary text-white ps-4 pe-4">Following</button>
                   </div>

                   <div>

                    <h6 className=" p-2  text-white">{props.skils} </h6>

                    <ul className=" d-flex flex-wrap gap-2  text-white ">
                       {props.skil.map((sk,index)=>(

                        <li key={index} className=" nav-link border p-1"   >{sk }</li>
                       ))}
                    </ul>
                   </div>

                </div>

            </div>



       


    );

}

export const Card = () => {
    return (

        <>  

       {data.map((user,index)=>(

            <User key={index} 
            name={user.name}
            city={user.city}
            des={user.des}
            skils={user.skils}
            online={user.online}
            image={user.image}
            skil={user.skil}/>
            
            
        
        ))}
        
        
        
        </>
        
    )
}



{/* <div><User name="Jose" city="Palakad" des="Front-End-Developer" skils="Skils" online={true}  image="images/male.jpg"     skil={["UI/UX","Front-End-Developer","HTML","CSS","Bootstrap","Java-Script"]} /></div> */}
