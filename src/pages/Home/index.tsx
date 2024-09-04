import { useState, useEffect } from 'react';
import './styles.css';

import umbrielImg from '/umbriel.png';

interface DeferredPromptEvent extends Event {
    prompt: () => Promise<void>;
    userChoice: Promise<{
      outcome: 'accepted' | 'dismissed';
    }>;
  }

function Home(){
    const [deferredPrompt, setDeferredPrompt] = useState<DeferredPromptEvent | null>(null);

    useEffect(() => {
        const handleBeforeInstallPrompt = (event: Event) => {
            const e = event as DeferredPromptEvent;
            e.preventDefault();
            setDeferredPrompt(e);
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        };
    }, []);

    const handleInstallClick = () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then(() => {
                setDeferredPrompt(null);
            });
        }
    };

    return(
        <div className="container">
            <h3>Umbriel</h3>
            <img src={umbrielImg} alt="Umbriel" />
            <button onClick={handleInstallClick}>Instalar App</button>
        </div>
    )
}

export default Home;