import Cards from "../../Cards/Cards";
import Header from "../../Header/Header";
import classes from "./Layout.module.scss";
const Layout = () => {
  return (
    <main className={classes.main}>
      <section className={classes.head}>
        <Header />
      </section>
      <section className={classes.card_cont}>
        <Cards />
      </section>
    </main>
  );
};

export default Layout;
