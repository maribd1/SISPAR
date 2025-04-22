import React from "react";
import styles from "./solicitacao.module.scss";
import NavBar from "../navbar/NavBar.jsx";
import Home from "../../assets/Header/botão - Home.png";
import Seta from "../../assets/Dashboard/Vector.png";
import Deletar from "../../assets/Solicitacao/deletar.png";
import Lixeira from "../../assets/Solicitacao/lixeira.png";
import Motivo from "../../assets/Solicitacao/motivo.png";
import Api from "../../Services/Api";
import {useState, useEffect} from "react";

function Solicitacao() {

 const [colaborador, setColaborador] = useState(""); // Estado para o campo colaborador

  const [empresa, setEmpresa] = useState(""); // Estado para o campo empresa

  const [nPrestacao, setnPrestacao] = useState(""); // Estado para o campo número de prestação

  const [descricao, setDescricao] = useState(""); // Estado para o campo  descrição

  const [data, setData] = useState(""); // Estado para o campo data

  //const [motivo, setMotivo] = useState(""); // Estado para o campo motivo  //ESSE ESTADO É PARA QUEM TÁ FAZENDO AVANÇADO UTILIZANDO MODAL

  const [tipoReembolso, setTipoReembolso] = useState(""); // Estado para o campo tipo de reembolso

  const [centroCusto, setCentroCusto] = useState(""); // Estado para o campo centro de custo

  const [ordemInterna, setorOrdemInterna] = useState(""); // Estado para o campo ordem interna

  const [divisao, setDivisao] = useState(""); // Estado para o campo divisão

  const [pep, setPep] = useState(""); // Estado para o campo pep

  const [moeda, setMoeda] = useState(""); // Estado para o campo moeda

  const [distanciaKm, setDistanciaKm] = useState(""); // Estado para o campo distância km

  const [valorKm, setValorKm] = useState(""); // Estado para o campo valor km

  const [valorFaturado, setValorFaturado] = useState(""); // Estado para o campo valor faturado

  const [despesa, setDespesa] = useState(""); // Estado para o campo despesa

  const [dadosReembolso, setDadostReembolso] = useState([]);

  //--- FUNÇÃO PARA CAPTURAR OS VALORES DOS ESTADOS---

    const handleSubmit = () =>{

        const objetoReembolsos={
            colaborador,
            empresa,
            nPrestacao,
            descricao,
            data,
            tipoReembolso,
            ordemInterna,
            centroCusto,
            divisao,
            pep,
            moeda,
            distanciaKm,
            valorKm,
            valorFaturado,
            despesa,
        };
        setDadostReembolso(dadosReembolso.concat(objetoReembolsos));
        limparCampos(); //quando eu clicar em salvar, ative a função limparCampos e limpas os inputs
    };

    //FUNÇÃO PARA LIMPAR OS CAMPOS DO FORMULÁRIO (INPUTS)
 
   const limparCampos = () => {
      setColaborador(""),
      setEmpresa(""),
      setnPrestacao(""),
      setDescricao(""),
      setData(""),
      setMotivo(""),
      setTipoReembolso(""),
      setCentroCusto(""),
      setorOrdemInterna(""),
      setDivisao(""),
      setPep(""),
      setMoeda(""),
      setDistanciaKm(""),
      setValorKm(""),
      setValorFaturado(""),
      setDespesa("");
    };

    //CRIAR UMA FUNÇÃO PARA ENVIAR OS DADOS PARA O BANCO DE DADOS

    const [foiEnviado, setFoiEnviado] = useState(false); // Ele serve pra sabermos se o formulário já foi enviado
 
   // Função assíncrona (async) para enviar os dados do reembolso para a API

   const enviarParaAnalise = async () => {
        try {
            //aqui colocamos o que queremos 'tentar' fazer

            //1º argumento é caminho da rota "/refunds/new" é uma rota no seu backend
            //2º argumento é o que será enviado: dadosReembolso, os dados do formulário.

            // Faz uma requisição POST para o endpoint /refunds/new
            // Enviando junto os dados que estão salvos no estado "dadosReembolso"
            const response = await Api.post("/refunds/new", dadosReembolso);

            console.log("Resposta da API", response); // Mostra no console a resposta da API (útil pra desenvolvedores testarem)
        
            alert("Reembolso solicitado com sucesso!"); // Mostra um alerta avisando que deu certo
        
            setFoiEnviado(true);
            //Ativando o estado "foiEnviado" para true
            // Atualiza o estado "foiEnviado" para true
            // Isso ativa o useEffect que está lá embaixo
        } catch (error) {
        
        // Caso dê erro na hora de enviar, ele mostra o erro no console
        console.log("Erro ao enviar", error); //Mostra o erro se algo der errado
        }
    };

    // Hook useEffect serve pra reagir a mudanças nos estados

    useEffect(() => {
        // Se "foiEnviado" for true (ou seja, depois do envio com sucesso)
        if (foiEnviado) {
          setDadosReembolso([]); // Limpa os dados do formulário, ou seja, zera o estado
    
          setFoiEnviado(false);
          // Coloca "foiEnviado" de volta para false
          // Assim o useEffect não fica rodando pra sempre
        }
    }, [foiEnviado]); // Esse efeito só roda quando "foiEnviado" mudar

    //RESUMINDO:
   //O if (foiEnviado) serve para executar algo somente quando o envio foi concluído.
   //O estado começa como false, mas vira true quando o envio é feito com sucesso.
   //O useEffect só roda quando essa variável muda, e por isso o if é necessário para não rodar à toa.
    
    //Resumo simplificado:
    //useState cria variáveis que guardam informações e atualizam a tela.
    //A função enviarParaAnalise manda os dados pra um servidor (API).
    // useEffect roda automaticamente quando a variável foiEnviado muda.
    //Depois que os dados são enviados, ele limpa tudo pra poder começar de novo.

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

                    <form onSubmit={(e) => e.preventDefault()} className={styles.formSolicitacao}>

                        <div className={styles.grupo1}>

                            <div className={styles.inputNome}>

                                <label htmlFor="nome">Nome completo</label>

                                <input value={colaborador} name="colaborador"  type="text" onChange={(e) => setColaborador(e.target.value)} />

                            </div>

                            <div className={styles.inputEmpresa}>

                                <label htmlFor="empresa">Empresa</label>

                                <input value={empresa} name="empresa" type="text" onChange={(e) => setEmpresa(e.target.value)} />

                            </div>

                            <div className={styles.inputPrestacao}>

                                <label htmlFor="prestacao">Nº Prest. Contas</label>

                                <input value={nPrestacao} name="nPrestacao" type="number" onChange={(e) => setnPrestacao(e.target.value)} />

                            </div>

                            <div className={styles.inputMotivo}>

                                <label htmlFor="descricao">Descrição / Motivo do Reembolso</label>

                                <textarea value={descricao} name={descricao} onChange={(e) => setDescricao(e.target.value)}>{""}</textarea>

                            </div>
                        </div>

                        <div className={styles.barraVertical}> </div>

                        <div className={styles.grupo2}>

                            <div className={styles.inputData}>

                                <label htmlFor="date">Data</label>

                                <input type="date" name="data" value={data} onChange={(e) => setData(e.target.value)} />

                            </div>

                            <div className={styles.despesa}>

                                <label htmlFor="tipoReembolso">Tipos de Despesas</label>

                                <select name="tipoReembolso" value={tipoReembolso} onChange={(e) => setTipoReembolso(e.target.value)}>

                                    <option value="selecionar">Selecionar</option>

                                    <option value="alimentação">Alimentação</option>

                                    <option value="combustivel">Combustivel</option>

                                    <option value="conducao"> Condução</option>

                                    <option value="estacionamento"> Estacionamento</option>

                                    <option value="viagem adm"> Viagem Admin.</option>

                                    <option value="viagem oper"> Viagem Operacional</option>

                                    <option value="eventos"> Eventos de representação</option>
                                                        
                                </select>
                            </div>

                            <div className={styles.centroDeCustos}>

                                <label htmlFor="custo">Centro de custos</label>

                                <select name="centroCusto" value={centroCusto} onChange={(e) => setCentroCusto(e.target.value)}>
                                    <option value="">Selecionar</option>

                                    <option value="">Alimentação</option>

                                    <option value="">Combustível</option>

                                    <option value="FIN CONTROLES INTERNOS MTZ">1100109002 - FIN CONTROLES INTERNOS MTZ</option>

                                    <option value="FIN VICE-PRESIDENCIA FINANCAS MTZ">1100110002 - FIN VICE-PRESIDENCIA FINANCAS MTZ</option>
                                    
                                    <option value="FIN CONTABILIDADE MTZ">1100110101 - FIN CONTABILIDADE MTZ</option>
                                </select>
                            </div>

                            <div className={styles.ordem}>

                                <label htmlFor="ordemInterna">Ord. Int.</label>
                                <input type="text" value={ordemInterna} name="ordemInterna"onChange={(e) => setorOrdemInterna(e.target.value)} />
                            </div>

                            <div className={styles.divisoes}>

                                <label htmlFor="divisao">Div.</label>
                                <input type="text" value={divisao} name="divisao"  onChange={(e) => setDivisao(e.target.value)}/>
                            </div>

                            <div className={styles.pep}>

                                <label htmlFor="pep">PEPt</label>
                                <input type="text" value={pep} name="pep" onChange={(e) => setPep(e.target.value)} />
                            </div>

                            <div className={styles.moeda}>
                                <label htmlFor="moeda"> Moeda</label>

                                <select name="moeda" value={moeda}  onChange={(e) => setMoeda(e.target.value)}>

                                    <option value=""></option>
                                    <option value="brl">BRL</option>
                                    <option value="ars">ARS</option>
                                    <option value="usd">USD</option>
                                </select>
                            </div>

                            <div className={styles.distancia}>

                                <label htmlFor="distancia"> Dist. / Km</label>

                                <input type="text" name="distanciaKm" value={distanciaKm} onChange={(e) => setDistanciaKm(e.target.value)} />
                            </div>

                            <div className={styles.valorKm}>

                                <label htmlFor="valor"> Valor / Km</label>

                                <input type="text" name="valorKm" value={valorKm} onChange={(e) => setValorKm(e.target.value)} />
                            </div>

                            <div className={styles.valorFaturado}>

                                <label htmlFor="faturado"> Val. Faturado</label>

                                <input type="number" name="valorFaturado" value={valorFaturado} onChange={(e) => setValorFaturado(e.target.value)} />
                            </div>

                            <div className={styles.despesa}>

                                <label> Despesa</label>

                                <input type="number" name="despesa" value={despesa} onChange={(e) => setDespesa(e.target.value)} />
                            </div>

                            <div className={styles.botoes}>

                                <button type="submit" onClick={handleSubmit} className={styles.botaoSalvar}> 
                                    <img src="" alt="" /> Salvar
                                </button>

                                <button type="button" onClick={limparCampos} className={styles.botaoDeletar}>{" "}

                                <img src={Deletar} alt="" /> Deletar
                                </button>
                            </div>

                        </div>
                    </form>

                    {/* table é a tag principal que vai definir a tabela */}
                    {/* thead é a tag que agrupa o cabeçalho */}
                    {/* tr é a linha da tabela */}
                    {/* th título da tabela, um para cada título, ex: nome - idade - estado */}
                    {/* tbody agrupa o corpo da tabela (os dados que será recebido) */}

                    <table>

                        <thead>

                            <tr>
                                <th></th>
                                <th>Colaborador</th>
                                <th>Empresa</th>
                                <th>N° Prest.</th>
                                <th>Data</th>
                                <th>Motivo</th>
                                <th>Tipo de despesa</th>
                                <th>Ctr. Custo</th>
                                <th>Ord. Int.</th>
                                <th>Div.</th>
                                <th>PEP</th>
                                <th>Moeda</th>
                                <th>Dist. Km</th>
                                <th>Val. Hm</th>
                                <th>Val. Faturado</th>
                                <th>Despesas</th>
                            </tr>

                        </thead>

                        <tbody>
                            {dadosReembolso.map((item, index) => (

                            <tr key={index}>
                                
                                <td>
                                {" "}
                                <img src={Lixeira} alt="" />{" "}
                                </td>
                                <td> {item.colaborador} </td>
                                <td> {item.empresa} </td>
                                <td> {item.nPrestacao} </td>
                                <td> {item.data}</td>

                                <td>
                                {" "}
                                <img src={Motivo} alt="" />{" "}
                                </td>
                                <td>{item.tipoReembolso}</td>
                                <td>{item.centroCusto}</td>
                                <td>{item.ordemInterna}</td>
                                <td>{item.divisao}</td>
                                <td>{item.pep}</td>
                                <td>{item.moeda}</td>
                                <td>{item.distanciaKm}</td>
                                <td>{item.valorKm}</td>
                                <td>{item.valorFaturado}</td>
                                <td>{item.despesa}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>

                    <button onClick={enviarParaAnalise}> Enviar para análise </button>

                </main>
            </div>
        </div>
    );
}
export default Solicitacao;

//PASSO A PASSO
 
 //1º ESTRUTURAMOS OS INPUTS
 
 //2º GUARDAMOS CADA INPUT EM UM ESTADO, UTILIZANDO O HOOK USESTATE, SINTAXE: const [estado, setEstado] = useState("")
 
 //3º PARA CADA VALUE="" DO INPUT, COLOCAR O ESTADO. EX: value="colaborador" E TAMBÉM UTILIZAMOS O EVENTO ONCHANGE, QUE É UM EVENTO NO REACT QUE DISPARA O QUANDO O VALOR DE UM CAMPO MUDA. EX: value="colaborador" onChange={(e) => setColaborador(e.target.value)}
 
 //onchange: Esse é um evento do React que escuta qualquer mudança no campo (como digitar num input ou escolher uma opção num select).
 //(e) => ... Aqui estamos usando uma arrow function que recebe o evento (e) como argumento. Esse 'e' representa o evento que foi disparado quando o valor do input mudou.
 //e.target se refere ao próprio elemento input.
 //.value é o valor digitado pelo usuário.
 
 //Resumindo: Captura o novo valor e atualiza o estado colaborador com esse valor.
 
 //4º CRIA A ESTRUTURA DA TABELA FORA DA TAG FORM, ELA RECEBERÁ OS DADOS ADICIONADOS NOS INPUTS
 
 //5º ESSAS INFORMAÇÕES VÃO PRECISAR SER ARMAZENADAS EM ALGUM LUGAR, ENTÃO PRECISAMOS CRIAR UM ARRAY VAZIO PARA RECEBER ESSES DADOS.  const [dadosReembolso, setDadosReembolso] = useState([]);
 
 //6º COM A ARRAY VAZIA, PRECISAMOS DE UMA FUNÇÃO PARA CAPTURAR OS VALORES DOS ESTADOS
 
 //7º FUNÇÃO PARA CAPTURAR OS VALORES DOS ESTADOS (HANDLESUBMIT)
 // Essa função captura os valores dos estados, coloca eles organizados em objetos que serão adicionados no array dadosReembolso para serem exibidos no map
 // Função que é chamada quando o formulário é enviado
 //Ela será ativada no botão enviar, e armazenada na tabela, que já vamos criar.
 
 /* 8º map transformar cada item dessa lista em algo novo, sem mudar a lista original. O map é uma função que faz isso pra você!
 dadosReembolso: é o array, a lista que vai mostrar.
 item: é cada elemento da lista, um por um. 
 index: é a posição do item na lista. Ex: 0, 1 ...
            
 key={index} : é uma exigência do React para identificar cada elemento único na renderização (evita bugs e deixa o React mais rápido).
 key:  é uma identificação única que o React usa pra saber qual item
 index: número da posição do item
 */
 
 //9º  PREVINIR O CARREGAMENTO DA PÁGINA UTOMATICAMENTE
 // onSubmit:  É um evento que dispara quando você clica no botão de “Enviar”
 // (e) => e.preventDefault():Essa é uma função que bloqueia o comportamento padrão do formulário.
 
 /* OBS: Em HTML puro, quando você envia um <form>, ele recarrega a página automaticamente.
 Só que no React a gente não quer que isso aconteça, porque a gente controla tudo com JavaScript e hooks (useState, useEffect, etc).
 Por isso, usamos e.preventDefault() pra impedir o recarregamento da página. */