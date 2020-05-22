import * as React from 'react';
export interface Props {
    value: string;
    onChange: (value: string) => void;
    onSave: () => void;
    isYaml?: boolean;
    isConfig?: boolean;
    readOnly?: boolean;
}
export declare class SettingsEditor extends React.Component<Props, {}> {
    componentDidMount(): void;
    render(): JSX.Element;
    private handleKeydown;
}
interface HOCProps {
    editSettings: () => void;
    saveSettings: () => void;
    onSave: (value: string) => void;
}
declare class SettingsEditorHOC extends React.Component<Props & HOCProps, {
    value: string;
}> {
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    render(): JSX.Element;
    handleChange: (value: any) => void;
    handleSave: () => void;
}
export declare const PlaygroundSettingsEditor: import("react-redux").ConnectedComponent<typeof SettingsEditorHOC, Pick<Props & HOCProps, "onSave" | "isYaml" | "isConfig" | "readOnly">>;
export declare const GraphQLConfigEditor: import("react-redux").ConnectedComponent<typeof SettingsEditor, Pick<Props, "onSave" | "isYaml" | "isConfig" | "readOnly">>;
export {};
