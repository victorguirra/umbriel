import './styles.css';
import umbrielImg from '/umbriel.png';

function Home(){
    return(
        <div className="container">
            <h3>Umbriel</h3>
            <img src={umbrielImg} alt="Umbriel" />
            <span className="message">
                Umbriel é um dos cinco grandes satélites <br></br>
                de Urano, com um diâmetro de 1170 km.
            </span>
        </div>
    )
}

export default Home;