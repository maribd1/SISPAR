import {useNavigate} from "react-router-dom";
import Historico from "../../assets/Header/Botão - Histórico.png";
import Home from "../../assets/Header/botão - Home.png";
import Pesquisa from "../../assets/Header/Botão - Pesquisa.png";
import Solicitacao from "../../assets/Header/Botão - Reembolso.png";
import Sair from "../../assets/Header/Botão - Sair.png";
import Perfil from "../../assets/Header/image.png";
import Fechar from "../../assets/Header/imagem-fechar-header.png";
import styles from "./NavBar.module.scss";

function NavBar(){

    const navigate = useNavigate();

    return(
        
        <nav className={styles.navBarEstilo}>

            <button onClick={()=>navigate("/")}>
                <img src={Fechar} alt="Vetor abrir e fechar" />
            </button>

            <section className={styles.sectionNavBar}>

               <img src={Perfil} alt="Vetor de perfil" />

                <div>
                    <button onClick={()=>navigate("/reembolsos")}>

                        <img src={Home} alt="Vetor de Home" />

                    </button>

                    <button onClick={()=>navigate("/solicitacao")}>

                        <img src={Solicitacao} alt="Vetor de solicitação" />

                    </button>

                    <button onClick={()=>navigate("/reembolsos")}>

                        <img src={Pesquisa} alt="Vetor de pesquisa" />

                    </button>

                    <button onClick={()=>navigate("/solicitacao")}>

                        <img src={Historico} alt="Vetor de histórico" />

                    </button>
                </div>
            </section>

            <button onClick={()=>navigate("/login")} className={styles.buttonSair}>

                <img src={Sair} alt="Botão de sair" />
                
            </button>

        </nav>
    );
}

export default NavBar;