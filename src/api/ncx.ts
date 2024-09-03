import type dataNCX from "../types/data"
import "dotenv/config"

export default async function getData(){
    try{
        const res = await fetch(`http://${process.env.API_HOST}/ociconnecttelkom/sheet_get.php`)
        return {message:"Success", data: (await res.json()) as dataNCX[]}
    }catch(e){
        console.log(e)
        return {message: "Internal Server error", data:[]}
    }
}

export async function syncData(){
    try{
        const res = await fetch(`http://${process.env.API_HOST}/ociconnecttelkom/sinkronisasi.php`)
        return {message:"Success", data: (await res.text())}
    }catch(e){
        console.log(e)
        return {message: "Internal Server error", data:[]}
    }
}