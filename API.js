
let url = "https://universities.hipolabs.com/search?name=";

let country = "nepal";

async function getcolleges() {
    try {
        let res = await axios.get(url+country);
        console.log(res);
    } catch (e) {
        console.log("error : ",e);
    }
}