import styles from "./Reembolsos.module.scss";
import Home from "../../assets/Dashboard/Vector (1).png";
import Seta from "../../assets/Header/seta.png";
import Analises from "../../assets/Dashboard/Análises.png";
import NumeroAnalises from "../../assets/Dashboard/N-Análises.png";
import NumeroAprovados from "../../assets/Dashboard/N-Aprovados.png";
import NumeroRejeitados from "../../assets/Dashboard/N-Rejeitados.png";
import NumeroSolicitados from "../../assets/Dashboard/N-Solicitados.png";
import Sistema from "../../assets/Dashboard/Sistema-atualizado.png";
import SolicitarHistorico from "../../assets/Dashboard/Solicitar - Histórico.png";
import SolicitarReembolso from "../../assets/Dashboard/Solicitar - Reembolso.png";

//importando o componente NavBar
import NavBar from "../navbar/NavBar.jsx";

function Reembolsos(){

    return(
        <div className={styles.layout}>
            <NavBar/>
            <main  className={styles.mainReembolsos}>

                <header>
                    <div className={styles.containerHeader}>
                        <img src={Home} alt="Vetor de uma casinha" />

                        <img src={Seta} alt="Vetor de uma setinha" />

                        <p>Reembolsos</p>
                    </div>
                </header>                           


                <section className={styles.centralizar}>

                    <h1>Sistema de Reembolsos</h1>

                    <p>Solicite novos pedidos de reembolsos, visualize solicitações em análise e todo o histórico.</p> 

                    <section className={styles.conteinerCards}>

                        <article className={styles.card}>

                            <img src={SolicitarReembolso} alt="ícone para solicitação de reembolso" />

                            <p>Solicitar Reembolsos</p>

                        </article>

                        <article className={styles.card}>

                            <img src={Analises} alt="ícone para análises" />

                            <p>Verificar análises</p>

                        </article>

                        <article className={styles.card}>

                            <img src={SolicitarHistorico} alt="ícone de histórico" />

                            <p>Histórico</p>

                        </article>
                    </section>

                    <section className={styles.conteinerStatus}>

                        <div>

                            <img className={styles.img1} src={NumeroSolicitados} alt="" />

                            <h4>182</h4>

                            <p>Solicitados</p>

                        </div>

                        <div>

                            <img className={styles.img2} src={NumeroAnalises} alt="" />

                            <h4>74</h4>
                            <p>Em análise</p>

                        </div>

                        <div>

                            <img className={styles.img3} src={NumeroAprovados} alt="" />

                            <h4>195</h4>

                            <p>Aprovados</p>

                        </div>

                        <div>

                            <img className={styles.img4} src={NumeroRejeitados} alt="" />

                            <h4>41</h4>

                            <p>Rejeitados</p>

                        </div>
                    </section>

                    <section className={styles.conteinerSitema}>
                        
                        <img src={Sistema} alt="" />
                        <p>Sistema atualizando.</p>

                    </section>

                </section>
            </main>
        </div>
        
    );
}
export default Reembolsos;