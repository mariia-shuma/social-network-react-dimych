import Clock from "./Clock";


function News(props){
    return <div >
        <Clock timeZone="Europe/Kiev" />,
        <Clock timeZone="Europe/London" />
    </div>
}

export default News;


