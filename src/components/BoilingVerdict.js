export default function BoilingVerdict({celcius = 0}){
    console.log(celcius);
    if(celcius >= 100){
        return <p>Water would Boil.</p>
        
    }
    return <p>Water would not Boil.</p>
}