export declare class StorybookDesignTokenPluginWebpack4 {
    private preserveCSSVars?;
    private designTokenGlob?;
    constructor(preserveCSSVars?: boolean | undefined, designTokenGlob?: string | undefined);
    apply(compiler: any): void;
}
export declare class StorybookDesignTokenPlugin {
    private preserveCSSVars?;
    private designTokenGlob?;
    constructor(preserveCSSVars?: boolean | undefined, designTokenGlob?: string | undefined);
    apply(compiler: any): void;
}
export declare function viteStorybookDesignTokenPlugin(options: any): any;
