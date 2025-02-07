import Capa from "../../assets/Tela Login/imagem tela de login.png";
import Logo from "../../assets/Tela Login/logo-ws.png";
import styles from "./Login.module.scss";  //importando o componente de estilização do Login.

function Login(){
    return(

        <main>

            <section className={styles.conteinerlogin}>
                <img src= {Capa} alt="Foto de navio cargueiro" />
            </section>

            <section>
                <p>Reservada para imagem</p>
            </section>

            <section>

                <div>
                    <img src= {Logo} alt="Logo da Wilson sons" />

                    <h1>Boas vindas ao Novo Portal SISPAR</h1>

                    <p>Sitema de Emissão de Boletos e Pagamentos</p>
                </div>

                <form action="">

                    <input type="email" name="email" id="email" placeholder="Email"/>

                    <input type="password" name="password" id="password" placeholder="Senha"/>
                
                    <p>Esqueci minha senha</p>

                    <div>
                    <button>Entrar</button>
                    <button>Criar Conta</button>
                    </div>
                </form>
            
            </section>
       </main>
    )
}
export default Login