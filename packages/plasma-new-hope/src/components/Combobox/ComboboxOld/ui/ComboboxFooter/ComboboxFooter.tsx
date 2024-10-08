import { dropdownFooterRoot } from '../../../../Dropdown';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base } from './ComboboxFooter.styles';

export const comboboxFooterRoot = dropdownFooterRoot;

export const comboboxFooterConfig = {
    name: 'ComboboxFooter',
    tag: 'div',
    layout: comboboxFooterRoot,
    base,
    variations: {
        view: {
            css: viewCSS,
        },
        size: {
            css: sizeCSS,
        },
    },
    defaults: {
        view: 'primary',
        size: 'm',
    },
};
