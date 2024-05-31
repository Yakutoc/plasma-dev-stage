import type {
    KeyboardEvent,
    ChangeEvent,
    ReactNode,
    HTMLAttributes,
    ReactElement,
    MutableRefObject,
    SyntheticEvent,
} from 'react';

import type { Placement, PlacementBasic } from '../../utils';

export type TextfieldPrimitiveValue = string | number;

export type RangeDividerVariants =
    | {
          firstTextfieldTextBefore: string;
          secondTextfieldTextBefore: string;
          dividerVariant?: 'none';
          dividerIcon?: never;
      }
    | {
          dividerVariant?: 'dash';
          dividerIcon?: never;
          firstTextfieldTextBefore?: string;
          secondTextfieldTextBefore?: string;
      }
    | {
          dividerIcon?: ReactNode;
          dividerVariant?: 'icon';
          firstTextfieldTextBefore?: string;
          secondTextfieldTextBefore?: string;
      };

export type BaseCallbackChangeInstance = (
    event: ChangeEvent<HTMLInputElement>,
    value?: TextfieldPrimitiveValue,
) => void;
export type BaseCallbackKeyboardInstance = (
    event: KeyboardEvent<HTMLInputElement>,
    value?: TextfieldPrimitiveValue,
) => void;

export type RangeInputRefs = {
    firstTextField: () => MutableRefObject<HTMLInputElement | null>;
    secondTextField: () => MutableRefObject<HTMLInputElement | null>;
};

export type RangeProps = {
    /**
     * Метка-подпись к элементу
     */
    label?: string;
    /**
     * Вспомогательный текст снизу слева для поля ввода.
     */
    leftHelper?: string;
    /**
     * Слот для контента слева
     */
    contentLeft?: ReactNode;
    /**
     * Слот для контента справа
     */
    contentRight?: ReactNode;
    /**
     * Значение первого поля ввода
     */
    firstValue?: TextfieldPrimitiveValue;
    /**
     * Значение второго поля ввода
     */
    secondValue?: TextfieldPrimitiveValue;
    /**
     * Некорректное значение первого поля ввода
     */
    firstValueError?: boolean;
    /**
     * Некорректное значение второго поля ввода
     */
    secondValueError?: boolean;
    /**
     * Корректное значение первого поля ввода
     */
    firstValueSuccess?: boolean;
    /**
     * Корректное значение второго поля ввода
     */
    secondValueSuccess?: boolean;
    /**
     * Значение первого поля ввода
     */
    firstPlaceholder?: string;
    /**
     * Значение второго поля ввода
     */
    secondPlaceholder?: string;
    /**
     * Слот для контента слева для первого поля ввода
     */
    firstTextfieldContentLeft?: ReactElement;
    /**
     * Слот для контента справа для второго поля ввода
     */
    firstTextfieldContentRight?: ReactElement;
    /**
     * Слот для контента слева для первого поля ввода
     */
    secondTextfieldContentLeft?: ReactElement;
    /**
     * Слот для контента справа для второго поля ввода
     */
    secondTextfieldContentRight?: ReactElement;
    /**
     * Слот для вспомогательного текста справа для первого поля ввода
     */
    firstTextfieldTextAfter?: string;
    /**
     * Слот для вспомогательного текста справа для второго поля ввода
     */
    secondTextfieldTextAfter?: string;
    /**
     * Вариант отображения
     */
    view?: string;
    /**
     * Размер компонента
     */
    size?: string;
    /**
     * Компонент доступен только для чтения
     */
    readOnly?: boolean;
    /**
     * Компонент неактивен
     */
    disabled?: boolean;
    /**
     * Открыт ли поповер под первым полем ввода.
     */
    isOpenFirst?: boolean;
    /**
     * Открыт ли поповер под вторым полем ввода.
     */
    isOpenSecond?: boolean;
    /**
     * Сторона открытия календаря относительно поля ввода.
     * @default
     * ["bottom", "top"]
     */
    placement?: Placement | Array<PlacementBasic>;
    /**
     * Отступ календаря относительно поля ввода.
     * @default [0, 0]
     */
    offset?: [number, number];
    /**
     * Закрывать календарь при нажатии вне области элемента.
     * @default true
     */
    closeOnOverlayClick?: boolean;
    /**
     * Слот для контента первого поповера.
     */
    firstInputPopoverContent?: ReactNode;
    /**
     * Слот для контента второго поповера.
     */
    secondInputPopoverContent?: ReactNode;
    /**
     * Событие сворачивания/разворачивания первого поповера.
     */
    onToggleFirst?: (isOpen: boolean, event: SyntheticEvent | Event) => void;
    /**
     * Событие сворачивания/разворачивания второго поповера.
     */
    onToggleSecond?: (isOpen: boolean, event: SyntheticEvent | Event) => void;
    /**
     * Коллбэк, вызываемый при изменении первого поля ввода
     */
    onChangeFirstValue?: BaseCallbackChangeInstance;
    /**
     * Коллбэк, вызываемый при изменении второго поля ввода
     */
    onChangeSecondValue?: BaseCallbackChangeInstance;
    /**
     * Коллбэк, вызываемый при нажатии `Enter` в первом поле ввода
     */
    onSearchFirstValue?: BaseCallbackKeyboardInstance;
    /**
     * Коллбэк, вызываемый при нажатии `Enter` во втором поле ввода
     */
    onSearchSecondValue?: BaseCallbackKeyboardInstance;

    /**
     * Коллбэк, вызываемый при фокусе на первое поле ввода
     */
    onFocusFirstTextfield?: (event: ChangeEvent<HTMLInputElement>) => void;
    /**
     * Коллбэк, вызываемый при фокусе на второе поле ввода
     */
    onFocusSecondTextfield?: (event: ChangeEvent<HTMLInputElement>) => void;
    /**
     * Коллбэк, вызываемый при потере фокуса первым полем ввода
     */
    onBlurFirstTextfield?: (event: ChangeEvent<HTMLInputElement>) => void;
    /**
     * Коллбэк, вызываемый при потере фокуса вторым полем ввода
     */
    onBlurSecondTextfield?: (event: ChangeEvent<HTMLInputElement>) => void;
} & RangeDividerVariants &
    HTMLAttributes<HTMLDivElement>;
