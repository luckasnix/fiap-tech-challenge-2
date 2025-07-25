"use client";
import dynamic from "next/dynamic";
import { useWindowWidth } from "~/hooks/useWindowWidth";
import { FinancialSummary } from "~/components/financial-summary/financial-summary";
import { SideMenu } from "~/components/side-menu/side-menu";
import { Statement } from "~/components/statement/statement";
import { TransactionModal } from "~/components/transaction-modal/transaction-modal";

import styles from "./investment-main.module.css";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const investmentData = {
  total: 50000,
  rendaFixa: 36000,
  rendaVariavel: 14000,
  chartData: {
    series: [35, 25, 20, 20], // Porcentagens para cada categoria
    labels: ["Fundos de investimento", "Tesouro Direto", "Previdência Privada", "Bolsa de Valores"]
  }
};
export const InvestmentMain = () => {
  const windowWidth = useWindowWidth();

  const chartOptions = {
    chart: {
      type: "donut" as const,
      background: "transparent",
    },
    labels: investmentData.chartData.labels,
    colors: ["#6366F1", "#8B5CF6", "#EC4899", "#F59E0B"],
    legend: {
      show: true,
      position: "right" as const,
      fontSize: "14px",
      fontFamily: "Inter, sans-serif",
      verticalAlign: "middle" as const,
      offsetX: 60,
      itemMargin: {
        horizontal: 10,
        vertical: 10,
      },
      labels: {
        colors: "#FFFFFF",
      },
      markers: {
        width: 12,
        height: 12,
        radius: 6,
        offsetX: -10,
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: "60%",
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 0,
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          legend: {
            position: "bottom" as const,
            verticalAlign: "bottom" as const,
            offsetX: 0,
          },
        },
      },
    ],
  };

  return (
    <main className={styles.main}>
      <div className={`${styles.dashboard} container`}>
        {windowWidth > 360 ? <SideMenu /> : null}

        <div style={{ flex: 'auto' }}>
          <FinancialSummary
            userName="Joana"
            date={Date.now()}
          />

          <div className={styles.investmentContainer}>
            <div className={styles.investmentCard}>
              <h2 className={styles.title}>Investimentos</h2>

              <div className={styles.totalSection}>
                <span className={styles.totalLabel}>Total: R$ 50.000,00</span>
              </div>

              <div className={styles.summaryCards}>
                <div className={styles.card}>
                  <h3 className={styles.cardTitle}>Renda Fixa</h3>
                  <p className={styles.cardValue}>R$ 36.000,00</p>
                </div>
                <div className={styles.card}>
                  <h3 className={styles.cardTitle}>Renda variável</h3>
                  <p className={styles.cardValue}>R$ 14.000,00</p>
                </div>
              </div>

              <div className={styles.statisticsSection}>
                <h2 className={styles.statisticsTitle}>Estatísticas</h2>
                <div className={styles.chartContainer}>
                  <Chart
                    options={chartOptions}
                    series={investmentData.chartData.series}
                    type="donut"
                    height={200}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Statement />
      </div>

    </main>
  );
};
