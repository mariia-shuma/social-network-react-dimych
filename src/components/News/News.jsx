import Clock from "./Clock";
import ButtonSubmit from "./ButtonSubmit";
import ButtonOnOff from "./ButtonOnOff";


function News(props){
    return <div >
        <Clock timeZone="Europe/Kiev" />,
        <Clock timeZone="Europe/London" />
        <ButtonSubmit/>
        <ButtonOnOff/>
    </div>
}

export default News;


