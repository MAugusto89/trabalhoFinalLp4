import { AuctionOpen } from "../../models/AuctionOpen";
import styles from "../CardLeiAberto/style.module.css";

type Props = {
  auct: AuctionOpen;
};

const CardLeiAberto = ({ auct }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.desc}>
        <span className={styles.lote}>{auct.lote}:</span>
        <span className={styles.description}>{auct.description}</span>
        <span className={styles.time}>Se encerra em {auct.tempo}</span>
      </div>
      <div className={styles.buttonCard}>
        <button>Participar</button>
      </div>
    </div>
  );
};

export default CardLeiAberto;
