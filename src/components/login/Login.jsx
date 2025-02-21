import {useNavigate} from "react-router-dom";
import Capa from "../../assets/Tela Login/imagem tela de login.png";
import Logo from "../../assets/Tela Login/logo-ws.png";
import styles from "./Login.module.scss";  //importando o componente de estilização do Login.

function Login() {

    const navigate = useNavigate() //iniciando o hook useNavigate

    const irParaReembolsos = () => {
        navigate("/reembolsos") //redirecionando para a pagina de reembolsos
    }
    return(

        <main>

            <section className={styles.conteinerLogin}>

                <img className={styles.imgNavio} src={Capa} alt="Foto de navio cargueiro" />

            </section>

            <section className={styles.conteinerForm}>

                <section className={styles.conteinerForm2}>

                    <div className={styles.conteinerHeaderForm}>
                        <img className={styles.Logo} src={Logo} alt="Logo da Wilson sons" />

                        <h1>Boas vindas ao Novo Portal SISPAR</h1>

                        <p>Sitema de Emissão de Boletos e Pagamentos</p>
                    </div>

                    <form action="">

                        <input type="email" name="email" id="email" placeholder="Email"/>

                        <input type="password" name="password" id="password" placeholder="Senha"/>
                    
                        <a href="">Esqueci minha senha</a>

                        <div className={styles.buttonGroup}>

                        <button className={styles.button1} onClick={irParaReembolsos}>Entrar</button>

                        <button className={styles.button2} >Criar Conta</button>

                        </div>
                    </form>
                
                </section>
            
            </section>
       </main>
    );
}
export default Login;