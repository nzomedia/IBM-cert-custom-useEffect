
import UseFetch from "./UseFetch";
import "./yoga.css";

function FetchYogaData(){
    const [data] = UseFetch("https://api.npoint.io/4459a9a10e43812e1152");
    console.log(data);

    return (<>
    <ul className="list_data_main">
        {
            data && data.map(d => (
                <>
                    <li className="list-item">
                        <h3 className="name title">{d.name}</h3>
                        <p className="benefits description"><b>Benefits:</b> {d.benefits}</p>
                        <span className="details">
                            <span className="label">Duration:</span> <span className="value">{d.time_duration}</span>
                        </span>
                    </li>
                </>
            ))
        }
    </ul>
    </>);
}

export default FetchYogaData;