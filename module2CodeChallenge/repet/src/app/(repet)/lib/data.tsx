'use server';
import axios from "axios";
import { Profile } from "./definitions";

export async function fetchRandomUserApi(n:number){
    

    const url = 'https://randomuser.me/api/?seed=Arasaka&results='+n;
    // const url = 'https://randomuser.me/api/?results='+n;
    try{
        const res = await axios.get(url);
        // console.log(JSON.stringify(res.data));
        const output:Profile[] = [];
        res.data.results.map(profile =>{
            let temp:Profile = {
                "fName": profile.name.first,
                "lName": profile.name.last,
                "imgUrl": profile.picture.medium
            }
            output.push(temp);
        })
        console.log(output);
        return output;
    }catch(e){
        console.error(e);
    }
}