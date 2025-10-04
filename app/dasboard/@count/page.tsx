import axios from "axios";

const CountPage = async()=>{
    const countLocations= await axios.get("http://127.0.0.1:4001/locations")
    return countLocations?.data.length;
}

export default CountPage