
import styles from "./styles.module.css";
import { AuctionOpen } from "../../models/AuctionOpen";
import CardLeiAberto from "../../components/CardLeiAberto";
import CardLeiFechado from "../../components/CardLeiFechado";

const Login = () => {

  // Lista de leilões abertos (mock de dados)
  const leiloesAbertos: AuctionOpen[] = [
    { id: "1", lote: "Lote 101", description: "Carro esportivo", tempo: "2 dias" },
    { id: "2", lote: "Lote 202", description: "Moto Harley Davidson", tempo: "5 dias" },
  ];

  const leiloesFechados: AuctionOpen[] = [
    { id: "1", lote: "Lote 101", description: "Carro esportivo", tempo: "2 dias" },
    { id: "2", lote: "Lote 202", description: "Moto Harley Davidson", tempo: "5 dias" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h2>Bem-vindo</h2>
        <button>Sair</button>
      </div>
      
      <div className={styles.header}>
        {/* Seção de Leilões Abertos */}
        <div className={styles.leiOpen}>
          <h2>Leilões Abertos</h2>
          <div className="leiOpenList">
            {leiloesAbertos.map((leilao) => (
              <CardLeiAberto key={leilao.id} auct={leilao} />
            ))}
          </div>
        </div>

        {/* Seção de Leilões Encerrados */}
        <div className={styles.leiClose}>
          <h2>Leilões Encerrados</h2>
          <div className="leilCloseList">
          {leiloesFechados.map((leilao) => (
              <CardLeiFechado key={leilao.id} auct={leilao} />
            ))}
            
            {/* TODO: Adicionar componente de leilões encerrados quando estiver pronto */}
            {/* <CardLeiClose /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
