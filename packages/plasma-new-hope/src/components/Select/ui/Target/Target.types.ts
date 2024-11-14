import type { KeyboardEvent, MutableRefObject } from 'react';

import type { LabelToItemMapType, ValueToItemMapType } from '../../hooks/usePathMaps';
import type { DefaultValueType, MergedSelectProps, RequiredProps } from '../../Select.types';

export type TargetProps = Pick<
    MergedSelectProps,
    | 'size'
    | 'view'
    | 'label'
    | 'labelPlacement'
    | 'placeholder'
    | 'contentLeft'
    | 'disabled'
    | 'renderValue'
    | 'multiselect'
    | 'helperText'
    | 'isTargetAmount'
    | 'chipView'
> & {
    value: DefaultValueType;
    opened: boolean;
    valueToItemMap: ValueToItemMapType;
    onKeyDown: (event: KeyboardEvent<HTMLElement>) => void;
    selectProps: MergedSelectProps;
    inputWrapperRef: MutableRefObject<HTMLDivElement>;
    handleClickArrow: () => void;
    treeId: string;
    activeDescendantItemValue: string;
    onChange: (newValue: string | number | Array<string | number>) => void;
    labelToItemMap: LabelToItemMapType;
    requiredProps: RequiredProps | undefined;
    separator?: string;
};
