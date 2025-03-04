import type { TextAreaProps as TextAreaPropsBase } from '@salutejs/plasma-hope';
import type { PopoverPlacement, PopoverPlacementBasic } from '@salutejs/plasma-new-hope';
import type { ReactNode } from 'react';

import { TextArea } from './TextArea';

export { TextArea };

type newHopeTextAreaProps = React.ComponentProps<typeof TextArea>;

type HintProps =
    | {
          /**
           * Текст тултипа
           */
          hintText: string;
          /**
           * Способ открытия тултипа - наведение или клик мышью
           */
          hintTrigger?: 'hover' | 'click';
          /**
           * Видимость тултипа
           */
          hintOpened?: boolean;
          /**
           * Вид тултипа
           */
          hintView?: string;
          /**
           * Размер тултипа
           */
          hintSize?: string;
          /**
           * Элемент, рядом с которым произойдет вызов всплывающего окна.
           * Если свойство не задано, применится иконка по умолчанию.
           */
          hintTarget?: ReactNode;
          /**
           * Направление раскрытия тултипа.
           */
          hintPlacement?: PopoverPlacement | Array<PopoverPlacementBasic>;
          /**
           * Видимость стрелки (хвоста).
           */
          hintHasArrow?: boolean;
          /**
           * Отступ окна относительно элемента, у которого оно вызвано.
           * @default
           * [0, 8]
           */
          hintOffset?: [number, number];
          /**
           * Ширина окна (в rem).
           */
          hintWidth?: string;
          /**
           * Слот для контента слева, например `Icon`.
           */
          hintContentLeft?: ReactNode;
      }
    | {
          hintOpened?: never;
          hintTrigger?: never;
          hintText?: never;
          hintView?: never;
          hintSize?: never;
          hintTarget?: never;
          hintPlacement?: never;
          hintHasArrow?: never;
          hintOffset?: never;
          hintWidth?: never;
          hintContentLeft?: never;
      };

type ClearProps =
    | {
          /**
           * view применяется с clear-токенами
           */
          clear?: boolean;
          /**
           * отобразить ли divider
           */
          hasDivider?: boolean;
      }
    | {
          /**
           * view применяется с clear-токенами
           */
          clear?: false;
          /**
           * отобразить ли divider
           */
          hasDivider?: never;
      };

export type TextAreaProps = TextAreaPropsBase &
    Pick<newHopeTextAreaProps, 'title' | 'titleCaption' | 'required' | 'requiredPlacement' | 'optional'> &
    ClearProps &
    HintProps;
