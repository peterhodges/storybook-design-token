declare type Options = {
    designTokenGlob?: string;
    presets: any;
    preserveCSSVars?: boolean;
};
export declare function managerEntries(entry?: never[]): string[];
export declare function viteFinalFactory(options?: any): (config: any) => Promise<any>;
export declare function webpackFinal(config: any, { designTokenGlob, presets, preserveCSSVars }: Options): Promise<any>;
export {};
