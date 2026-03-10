import 'react';

declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            'iconify-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
                icon: string;
                width?: string | number;
                height?: string | number;
                flip?: string;
                rotate?: string | number;
                mode?: 'svg' | 'css';
                inline?: boolean;
                noObservedAttributes?: boolean;
            }, HTMLElement>;
        }
    }
}
