export type BasicPopupBasePlacement = 'center' | 'top' | 'bottom' | 'right' | 'left';
export type MixedPopupBasePlacement = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
export type PopupBasePlacement = BasicPopupBasePlacement | MixedPopupBasePlacement;

export interface PopupInfo {
    id: string;
    info?: Record<string, any>;
}

export interface PopupContextType {
    items: PopupInfo[];
    register: (info: PopupInfo) => void;
    unregister: (id: string) => void;
}

export interface PopupBaseProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Отображение PopupBase.
     * @deprecated
     */
    isOpen?: boolean;
    /**
     * Отображение PopupBase.
     */
    opened: boolean;
    /* Позиция на экране
     * center - по умолчанию
     * left, right, top, bottom и их комбинации
     */
    placement?: PopupBasePlacement;
    /* Смещение относительно текущей позиции.
     * (x, y) - [number, number], [string, string].
     * При передаче number расчёт в rem.
     */
    offset?: [number, number] | [string, string];
    /**
     * В каком контейнере позиционируется(по умолчанию document), можно также указать id элемента или ref для него.
     */
    frame?: 'document' | string | React.RefObject<HTMLElement>;
    /**
     * Содержимое PopupBase.
     */
    children?: React.ReactNode;
    /**
     * Соседний элемент для окна в портале.
     */
    overlay?: React.ReactNode;
    /**
     * Значение z-index для PopupBase.
     */
    zIndex?: string;
    /**
     * Дополнительная информация для программного взаимодействия с окном через контекст.
     */
    popupInfo?: PopupInfo;
    /**
     * Использовать ли анимацию.
     */
    withAnimation?: boolean;
}
export interface PopupAnimationInfo {
    endAnimation: boolean;
    setEndAnimation: React.Dispatch<React.SetStateAction<boolean>>;
    endTransition: boolean;
    setEndTransition: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface PopupRootProps extends Omit<PopupBaseProps, 'opened' | 'isOpen' | 'overlay'> {
    id: string;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    /**
     * Данные из хука usePopupAnimation.
     */
    animationInfo: PopupAnimationInfo;
}

export interface PopupHookArgs extends Pick<PopupBaseProps, 'popupInfo' | 'withAnimation'> {
    id: string;
    isOpen: boolean;
}

export interface PopupRootContainerProps extends Omit<PopupBaseProps, 'opened' | 'overlay'> {
    endTransition?: boolean;
    endAnimation?: boolean;
}
