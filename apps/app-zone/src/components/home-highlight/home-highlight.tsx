import { FeatureHighlight } from "../feature-highlight/feature-highlight";
import styles from "./home-highlight.module.css";

export const HomeHighlight = () => {
  const title = "Vantagens do nosso banco:";
  const highlights = [
    {
      title: "Conta e cartão gratuitos",
      text: "Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.",
      iconName: "gift-icon",
      alt: "Gift Icon",
    },
    {
      title: "Saques sem custo",
      text: "Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.",
      iconName: "withdraw-icon",
      alt: "Withdraw Icon",
    },
    {
      title: "Programa de pontos",
      text: "Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!",
      iconName: "star-icon",
      alt: "Star Icon",
    },
    {
      title: "Seguro Dispositivos",
      text: "Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica.",
      iconName: "devices-icon",
      alt: "Devices Icon",
    },
  ];

  return (
    <div className={styles.highlight}>
      <h3 className={styles.title}>{title}</h3>

      <div className={styles.items}>
        {highlights.map((item, index) => (
          <FeatureHighlight
            key={index}
            title={item.title}
            text={item.text}
            iconName={item.iconName}
            alt={item.alt}
          />
        ))}
      </div>
    </div>
  );
};
