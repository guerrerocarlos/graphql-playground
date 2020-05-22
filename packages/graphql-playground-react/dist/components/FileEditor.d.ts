import * as React from 'react';
export interface Props {
    value: string;
    onChange: (value: string) => void;
}
declare class FileEditor extends React.Component<Props, {}> {
    render(): JSX.Element;
}
declare const _default: import("react-redux").ConnectedComponent<typeof FileEditor, Pick<Props, never>>;
export default _default;
