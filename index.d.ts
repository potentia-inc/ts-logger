import { default as pino } from 'pino';
type Transport = {
    type: 'gchat';
    link: string;
    level: pino.Level;
};
type Options = {
    name: string;
    level?: pino.Level;
    transports?: Transport[];
};
export declare function createLogger(options: Options): ReturnType<typeof pino>;
export {};
