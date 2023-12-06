import Image from "next/image";

export default function Testimony(fName:string,lName:string,imgUrl:string){
    return(
        <div>
            First Name = {fName}
            Last Name = {lName}
            <Image src={imgUrl} alt={fName} width={300} height={300} /> 
        </div>
    )
}