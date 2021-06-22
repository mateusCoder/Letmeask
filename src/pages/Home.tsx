import { useHistory } from 'react-router-dom'

import IllustrationImg from '../assets/images/illustration.svg'
import Logo from '../assets/images/logo.svg'
import GoogleIconImg from '../assets/images/google-icon.svg'

import {Button} from '../components/Button'

import '../styles/auth.scss'

export function Home(){
    const history = useHistory();

    function navigateToNewRoom(){
        history.push('/rooms/new')
    }
    return (
        <div id="page-auth">
            <aside>
                <img src={IllustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tira as dúvidas da sua audiencia em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={Logo} alt="Letmeask" />
                    <button onClick={navigateToNewRoom} className="create-room">
                        <img src={GoogleIconImg} alt="Logo do Google" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">ou entre em uma sala</div>
                    <form>
                        <input 
                            type="text" 
                            placeholder="Digite o código da sala"
                        />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}