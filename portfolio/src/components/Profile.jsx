import profile from "../assets/van.png";
import "./profiles.css"
export default function Card(){

    let description = "I'm a software Engineer from Mali 🇲🇱";
    return (
        <>

        <div className="profiles">

            <div className="card">
                <img className="card-img" src={profile} alt="Profile picture" />
                <h2 className="card-title">Modibo Keita</h2>
                <p className="card-text"> {description}</p>
            </div>

        </div>
        </>
    )
}
