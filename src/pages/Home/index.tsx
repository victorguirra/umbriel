import React, { useState, useEffect } from 'react';
import './styles.css';

import umbrielImg from '../../../public/umbriel.png';

interface DeferredPromptEvent extends Event {
    prompt: () => Promise<void>;
    userChoice: Promise<{
      outcome: 'accepted' | 'dismissed';
    }>;
  }

function Home(){
    const [deferredPrompt, setDeferredPrompt] = useState<DeferredPromptEvent | null>(null);
    const [isInstallable, setIsInstallable] = useState<boolean>(false);
    
    useEffect(() => {
        // Função para lidar com o evento `beforeinstallprompt`
        const handleBeforeInstallPrompt = (event: Event) => {
            const e = event as DeferredPromptEvent;
            e.preventDefault(); // Impede o navegador de exibir o prompt padrão
            setDeferredPrompt(e); // Armazena o evento para uso futuro
            setIsInstallable(true); // Mostra o botão de instalação
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

        // Limpeza do evento ao desmontar o componente
        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        };
    }, []);
    
    const handleInstallClick = () => {
        if (deferredPrompt) {
            deferredPrompt.prompt(); // Mostra o prompt de instalação ao usuário
        
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                console.log('Usuário aceitou a instalação');
                } else {
                console.log('Usuário rejeitou a instalação');
                }
                setDeferredPrompt(null); // Resetar o prompt armazenado
                setIsInstallable(false); // Esconder o botão de instalação
            });
        }
    };

    return(
        <div className="container">
            <h3>Umbriel</h3>

            <img src={umbrielImg} alt="Umbriel" />

            {isInstallable  && <button onClick={handleInstallClick}>Instalar App</button>}
            {!isInstallable  && <span className="message">Aplicativo já instalado!</span>}
        </div>
    )
}

export default Home;