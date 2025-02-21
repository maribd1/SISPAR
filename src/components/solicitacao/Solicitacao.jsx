import styles from "./solicitacao.module.scss";
import NavBar from "../navbar/NavBar.jsx";
import Home from "../../assets/Header/botão - Home.png";
import Seta from "../../assets/Dashboard/Vector.png";

function Solicitacao() {
    return(
        <div className={styles.layoutSolicitacao}>

            <NavBar/>

            <div className={styles.containerPrincipalSolicitacao}>

                <header className={styles.headerSolicitacao}>

                    <img src={Home} alt="Vetor da casinha" />

                    <img src={Seta} alt="Vetor da setinha" />

                    <p>Reembolsos</p>

                    <img src={Seta} alt="Vetor da setinha" />

                    <p>Solicitação de Reembolsos</p>

                </header>

                <main className={styles.mainSolicitacao}>

                    <form className={styles.formSolicitacao}>

                        <div className={styles.grupo1}>

                            <div className={styles.inputNome}>

                                <label htmlFor="">Nome completo</label>

                                <input type="text" />

                            </div>

                            <div className={styles.inputEmpresa}>

                                <label htmlFor="">Empresa</label>

                                <input type="text" />

                            </div>

                            <div className={styles.inputPrestacao}>

                                <label htmlFor="">N° Prest. Contas</label>

                                <input type="text" />

                            </div>

                            <div className={styles.inputMotivo}>

                                <label htmlFor="">Descrição / Motivo do Reembolso</label>

                                <textarea name="" id="">{""}</textarea>

                            </div>
                        </div>

                        <div className={styles.barraVertical}> </div>

                        <div className={styles.grupo2}>

                            <div className={styles.inputData}>

                                <label htmlFor="">Data</label>

                                <input type="date" name="" id="" />

                            </div>

                            <div className={styles.despesa}>

                                <label htmlFor="">Tipos de Despesas</label>

                                <select name="" id="">

                                    <option value="">Selecionar</option>

                                    <option value="">Alimentação</option>

                                    <option value="">Combustivel</option>
                                    
                                </select>
                            </div>
                        </div>
                    </form>
                </main>
            </div>
    
        </div>
    );
}
export default Solicitacao;