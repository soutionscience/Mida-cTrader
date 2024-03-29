import { MidaBrokerAccountParameters } from "@reiryoku/mida";
import { CTraderConnection } from "@reiryoku/ctrader-layer";

export type CTraderBrokerAccountParameters = MidaBrokerAccountParameters & {
    connection: CTraderConnection;
    cTraderBrokerAccountId: string;
    brokerName: string;
};
