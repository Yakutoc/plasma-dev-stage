## [Heading 2]

Может быть:

-   `Core` - используем если изменения в библиотеки new-hope и затрагивают все библиотеки
-   `SDDS-CS, PLASMA-WEB, PLASMA-ICONS` - если изменения только для конкретной библиотеки используем ее название

Например,

```md
## Core
```

```md
## PLASMA-WEB
```

### [Heading 3] Названия компонента, функции, темы, etc

Например,

```md
### Dropdown
```

```md
### PopoverProvider
```

Резюме вносимых изменений.

```md
-   исправлено поведение, когда нажатие на `Tab` очищало набранный текст в `single` mode;
```

Полный пример:

```md
## Core

### Combobox

-   исправлено поведение, когда нажатие на `Tab` очищало набранный текст в `single` mode;
```

```md
## SDDS-CS

### Notification

-   добавлен layout `horizontal`
-   добавлены токены для позиционирования `actions`, `iconLeft` и `iconClose`
```

Когда pull request содержит изменения и в core и в конечной библиотеки

```md
## Core

### Drawer, Panel

-   добавлена возможность изменить цвет закрывающей иконки

## SDDS-CS

### Datepicker

-   актуализированы примеры в storybook
```

**Примечания:**

-   По возможности приложите скриншоты решенной проблемы в формате "до/после" или скриншоты нового компонента.

### What/why changed

Это **обязательный** блок и заголовок!

Более подробное описание решаемой проблемы.

### Прежде чем перевести в статус "requested a review" убедитесь

-   Добавлен номер issue (если есть);
-   Добавлены/обновлены **cypress тесты** если PR касается визуальной составляющей;
