import type dataNCX from "../types/data"

export default async function getData(){
    try{
        const res = await fetch("http://192.168.1.36/ociconnecttelkom/sheet_get.php")
        return {message:"Success", data: (await res.json()) as dataNCX[]}
    }catch(e){
        console.log(e)
        return {message: "Internal Server error", data:[]}
    }
}