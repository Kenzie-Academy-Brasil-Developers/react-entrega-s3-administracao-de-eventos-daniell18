import { ContainerHeader } from "./style";
import LogoHeader from "./LogoHeader.png";
import { useState } from "react";

const Header = ({filtro,update}) => {
  const [name,setName]=useState("")
  const all=filtro
  const handleClick=()=>{
    if(name!==""){
    let aux=filtro.filter((product)=>product.name
    .split("")
    .slice(0, name.length)
    .join("")
    .toLocaleLowerCase()===name 
    )
   update(aux)
    }
    if(name===""||!name){
      update(JSON.parse(localStorage.getItem("Kenzie:All")))
    }
  
  }
  
  return (
    <div>
      <ContainerHeader>
        <img src={LogoHeader} alt="logo" />
        <div>
          <input value={name} onChange={(e)=>setName(e.target.value)} />
          <button onClick={()=>handleClick()} >Search</button>
        </div>
      </ContainerHeader>
    </div>
  );
};
export default Header;
