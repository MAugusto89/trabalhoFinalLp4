import { useState } from "react";
import styles from "./styles.module.css";

const Home = () => {
  const [username, setUser] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.auctionArea}>
        <form className={styles.auctionForm}>
          <input
            required
            type="text"
            value={username}
            placeholder="Enter username"
            onChange={(e) => setUser(e.target.value)}
          />
          <input
            type="email"
            required
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className={styles.buttonContainer}>
            <input type="submit" value="Iniciar" />
<<<<<<< HEAD
            <input type="submit" value="Iniciar" />
          </div>
        </form>
        <button className="buttonGoogle">
          <img src="../../assets/img/google.png" />
        </button>
=======
            <input type="submit" value="Cancelar" />
          </div>
        </form>
>>>>>>> 6107c3a (Second commit)
      </div>
    </div>
  );
};
export default Home;

/*  
<form className={styles.auctionForm} onSubmit={(e) => startAuction(e)}>
const startAuction = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    isSubmitting(true);
  };
<BeatLoader color="#555" loading={submitting} />;
*/
