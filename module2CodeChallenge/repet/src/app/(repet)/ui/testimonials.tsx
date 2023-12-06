import { fetchRandomUserApi } from "../lib/data";
import { Profile } from "../lib/definitions";
import Testimony from "./testimony";

export default function Testimonials() {
    
    const profilesFetch:{} = fetchRandomUserApi(15);
    let profiles:{fName:string; lName:string; imgUrl:string}[] = [];
    if (profiles != null) {
        return (
            <div>

            </div>
        )
    }else{
        return (
            <div>
                Error occured!
            </div>
        )
    }
}