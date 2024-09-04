import { useState } from 'react';
import './styles.css';
import umbrielImg from '/umbriel.png';

function Home(){
    const [selectedMessage, setSelectedMessage] = useState<number>(0);
    
    function handleChangeMessage(){
        const totalMessages = 5;
        setSelectedMessage(prevState => prevState + 1 === totalMessages ? 0 : prevState + 1);
    }

    return(
        <div className="container">
            <h3>Umbriel</h3>
            <img src={umbrielImg} alt="Umbriel" />
            
            {selectedMessage === 0 && (
                <span className="message">
                    Umbriel é um dos cinco grandes satélites <br></br>
                    de Urano, com um diâmetro de 1170 km.
                </span>
            )}
            
            {selectedMessage === 1 && (
                <span className="message">
                    Umbriel é constituído principalmente de gelo <br></br>
                    com uma fração significativa de rocha, e pode <br></br>
                    ser diferenciado em um núcleo rochoso e um manto de gelo.
                </span>
            )}

            {selectedMessage === 2 && (
                <span className="message">
                    Como todas as outras grandes luas de Urano, Umbriel <br></br>
                    provavelmente se formou a partir do disco de acreção <br></br>
                    em volta do planeta logo após sua formação.
                </span>
            )}

            {selectedMessage === 3 && (
                <span className="message">
                    Foi descoberto junto com Ariel em 24 de outubro <br></br>
                    de 1851, por William Lassell, e recebeu o nome de um <br></br>
                    personagem do poema de Alexander Pope The Rape of the Lock.
                </span>
            )}

            {selectedMessage === 4 && (
                <span className="message">
                    Está a uma distância média de 266 000 km de <br></br>
                    Urano, sendo o terceiro grande satélite em ordem de <br></br>
                    distância ao planeta.
                </span>
            )}

            <button onClick={handleChangeMessage}>Trocar Frase</button>
        </div>
    )
}

export default Home;