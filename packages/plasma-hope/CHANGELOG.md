# v1.315.0 (Thu Oct 17 2024)

### Release Notes

#### Release by 16.10.2024 ([#1487](https://github.com/salute-developers/plasma/pull/1487))

## Components

### Accordion

- свойство `view` помечено как `optional`
- свойство `view` для AccordionItem помечено как `deprecated`      
- свойство `title` для `AccordionItem` теперь `ReactNode` 


 
[PLASMA-3591]: Fix Accordion types  (https://github.com/salute-developers/plasma/pull/1467)

### TextArea

- исправлен скроллбар
- обновлены `snapshots`

 
feat(plasma-*, sdds-*): TextArea scrollbar (https://github.com/salute-developers/plasma/pull/1471)

### Popup

- добавлены storybook декораторы для `Popup` и `Notification` для правильного отображения: `Drawer, Modal, Notification, Popup`

 
plasma-*: Fix popup mount logic (https://github.com/salute-developers/plasma/pull/1412)

### Tabs 

- вертикальные табы добавлены в поставку всех клиентских библиотек
- добавлено свойство `value` для горизонтальных и вертикальных табов
- исправлены токены для всех пакетов

<img width="181" alt="Снимок экрана 2024-09-24 в 14 39 29" src="https://github.com/user-attachments/assets/9889e4d1-9297-4cf9-a577-23f5d1c8c9af">

<img width="163" alt="Снимок экрана 2024-09-24 в 14 38 56" src="https://github.com/user-attachments/assets/596e92aa-1136-4f41-bb29-67ce31dbff75">

 
`plasma-*, sdds-*`: Vertical Tabs added (https://github.com/salute-developers/plasma/pull/1374)

### Badge

- добавлен новый размер `XS`


 
[PLASMA-3598]: Badge: Add size XS   (https://github.com/salute-developers/plasma/pull/1466)

### `SDDS-CS`

#### Button

- используется token `--text-accent` когда `view: secondary` 

#### Chip

- для `closeIconColor` используется token `--text-accent` когда `view: secondary` 

#### Badge

- изменены `padding{Right,Left}` на  `8px`

 
[PLASMA-3611]: Правки конфигураций Button, Chip, Badge [SDDS-CS] (https://github.com/salute-developers/plasma/pull/1473)

### Breadcrumbs

* добавлена поддержка обработчика `onClick` при клике на ссылку
* поправлены union типы 
* обновлена документация с указанием типов элементов

 
feat(plasma-new-hope, *-docs): Add onClick for item to `Breadcrumbs` component (https://github.com/salute-developers/plasma/pull/1480)

### Tabs
- исправлен скролл табов при малой ширине
- в `storybooks` добавлены свойства `width` и `height`, доступные при условии `clip = scroll`

 
`plasma-new-hope`: fix tabs arrow scroll (https://github.com/salute-developers/plasma/pull/1476)

### Attach
- исправлен `onChange`, `id` и `name`
- добавлено свойство `onClear`
- в документацию добавлен пример с использованием компонента внутри формы

 
`plasma-new-hope`: fix Attach (https://github.com/salute-developers/plasma/pull/1481)

### Combobox

- добавлен дженерик для св-ва `items` в компоненте Combobox

 
feat(plasma-b2c, web, sdds): Added generic for items in Combobox (https://github.com/salute-developers/plasma/pull/1470)

### TextArea 

- добавлена фокусировка по клику на дочерние элементы

 
plasma-*: Focus TextArea by click inside (https://github.com/salute-developers/plasma/pull/1444)

### SDDS CS Pack 4 ( overlay and navigation )

- изменены токены для компонентов: `Autocomplie`, `Avatar`, `Breadcrumbs`, `Cell`, `Drawer`, `Dropdown`, `Modal`, `Notification`, `Pagination`, `Popover`, `Price`, `Progress`, `Segment`, `Slider`, `Tabs`, `Toast`, `Toolbar`, `Tooltip`
- добавлена и обновлена актуальная документация

 
fix(sdds-cs): set overlay and navigation tokens (https://github.com/salute-developers/plasma/pull/1458)

### DatePicker

- добавлен вызов change callback при выборе даты из календаря
- добавлена возможность указать frame, в котором будет происходить рендер календаря
- добавлена сортировка дат для Range DatePicker
- исправлено поведение фокуса при закрытии календаря

 
feat(plasma-new-hope): Datepicker improvements (https://github.com/salute-developers/plasma/pull/1475)

### Segment

* добавлен вертикальный режим
* обновлен дизайн горизонтального отображения
* обновлен CS дизайн

 
feat: Segment redesign (https://github.com/salute-developers/plasma/pull/1392)


## Docs

### Документация `SDDS-CS`

- исправлены некорректные `imports` для примеров в документации к `Dropdown`
- добавлена страница для компонента `Tooltip`

 
[PLASMA-3536]: Fix incorrect imports by doc (https://github.com/salute-developers/plasma/pull/1469)


## Misc

### Attach

- исправлен `truncate` имени файла
- исправлены тесты

 
`plasma-new-hope`: fix attach truncate (https://github.com/salute-developers/plasma/pull/1454)


feat(plasma-tokens): auto generate stylesSalute theme (https://github.com/salute-developers/plasma/pull/1472)

### ThemeBuilder 

* изменены методы генерации базовой темы в старом формате
* изменены методы генерации базовой темы для новой архитектуры 

 
feat(plasma-theme-builder): Update generating default theme (https://github.com/salute-developers/plasma/pull/1477)

### Toast

- исправлен токен background для view="dark"

**Before**
<img width="319" alt="image" src="https://github.com/user-attachments/assets/fea32b30-270b-48c1-87f0-d6169e2d3bd7">

**After**
<img width="128" alt="image" src="https://github.com/user-attachments/assets/f52f5174-2a52-4dd0-a964-7fbcd52fdad6">


 
fix(plasma-*,sdds-*): Fix Toast background token (https://github.com/salute-developers/plasma/pull/1478)

---

#### 🚀 Enhancement

- Release by 16.10.2024 [#1487](https://github.com/salute-developers/plasma/pull/1487) ([@shuga2704](https://github.com/shuga2704) [@Salute-Eva](https://github.com/Salute-Eva) [@Yakutoc](https://github.com/Yakutoc) [@denivladislav](https://github.com/denivladislav) [@luizasok](https://github.com/luizasok) [@neretin-trike](https://github.com/neretin-trike) [@vadim-kudr](https://github.com/vadim-kudr) [@TitanKuzmich](https://github.com/TitanKuzmich) [@iljs](https://github.com/iljs) [@Yeti-or](https://github.com/Yeti-or))

#### 🐛 Bug Fix

- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 10

- [@iljs](https://github.com/iljs)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alexander Lobyntsev ([@Yakutoc](https://github.com/Yakutoc))
- Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- Luiza_Sok ([@luizasok](https://github.com/luizasok))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vadim ([@vadim-kudr](https://github.com/vadim-kudr))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))
- Vladislav Denisov  ([@denivladislav](https://github.com/denivladislav))

---

# v1.313.0 (Thu Oct 03 2024)

### Release Notes

#### Release by 02.10.2024 ([#1465](https://github.com/salute-developers/plasma/pull/1465))

## Components

### ChipGroup

- добавлен новый компонент в поставку пакетов `plasma-*` и `sdds-*`
- написаны тесты и документация

**After**:
<img width="425" alt="image" src="https://github.com/user-attachments/assets/017e9c45-0276-43bb-b94c-d64832268ae5">

 
feat(plasma-*, sdds-*): Add ChipGroup component (https://github.com/salute-developers/plasma/pull/1445)

### Dropdown

- исправлен баг с некорректной работой св-ва `placement` в storybook в новой вкладке;
- убрана приписка `new` в названиях сторей для `combobox` в sdds-*;

 
feat(plasma-web, b2c): Added mappings for placement prop in Dropdown (https://github.com/salute-developers/plasma/pull/1455)

### Switch

- Свойство `label-position` заложено в ядро компонента, а не в конфиг ( как-раньше )
- Добавлен в поставку `web` и `b2c` в сборке с linaria

 
plasma-*: Fix Switch Config (https://github.com/salute-developers/plasma/pull/1447)

### Calendar 

- добавлено новое свойство `locale` для работы с локалями отличными от `ru`

 
[PLASMA-3484]: Calendar support `EN` local (https://github.com/salute-developers/plasma/pull/1428)

### Dropdown

- добавлен divider в новый Dropdown
- обновлена документация

**After**:
<img width="229" alt="image" src="https://github.com/user-attachments/assets/8b871aa3-ad57-4461-8049-a3f3826003c8">


 
feat(plasma-*,sdds-*): Add divider to Dropdown (https://github.com/salute-developers/plasma/pull/1446)

### Drawer

- исправлено появление горизонтального скроллбара при открытии Drawer
- исправлено динамическое изменение placement и анимации открытия/закрытия

**Before**:
https://github.com/user-attachments/assets/4532f60a-5122-498f-a684-849c899cde1e

**After**:
https://github.com/user-attachments/assets/58c8eb93-67a7-4f45-8941-b193a996c184

 
plasma-*: Fix Drawer positioning and overflow scrollbar (https://github.com/salute-developers/plasma/pull/1461)

### TextField

- добавлено **новое** отображение `clear`
- добавлен `divider` для `clear` отображения
- обновлены тесты и документация
- включено в поставку `plasma-*`, `sdds-*` пакетов

**After**:
<img width="491" alt="image" src="https://github.com/user-attachments/assets/1db9b69e-d834-48d4-8a7c-1dcf3a3c1e89" />

 
feat(plasma-*,sdds-*): add TextField clear views (https://github.com/salute-developers/plasma/pull/1449)

### TextArea

- добавлено отображение clear TextArea
- добавлен divider для clear отображения
- обновлены тесты и документация
- включено в поставку plasma-\*, sdds-\* пакетов

**After**:
<img width="486" alt="image" src="https://github.com/user-attachments/assets/8e8eee98-efc7-4d5e-957c-b6e4defb0f05">


 
feat(plasma-*,sdds-*): add TextArea clear views (https://github.com/salute-developers/plasma/pull/1451)

### Form

Для компонентов `TextField`, `TextArea`, `Radioboxe`, `Switch`, `Checkbox`, `Slider`, `DatePicker`, `DatepickerRange`, 

- добавлена поддержка `React Hook Form`
- добавлена поддержка работы с `html form`

 
plasma-*: Support form  (https://github.com/salute-developers/plasma/pull/1464)

### Steps

- добавлен новый компонент: горизонтальный, вертикальный режим

<img width="140" src="https://github.com/user-attachments/assets/44a553d4-c191-4c14-b251-18188ea7544f" />
<img width="736" src="https://github.com/user-attachments/assets/3044c7b9-60d8-491d-993b-52b49344d352" />

 
plasma-*: Steps (https://github.com/salute-developers/plasma/pull/1443)

---

#### 🚀 Enhancement

- Release by 02.10.2024 [#1465](https://github.com/salute-developers/plasma/pull/1465) ([@Yakutoc](https://github.com/Yakutoc) [@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@shuga2704](https://github.com/shuga2704) [@iljs](https://github.com/iljs) [@IgorYar](https://github.com/IgorYar) [@vadim-kudr](https://github.com/vadim-kudr))

#### 🐛 Bug Fix

- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 7

- [@iljs](https://github.com/iljs)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alexander Lobyntsev ([@Yakutoc](https://github.com/Yakutoc))
- Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
- Igor Yaroslavtsev ([@IgorYar](https://github.com/IgorYar))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- Vadim ([@vadim-kudr](https://github.com/vadim-kudr))

---

# v1.312.0 (Thu Sep 19 2024)

### Release Notes

#### Release by 18.09.2024 ([#1442](https://github.com/salute-developers/plasma/pull/1442))

## Components

### Badge

- добавлено свойство `clear`, которое меняет отображение `view`
- обновлена документация и storybook

**After**:

<img width="328" src="https://github.com/user-attachments/assets/d44c10e8-ffe3-4137-a833-4351b7b82bdc" />

 
feat(plasma-*): Badge add prop clear (https://github.com/salute-developers/plasma/pull/1424)

### TextField

- используется корректный `color token` для содержимого `contentLeft\Right` slots
- добавлен `hover` для `contentRight` slot

**Before(incorrect color token):**

<img width="928" src="https://github.com/user-attachments/assets/42aa0845-54f4-45ed-8fb0-b71edac4ebf7" />

**After(correct color token):**

<img width="922" src="https://github.com/user-attachments/assets/e6c05099-b9fb-4959-b815-7f2307690263" />

**Hover:**

<img width="940" src="https://github.com/user-attachments/assets/508db157-deff-44e2-9dd9-4893184eb59a" />


 
[PLASMA-3412]: TextField contentRight\Left fix UI (https://github.com/salute-developers/plasma/pull/1429)

### Combobox

- добавлено новое свойство `alwaysOpened`
- обновлены токены в конфигурации компонента для `plasma-web`
- обновлена документация 

 
feat(plasma-*): combobox always opened (https://github.com/salute-developers/plasma/pull/1422)

### Grid

- исправили `view` по-умолчанию для `sdds` вертикалей 

**Before:**
<img width="1920" src="https://github.com/user-attachments/assets/6476ef70-294d-492b-b462-2e42cdb341d4" />
 
**After:**
<img width="1920" src="https://github.com/user-attachments/assets/aa004cf2-9e43-4691-84f3-fb33f94b3e5f" />
 
fix(sdds-*): Use correct default view for Grid (https://github.com/salute-developers/plasma/pull/1431)

### Editable

- переведен на новую архитектуру и добавлен в поставки `plasma-{b2c, web}`
- исправлена работа свойства `placeholder`

<img width="276" src="https://github.com/user-attachments/assets/bdd67ba7-62f1-48f1-8f04-78a13fbb8045" />
 
plasma-{web, b2c}: Editable component refactor (https://github.com/salute-developers/plasma/pull/1430)

### Combobox

- исправлена ошибка, когда изначальное значение в `single combobox` не отображалось

 
plasma-*: Fixed issue with predefined value in single Combobox (https://github.com/salute-developers/plasma/pull/1436)


## Icons

### Add new icons   

**pcMouse**
<img width="71" src="https://github.com/user-attachments/assets/f2097d88-d354-404a-91af-d59af0a61c3f" />

**Blank JPG/PNG**
<img width="140" src="https://github.com/user-attachments/assets/0d3a251a-ec39-4e0d-943b-e37c8d96c22f" />

 
[PLASMA-3502]: Add icons: Mouse, Blank JPG/PNG (https://github.com/salute-developers/plasma/pull/1435)


## Tokens

- исправлены формулы генерации `brightness` токенов
- обновлены / добавлены `active`, `hover`, `brightness` токены для `plasma-{b2c, web}` themes
 
fix(plasma-tokens): Update active, hover and brightness tokens in themes (https://github.com/salute-developers/plasma/pull/1441)


## Misc

### QA Auto test

-   изменены тесты `plasma-b2c` компонентов `Slider`, `Tabs`, `DatePicker` и `Card`

---

#### 🚀 Enhancement

- Release by 18.09.2024 [#1442](https://github.com/salute-developers/plasma/pull/1442) ([@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@IgorYar](https://github.com/IgorYar) [@Yakutoc](https://github.com/Yakutoc) [@shuga2704](https://github.com/shuga2704) [@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 6

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alexander Lobyntsev ([@Yakutoc](https://github.com/Yakutoc))
- Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
- Igor Yaroslavtsev ([@IgorYar](https://github.com/IgorYar))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.310.0 (Thu Sep 05 2024)

### Release Notes

#### Release by 04.09.2024 ([#1420](https://github.com/salute-developers/plasma/pull/1420))

## Components

### Switch

- токены для `Switch` приведены в соответствие с макетами
- добавлено состояние `hover`
- удален `skip test` для свойства `pressed` (это свойство deprecated). Вместо него добавлен тест `onMouseDown` с событием `realMouseDown`
- в тест `OnClick` добавлен `realClick`

 
plasma-*, sdds-*: Fix `Switch` tokens (https://github.com/salute-developers/plasma/pull/1388)

### DatePicker

- добавлена поддержка русского и английского языка
- добавлено форматирование даты 

 
plasma-(*): Add format and lang in Datepicker (https://github.com/salute-developers/plasma/pull/1404)

### ModalBase

- обновлен токен `modalOverlayColor` в `plasma-{web, b2c}`

 
plasma-{web,b2c}: update ModalBase modalOverlayColor token (https://github.com/salute-developers/plasma/pull/1364)

### TextFieldGroup

- добавлен новый компонент для `plasma-{web, b2c}, sdds-{serv, dfa}`
- написаны тесты и документация

 
feat(plasma-*,sdds-*): component textfield group (https://github.com/salute-developers/plasma/pull/1405)

### TextArea/TextField

- добавлены новые свойства: `required`, `requiredPlacement, optional`
- обновлены screenshots и документация

 
feat(plasma-*, sdds-*): Add required variation to TextArea/TextField (https://github.com/salute-developers/plasma/pull/1352)

### Combobox

- добавлен в поставку для `plasma-{web, b2c},  sdds-*`
- реализована вложенность (на основе [Floating UI](https://floating-ui.com/))
- добавлено новое свойство `closeAfterSelect` в `Combobox` и `Select`.
- поправлен отступ в компоненте `Select` в варианте `textfield-like`.

 
plasma-*, sdds-*: Combobox v2 (https://github.com/salute-developers/plasma/pull/1406)

### SDDS FIN PORTAL

- опубликован новый пакет `@salutejs/sdds-finportal`


 
sdds-finportal: Add new package FinPortal (https://github.com/salute-developers/plasma/pull/1417)


## Icons

### Update icons list

**FilterOff**
<img width="48"  src="https://github.com/user-attachments/assets/b254cc01-da2e-474a-879e-9ddf2a9e8bbc" />

**MessageNew**
<img width="64" src="https://github.com/user-attachments/assets/07c725e5-2164-4631-9778-7c2070cc9a12" />

**Poop**
<img width="128" src="https://github.com/user-attachments/assets/37c32fdd-36d1-4cd0-a4c9-ac9e0f4fb8b0" />

**Blank**
<img width="551" src="https://github.com/user-attachments/assets/7cf57627-eb40-493f-ada6-bf23c96fc3d8" />

**WindowMaximize/Minimize**
<img width="211"  src="https://github.com/user-attachments/assets/73543cd4-b357-4ce3-9737-f1a4f49930dc" />

**Logos**
<img width="86" src="https://github.com/user-attachments/assets/a6e015ab-3df3-4c01-8f88-48aa786e0399" />



 
feat(plasma-icons): Update icons sets (https://github.com/salute-developers/plasma/pull/1414)


## Tokens

### Add Brightness Tokens

- Добавлены новые токены `-brightness` в `theme-builder`
- Во все темы добавлены новый токены для высветления: `combobox`, `dropdown`, `notification`, `toast`, `toolbar` и `tooltip` 
- Исправлен компонент `Comobox` и обновлены тесты
- Изменен workfkow cypress

 
plasma-(*): Add Brightness Tokens (https://github.com/salute-developers/plasma/pull/1361)


## Misc

### Tests
-   изменены тесты plasma-b2c компонентов ButtonGroup и IconButton

 
test(plasma-b2c): update tests for ButtonGroup and IconButton (https://github.com/salute-developers/plasma/pull/1407)

---

#### 🚀 Enhancement

- Release by 04.09.2024 [#1420](https://github.com/salute-developers/plasma/pull/1420) ([@denivladislav](https://github.com/denivladislav) [@Salute-Eva](https://github.com/Salute-Eva) [@Yakutoc](https://github.com/Yakutoc) [@TitanKuzmich](https://github.com/TitanKuzmich) [@IgorYar](https://github.com/IgorYar) [@iljs](https://github.com/iljs) [@neretin-trike](https://github.com/neretin-trike) VAnaKudryavtsev@sberbank.ru [@shuga2704](https://github.com/shuga2704))
- feat: add required variation to TextArea & TextField [#1352](https://github.com/salute-developers/plasma/pull/1352) (VAnaKudryavtsev@sberbank.ru)

#### 🐛 Bug Fix

- Merge remote-tracking branch 'origin/dev' into release_2024-09-04 ([@Yakutoc](https://github.com/Yakutoc))
- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- chore: update api report ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 10

- [@iljs](https://github.com/iljs)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alexander Lobyntsev ([@Yakutoc](https://github.com/Yakutoc))
- Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
- Igor Yaroslavtsev ([@IgorYar](https://github.com/IgorYar))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vladislav Denisov  ([@denivladislav](https://github.com/denivladislav))
- Кудрявцев Вадим Анатольевич (vanakudryavtsev@sberbank.ru)
- Кудрявцев Вадим Анатольевич (VAnaKudryavtsev@sberbank.ru)

---

# v1.306.0 (Wed Aug 28 2024)

### Release Notes

#### Release by 28.08.2024 ([#1403](https://github.com/salute-developers/plasma/pull/1403))

## Components

### Slider

- удалена лишняя зависимость `ref.current` в hooks 
- исправлена документация в `plasma-web`
- для `plasma-new-hope` и `sdds-dfa` добавлены недостающие файлы документации

 
plasma-{new-hope, web}, sdds-dfa: removed redundant dependencies from `Slider` hooks; docs fixed (https://github.com/salute-developers/plasma/pull/1386)

### TextField
- добавлен размер `xs` в `plasma-web` 

 
plasma-web: size `xs` added to `TextField` (https://github.com/salute-developers/plasma/pull/1395)

### SDDS-CS

- изменены конфигурации компонентов для `sdds-cs`

### Radiobox/Checkbox

- добавлен фон через токены для `trigger`

### Button

- добавлен отдельный фон через токены в состоянии `loading`

 
sdds-cs: Edit components config (https://github.com/salute-developers/plasma/pull/1368)


## Icons

### Disclosure group 

- обновлен набор для `Disclosure`

<img width="371" alt="Disclosure" src="https://github.com/user-attachments/assets/37024761-5185-46fc-9a24-8285839c1776" />


 
feat(plasma-icons): Update `Disclosure` icons group (https://github.com/salute-developers/plasma/pull/1384)

### Update icons list

#### Video
<img width="171" src="https://github.com/user-attachments/assets/5138f0d2-bc5a-427f-b5c3-161702b80cc5" />

#### Attention
<img width="58" src="https://github.com/user-attachments/assets/425b34f8-6744-44ad-8670-70fbb7f2aed7" />

#### Message
<img width="409" src="https://github.com/user-attachments/assets/b23057c1-b8e3-4c2a-a052-570a61570242" />

#### Zoom
<img width="128" src="https://github.com/user-attachments/assets/ac37d878-b25d-4215-9a05-84a4db8a4f1e" />

 
feat(plasma-icons): Update icons pack (https://github.com/salute-developers/plasma/pull/1390)

## Tokens

* исправлены опечатки в `tokens` для `theme`: `plasma_web`, `sdds_dfa`, `sdds_serv`

fix(plasma-tokens): Fix tokens misprint in themes  (https://github.com/salute-developers/plasma/pull/1402)

### Theme-Builder

* исправлена обработка свойств `opened` для модальных окон
* исправлено отображение полей для ввода в модальном окне редактирования token
* исправлена генерация токенов `active` и `hover` состояний при изменении отключении / включении token

 
fix(plasma-theme-builder): Fix bugs in Theme Builder (https://github.com/salute-developers/plasma/pull/1397)


## Infra

### Plasma-B2C

- поднята документацию для пакета `plasma-b2c`


 
plasma-docs: Setup package for `plasma-b2c` (https://github.com/salute-developers/plasma/pull/1330)


## Misc

### Tests
-   изменены тесты plasma-b2c компонентов Breadcrumbs и Price

 
test(plasma-b2c): update tests for Breadcrumbs and Price (https://github.com/salute-developers/plasma/pull/1353)

### Tests
-   изменены тесты plasma-b2c компонентов Badge и Chip

 
test(plasma-b2c): update tests for Badge and Chip (https://github.com/salute-developers/plasma/pull/1366)

---

#### 🚀 Enhancement

- Release by 28.08.2024 [#1403](https://github.com/salute-developers/plasma/pull/1403) ([@Yakutoc](https://github.com/Yakutoc) [@simashova](https://github.com/simashova) [@neretin-trike](https://github.com/neretin-trike) [@Salute-Eva](https://github.com/Salute-Eva) [@IgorYar](https://github.com/IgorYar) [@denivladislav](https://github.com/denivladislav) [@iljs](https://github.com/iljs))

#### 🐛 Bug Fix

- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 7

- [@iljs](https://github.com/iljs)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alexander Lobyntsev ([@Yakutoc](https://github.com/Yakutoc))
- Anastasia Simashova ([@simashova](https://github.com/simashova))
- Igor Yaroslavtsev ([@IgorYar](https://github.com/IgorYar))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vladislav Denisov  ([@denivladislav](https://github.com/denivladislav))

---

# v1.302.0 (Thu Aug 22 2024)

### Release Notes

#### Release by 21.08.2024 ([#1382](https://github.com/salute-developers/plasma/pull/1382))

## Components

### Autocomplete
- добавлено свойство `portal`
- обновлена документация

 
plasma-new-hope: add portal prop to Autocomplete (https://github.com/salute-developers/plasma/pull/1347)

### Tabs
- исправлены типы и описание компонента для корректной генерации документации
- добавлены недостающие примеры в документацию `sdds-cs`

 
fix(plasma-*): Tabs types and documentation (https://github.com/salute-developers/plasma/pull/1362)

###  Props `isOpen`/`isVisible` to `opened`

- публичные свойства `opened`/`isVisible` помечаны как `deprecated`
- изменены `types` , от которых зависят дочерние компоненты

 
plasma-*: Deprecate isOpen/isVisible public props, change to opened (https://github.com/salute-developers/plasma/pull/1335)

### Textfield

- исправлено "дергание" `label` в `inner` режиме

 
fix(new-hope): Textfield label bug (https://github.com/salute-developers/plasma/pull/1359)

### Radiobox

- добавлены параметры `view` для примеров в storybook в `plasma-b2c` 

 
plasma-b2c: Add view props into radiobox stories (https://github.com/salute-developers/plasma/pull/1358)

### Select

- компоненты `SelectNew` и `Select` объединены в `Select`. `SelectNew` больше не существует.
- исправлен баг в `Autocomplete`, связанный с очисткой внешнего значения в `contolled`-варианте

 
feat: Getting rid of SelectNew in web/b2c (https://github.com/salute-developers/plasma/pull/1349)

### Popup

- исправлена логика регистрации `popups`

 
plasma-*: Fix Modal Overlay & Popup registration logic (https://github.com/salute-developers/plasma/pull/1380)


### Modal

- исправлена логика выставления `overflow-y` для `body`

 
plasma-*: Fix `Modal` overflow-y side effect (https://github.com/salute-developers/plasma/pull/1325)

## Icons

### Icons Table

- добавлен набор иконок `RowHeight` 

 
plasma-icons: Add new icons (https://github.com/salute-developers/plasma/pull/1360)

### Icons DoubleDisclosure

- добавлены набор иконок `DoubleDisclosure_{Down,Up}`

 
feat(plasma-icons): Add new icons DoubleDisclosure_{Down,Up} (https://github.com/salute-developers/plasma/pull/1373)

### Icons  SearchForm

- Исправлено смещение текста при наборе в поиск

 
plasma-website: fix searchForm input text shifting (https://github.com/salute-developers/plasma/pull/1378)


## Infra

### Packages

- удалён пакет `@salutejs/plasma-tokens-native`, больше не нужен
- удалён пакет `@auto-it/upload-assets`, т.к. больше не нужно прикреплять `assets` к релизу или `pull request`

 
chore: Remove `plasma-tokens-native` package (https://github.com/salute-developers/plasma/pull/1305)


## Tokens

### Генерация старых токенов

* Добавлены методы генерации старых токенов в библиотеку `core-themes`
* Добавлены токены со старым неймингом (префиксом `plasma-colors`) в вертикаль `plasma-themes` для тем `plasma-web`  и `plasma-b2c`

 
feat(plasma-themes): Add fallback tokens for `plasma-themes` (https://github.com/salute-developers/plasma/pull/1355)

### Токены высветления

* Добавлены токены высветления для библиотек `plasma-themes`, `caldera-online-themes`, `sdds-themes`, `flamingo-themes`. 

 
feat(*-themes): Add brightness tokens to all themes (https://github.com/salute-developers/plasma/pull/1367)

### Tabs, Dropdown, Popover, Switch, TextField

- заменены токены `plasma-colors`
 
plasma-{new-hope, b2c, web}: `plasma-colors` tokens changed (https://github.com/salute-developers/plasma/pull/1351)


## Docs

### Enabling themes 

* обновлено описание способов подключения и использования `theme` и токенов для всех поднятых пакетов с документацией, а также в шаблонах.

 
refator(*-docs): Update introducing docs (https://github.com/salute-developers/plasma/pull/1356)

### Tabs
- исправлены типы и описание компонента для корректной генерации документации
- добавлены недостающие примеры в документацию `sdds-cs`

 
fix(plasma-*): Tabs types and documentation (https://github.com/salute-developers/plasma/pull/1362)


## Misc

### Tests
-   изменены тесты plasma-b2c компонентов Button и Range
-   обновлены скриншоты

 
test(plasma-b2c): update tests and snapshots for Button and Range (https://github.com/salute-developers/plasma/pull/1340)

---

#### 🚀 Enhancement

- Release by 21.08.2024 [#1382](https://github.com/salute-developers/plasma/pull/1382) ([@denivladislav](https://github.com/denivladislav) [@Salute-Eva](https://github.com/Salute-Eva) [@IgorYar](https://github.com/IgorYar) [@neretin-trike](https://github.com/neretin-trike) [@vadim-kudr](https://github.com/vadim-kudr) [@simashova](https://github.com/simashova) [@iljs](https://github.com/iljs) [@Yakutoc](https://github.com/Yakutoc) [@shuga2704](https://github.com/shuga2704) [@luizasok](https://github.com/luizasok) VAnaKudryavtsev@sberbank.ru)
- feat: Deprecate isOpen/isVisible public props, change to opened [#1335](https://github.com/salute-developers/plasma/pull/1335) ([@vadim-kudr](https://github.com/vadim-kudr))

#### 🐛 Bug Fix

- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 11

- [@iljs](https://github.com/iljs)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alexander Lobyntsev ([@Yakutoc](https://github.com/Yakutoc))
- Anastasia Simashova ([@simashova](https://github.com/simashova))
- Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
- Igor Yaroslavtsev ([@IgorYar](https://github.com/IgorYar))
- Luiza_Sok ([@luizasok](https://github.com/luizasok))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vadim ([@vadim-kudr](https://github.com/vadim-kudr))
- Vladislav Denisov  ([@denivladislav](https://github.com/denivladislav))
- Кудрявцев Вадим Анатольевич (VAnaKudryavtsev@sberbank.ru)

---

# v1.292.0 (Thu Aug 08 2024)

### Release Notes

#### Release by 07.08.2024 ([#1348](https://github.com/salute-developers/plasma/pull/1348))

## Components

### DatePicker

- добавлена возможность задавать labelPlacement
- добавлен тест на данное свойство

 
plasma-*: add datepicker inner label support (https://github.com/salute-developers/plasma/pull/1327)

### DatePicker

- добавлена возможность открытия календаря в DatePicker по нажатию Space

 
plasma-new-hope: add DatePicker open by space (https://github.com/salute-developers/plasma/pull/1326)

### TimePicker

- добавлена привязка времени к датам
- добавлена возможность задавать промежуток больший, чем 1 сутки

**Before**
<img src="https://github.com/user-attachments/assets/b867f5d2-2814-433e-ba21-e93aa5fd691f" width="550">

**After**
<img src="https://github.com/user-attachments/assets/3d6e6ac5-d5e6-4adb-b985-9606a31d8335" width="550">

 
plasma-ui: range timepicker (https://github.com/salute-developers/plasma/pull/1323)

### Components

Добавлена библиотека компонентов `@salutejs/sdds-cs`

 
feat(package): Add sdds-cs (https://github.com/salute-developers/plasma/pull/1334)

### DatePicker

- изменен токен default состояния для поля ввода
- обновлены скриншоты для DatePicker
-  исправлено поведение, связанное с шириной поля ввода
- добавлена поддержка асинхронной установки defaultDate

**Before**
<img src="https://github.com/user-attachments/assets/a4a4962a-c214-4c07-ba32-d7a80d2f9099">
<img src="https://github.com/user-attachments/assets/38f4d5be-2519-4777-817e-5ca901724a7f">

**After**
![image](https://github.com/user-attachments/assets/564b6610-2fee-475e-8b5e-af223f11a069)
![image](https://github.com/user-attachments/assets/8ad60d1d-8ed9-405e-89f3-e35934bff1c3)


 
plasma-*: fix datepicker  focus token  (https://github.com/salute-developers/plasma/pull/1332)

### Breadcrumbs

- добавлен в поставку `plasma-{b2c, web}, sdds-{serv,dfa}`
- добавлен примеры в storybook и документация

#### Навигация по родительским страницам
<img width="609" src="https://github.com/user-attachments/assets/b35f60a5-0d18-4ea4-9f62-716365079e4f" />

#### Используя `shorter`

<img width="659" src="https://github.com/user-attachments/assets/462f80e8-42a3-4538-b85e-1228a08df58e" />

#### Используя custom элемент

<img width="596" src="https://github.com/user-attachments/assets/3d780e04-0419-4bdf-a81b-8b3c2f73c9d9" />

 
plasma-*: Add Breadcrumbs (https://github.com/salute-developers/plasma/pull/1310)

### Select

* Добавлен новый проп renderTarget в компонент Select

RenderTarget in Select (https://github.com/salute-developers/plasma/pull/1328)

### Tokens

- В пакете `sdds-cs` были изменены конфиги в компонентах: `Accordion`, `Avatar`, `Badge`, `Cell`, `Counter`, `Chip`, `Divider`, `Indicator`
- В `Accordion` добавлен токен цвета иконки
- В `plasma-web` добавлены новые view

 
fix(sdds-serv): Update configs for components in sdds-cs (https://github.com/salute-developers/plasma/pull/1344)

### Tabs
- при нажатии на таб, который не виден целиком, происходит прокрутка до конца этого таба
- при нажатии на стрелки влево/вправо происходит прокрутка до следующего таба
- исправлена ошибка `disabled=true` в конфигурациях
- исправлены примеры `Storybook`, тесты и документация

 
plasma-*, sdds-*: redesign Tabs (https://github.com/salute-developers/plasma/pull/1333)


## Docs

### Add docs SDDS CS

* добавлена документация для пакета `sdds-cs`

 
Add docs SDDS CS (https://github.com/salute-developers/plasma/pull/1336)


## Misc

### Docs

* Поправлено описание подключения темы для `sdds` вертикали

 
fix(sdds-serv-docs,sdd-dfa-docs): Fix introducing page (https://github.com/salute-developers/plasma/pull/1338)

### Fix useFocusTrap in Modal

- Теперь фокус при открытии `modal` работает после анимации

 
Fix useFocusTrap in Modal (https://github.com/salute-developers/plasma/pull/1345)

### Контейнер в NotificationProvider

Добавил `overflow: hidden` на контейнер используемого Popup

 
fix: fix Notification animation overflow (https://github.com/salute-developers/plasma/pull/1339)

---

#### 🚀 Enhancement

- Release by 07.08.2024 [#1348](https://github.com/salute-developers/plasma/pull/1348) ([@Yakutoc](https://github.com/Yakutoc) [@Salute-Eva](https://github.com/Salute-Eva) [@TitanKuzmich](https://github.com/TitanKuzmich) [@iljs](https://github.com/iljs) [@neretin-trike](https://github.com/neretin-trike) [@shuga2704](https://github.com/shuga2704) [@vadim-kudr](https://github.com/vadim-kudr) [@denivladislav](https://github.com/denivladislav))

#### 🐛 Bug Fix

- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 8

- [@iljs](https://github.com/iljs)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alexander Lobyntsev ([@Yakutoc](https://github.com/Yakutoc))
- Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vadim ([@vadim-kudr](https://github.com/vadim-kudr))
- Vladislav Denisov  ([@denivladislav](https://github.com/denivladislav))

---

# v1.290.0 (Thu Jul 25 2024)

### Release Notes

#### Release by 24.07.2024 ([#1319](https://github.com/salute-developers/plasma/pull/1319))

## Components

### Portal/Popup

* убрана зависимость от свойства `frame` в элементе `PopupRootContainer`
* переделан компонент `Portal` из конфигурируемого в обычный функциональный компонент

 
fix(plasma-new-hope): `Popup` and `Portal` improvements (https://github.com/salute-developers/plasma/pull/1299)

### Chip

- добавлено новое свойство `hasClear`
- добавлен тест и обновлена документация
 
plasma-*: Add prop `hasClear` for Chip (https://github.com/salute-developers/plasma/pull/1312)

### DatePicker

- добавлена поддержка выбора кварталов
- добавлены 4ре варианта работы с календарем (выбор дней, месяцев, календарей, лет)
- добавлена поддержка кварталов в datepicker
- добавлена возможность задавать события для каждой календарной сетки
- добавлена возможность задавать неактивные элементы для каждой календарной сетки

**Before:**
<div style="display: flex">
<img src="https://github.com/user-attachments/assets/2208459a-92ee-493c-974e-b01f216e268b" width="200" height="200">
<img src="https://github.com/user-attachments/assets/c765d898-bfbb-42a2-be30-8982f27031bb" width="200" height="200">
<img src="https://github.com/user-attachments/assets/bc61edf5-0a18-47a8-b34e-672f2eb0379e" width="200" height="200">
</div>

**After:**
<div style="display: flex">
<img src="https://github.com/user-attachments/assets/0b42d119-8964-4a52-b9e0-564b0f1a8141" width="200" height="200">
<img src="https://github.com/user-attachments/assets/1e2cb981-4a16-475d-ba07-51a774130349" width="200" height="200">
<img src="https://github.com/user-attachments/assets/30f898e9-06c5-47ae-bf66-b4c29f4eb9a0" width="200" height="200">
<img src="https://github.com/user-attachments/assets/0236ddcc-4473-4b46-a200-ae088f960b50" width="200" height="200">
</div>


plasma-*: Datepicker improvements (https://github.com/salute-developers/plasma/pull/1302)

### Autocomplete

- добавлен в поставку во все клиентские библиотеки  

feat: Autocomplete (https://github.com/salute-developers/plasma/pull/1292)

### Price, Portal

- компонент `Price` добавлен в `plasma-new-hope`, портирован в `plasma-{web, b2c}`, `sdds-{serv, dfa}`
- для `Price` обновлены тесты и документация
- исправлена ошибка отсутствующего `PropsTable` в документации `Portal`

 
plasma-*: add `Price` component (https://github.com/salute-developers/plasma/pull/1307)

### Select

- добавлен новый компонент с поддержкой вложенных списков
- поставлен во все клиентские библиотеки   

 
feat: Select (https://github.com/salute-developers/plasma/pull/1233)

### SDDS-SERV

- добавлены компоненты:
  - Calendar
  - Notification
  - ButtonBase
  - Skeleton
  - Accordion

### SDDS-{SERV, DFA}

- заменены старые токены с префиксом `--plasma-colors...` на корректные.

 
Sdds-serv & sdds-dfa sync (https://github.com/salute-developers/plasma/pull/1314)

### Accordion

- добавлен новый view (b2c)
- добавлена возможность добавить класс в accordionItem
- исправлена работы disabled
- добавлен флаг startLeftPosition
- переделаны новые отступы из нового дизайна

 
Add functional to accordion (https://github.com/salute-developers/plasma/pull/1301)

### Typography

-   добавлен пропс color
-   в секции plasma-web storybook добавлен color picker

 
feat: Add color prop in Typography (https://github.com/salute-developers/plasma/pull/1308)


## Tokens

* Добавлена новая темая `sdds_cs` в библиотеку `@salutejs/sdds-themes` с учётом обновленных токенов типографики.

 
feat(sdds-themes): Add `sdds_cs` theme (https://github.com/salute-developers/plasma/pull/1309)


## Docs

### AudioPlayer

- изменен `cdn` в примерах`https://vc-static.sberdevices.ru/smartmarket-video-news/` на `https://cdn1.newsback.sberdevices.ru/p-newsback/`

 
plasma-{b2c,web}: Fix vc cdn url (https://github.com/salute-developers/plasma/pull/1298)


## Misc

### Tooltip

- исправлен проброс стилей в Tooltip

 
plasma-new-hope:  forward styles and className to Tooltip root (https://github.com/salute-developers/plasma/pull/1311)

### Textarea

- исправлена логика при использовании свойства `autoResize` (теперь ширина автоматически растягивается)

Результат с включенным `autoResize` после изменения ширины

**До:**
![](https://github.com/salute-developers/plasma/assets/38344415/70ad8513-353e-477f-a0fe-e4d3ee5cfd55)

**После:**
![](https://github.com/salute-developers/plasma/assets/38344415/84306373-b4fb-4f13-8a77-b2fd05c08721)

 
plasma-*: Fix width autoresize prop in textarea (https://github.com/salute-developers/plasma/pull/1297)

---

#### 🚀 Enhancement

- Release by 24.07.2024 [#1319](https://github.com/salute-developers/plasma/pull/1319) ([@Yeti-or](https://github.com/Yeti-or) [@neretin-trike](https://github.com/neretin-trike) [@Salute-Eva](https://github.com/Salute-Eva) [@simashova](https://github.com/simashova) [@TitanKuzmich](https://github.com/TitanKuzmich) [@iljs](https://github.com/iljs) [@shuga2704](https://github.com/shuga2704) [@denivladislav](https://github.com/denivladislav) [@vadim-kudr](https://github.com/vadim-kudr) [@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- Merge remote-tracking branch 'origin/dev' into release_2024-07-24 ([@Yakutoc](https://github.com/Yakutoc))
- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 10

- [@iljs](https://github.com/iljs)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alexander Lobyntsev ([@Yakutoc](https://github.com/Yakutoc))
- Anastasia Simashova ([@simashova](https://github.com/simashova))
- Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vadim ([@vadim-kudr](https://github.com/vadim-kudr))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))
- Vladislav Denisov ([@denivladislav](https://github.com/denivladislav))

---

# v1.288.0 (Thu Jul 11 2024)

### Release Notes

#### Release by 11.07.2024 ([#1296](https://github.com/salute-developers/plasma/pull/1296))

## Components

### DatePicker

- добавлен новый компонент DatePicker
- написаны тесты и документация
- проведен рефакторинг стилей и токенов календаря
- исправлен отступ от первой иконки в Range
 
feat(plasma-new-hope): add DatePicker component (https://github.com/salute-developers/plasma/pull/1224)

### Portal

- компонент добавлен в `plasma-new-hope`, портирован в `plasma-{web, b2c}`, `caldera`, `sdds`
- добавлены тесты и документация
- компонент внедрён в `Popover` и `Popup`
- исправлено имя теста для `Popover`

 
plasma-*: Add `Portal` component (https://github.com/salute-developers/plasma/pull/1272)

### Sheet

- убран из примеров в `stories` лишний горизонтальный скролл 
- добавлена недостающая документация в `caldera-online` 

**Before**:

<img width="1726" alt="scrollBefore" src="https://github.com/salute-developers/plasma/assets/71961494/f37919f8-df31-427e-aff9-34228cb920b6" />

**After**:

<img width="1725" alt="scrollAfter" src="https://github.com/salute-developers/plasma/assets/71961494/6c3ae1df-e3cc-42d0-ae54-6b11fba55690" />

 
plasma-*: Fix `Sheet` scroll (https://github.com/salute-developers/plasma/pull/1273)

### Dropdown

- добавлено новое свойство `portal`

 
feat(plasma-new-hope): Added prop portal into Dropdown component (https://github.com/salute-developers/plasma/pull/1260)

### SDDS DFA

* добавлена тема `sdds_dfa` в библиотеку вертикалей `@salutejs/sdds-themes`
* добавлена библиотека `@salutejs/sdds-dfa`
* поправлены компоненты `Header`, `Skeleton`, `Accordion` 

feat(sdds-dfa): Add `sdds-dfa` components library (https://github.com/salute-developers/plasma/pull/1293)

### SDDS-SERV

- добавлена поддержка пакета `@emotion`

sdds-serv: Add support `@emotion` package (https://github.com/salute-developers/plasma/pull/1281)


## Icons

### Website: Icons page

- новый UI для блока поиск
- исправлен вывод набора иконок 
- исправлено `isDeprecate` на `isDeprecated`

plasma-website: New UI search block (https://github.com/salute-developers/plasma/pull/1270)

### iOS

- исправлена генерация иконок под iOS

**Before:**

<img width="248" src="https://github.com/salute-developers/plasma/assets/2895992/e93abb36-8a51-4451-aab3-3107959a8904" />

**After:**

<img width="248" src="https://github.com/salute-developers/plasma/assets/2895992/8415a3b2-3f6e-46fb-9a3e-767f0317aa30" />

plasma-icons: Rewrite generate icons for iOS (https://github.com/salute-developers/plasma/pull/1283)

### Opacity

- удалено **ненужное** свойство `opacity` в наборе старых иконок

plasma-icons: Delete unnecessary prop opacity (https://github.com/salute-developers/plasma/pull/1282)


## Infra

### Required checks

- реорганизовали обязательные проверки (стало меньше и быстрее) 

 
plasma-infra: Simplify required checks (https://github.com/salute-developers/plasma/pull/1278)

### Scaffold

- скрипт для генерации компонентов вынесен в отдельную команду

plasma-infra(scaffold): Extend script for update/sync component list  (https://github.com/salute-developers/plasma/pull/1275)

### Support emotion engine

- добавлена поддержка пакета `@emotion` для библиотеки `plasma-new-hope`

feat(plasma-new-hope): add emotion support (https://github.com/salute-developers/plasma/pull/1276)

## Tokens

* добавлены методы генерации токенов для web приложений на основе новой json структуры.
* перегенированы темы для всех вертикалей: `sdds`, `plasma`, `flamingo` и `caldera-online` на основе json файлов из [данного репозитория](https://github.com/salute-developers/theme-converter/tree/main/themes).
* удалены старые json темы из пакета `@salutejs/data-themes`.
* переименован пакет `@salutejs/data-themes` в `@salutejs/core-themes` и обновлены все зависимости

 
feat(data-themes): Add new token generators for web via new json scheme and update themes (https://github.com/salute-developers/plasma/pull/1274)


## Docs

### Storybook link

- убрана ссылка/кнопка на storybook из документации для `plasma-{web,ui}`

**Before:**

<img width="1944" src="https://github.com/salute-developers/plasma/assets/2895992/458182dc-07eb-4954-9b06-a2f0eabc867f" />

**After:**

<img width="1944" src="https://github.com/salute-developers/plasma/assets/2895992/ea812456-7644-4194-8188-88a085b416f6" />

 
plasma-docs: hide short links for storybook (https://github.com/salute-developers/plasma/pull/1286)

### SDDS-DFA/SERVE

* добавлен шаблон документации для компонент `Accordion`
* добавлена документация для пакета `sdds-dfa`
* исправлена документация для `Popover`

 
feat: Add `sdds-dfa-docs` (https://github.com/salute-developers/plasma/pull/1295)


## Misc

### TextField

- добавлены токены цвета и размера textBefore/After
- исправлен line-height у иконок

 
feat: add textfield textBefore/After tokens (https://github.com/salute-developers/plasma/pull/1253)

### Website: colors palette 

- добавлена страница с цветовой палитрой

**Страница выбора цвета**

![Выбор цвета](https://github.com/salute-developers/plasma/assets/38344415/6527ea89-7727-4a4e-b435-35436e74b788)

**Страница выбора оттенка**

![Выбор оттенка](https://github.com/salute-developers/plasma/assets/38344415/632a842e-4922-42a4-bfe7-79081f6ea2e0)
 
plasma-website: add page colors (https://github.com/salute-developers/plasma/pull/1266)

---

#### 🚀 Enhancement

- Release by 11.07.2024 [#1296](https://github.com/salute-developers/plasma/pull/1296) ([@Yakutoc](https://github.com/Yakutoc) [@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@denivladislav](https://github.com/denivladislav) [@Yeti-or](https://github.com/Yeti-or) [@shuga2704](https://github.com/shuga2704) [@neretin-trike](https://github.com/neretin-trike) [@iljs](https://github.com/iljs))

#### 🐛 Bug Fix

- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 8

- [@iljs](https://github.com/iljs)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alexander Lobyntsev ([@Yakutoc](https://github.com/Yakutoc))
- Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))
- Vladislav Denisov ([@denivladislav](https://github.com/denivladislav))

---

# v1.285.0 (Thu Jun 27 2024)

### Release Notes

#### Release by 26.06.2024 ([#1269](https://github.com/salute-developers/plasma/pull/1269))

## Components

### Accordion

- добавлен новый компонент в поставку для `plasma-{web,b2c}`
 
plasma-*: Add accordion (https://github.com/salute-developers/plasma/pull/1254)

### Sheet

- Добавлен компонент `Sheet`
 
plasma-new-hope: add Sheet component (https://github.com/salute-developers/plasma/pull/1225)

### TextArea

- `TextArea` портирован в `sdds`
 
sdds-serv: add TextArea component (https://github.com/salute-developers/plasma/pull/1263)

### TextArea

- исправлена типизация (разбитие на три группы  `rows / cols`, `height / width`, `autoResize / minAuto / maxAuto`)
- исправлен расчёт `autoResize`
- исправлена документация
 
plasma-new-hope: TextArea height / width fixes (https://github.com/salute-developers/plasma/pull/1261)

### TextArea

- удалено упоминание `resize` (свойство `deprecated`)
 
(plasma-{new-hope, web}, sdds-serv): remove resize from docs (https://github.com/salute-developers/plasma/pull/1267)

### Segment

- добавлена возможность задать выбранные по умолчанию сегменты
- добавлен тест на выбранные значения
- добавлено пояснение в документации
 
feat(plasma-new-hope): add default selected segment (https://github.com/salute-developers/plasma/pull/1252)


## Icons

### 24 [s, small]

- обновлен набор `.svg` иконок
- обновлены/расширенны категории иконок
- обновлены snapshots для тестов измененных иконок    
 
feat(plasma-icons): Add icons preset [24, s, small] (https://github.com/salute-developers/plasma/pull/1247)

### 16 [xs, xsmall]

- обновлен набор `.svg` иконок
 
feat(plasma-icons): Add icons preset [16, xs, xsmall] (https://github.com/salute-developers/plasma/pull/1250)

### 36 [m, medium]

- обновлен набор `.svg` иконок
 
feat(plasma-icons): Add icons preset [36, m, medium] (https://github.com/salute-developers/plasma/pull/1257)

### React

- добавлена обработка всех имеющихся размеров: 16, 24, 36 
- обновлены cypress snapshots с использованием иконки `IconDone`

#### Before/After

![Icon](https://github.com/salute-developers/plasma/assets/2895992/5d7551d5-d392-4a9f-993e-e265a28d6362)

### New-hope

- изменен токен по-умолчанию для свойство `color` в `IconRoot` (теперь `var(--text-primary)`)
- обновлены cypress snapshots связанные с `var(--text-primary)`
 
plasma-icons: Handle all sizes [React] (https://github.com/salute-developers/plasma/pull/1258)

### Android

- добавлены `.xml` иконки для всех имеющихся размеров: 16, 24, 36

#### After

<img width="672" alt="Screenshot 2024-06-19 at 13 44 22" src="https://github.com/salute-developers/plasma/assets/2895992/878745f3-9f20-4224-826d-c0d898d1a94d" />

<img width="1920" alt="Screenshot 2024-06-19 at 13 46 09" src="https://github.com/salute-developers/plasma/assets/2895992/dca1102a-abbc-4a65-a628-f5acf40f80d8" />
 
plasma-icons: handle all icons size [Android] (https://github.com/salute-developers/plasma/pull/1259)

### Icons page

- добавлен вывод комбинации (старых + новых) иконок
- добавлено динамическое изменение размера иконок в grid
- косметические правки по дизайну 
 
plasma-website: Redesign "Icons" page [Part 2] (https://github.com/salute-developers/plasma/pull/1262)

### Icons page

- добавлено меню фильтра по размеру 
- внесены дизайн правки   
 
plasma-website: Add icons filter menu (https://github.com/salute-developers/plasma/pull/1265)


## Docs

### Edit docs

- исправлена документация для компонента `Switch`, `Checkbox` и `Radiobox`
- изменена работа документации, теперь при генерации файла документации туда добавляются все типы, в том числе и из `react`
- в компонент `PropsTable` добавлен параметр `include`, который добавляет свойство в документацию, если он является типом из `react`
 
plasma-*: Edit docs core and change docs Switch, Checkbox and Radiobox (https://github.com/salute-developers/plasma/pull/1232)

### Carousel

- исправлено свойства `stylingCallback` на `scopeCallback`
- исправлено свойства `stylingResetCallback` на `scopeResetCallback`

### Before/After

<img width="1778" src="https://github.com/salute-developers/plasma/assets/38344415/7e21b0f0-8fc8-4a45-a5e6-2ca704eba57f" />
 
Edit carousel docs (https://github.com/salute-developers/plasma/pull/1256)

### Caldera-online

- добавлена документация для библиотеки `caldera-online`
- поправлены шаблоны документации для `Button, Segment, Radiobox`

 
caldera-online: Add documentation  (https://github.com/salute-developers/plasma/pull/1249)

### TextArea

- удалено упоминание `resize` (свойство `deprecated`)
 
(plasma-{new-hope, web}, sdds-serv): remove resize from docs (https://github.com/salute-developers/plasma/pull/1267)

---

#### 🚀 Enhancement

- Release by 26.06.2024 [#1269](https://github.com/salute-developers/plasma/pull/1269) ([@iljs](https://github.com/iljs) [@Salute-Eva](https://github.com/Salute-Eva) [@Yakutoc](https://github.com/Yakutoc) [@denivladislav](https://github.com/denivladislav) [@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 5

- [@iljs](https://github.com/iljs)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alexander Lobyntsev ([@Yakutoc](https://github.com/Yakutoc))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- Vladislav Denisov ([@denivladislav](https://github.com/denivladislav))

---

# v1.281.0 (Thu Jun 13 2024)

### Release Notes

#### Release by 11.06.2024 ([#1238](https://github.com/salute-developers/plasma/pull/1238))

## Icons

### Stroke

- заменили значение свойства `stroke` на `currentColor`

#### Before

<img width="1919" alt="Screenshot 2024-06-03 at 18 35 35" src="https://github.com/salute-developers/plasma/assets/2895992/85e34f50-5ed6-4d92-93b9-f430f36d5b2d" />


#### After

<img width="1909" alt="Screenshot 2024-06-03 at 18 33 57" src="https://github.com/salute-developers/plasma/assets/2895992/ec5e440e-bd71-474a-b971-883f83b7bf9c" />

 
plasma-icons: Replace stroke value to "currentColor" (https://github.com/salute-developers/plasma/pull/1226)


## Tokens

### Theme

- добавлены классы для более гибкого и удобного управления темами, созданных в новом формате. 
- добавлена возможность генерации базовой темы в новом формате.
- добавлена возможность считывать темы в новом формате и конвертировать их в экземпляры созданных классов.
- добавлена возможность записывать темы в новом формате на основе созданного экземпляра класса.

 
feat(plasma-tokens): Add write / read and generation new format of theme.json  (https://github.com/salute-developers/plasma/pull/1207)

## Website
### Icons page

- редизайн grid
- редизайн cell grid
- редизайн меню расширенной информации об иконки    

#### Before

<img width="1911" alt="Screenshot 2024-06-11 at 14 53 26" src="https://github.com/salute-developers/plasma/assets/2895992/6d10a1e2-5722-4e5f-a69b-de595eb64019" />

#### After

<img width="1920" alt="Screenshot 2024-06-11 at 15 05 21" src="https://github.com/salute-developers/plasma/assets/2895992/d2481ef5-229d-48d2-b0f2-2b4ba3e1a550" />


plasma-website: Redesign Icons page [Part I] (https://github.com/salute-developers/plasma/pull/1228)

---

#### 🚀 Enhancement

- Release by 11.06.2024 [#1238](https://github.com/salute-developers/plasma/pull/1238) ([@neretin-trike](https://github.com/neretin-trike) [@Salute-Eva](https://github.com/Salute-Eva) [@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 3

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alexander Lobyntsev ([@Yakutoc](https://github.com/Yakutoc))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.280.0 (Thu May 30 2024)

### Release Notes

#### Release by 29.05.2024 ([#1222](https://github.com/salute-developers/plasma/pull/1222))

## Components

### Calendar

- добавлен пропс для включения/исключения минимума и максимума диапазона дат
 
feat: add calendar edge dates control (https://github.com/salute-developers/plasma/pull/1203)

### Slider

- добавлен компонент Slider
 
feat(plasma-new-hope): add slider component (https://github.com/salute-developers/plasma/pull/1194)

### Textarea

- изменен `padding` для `label`
 
fix(plasma-*): Fix padding on textarea (https://github.com/salute-developers/plasma/pull/1209)

### Range

- включен в поставку `plasma-{b2c,web} / sdds-serv`
- написаны тесты и документация
 
feat: Add range component (https://github.com/salute-developers/plasma/pull/1208)

### IconButton

- включен в поставку `sdds-serv`
- добавлена документация в `sdds-serv-docs`
 
feat(sdds-serv): add icon button (https://github.com/salute-developers/plasma/pull/1214)

### Tabs

- добавлен корректный проброс `className` в `Tab` и `TabItem`
- поправлена документация для `Tab` и `Segment`

#### ДО:

![image](https://github.com/salute-developers/plasma/assets/40370966/797f897d-95cc-4114-b54a-8629b281b2c7)
![image](https://github.com/salute-developers/plasma/assets/40370966/8a0e6de3-f6cd-4e7b-b87b-a1a26b5dd4e7)

#### ПОСЛЕ:

![image](https://github.com/salute-developers/plasma/assets/40370966/9dd690cc-e8ed-4623-baa0-52e1f22cf71c)
![image](https://github.com/salute-developers/plasma/assets/40370966/0c8bb69e-b2d3-4ae9-aed4-2fd4c4b5bd9b)
 
feat(plasma-new-hope): fix tabs styles (https://github.com/salute-developers/plasma/pull/1220)

### Button

- добавлено отображение `value`
- исправлены внутренние отступы от `contentLeft`, `contentRight`
- дополнены тесты и документация
- исправлены тесты, зависящие от `Button: Notification, Pagination, Toast, Toolbar`
- добавлен токен переопределения цвета `value` в `ButtonGroup`
 
feat: add button value (https://github.com/salute-developers/plasma/pull/1213)


## Tokens

### Tokens

- добавлены токены прозрачности для positive, warning, negative цветов
- добавлены токены с active, hover модификаторами
 
tokens: add surface transparent tokens to sdds (https://github.com/salute-developers/plasma/pull/1206)


## Misc

### Checkbox/Radiobox

-  исправлен types компонентов для библиотек `plasma-asdk`, `sdds-serv` и `caldera-online`  
 
Fix checkbox types (https://github.com/salute-developers/plasma/pull/1217)

---

#### 🚀 Enhancement

- Release by 29.05.2024 [#1222](https://github.com/salute-developers/plasma/pull/1222) ([@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@akhdrv](https://github.com/akhdrv) [@Yakutoc](https://github.com/Yakutoc) [@iljs](https://github.com/iljs))

#### 🐛 Bug Fix

- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 5

- [@iljs](https://github.com/iljs)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))

---

# v1.279.0 (Thu May 16 2024)

#### 🚀 Enhancement

- Release by 15.05.2024 [#1205](https://github.com/salute-developers/plasma/pull/1205) ([@renovate[bot]](https://github.com/renovate[bot]) [@iljs](https://github.com/iljs) [@Salute-Eva](https://github.com/Salute-Eva) [@Yakutoc](https://github.com/Yakutoc) [@TitanKuzmich](https://github.com/TitanKuzmich) [@shuga2704](https://github.com/shuga2704) [@akhdrv](https://github.com/akhdrv))

#### 🐛 Bug Fix

- feat(plasma-new-hope, web, b2c): Dropdown refactoring ([@TitanKuzmich](https://github.com/TitanKuzmich))
- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 7

- [@iljs](https://github.com/iljs)
- [@renovate[bot]](https://github.com/renovate[bot])
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))
- Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))

---

# v1.278.0 (Thu Apr 25 2024)

### Release Notes

#### Release by 24.04.2024 ([#1196](https://github.com/salute-developers/plasma/pull/1196))

## Components

### Tooltip

- исправлено позиционирование стрелочки
- добавлен тест на много-строчный сценарий

#### Before: 

![image](https://github.com/salute-developers/plasma/assets/40370966/230bbda5-2c2f-4628-b5b4-7a7a14ffc2c9)

#### After: 

![image](https://github.com/salute-developers/plasma/assets/40370966/6c142730-0b4b-47de-a64d-1c6ad2c4fc77)

fix(plasma-new-hope): fix tooltip arrow placing (https://github.com/salute-developers/plasma/pull/1171)

### Radiobox

- расширен пример в `stories` с учетом `a11y` возможностей  

plasma-new-hope(radiobox): Improved a11y (https://github.com/salute-developers/plasma/pull/1188)

### Storybook 

- исправлено некорректное поведение свойства `placement`
- исправлено свойство `enableContentLeft` и `enableContentRight` в TextField

feat(plasma-new-hope, b2c, web, sdds): Fix storybook argTypes (https://github.com/salute-developers/plasma/pull/1182)

### Avatar

- добавлен `aria-label`
- расширены примеры с доступностью

plasma-new-hope(avatar): Refactoring + a11y (https://github.com/salute-developers/plasma/pull/1180)

### Chip

- удален лишнее свойство `hasClear` из примера в `story` 
- заменены со старого формата на новый токены в конфигурации (без приставки `--plasma-colors`)
- добавлена недостающие свойство `view=accent`
- обновлены `cypress snapshots` 

fix: remove extra chip prop in stories (https://github.com/salute-developers/plasma/pull/1179)

## Colors

- добавлены файлы фирменной палитры в формате `.json`
- добавлена директория `src` в gitignore, т.к. теперь его содержимое генерируется автоматически на основе `.json`

feat(plasma-color): Add generate color palette from json (https://github.com/salute-developers/plasma/pull/1172)

## Infra

### Audit vulnerabilities

- исправлены все уязвимости в клиентских пакетах (аля `plasma-web`)
- обновлен до `vite@4.5.3`
- обновлен `@babel` и его зависимости до latest 
- заменен `babel-plugin-transform-class-properties` на `@babel/plugin-transform-class-properties` 

### `@salutejs/plasma-sb-utils`

- обновлены `TS` до 4.2.4
- обновлен `@storybook/react` до 7.6.17
- исправлены все уязвимости
- поправлены мелкие ошибки в типах      

plasma-infra(sb-utils): Update dependencies versions (https://github.com/salute-developers/plasma/pull/1178)

---

#### 🚀 Enhancement

- Release by 24.04.2024 [#1196](https://github.com/salute-developers/plasma/pull/1196) ([@Yakutoc](https://github.com/Yakutoc) [@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@neretin-trike](https://github.com/neretin-trike) [@shuga2704](https://github.com/shuga2704))

#### 🐛 Bug Fix

- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- chore: update deps ([@Yakutoc](https://github.com/Yakutoc))
- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 5

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.276.0 (Thu Apr 11 2024)

### Release Notes

#### Release by 10.04.2024 ([#1175](https://github.com/salute-developers/plasma/pull/1175))

## Components

### Dropdown

- добавлена прослойка для dropdown в `b2c` и `web` (работает на старом api и с dropdown из new-hope)

 
feat(plasma-new-hope, b2c, web): Dropdown interlayer (https://github.com/salute-developers/plasma/pull/1104)

### Cell

- добавлен в поставку `plasma-{web,b2c}`

 
feat(new-hope): Add cell (https://github.com/salute-developers/plasma/pull/1148)

### Chip

- поправлена типизация
- компонент добавлен в поставку для `sdds-serv`, включая документацию 

 
feat(plasma-new-hope): fix Chip types (https://github.com/salute-developers/plasma/pull/1155)

### Button

- добавлены токены состояний (active / hover) для конфигов компонента  в библиотеках `@salutejs/plasma-{b2c,web,asdk}`, `@salutejs/sdds-serv`, `@salutejs/caldera-online` .

 
fix(plasma-web,plasma-b2c,plasma-asdk,sdds-serv,calder-online): Update state tokens for `Button` component (https://github.com/salute-developers/plasma/pull/1167)

### Select

- убрана поддержка вложенности
- добавлена прослойка для компонента в `plasma-{b2c,web}` и `sdds-serv` (* работает на старом api и с select из new-hope).
- переделаны тесты и обновлена документация

 
feat(plasma-new-hope, b2c, web, sdds-serv): Select interlayer (https://github.com/salute-developers/plasma/pull/1161)

### TextField

- проведен рефакторинг и редизайн
- обновлены тесты и документация
- добавлен в поставку в sdds-serv

 
feat(plasma-new-hope): TextField redesign (https://github.com/salute-developers/plasma/pull/1160)


## Icons

### iOS

- добавлен конвертор SVG в PNG для iOS app  

 
plasma-icons: Convert SVG to PNG for iOS   (https://github.com/salute-developers/plasma/pull/1163)


## Tokens

### Tokens

* исправлена формула для расчёта `hover / active` состояний
* добавлены новые токены (но в выключенном состоянии) в существующие темы и схемы для библиотек `@salutejs/plasma-tokens`, `@salutejs/data-themes`, `@salutejs/caldera-online-themes`, `@salutejs/sdds-serv-themes`, `@salutejs/plasma-themes`, `@salutejs/flamingo-themes`
*  добавлены недостающие токены для обратной совместимости у библиотек `@salutejs/plasma-tokens-web`, `@salutejs/plasma-tokens-b2c`, `@salutejs/plasma-tokens-b2b`,
* добавлены недостающие токены в темы `plasma_b2c`, `plasma_web`, `sds_engineer` для библиотеки `@salutejs/plasma-new-hope`

 
feat(plasma-tokens,plasma-theme-builder): Add tokens to existed themes (https://github.com/salute-developers/plasma/pull/1165)


## Docs

### Popup

- исправлена ошибка в документации

 
fix(new-hope): Fix popup doc (https://github.com/salute-developers/plasma/pull/1168)


## Misc

### Plasma Theme Builder

* Добавлена генерация hover / active состояний для групп токенов.

 
feat(plasma-theme-builder): Add generate hover / active state for tokens (https://github.com/salute-developers/plasma/pull/1134)

### Pagination

- исправлена ошибка навигации с помощью кнопок `next` \ `pre`

 
fix(new-hope): Edit storybook content (https://github.com/salute-developers/plasma/pull/1154)

### Website icons grid

- исправлен поиск иконок по названию
- исправлен grid для набора иконок 

 
fix(plasma-website): Fix Icons (https://github.com/salute-developers/plasma/pull/1169)

---

#### 🚀 Enhancement

- Release by 10.04.2024 [#1175](https://github.com/salute-developers/plasma/pull/1175) ([@shuga2704](https://github.com/shuga2704) [@Salute-Eva](https://github.com/Salute-Eva) [@neretin-trike](https://github.com/neretin-trike) [@Yakutoc](https://github.com/Yakutoc) [@iljs](https://github.com/iljs) [@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- fix(new-hope): Fix popup doc [#1168](https://github.com/salute-developers/plasma/pull/1168) ([@iljs](https://github.com/iljs))
- feat(plasma-b2c, web): Dropdown added ([@shuga2704](https://github.com/shuga2704))

#### Authors: 6

- [@iljs](https://github.com/iljs)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.273.0 (Thu Mar 28 2024)

### Release Notes

#### Release by 27.03.2024 ([#1151](https://github.com/salute-developers/plasma/pull/1151))

## Components

### Progress

- добавлен в библиотеку в `new-hope`
- добавлен в поставку пакетов `plasma-{b2c, web}, sdds-serv`
- написаны тесты и документация

 
feat: Progress redesign refactor (https://github.com/salute-developers/plasma/pull/1126)

### Tooltip

-  добавлены fallback на следующие свойства: isVisible, arrow, animated

 
feat(plasma-new-hope): tooltip old api fallback (https://github.com/salute-developers/plasma/pull/1140)

### Divider

- включен в поставку `plasma-{b2c/web}` и `sdds-serv`
- написаны тесты и документация

 
feat(plasma-new-hope): Divider component (https://github.com/salute-developers/plasma/pull/1132)

### Pagination

- добавлен в поставку клиентских библиотек 

 
feat(new-hope): Pagination (https://github.com/salute-developers/plasma/pull/1107)

### Toolbar

- включили в поставку в `plasma-{b2c/web}` \ `sdds-serv`
- написаны тесты и документация

 
feat(plasma-new-hope): add toolbar component (https://github.com/salute-developers/plasma/pull/1150)


## Icons

### Icons for android

-  Добавлен скрипт генерации иконок под android на основе svg
-  Обновлена инструкция по добавлению иконок
 
plasma-icons: script to generate android icons (https://github.com/salute-developers/plasma/pull/1109)

### Icons publish

- добавлена директория `old` для обратной совместимости  

 
plasma-icons: Add `old` dir for publish (https://github.com/salute-developers/plasma/pull/1149)


## Infra

### Scaffold docs CLI

- добавлен CLI для создание **директории** документации по шаблону
- добавлен CLI для создание **компонента** документации по шаблону

 
plasma-infra: Scaffold docs dir CLI  (https://github.com/salute-developers/plasma/pull/1099)

### Retry  

- добавлен retry для шага `Update package-lock files` для обхода ошибки `ECONNRESET`
- добавлен `workflow` для ручного запуска `Update package-lock files`

 
plasma-infra: Retry failure step (https://github.com/salute-developers/plasma/pull/922)

### Deploy documentations artefacts

- распараллели процесс создания и загрузки артефактов документации
- добавили `marocchino/sticky-pull-request-comment` для приклеивания сообщения к одному комментарию в pr
- добавлена конфигурация: `config-ci.json` 
- удалены неиспользуемые переменные

 
plasma-infra: Refactoring deploy documentations artefacts [PR context]  (https://github.com/salute-developers/plasma/pull/1125)

### Build android icons plugin

- добавлен dispatch события для запуска `build icons` в `plasma-android`

 
plasma-infra: Dispatch build-icons event (https://github.com/salute-developers/plasma/pull/1145)

### Scaffold components docs

- добавлена генерация компонентов по заданному шаблону

 
plasma-infra: Scaffold components docs by template (https://github.com/salute-developers/plasma/pull/1128)


## Docs

### Docs

* Исправлена ошибка примера путём обновления токенов бэграундов в сторибуке для библиотек `plasma-web`, `plasma-b2c`, `plasma-asdk`.

#### До:
<img width="412" alt="Screenshot 2024-03-21 at 12 28 41" src="https://github.com/salute-developers/plasma/assets/26903236/5814e04f-1425-403c-8e20-1151a12063c6" />

#### После:
<img width="412" alt="Screenshot 2024-03-21 at 17 03 31" src="https://github.com/salute-developers/plasma/assets/26903236/259c6397-2e5c-4d82-a2a6-4d6fdcc31e79" />

 
fix(plasma-web,plasma-b2c,plasma-asdk): Replace tokens for background in storybook to new (https://github.com/salute-developers/plasma/pull/1139)


## Misc

### Drawer

- изменили величину измерения высоты на dvh в storybook

 
fix: change height for Drawer stories (https://github.com/salute-developers/plasma/pull/1116)

### Image

- поправлена передача `props` в `Image.stories`

 
fix: fix args for Image stories (https://github.com/salute-developers/plasma/pull/1119)

### Plasma Theme Builder

* произведён рефакторинг методов, которые генерируют токены
* актуализированы базовые токены, которые генерируются сервисом ThemeBuilder
* добавлена новая группа `outline`, используемая в обводках / рамках

 
feat(plasma-theme-builder): Actualize default tokens (https://github.com/salute-developers/plasma/pull/1127)

### Button

-  поправлен размер и отступ фокуса на кнопке

 
feat(plasma-new-hope): fix button focus (https://github.com/salute-developers/plasma/pull/1141)

### Badge

- поправлен токен фона для `transparent-accent` Badge
- поправлен токен цвета текста для `transparent-light`

#### До:

![image](https://github.com/salute-developers/plasma/assets/40370966/67673520-cfe8-4b6d-87eb-f700df308627)
![image](https://github.com/salute-developers/plasma/assets/40370966/aa9fb631-c1b3-4f58-aa0b-4e5a9dc9617c)

#### После:

![image](https://github.com/salute-developers/plasma/assets/40370966/59170271-0a32-4680-ab18-5aa4afde0cef)
![image](https://github.com/salute-developers/plasma/assets/40370966/9fdc8bea-add8-4798-955d-a896d6c32a40)

 
feat: update badge view tokens (https://github.com/salute-developers/plasma/pull/1142)

---

#### 🚀 Enhancement

- Release by 27.03.2024 [#1151](https://github.com/salute-developers/plasma/pull/1151) ([@kayman233](https://github.com/kayman233) [@Salute-Eva](https://github.com/Salute-Eva) [@iljs](https://github.com/iljs) [@Yakutoc](https://github.com/Yakutoc) [@TitanKuzmich](https://github.com/TitanKuzmich) [@neretin-trike](https://github.com/neretin-trike) [@akhdrv](https://github.com/akhdrv) [@eg-zhuravlev](https://github.com/eg-zhuravlev))
- feat(plasma-hope): remove old Progress [#1126](https://github.com/salute-developers/plasma/pull/1126) ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- chore: Update package-lock.json files [no ci] ([@Yakutoc](https://github.com/Yakutoc))
- docs: regenerate api reports ([@TitanKuzmich](https://github.com/TitanKuzmich))
- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 8

- [@iljs](https://github.com/iljs)
- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))
- Evgeniy Zhuravlev ([@eg-zhuravlev](https://github.com/eg-zhuravlev))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.270.0 (Thu Mar 14 2024)

### Release Notes

#### Release by 13.03.2024 ([#1112](https://github.com/salute-developers/plasma/pull/1112))

## Components

### Calendar

-   добавлено возможность выбора одного дня для `range`

 
feat(new-hope): edit calendar range logic and fix name (https://github.com/salute-developers/plasma/pull/1084)

### TextField

- исправлен ошибка связанная с прозрачностью в `Safari`

 
feat(plasma-new-hope): TextField issue with opacity (https://github.com/salute-developers/plasma/pull/1082)

### Button

- удалены токены `scale` из кнопки и группы кнопок в пакетах `plasma-{b2c, web, sdds-serv}, caldera/-online`
- удалены токены `scale` из `example` для `plasma-new-hope`

 
feat: remove scale tokens from Button & ButtonGroup (https://github.com/salute-developers/plasma/pull/1110)

### Grid

- добавлен в поставку в `plasma-{b2c, web, new-hope}, sdds-serv`
- написаны тесты и обновлена документация

feat(plasma-new-hope): Grid refactor redesign (https://github.com/salute-developers/plasma/pull/1105)

### ButtonBase

-   добавлен базовый компонент для создания `custom` кнопок для библиотек `plasma-{b2c,new-hope}`

 
feat(plasma-new-hope, b2c): ButtonBase (https://github.com/salute-developers/plasma/pull/1080)


## Icons

### SVG

-   добавлен svg формат иконок (не попадают в итоговой билд)

 
feat(plasma-icons): Add svg icons (https://github.com/salute-developers/plasma/pull/1095)

### Icons generation

-  добавлена генерация компонентов иконок на основе svg во время билда
-  удалены компоненты и их assets из git
 
plasma-icons: build-time generate Icon components (https://github.com/salute-developers/plasma/pull/1101)


## Docs

### SDDS SERV DOCS

- добавлена новый пакет документации
 
plasma-docs: Setup `sdds-serv` package docs (https://github.com/salute-developers/plasma/pull/1062)


## Misc

### Tooltip

-   исправлена логика работы classname, теперь все наследуется корректно

 
fix(new-hope): remove wrapper from popover (https://github.com/salute-developers/plasma/pull/1083)

### Pickers

-  исправлена ошибка UI в документации 

 
fix(ui): fix pickers documentation bug with overflow (https://github.com/salute-developers/plasma/pull/1089)

---

#### 🚀 Enhancement

- Release by 13.03.2024 [#1112](https://github.com/salute-developers/plasma/pull/1112) ([@Yakutoc](https://github.com/Yakutoc) [@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@iljs](https://github.com/iljs) [@neretin-trike](https://github.com/neretin-trike) [@shuga2704](https://github.com/shuga2704) [@kayman233](https://github.com/kayman233))
- feat(plasma-hope): remove Grid ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

- Merge remote-tracking branch 'origin/dev' into release_2024-03-13 ([@Yakutoc](https://github.com/Yakutoc))
- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- docs: regenerate api reports ([@TitanKuzmich](https://github.com/TitanKuzmich))
- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 7

- [@iljs](https://github.com/iljs)
- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.267.1 (Tue Mar 05 2024)

#### 🐛 Bug Fix

- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.267.0 (Fri Mar 01 2024)

### Release Notes

#### Release by 29.02.2024 ([#1079](https://github.com/salute-developers/plasma/pull/1079))

## Components

### Drawer

- добавлены компоненты `Drawer` и `Panel`
- включен в поставку `plasma-{b2c/web/sdds-serv}`
- для компонента `Drawer` написаны тесты

feat(plasma-new-hope): add Drawer (https://github.com/salute-developers/plasma/pull/1068)

### Indicator

-  добавлены тесты и документация
-  добавлен в поставку для библиотек: `plasma-{web,b2c}`
-  интегрирован в компонент `Avatar`

 
feat(plasma-new-hope, web, b2c): Indicator component (https://github.com/salute-developers/plasma/pull/1067)

### ButtonGroup

- добавлен новый компонент и тесты с документацией
- исправлена структура файлов для `Spiner`
- добавлен компонент `Button` в поставку в `plasma-{b2c,web}`
- обновлена документация для `Button`
- обновлены тесты зависящие от `Button`

 
feat(plasma-new-hope): add button group component (https://github.com/salute-developers/plasma/pull/1061)

### TextField [Note]

TextField перевезен на новую Архитектуру, могут быть незначительные отличия от текущего поведeния.

### Рефакторинг TextField

- поведение анимация `label` внутри поля стала запускаться одинаковым между `b2c` и `web`. Запуск на фокусе, а не на начале редактирования.
- при показе `label` внутри поля больше не учитывается `placeholder`

### TextField [plasma-b2c]

- исправлено поведение для цвет `placeholder`, больше не зависит от наличия `leftHelper`

 
feat(plasma-new-hope): TextField (https://github.com/salute-developers/plasma/pull/949)


## Infra

### Upload assets

- добавлена возможность указать пакет/релиз к которому нужно прикрепить assets  

 
plasma-infra: Upload assets for target package(-s) (https://github.com/salute-developers/plasma/pull/1054)

### plasma-temple
- удалены все упоминания о пакете `plasma-temple` из текущего репозитория
 
Remove `plasma-temple` from repo [Part 1] (https://github.com/salute-developers/plasma/pull/1048)


## Tokens

* Добавлен пакет `@salutejs/data-themes`, который содержит все созданные json-схемы, а также набор методов, позволяющие сгенерировать темы для web-платформы в формате js объектов для `styled-component` и css стилей для подключения с помощью нативных способов.

* В пакетах с наборами тем были объеденены токены с цветами и типографикой. 

* Так же если необходимы токены цвета или типографики отдельно, забрать их можно по пути `@salutejs/<vertical-name>-themes/tokens` для общих токенов и `@salutejs/<vertical-name>-themes/tokens/<theme-name>` для конкретных тем. 

* Добавлена новые пакеты с наборами тем для следующих дизайн вертикаль:
  * `@salutejs/plasma-themes` - для вертикали `Plasma` - пока нигде не используется;
  * `@salutejs/sdds-themes` - для вертикали `SDDS` - используется с библиотекой `@salutejs/sdds-serv`;
  * `@salutejs/cladera-online-themes` - для вертикали `Caldera Online`  - используется с библиотеками `@salutejs/cladera-online` и `@salutejs/cladera`;
  * `@salutejs/flamingo-themes` - для вертикали `Flamingo` - пока нигде не используется;

### New-hope

* Удалена зависимость `@salutejs/plasma-tokens` из пакета.

### SDDS-Serv

* Обновлена документация со способом установки и подключением;
* Убрана зависимость от пакета `@salutejs/plasma-tokens` и добавлен пакет `@salutejs/sdds-themes`;
* Обновлён способ подключение темы в storybook;
* Исправлена сторис LiveDemo в компоненте `Toast`;
* Заменены токены цветов в конфигах компонента `Segment` на актуальные

### Caldera / Caldera Online

* Обновлена документация со способом установки и подключением;
* Убрана зависимость от пакета `@salutejs/plasma-tokens` и добавлен пакет `@salutejs/caldera-online-themes`;
* Обновлён способ подключение темы в storybook;
* Исправлена сторис LiveDemo в компоненте `Toast`;
* Заменены токены цветов в конфигах компонента `Segment` на актуальные

 
Add new tokens architecture (https://github.com/salute-developers/plasma/pull/1074)


## Docs

### Сontributing Typos

- исправлены опечатки  в документации  
- добавлен параграф об обязательном наличие локально browser `chromium`

 
plasma-docs: Fix cypress cli commands (https://github.com/salute-developers/plasma/pull/1058)


## Misc

### SDDS Android

- добавлен `SDDS Android` проект, включающий: 

  -   Theme Builder Gradle Plugin
  -   SDDS Sandbox App
  -   UIKit
  -   UIKit Compose
  -   файл с лицензией и `README.md` в каждый модуль

 
chore[sdds-android]: SDDS Android project was created. (https://github.com/salute-developers/plasma/pull/1045)

### CI/CD Pipeline [SDDS Android]

- Project build system migration to composite builds was made to support multiproject structure. 
- Code quality check workflow was created. 
- Merge report tasks were added. 
- Codeowners file was modified.

 
chore[sdds-android, cicd]: code quality check workflow (https://github.com/salute-developers/plasma/pull/1070)

---

#### 🚀 Enhancement

- Release by 29.02.2024 [#1079](https://github.com/salute-developers/plasma/pull/1079) ([@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@Yakutoc](https://github.com/Yakutoc) [@neretin-trike](https://github.com/neretin-trike) [@malilex](https://github.com/malilex) [@shuga2704](https://github.com/shuga2704) [@Yeti-or](https://github.com/Yeti-or) [@kayman233](https://github.com/kayman233))
- feat(plasma-web/b2c): update tests depending on Button ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- chore: update package-locks [no ci] ([@Yakutoc](https://github.com/Yakutoc))
- chore: bump manual package-locks [#1053](https://github.com/salute-developers/plasma/pull/1053) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- chore: Update package-lock.json files \[skip ci\] ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 8

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Alexander Malishev ([@malilex](https://github.com/malilex))
- Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.263.0 (Thu Feb 15 2024)

### Release Notes

#### Release by 14.02.2024 ([#1047](https://github.com/salute-developers/plasma/pull/1047))

## Components

### SSRProvider

- SSRProvider перенесен в библиотеку plasma-new-hope
- добавлен в поставку b2c/web/asdk
- из `plasma-asdk` удалена plasma-core зависимость

 
feat(plasma-new-hope): add ssr provider component (https://github.com/salute-developers/plasma/pull/1021)

### Calendar

- добавлено новое свойство `onChangeStartOfRange` в библиотеки `plasma-{web,b2c}`

### After 

<img width="600" alt="prop onChangeStartOfRange" src="https://github.com/salute-developers/plasma/assets/2895992/a2e01d6e-01f1-4041-b57f-57bb7d3de54e" />

 
plasma-web: Add `onChangeStartOfRange` prop into Calendar (https://github.com/salute-developers/plasma/pull/1014)

### Overlay

- добавлен в новой архитектуре
- добавлен в поставку для `plasma-{b2c/web}`
- написаны тесты и документация
- интегрирован в компоненты `Toast`, `Modal`

 
feat(plasma-new-hope/web/b2c): overlay component (https://github.com/salute-developers/plasma/pull/1033)

### Select

- Обновлены зависимости у callback onChangeValue, который вызывался при выборе элемента в `multiselect` режиме для библиотеки `@salutejs/plasma-hope`

 
fix(plasma-hope): Add value deps for `Select` component with multiselect mode (https://github.com/salute-developers/plasma/pull/1040)

### Tabs

-   выполнен редизайн компонента `Tabs`
-   компонент добавлен в `plasma-web/b2c` в новой архитектуре
-   добавлены новые свойства для `TabItem`
-   `TabsController` теперь deprecated.  Для подключения клавиатурной навигации необходимо дополнительно прокинуть свойства `index, itemIndex, onIndexChange`.

 
feat(plasma-web, plasma-b2c): Tabs refactor and redesign (https://github.com/salute-developers/plasma/pull/983)

### Avatar & AvatarGroup

-   Упрощен функционал аватара
-   Avatar и AvatarGroup были добавлены в web, b2c

 
feat(plasma-new-hope, plasma-web, plasma-b2c): Avatar & AvatarGroup (https://github.com/salute-developers/plasma/pull/1036)

### Combobox

- добавлен компонент `Combobox` c новым дизайном в библиотеку `@salutejs/plasma-new-hope` для тем plasma-b2c и plasma-web, а также в `@salutejs/plasma-b2c` и `@salutejs/plasma-web`

single

![image](https://github.com/salute-developers/plasma/assets/26903236/9178c72d-15ca-4dc4-b722-cc32956a6820)

multiple 

![image](https://github.com/salute-developers/plasma/assets/26903236/972c419a-25f2-4ddc-9afe-9e59785e19d8)
  
 
feat(plasma-new-hope): Add `Combobox` component (https://github.com/salute-developers/plasma/pull/1032)


## Icons

-   поправлен `tree-shaking` пакета иконок
-   компонент `Icon` теперь **deprecated**

 
plasma-icons: fix tree-shaking (https://github.com/salute-developers/plasma/pull/1031)

## Fonts

- обновлены шрифты SBSans Display для CDN


## Infra

### Plasma-web-docs

- обновлен пакет `docusaurus` и все что с ним связано до `@latest` версии
- исправлены **все** уязвимости в пакете `plasma-web-docs`

 
plasma-infra: Bump `Docusaurus` to latest [plasma-web-docs] (https://github.com/salute-developers/plasma/pull/1025)

### Plasma-ui-docs

- обновлен пакет `docusaurus` и все что с ним связано до `@latest` версии
- исправлены **все** уязвимости в пакете `plasma-ui-docs`

 
plasma-infra: Bump `Docusaurus` to latest [plasma-ui-docs] (https://github.com/salute-developers/plasma/pull/1026)

### DEV Stage 

- добавлен dev stage для возможности сделать deploy dev branch. Нужен для QA     

 
plasma-infra: Setup s3 DEV stage – manual run (https://github.com/salute-developers/plasma/pull/1029)

### Fonts

- обновлены шрифты для документации, storybook , тестов

 
chore: update sb fonts (https://github.com/salute-developers/plasma/pull/1041)


## Misc

### Сборка без `styled-components`

- добавили возможность использовать `plasma-{web,b2c}`  без `styled-components`

Пример использования:

```js
import { TextArea } from @salutejs/plasma-web/css;
```

 
plasma-web/plasma-b2c: Добавлена сборка без styled-components (https://github.com/salute-developers/plasma/pull/942)

### SDDS SRVC

- добавлена библиотека sdds-srvc
- поднят storybook в рамках pull request
- опубликован npm пакет
- добавлена Typography (в виде компонентов как старого, так и нового формата)
- добавлены компоненты: Button, Checkbox, Dropdown, Link, Modal, Popup, Radiobox, Segment, Spinner, Switch

 
feat(sdds-srvc): add sdds srvc package (https://github.com/salute-developers/plasma/pull/1023)

### Caldera

- добавлена библиотека Caldera
- поднят storybook в рамках pull request
- опубликован npm пакет
- добавлена Typography (в виде компонентов как старого, так и нового формата)
- добавлены компоненты: Button, Checkbox, Dropdown, Link, ModalBase, PopupBase, Radiobox, Segment, Spinner, Switch

 
feat(caldera): add Caldera package (https://github.com/salute-developers/plasma/pull/990)

### Caldera-online

- добавлена библиотека Caldera-online
- поднят storybook в рамках pull request
- опубликован npm пакет
- добавлена Typography (в виде компонентов как старого, так и нового формата)
- добавлены компоненты: Button, Checkbox, Dropdown, Link, ModalBase, PopupBase, Radiobox, Segment, Spinner, Switch

 
feat(caldera): add caldera online package (https://github.com/salute-developers/plasma/pull/1012)

---

#### 🚀 Enhancement

- Release by 14.02.2024 [#1047](https://github.com/salute-developers/plasma/pull/1047) ([@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@Yeti-or](https://github.com/Yeti-or) [@luizasok](https://github.com/luizasok) [@kayman233](https://github.com/kayman233) [@Yakutoc](https://github.com/Yakutoc) [@shuga2704](https://github.com/shuga2704) [@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-hope): remove Tabs ([@kayman233](https://github.com/kayman233))
- feat(plasma-hope): remove SSRProvider ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- fix(plasma-hope): Add value deps for `Select` component with multiselect mode [#1040](https://github.com/salute-developers/plasma/pull/1040) ([@neretin-trike](https://github.com/neretin-trike))
- docs(plasma-asdk/web/b2c/hope): regenerate api docs ([@TitanKuzmich](https://github.com/TitanKuzmich))
- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 8

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- Luiza_Sok ([@luizasok](https://github.com/luizasok))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.258.0 (Thu Feb 01 2024)

### Release Notes

#### Release by 31.01.2024 ([#1020](https://github.com/salute-developers/plasma/pull/1020))

## Components

### Modal

-   поправлена генерация id для `Modal, Popup`
-   добавлены тесты для `Modal, Popup`
 
plasma-new-hope: fix id generation for Modal, Popup (https://github.com/salute-developers/plasma/pull/1001)

### Avatar и Avatar Group

- добавлены компоненты Avatar и AvatarGroup
- Временно добавлен полифил `focus-visible` в linaria.tsx

 
feat(plasma-new-hope): Avatar & AvatarGroup (https://github.com/salute-developers/plasma/pull/962)

### Select

- добавлен компонент `Select` c новым дизайном в библиотеку `@salutejs/plasma-new-hope` для тем plasma-b2c и plasma-web
- добавлена клавиатурная навигация со следующими комбинациями:
    -   Tab - переход на таргет (кнопку)
    -   Shift + tab - выход с него (теряем фокус)
    -   Пробел / стрелка вверх / стрелка вниз / enter - открыть выпадающий список и переместиться на первый элемент
    -   Стрелки вверх / вниз ходим по элементам 
    -   Пробел / enter - выбираем элемент, закрываем выпадающий список и переходим фокусом снова на таргет (кнопку)
    -   Если мы ходим по селекту и нажимаем Tab - выпадающий список закрывается и теряем фокус
    -   Если мы ходим по селекту и нажимаем Escape - выпадающий список закрывается и фокусом остаёмся на таргете
    -   В мультиселекте тоже самое кроме закрытия выпадающего списка при выборе элемента
    -   При активном состоянии у таргета, нажимаем стрелку влево / вправо - попадаем на первый чип
    -   Когда находимся на первом чипе, нажимаем стрелку влево / вправо - переходим по чипам
    -   Нажимаем backspace - удаляем выбранный чип и переходим на предыдущий
    -   Если удалили последний чип, то фокусируемся на таргете
    -   Если находимся в выборе элемента из выпадающего списка и нажимаем стрелку влево / вправо - попадаем на самый последний чип
    -   Если находимся в режиме выбора элемента и нажимаем стрелку вниз / вверх находясь на последнем / первом элементе, то перескакиваем в начало / в конец

### Icons

- добавлены новые иконки и изменена структура файлов старых в библиотеку `@salutejs/plasma-new-hope`

### Button

- добавлены токены для компонента `Button`, регулирующие высоту и scale при hover и active состояниях #706 
- исправлен баг, при котором у компонента `Button` будет отсутствовать бэкграунд в состоянии disabled и при hover'е

### Checkbox, Radiobox

- добавлены токены для компонент `Checkbox`, `Radiobox`, отвечающие за отступы

### Chip

- добавлен токен для компонента `Chip`, отвечающий за цвет иконки закрытия

### Dropdown

- добавлена поддержка react-компонент в props `contentLeft` и `contentRight`
- убрано свойство isNested, т.к. теперь можно вкладывать Dropdown друг в друга без него

 
feat(plasma-new-hope): Add `Select` component (https://github.com/salute-developers/plasma/pull/956)

### Toast

- добавлен компонент Toast в новой архитектуре
- добавлен в поставку в b2c/web
- обновлены тесты
- обновлена документация

 
feat(plasma-new-hope/web/b2c): toast refactor & redesign (https://github.com/salute-developers/plasma/pull/1010)

### TextArea

- добавлена поддержка переноса строки для свойства `placeholder`;
- исправлено поведение компонента при использовании свойств `defaultValue` и `placeholder`.

 
fix(plasma-new-hope): Fixes for `TextArea` component (https://github.com/salute-developers/plasma/pull/1017)


## Icons

### Hotfix

-   поправлена публикация пакета со всем содержимым билда

 
fix(plasma-icons): fix package publish (https://github.com/salute-developers/plasma/pull/989)


## Infra

### Workflow for `dev` branch

- добавлен отдельный workflow для **безусловной** сборки документация и storybook на основе dev ветки 

 
plasma-infra(documentation): Add documentation workflow for dev branch (https://github.com/salute-developers/plasma/pull/996)

### Коллаборативный прогон [Perftool]

- добавлен коллаборативный прогон (прогон одновременно двух веток в рамках одного процесса)  

 
ci: use perftool collaborative mode (https://github.com/salute-developers/plasma/pull/991)

### Override `lerna ls`

- переопределили логику `ignoreChanges` для команды `lerna ls` чтобы изменения файлов `*.component-test.tsx` тоже учитывалось      

 
plasma-infra: Override `lerna ls` config (https://github.com/salute-developers/plasma/pull/995)

### Mattermost notifications

- добавлено уведомление для упавшего процесса публикации релиз кандидата 

 
plasma-infra: Add notification when publish failed (https://github.com/salute-developers/plasma/pull/935)

### Release pull request 

- добавлен выбор ветки для создания release pull request   

 
plasma-infra: Refactoring release pull request workflow  (https://github.com/salute-developers/plasma/pull/1007)

### Versionate docs

- вынесли этот процесс в отдельный, от публикация релиза, workflow.  

 
plasma-infra: Move the `versionate_docs` job to a separate workflow (https://github.com/salute-developers/plasma/pull/1006)

### Perftool

- убиран verbose loglevel в `perftool`

 
Remove perftool max log verbosity (https://github.com/salute-developers/plasma/pull/1004)


## Misc

### Storybook

-   поправлено отображение примера Popup в storybook

 
chore: fix Popup storybook example (https://github.com/salute-developers/plasma/pull/997)

---

#### 🚀 Enhancement

- Release by 31.01.2024 [#1020](https://github.com/salute-developers/plasma/pull/1020) ([@luizasok](https://github.com/luizasok) [@Yakutoc](https://github.com/Yakutoc) [@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@kayman233](https://github.com/kayman233) [@akhdrv](https://github.com/akhdrv) [@nikewht](https://github.com/nikewht) [@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-hope): remove Toast [#1010](https://github.com/salute-developers/plasma/pull/1010) ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

- Merge remote-tracking branch 'origin/dev' into release_2024-01-31 ([@Yakutoc](https://github.com/Yakutoc))
- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- docs(plasma-b2c/web/hope): generate api docs ([@TitanKuzmich](https://github.com/TitanKuzmich))
- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 8

- [@kayman233](https://github.com/kayman233)
- [@nikewht](https://github.com/nikewht)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- Luiza_Sok ([@luizasok](https://github.com/luizasok))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.255.1 (Fri Jan 19 2024)

#### 🐛 Bug Fix

- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.255.0 (Thu Jan 18 2024)

### Release Notes

#### Release by 18.01.2024 ([#981](https://github.com/salute-developers/plasma/pull/981))

## Components

### Carousel

- добавлен пропс `scrollSnapStop` в `Carousel`

 
feat(plasma-core): Add new prop (scrollSnapStop) to the Carousel component (https://github.com/salute-developers/plasma/pull/940)


### Skeleton

- добавлен компонент в новой архитектуре
- включен в поставку b2c/web
- удален из plasma-hope
- написаны тесты
- поправлен компонент Button для использования в styled

 
feat(plasma-new-hope/b2c/web): add skeleton with new architecture (https://github.com/salute-developers/plasma/pull/954)

### Skeleton

-   добавлены размеры под новую типографику

 
feat(plasma-b2c/web): add skeleton new typography sizes (https://github.com/salute-developers/plasma/pull/960)


### Header

-  добавлен prop, который позволяет применять mediaQuery для S-viewport по условию
-  добавлен тест на данный кейс

 
feat(plasma-ui): add property to show/hide subtitle on S viewport (https://github.com/salute-developers/plasma/pull/958)


### Popover arrow

-   Поправлено отображение `Popover arrow` в Safari, Firefox

 
fix(plasma-web): fix Popover arrow in Safari, Firefox (https://github.com/salute-developers/plasma/pull/963)


### Image

- добавлен в поставку `plasma-{b2c, web}`
- добавлен UI тесты
- удален из `plasma-hope`

 
feat(plasma-new-hope/web/b2c): Image refactor & redesign (https://github.com/salute-developers/plasma/pull/968)

### Badge

-  добавлен в поставку `plasma-{b2c,web,new-hope}`
-  дополнены тесты

 
feat(plasma-new-hope/web/b2c): Badge refactor & redesign (https://github.com/salute-developers/plasma/pull/964)

### Counter

- добавлен в поставку `plasma-{b2c,web,new-hope}`
- написаны тесты и документация

 
feat(plasma-new-hope/web/b2c): Counter component (https://github.com/salute-developers/plasma/pull/965)


## Icons

-  добавлены **новые** иконки размера 24x24, 1025 штук
-  добавлены **новые** категории иконок в разделе icons на сайте

feat(plasma-icons): Add new 24x24 icons (https://github.com/salute-developers/plasma/pull/955)


## Infra

### Perftool

- обновление версии @salutejs/perftool@0.24

 
Update perftool (https://github.com/salute-developers/plasma/pull/932)

### @Auto-it CLI 

- добавлена возможность прокинуть опции/флаги для запуска - **auto shipit**;
- выключили генерацию changelog для pubslish: canary, RC;  

 
plasma-infra: Pass cli options for "@auto-it" (https://github.com/salute-developers/plasma/pull/890)

### Changelog workflow

- добавлена новая категория `Bugs`
- экранирование спец символов 

 
plasma-infra: Improve changelog workflow  (https://github.com/salute-developers/plasma/pull/967)


## Tokens

### Tokens naming

- изменена нотация с `camelCase` на `kebab-case` для старых токенов цветов и типографики

Было:
<img width="600" alt="Screenshot 2024-01-16 at 19 09 54" src="https://github.com/salute-developers/plasma/assets/26903236/b83f776b-e4f9-43e1-9506-bff3d25f7e71">

Стало:
<img width="600" alt="Screenshot 2024-01-16 at 19 09 17" src="https://github.com/salute-developers/plasma/assets/26903236/10298375-1a54-4dd4-8fe3-8af74c3e40b1">

 
feat(plasma-tokens-utils): Update formatting tokens name from camelCase to kebab-case  (https://github.com/salute-developers/plasma/pull/971)

## Bugs

### Calendar

-   добавлен `ref` в `forwardRef` вторым аргументом

 
feat(plasma-new-hope): fix CalendarDouble ref (https://github.com/salute-developers/plasma/pull/959)


### Carousel

- решен баг с пролистыванием (onDragScroll) в accessible mode - mobile & desktop.
- control panel в карусели работает корректно (можно выбрать scrollAlign).

 
fix(plasma-hope/plasma-web): Turn onDragScroll off by default in accessibility mode in Carousel. Fix storybook control panel in it. (https://github.com/salute-developers/plasma/pull/957)

### Spinner

- исправлено отображение компонента `Spinner` при размере 8px

 
fix(plasma-new-hope): Fix size for `Spinner` component (https://github.com/salute-developers/plasma/pull/966)

## Misc

### Typography

-  root для типографики вынесен в общий компонент
-  className, style теперь явно задаются в компоненте
-  исправлены конфиги для asdk поставки

 
feat(plasma-new-hope/b2c/web): redefining classnames for typography (https://github.com/salute-developers/plasma/pull/947)

---

#### 🚀 Enhancement

- Release by 18.01.2024 [#981](https://github.com/salute-developers/plasma/pull/981) ([@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@shuga2704](https://github.com/shuga2704) [@akhdrv](https://github.com/akhdrv) [@kayman233](https://github.com/kayman233) [@Yakutoc](https://github.com/Yakutoc) [@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-hope): remove Image [#968](https://github.com/salute-developers/plasma/pull/968) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-hope): remove skeleton component and mixin [#954](https://github.com/salute-developers/plasma/pull/954) ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- docs(plasma-b2c/web/hope): generate api docs ([@TitanKuzmich](https://github.com/TitanKuzmich))
- fix(plasma-hope): Ts improvement [#957](https://github.com/salute-developers/plasma/pull/957) ([@shuga2704](https://github.com/shuga2704))
- fix(plasma-hope): Added comment for isDragScrollDisabled ([@shuga2704](https://github.com/shuga2704))
- fix(api-report): Fix weird scroll in accessibility mode in Carousel ([@shuga2704](https://github.com/shuga2704))
- fix(plasma-web,plasma-hope): Fix weird scroll in accessibility mode in Carousel ([@shuga2704](https://github.com/shuga2704))

#### Authors: 7

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))
- Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.250.0 (Fri Dec 22 2023)

#### 🚀 Enhancement

- Release by 22.12.2023 [#944](https://github.com/salute-developers/plasma/pull/944) ([@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@Yakutoc](https://github.com/Yakutoc) [@kayman233](https://github.com/kayman233) [@neretin-trike](https://github.com/neretin-trike))
- feat: bump manual package-locks [#933](https://github.com/salute-developers/plasma/pull/933) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-hope): fix broken style for Upload button [#926](https://github.com/salute-developers/plasma/pull/926) ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- fix(plasma-new-hope): Fix `TextArea` behavior with uncontrolled value ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-b2c,plasma-web): Update configs for components with new design ([@neretin-trike](https://github.com/neretin-trike))
- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 5

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.248.0 (Thu Dec 14 2023)

### Release Notes

#### Release by 14.12.2023 ([#925](https://github.com/salute-developers/plasma/pull/925))

## Components

### Tabs

- вынесены токены в отдельный файл
- исправлен конфиг
- убрана вариация active
 
plasma-new-hope: Refactoring tabs tokens, variations, config (https://github.com/salute-developers/plasma/pull/873)

### AddFocus

- добавлен общий mixin addFocus(на него переведены компоненты: **Chip, Checkbox, Radiobox, Calendar** )
 
plasma-(new-hope, asdk): Add focus mixin (https://github.com/salute-developers/plasma/pull/888)

### Header

Для plasma-{new-hope,asdk}

- добавлен компонент **Header**, в качестве составных компонента (HeaderLogo, HeaderArrow, etc.)
- добавлен mixin **mediaQuery**
 
feat(plasma-new-hope): Add header as separate components (https://github.com/salute-developers/plasma/pull/887)

### Tooltip

- добавлен `Tooltip` с новым дизайном и API (для `plasma-{web,b2c,new-hope}`)
 
plasma-new-hope: Add tooltip (https://github.com/salute-developers/plasma/pull/879)

### Switch

- добавлена реализация на новой архитектуре для plasma-{new-hope, web, asdk}  
 
feat(new-hope): switch (https://github.com/salute-developers/plasma/pull/816)


## Infra

### Upload assets when publish canary, latest

- добавили условие при котором происходит загрузка assets 
 
plasma-infra: Handling upload-assets  (https://github.com/salute-developers/plasma/pull/882)

### Actions/setup-node

- зафиксировали версию Node.js (18.16.1) для корректной работы в CI 
 
plasma-infra: Use 18.16.1 node version (https://github.com/salute-developers/plasma/pull/904)

### Upload assets when publish RC

- переопределена логика получения commit для правильного условия загрузки assets в момент публикации RC
 
plasma-infra: Upload assets when publish rc (https://github.com/salute-developers/plasma/pull/892)

### Auto generate changelog [CI]

- добавлен workflow для ручного запуска создания PR релиза 
- автоматизирован процесс создания changelog на основе merged prs и labels  
 
plasma-infra: Automation of the release process (https://github.com/salute-developers/plasma/pull/894)

### Storybook

- добавлен новый location в "https://plasma.sberdevices.ru/asdk-storybook/" (plasma-ASDK)

 
plasma-infra:  Add storybook for "Plasma-ASDK" (https://github.com/salute-developers/plasma/pull/908)


## Tokens

### Theme builder

- В генератор файлов темы добавлены метод, который восстанавливает значение цвета из ссылки, т.е. переведёт: **[general.red.500] => #FF293E**
- Добавлена генерация токенов цвета в kebab нотации
 
fix(plasma-theme-builder): Add restored color method for generate themes (https://github.com/salute-developers/plasma/pull/899)

---

#### 🚀 Enhancement

- Release by 14.12.2023 [#925](https://github.com/salute-developers/plasma/pull/925) ([@nikewht](https://github.com/nikewht) [@Yakutoc](https://github.com/Yakutoc) [@Salute-Eva](https://github.com/Salute-Eva) [@TitanKuzmich](https://github.com/TitanKuzmich) [@kayman233](https://github.com/kayman233) [@neretin-trike](https://github.com/neretin-trike) nikita.belyanskiy@south.rt.ru [@Yeti-or](https://github.com/Yeti-or))

#### 🐛 Bug Fix

- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- feat(plasma-new-hope, plasma-web, plasma-b2c): Tooltip added ([@kayman233](https://github.com/kayman233))
- chore: update package-locks \[skip ci\] ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 8

- [@kayman233](https://github.com/kayman233)
- [@nikewht](https://github.com/nikewht)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Nikita Belyanskiy (nikita.belyanskiy@south.rt.ru)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.247.0 (Thu Nov 30 2023)

#### 🚀 Enhancement

- Release from 30.11.2023 [#883](https://github.com/salute-developers/plasma/pull/883) ([@Yakutoc](https://github.com/Yakutoc) [@kayman233](https://github.com/kayman233) [@Salute-Eva](https://github.com/Salute-Eva) [@TitanKuzmich](https://github.com/TitanKuzmich) [@neretin-trike](https://github.com/neretin-trike) [@Yeti-or](https://github.com/Yeti-or))
- feat: update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- feat(plasma-hope): Remove `TextArea` component (exclude types) ([@neretin-trike](https://github.com/neretin-trike))
- fix(plasma-new-hope, plasms-web, plasma-b2c): fix title font for Notification [#848](https://github.com/salute-developers/plasma/pull/848) ([@kayman233](https://github.com/kayman233))
- feat: Update package-lock.json files ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- chore: update package locks [#880](https://github.com/salute-developers/plasma/pull/880) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- chore(plasma-hope): bump "@microsoft/api-extractor" to 7.38.3 ([@Yakutoc](https://github.com/Yakutoc))
- chore: update package-locks ([@Salute-Eva](https://github.com/Salute-Eva))
- feat(plasma-web, plasma-b2c): Notification on new-hope ([@kayman233](https://github.com/kayman233))

#### Authors: 6

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.244.0 (Thu Nov 16 2023)

### Release Notes

#### Release 16.11.2023 ([#852](https://github.com/salute-developers/plasma/pull/852))

Релиз от 16.11.2023

---

#### 🚀 Enhancement

- Release 16.11.2023 [#852](https://github.com/salute-developers/plasma/pull/852) ([@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@Yakutoc](https://github.com/Yakutoc) [@kayman233](https://github.com/kayman233) [@akhdrv](https://github.com/akhdrv))
- feat: manual update package-lock.json files ([@Yakutoc](https://github.com/Yakutoc))
- feat: api report for ts@4.2.4 [#843](https://github.com/salute-developers/plasma/pull/843) ([@Yakutoc](https://github.com/Yakutoc))
- feat: bump TS to 4.2.4 ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-hope): delete calendar ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- feat(plasma-web, plasma-b2c): ModalBase, PopupBase on new-hope ([@kayman233](https://github.com/kayman233))
- chore(hope): fix critical several vulnerability [#846](https://github.com/salute-developers/plasma/pull/846) ([@Yakutoc](https://github.com/Yakutoc))
- chore(hope): delete unnecessary storybook, react-scripts deps ([@Yakutoc](https://github.com/Yakutoc))
- chore: update package-locks ([@Salute-Eva](https://github.com/Salute-Eva))
- fix(plasma-hope): fix typo [AudioPlayer] ([@Yakutoc](https://github.com/Yakutoc))
- chore(packages): reformat package.json ([@Yakutoc](https://github.com/Yakutoc))
- docs(plasma-web/b2c/hope): update api ([@TitanKuzmich](https://github.com/TitanKuzmich))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 5

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))

---

# v1.238.0 (Thu Nov 02 2023)

#### 🚀 Enhancement

- Release 02.11.2023 [#829](https://github.com/salute-developers/plasma/pull/829) ([@akhdrv](https://github.com/akhdrv) [@neretin-trike](https://github.com/neretin-trike) [@Salute-Eva](https://github.com/Salute-Eva) [@kayman233](https://github.com/kayman233) [@Yakutoc](https://github.com/Yakutoc) [@nikewht](https://github.com/nikewht))
- feat: manual bump versions [#826](https://github.com/salute-developers/plasma/pull/826) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-new-hope): new classes API for Popup [#819](https://github.com/salute-developers/plasma/pull/819) ([@kayman233](https://github.com/kayman233))

#### 🐛 Bug Fix

- chore: update package-locks ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- fix(plasma-ui, plasma-web, plasma-b2c): new animation API for PopupBase/ModalBase ([@kayman233](https://github.com/kayman233))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 6

- [@kayman233](https://github.com/kayman233)
- [@nikewht](https://github.com/nikewht)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.236.0 (Thu Oct 19 2023)

#### 🚀 Enhancement

- Release 19.10.2023 [#815](https://github.com/salute-developers/plasma/pull/815) ([@Yeti-or](https://github.com/Yeti-or) [@kayman233](https://github.com/kayman233) [@TitanKuzmich](https://github.com/TitanKuzmich) [@Yakutoc](https://github.com/Yakutoc) nikita.belyanskiy@south.rt.ru [@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-new-hope/b2c/web/core): Add Popover to new hope ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

- fix(plasma-core, plasma-ui): remove withAnimation from PopupBase ([@kayman233](https://github.com/kayman233))
- fix(plasma-core, plasma-ui): minor refactoring and types fix ([@kayman233](https://github.com/kayman233))
- feat(plasma-core, plasma-ui): add animation for PopupBase etc ([@kayman233](https://github.com/kayman233))
- fix(plasma-hope/docs): update react file drop & fix docs ([@TitanKuzmich](https://github.com/TitanKuzmich))
- docs(plasma-core/hope/web/b2c): generate new api ([@TitanKuzmich](https://github.com/TitanKuzmich))
- fix(plasma-core): refactor in PopupBase/ModalBase ([@kayman233](https://github.com/kayman233))
- feat(plasma-core, plasma-web, plasma-b2c): ModalBase component ([@kayman233](https://github.com/kayman233))

#### Authors: 6

- [@kayman233](https://github.com/kayman233)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Nikita Belyanskiy (nikita.belyanskiy@south.rt.ru)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.235.0 (Fri Sep 29 2023)

#### 🚀 Enhancement

- feat(plasma-hope): Remove `Radiobox` component [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-hope): Remove `Spinner` component [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-hope): Remove `Link` component [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-core): focusTrap, arrow and offset for Popover [#781](https://github.com/salute-developers/plasma/pull/781) ([@kayman233](https://github.com/kayman233))
- feat(plasma-web): add api report [#781](https://github.com/salute-developers/plasma/pull/781) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-web): pass ref to "DropdownItem" [#781](https://github.com/salute-developers/plasma/pull/781) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- chore: update package-locks [#781](https://github.com/salute-developers/plasma/pull/781) ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions [#781](https://github.com/salute-developers/plasma/pull/781) ([@Salute-Eva](https://github.com/Salute-Eva))
- feat(plasma-b2c,plasma-web): Button size_xs/xss [#781](https://github.com/salute-developers/plasma/pull/781) ([@Yeti-or](https://github.com/Yeti-or))
- fix: Bump package-lock versions [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-web, plasma-b2c): PopupBase component [#781](https://github.com/salute-developers/plasma/pull/781) ([@kayman233](https://github.com/kayman233))
- fix(plasma-hope): move focusTrap to plasma-core [#781](https://github.com/salute-developers/plasma/pull/781) ([@kayman233](https://github.com/kayman233))
- feat(plasma-web, plasma-b2c): Popover component [#781](https://github.com/salute-developers/plasma/pull/781) ([@kayman233](https://github.com/kayman233))
- chore: update version [#781](https://github.com/salute-developers/plasma/pull/781) ([@Yakutoc](https://github.com/Yakutoc))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 5

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.227.0 (Thu Sep 14 2023)

#### 🐛 Bug Fix

- chore: update package-locks [#699](https://github.com/salute-developers/plasma/pull/699) ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions [#699](https://github.com/salute-developers/plasma/pull/699) ([@Salute-Eva](https://github.com/Salute-Eva))
- fix(plasma-web): fix padding-left without/with content-{left,right} [TextField] [#699](https://github.com/salute-developers/plasma/pull/699) ([@Yakutoc](https://github.com/Yakutoc))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.225.0 (Mon Sep 04 2023)

#### 🐛 Bug Fix

- chore: update package-locks [#681](https://github.com/salute-developers/plasma/pull/681) ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions [#681](https://github.com/salute-developers/plasma/pull/681) ([@Salute-Eva](https://github.com/Salute-Eva))
- chore(packages): add lint script [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.221.0 (Fri Aug 18 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.220.0 (Thu Aug 03 2023)

#### 🚀 Enhancement

- feat(plasma-b2c, plasma-web): Modal refinement [#629](https://github.com/salute-developers/plasma/pull/629) ([@kayman233](https://github.com/kayman233))
- feat(plasma-hope): useFocusTrap focusAfterNode added [#629](https://github.com/salute-developers/plasma/pull/629) ([@kayman233](https://github.com/kayman233))

#### 🐛 Bug Fix

- fix(plasma-web, plasma-b2c): Tooltip update on text change [#637](https://github.com/salute-developers/plasma/pull/637) ([@kayman233](https://github.com/kayman233))
- chore: delete "test" comment [#639](https://github.com/salute-developers/plasma/pull/639) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-hope, plasma-web): Add some threshold fallbacks [#630](https://github.com/salute-developers/plasma/pull/630) ([@neretin-trike](https://github.com/neretin-trike))
- ci: test [#631](https://github.com/salute-developers/plasma/pull/631) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-b2c, plasma-web): autoResize for TextArea [#614](https://github.com/salute-developers/plasma/pull/614) ([@kayman233](https://github.com/kayman233))
- fix(plasma-hope): Fix overlay content with contentRight in `TextArea` [#621](https://github.com/salute-developers/plasma/pull/621) ([@neretin-trike](https://github.com/neretin-trike))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### ⚠️ Pushed to `master`

- Merge branch 'dev' ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 5

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.219.0 (Thu Jul 13 2023)

#### 🚀 Enhancement

- feat(plasma-core): custom width/height for TextArea [#620](https://github.com/salute-developers/plasma/pull/620) ([@kayman233](https://github.com/kayman233))

#### 🐛 Bug Fix

- fix(plasma-core): new height/width types in TextArea [#620](https://github.com/salute-developers/plasma/pull/620) ([@kayman233](https://github.com/kayman233))
- fix(plasma-core): fix cols/rows usage in TextArea [#620](https://github.com/salute-developers/plasma/pull/620) ([@kayman233](https://github.com/kayman233))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.218.0 (Thu Jun 29 2023)

#### 🐛 Bug Fix

- chore: add forgotten license [#582](https://github.com/salute-developers/plasma/pull/582) ([@Yeti-or](https://github.com/Yeti-or))
- fix(plasma-hope): update useFocusTrap [#582](https://github.com/salute-developers/plasma/pull/582) ([@kayman233](https://github.com/kayman233))
- fix(plasma-hope): refactor useFocusTrap [#582](https://github.com/salute-developers/plasma/pull/582) ([@kayman233](https://github.com/kayman233))
- feat(plasma-b2c, plasma-web): focusTrap hook added [#582](https://github.com/salute-developers/plasma/pull/582) ([@kayman233](https://github.com/kayman233))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 3

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.217.0 (Tue Jun 20 2023)

#### 🐛 Bug Fix

- fix(plasma-core): Add promise resolve for forceUpdate method in `Popup` and `Tooltip` components [#554](https://github.com/salute-developers/plasma/pull/554) (neretinartem@Neretins-MacBook-Pro.local)

#### Authors: 1

- Neretin Artem (neretinartem@Neretins-MacBook-Pro.local)

---

# v1.216.0 (Thu Jun 01 2023)

#### 🐛 Bug Fix

- fix(deps): update dependency react-popper to v2.3.0 [#526](https://github.com/salute-developers/plasma/pull/526) ([@renovate[bot]](https://github.com/renovate[bot]))
- fix(plasma-b2c): remove local typography values in TextArea [#526](https://github.com/salute-developers/plasma/pull/526) ([@kayman233](https://github.com/kayman233))
- chore: [packages] update package-lock files [#526](https://github.com/salute-developers/plasma/pull/526) ([@Yakutoc](https://github.com/Yakutoc))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 4

- [@kayman233](https://github.com/kayman233)
- [@renovate[bot]](https://github.com/renovate[bot])
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.215.0 (Mon May 22 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### ⚠️ Pushed to `master`

- fix(plasma-web, plasma-b2c, plasma-ui): fix single/multiple lines in Checkbox/Radiobox ([@kayman233](https://github.com/kayman233))

#### Authors: 2

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.213.0 (Fri May 19 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.212.0 (Fri May 19 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.209.0 (Wed May 10 2023)

#### 🚀 Enhancement

- feat(plasma-hope): update api report [#498](https://github.com/salute-developers/plasma/pull/498) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- fix(plasma-hope): omit 'onResize', 'onResizeCapture', 'nonce' properties for CardContentProps ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.208.2 (Wed May 10 2023)

#### 🐛 Bug Fix

- fix(plasma-hope): default max-width for Grid [#501](https://github.com/salute-developers/plasma/pull/501) ([@kayman233](https://github.com/kayman233))

#### Authors: 1

- [@kayman233](https://github.com/kayman233)

---

# v1.208.1 (Wed May 03 2023)

#### 🐛 Bug Fix

- fix(plasma-*): update api report [#497](https://github.com/salute-developers/plasma/pull/497) ([@Yakutoc](https://github.com/Yakutoc))
- fix(plasma-hope): omit 'onResize', 'onResizeCapture', 'nonce' properties for SelectButtonProps ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.208.0 (Wed May 03 2023)

#### 🚀 Enhancement

- feat: change api-report for Container in Grid [#495](https://github.com/salute-developers/plasma/pull/495) ([@kayman233](https://github.com/kayman233))
- feat(plasma-hope): maxWidth for Grid ([@kayman233](https://github.com/kayman233))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.206.0 (Thu Apr 27 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.205.0 (Wed Apr 26 2023)

#### 🚀 Enhancement

- feat(plasma-b2c): Dropdown new placements ([@kayman233](https://github.com/kayman233))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.204.1 (Tue Apr 25 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.204.0 (Mon Apr 24 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.201.0 (Mon Apr 17 2023)

#### 🚀 Enhancement

- feat(plasma-hope): reAlign versions [#480](https://github.com/salute-developers/plasma/pull/480) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v0.33.0 (Thu Apr 13 2023)

#### 🚀 Enhancement

- feat(plasma-hope): draggable scroll in carousel [#476](https://github.com/salute-developers/plasma/pull/476) ([@kayman233](https://github.com/kayman233))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v0.32.0 (Wed Apr 12 2023)

#### 🚀 Enhancement

- feat(plasma-hope): Update API [#460](https://github.com/salute-developers/plasma/pull/460) (neretinartem@Neretins-MBP.netis)
- feat(plasma-hope): Add `collectPackageInfo` and custom babel config (neretinartem@Neretins-MBP.netis)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### ⚠️ Pushed to `master`

- refactor(plasma-ui,plasma-core,plasma-hope): Refactor some components for clean re-export (neretinartem@Neretins-MBP.netis)

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Neretin Artem (neretinartem@Neretins-MBP.netis)

---

# v0.31.3 (Mon Apr 10 2023)

#### 🐛 Bug Fix

- fix: api report after export "Image" component from "plasma-core" [#467](https://github.com/salute-developers/plasma/pull/467) ([@Yakutoc](https://github.com/Yakutoc))
- fix(plasma-hope): re-export "Image" from plasma-core ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v0.31.2 (Wed Apr 05 2023)

#### 🐛 Bug Fix

- fix(plasma-hope): use "forceUpdate" [#461](https://github.com/salute-developers/plasma/pull/461) (alexander.lobyntsev@virtualhealth.com)

#### Authors: 1

- Alexander Lobyntsev (alexander.lobyntsev@virtualhealth.com)

---

# v0.31.1 (Tue Apr 04 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### ⚠️ Pushed to `master`

- refactor(plasma-hope): Update `TextArea`, `TextField`, `Button` and `Container` components ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v0.30.0 (Thu Mar 30 2023)

#### 🚀 Enhancement

- feat: api report after merged "Select" component [#455](https://github.com/salute-developers/plasma/pull/455) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-hope): add cypress tests ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-hope): export "Select" component ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v0.29.0 (Thu Mar 30 2023)

#### 🚀 Enhancement

- feat: api report after merged "Dropdown" component [#447](https://github.com/salute-developers/plasma/pull/447) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-hope): add cypress test ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-hope): export DropdownUncontrolled component ([@Yakutoc](https://github.com/Yakutoc))

#### ⚠️ Pushed to `master`

- docs(plasma-hope): fix typo ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v0.28.0 (Wed Mar 29 2023)

#### 🚀 Enhancement

- feat: api report after merged "Tabs" component [#445](https://github.com/salute-developers/plasma/pull/445) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-hope): add "Tabs" component [#445](https://github.com/salute-developers/plasma/pull/445) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v0.27.0 (Wed Mar 29 2023)

#### 🚀 Enhancement

- feat(plasma-hope,plasma-web,plasma-b2c): Update Button API [#453](https://github.com/salute-developers/plasma/pull/453) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-hope): Add Button union from plasma-web and plasma-b2c ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v0.25.0 (Tue Mar 28 2023)

#### 🚀 Enhancement

- feat: api report after merged Grid component [#436](https://github.com/salute-developers/plasma/pull/436) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-hope): add "Grid" cypress test ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-hope): add "Grid" component ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- feat(plasma-hope,plasma-web,plasma-b2c): Update API for `Container` component [#446](https://github.com/salute-developers/plasma/pull/446) ([@neretin-trike](https://github.com/neretin-trike))
- fix(plasmas-hope): Fix `Container` component for rest props in Grid ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 2

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v0.24.0 (Fri Mar 24 2023)

#### 🚀 Enhancement

- feat(plasma-hope,plasma-web,plasma-b2c): Update TextField API [#429](https://github.com/salute-developers/plasma/pull/429) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-hope): Remove Input and Field components ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-web): Add import TextField from plasma-hope ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-hope): Add TextField union from plasma-web and plasma-b2c ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v0.23.0 (Fri Mar 24 2023)

#### 🚀 Enhancement

- feat: api report after merged Image component [#435](https://github.com/salute-developers/plasma/pull/435) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-hope): add "Image" component ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v0.22.0 (Tue Mar 21 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v0.21.0 (Fri Mar 17 2023)

#### 🚀 Enhancement

- feat(plasma-hope): Add TextArea union from plasma-web and plasma-b2c [#405](https://github.com/salute-developers/plasma/pull/405) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- feat(plasma-hope,plasma-web,plasma-b2c): Update TextArea API [#405](https://github.com/salute-developers/plasma/pull/405) ([@neretin-trike](https://github.com/neretin-trike))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v0.20.0 (Thu Mar 16 2023)

#### 🐛 Bug Fix

- chore(plasma-hope): Update API [#383](https://github.com/salute-developers/plasma/pull/383) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-core,plasma-hope): Add build watcher and export tokens [#383](https://github.com/salute-developers/plasma/pull/383) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v0.19.0 (Thu Mar 16 2023)

#### 🚀 Enhancement

- feat: add api reports [#397](https://github.com/salute-developers/plasma/pull/397) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-hope): use DropdownListCssProperties for Select component [#397](https://github.com/salute-developers/plasma/pull/397) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
- build: update package-locks [#412](https://github.com/salute-developers/plasma/pull/412) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 3

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v0.18.0 (Wed Mar 15 2023)

#### 🚀 Enhancement

- feat: add api reports [#407](https://github.com/salute-developers/plasma/pull/407) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-hope): handling height constraint [#407](https://github.com/salute-developers/plasma/pull/407) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v0.16.0 (Tue Mar 14 2023)

#### 🚀 Enhancement

- feat(plasm-*): Bump typescript version to 4.0.8 [#408](https://github.com/salute-developers/plasma/pull/408) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v0.15.0 (Tue Mar 14 2023)

#### 🚀 Enhancement

- feat: change withAssistiveDropdown return api [#393](https://github.com/salute-developers/plasma/pull/393) (alexander.lobyntsev@virtualhealth.com)

#### 🐛 Bug Fix

- fix(plasma-hope): withAssistiveDropdown return forwardRef [#393](https://github.com/salute-developers/plasma/pull/393) (alexander.lobyntsev@virtualhealth.com)

#### Authors: 1

- Alexander Lobyntsev (alexander.lobyntsev@virtualhealth.com)

---

# v0.14.0 (Tue Mar 07 2023)

#### 🚀 Enhancement

- feat: add api reports after re-export UploadAudio component [#382](https://github.com/salute-developers/plasma/pull/382) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-hope): add "UploadAudio" component [#382](https://github.com/salute-developers/plasma/pull/382) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v0.13.0 (Tue Mar 07 2023)

#### 🚀 Enhancement

- feat: add api reports after re-export UploadVisual component [#381](https://github.com/salute-developers/plasma/pull/381) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-hope): add "UploadVisual" component [#381](https://github.com/salute-developers/plasma/pull/381) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v0.12.1 (Tue Mar 07 2023)

#### 🐛 Bug Fix

- fix(plasma-hope): set correct transitive dependencies [#388](https://github.com/salute-developers/plasma/pull/388) ([@Yakutoc](https://github.com/Yakutoc))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v0.12.0 (Mon Mar 06 2023)

#### 🐛 Bug Fix

- test(plasma-hope): disable stub [#194](https://github.com/salute-developers/plasma/pull/194) ([@Yeti-or](https://github.com/Yeti-or))
- build(plasma-hope): bump react to 18x [#194](https://github.com/salute-developers/plasma/pull/194) ([@Yeti-or](https://github.com/Yeti-or))
- build(plasma-b2c): bump react to 18.x [#194](https://github.com/salute-developers/plasma/pull/194) ([@Yeti-or](https://github.com/Yeti-or))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v0.11.0 (Fri Mar 03 2023)

#### 🚀 Enhancement

- feat: add api reports after re-export ElasticGrid component [#372](https://github.com/salute-developers/plasma/pull/372) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-hope): add "@types/resize-observer-browser" [#372](https://github.com/salute-developers/plasma/pull/372) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-hope): add "ElasticGrid" component [#372](https://github.com/salute-developers/plasma/pull/372) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v0.10.0 (Thu Mar 02 2023)

#### 🚀 Enhancement

- feat: add api reports after re-export AudioPlayer component [#369](https://github.com/salute-developers/plasma/pull/369) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-hope): add "AudioPlayer" component [#369](https://github.com/salute-developers/plasma/pull/369) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v0.9.0 (Thu Mar 02 2023)

#### 🚀 Enhancement

- feat: add api reports after re-export Editable component [#368](https://github.com/salute-developers/plasma/pull/368) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-hope): add "Editable" component [#368](https://github.com/salute-developers/plasma/pull/368) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-hope): add selectText, clearSelection methods [#368](https://github.com/salute-developers/plasma/pull/368) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v0.8.0 (Thu Mar 02 2023)

#### 🚀 Enhancement

- feat: add api reports after re-export Slider component [#360](https://github.com/salute-developers/plasma/pull/360) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-hope): add SliderThumb [#360](https://github.com/salute-developers/plasma/pull/360) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v0.7.0 (Thu Mar 02 2023)

#### 🚀 Enhancement

- feat: add api reports after re-export PreviewGallery component [#376](https://github.com/salute-developers/plasma/pull/376) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-hope): add "react-sortable-hoc" [#376](https://github.com/salute-developers/plasma/pull/376) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-hope): add "PreviewGallery" component [#376](https://github.com/salute-developers/plasma/pull/376) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v0.6.0 (Thu Mar 02 2023)

#### 🚀 Enhancement

- feat: add api reports after re-export Upload component [#374](https://github.com/salute-developers/plasma/pull/374) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-hope): add "react-file-drop" [#374](https://github.com/salute-developers/plasma/pull/374) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-hope): add "Upload" component [#374](https://github.com/salute-developers/plasma/pull/374) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v0.5.0 (Wed Mar 01 2023)

#### 🚀 Enhancement

- feat(plasma-hope): processing unit test [#373](https://github.com/salute-developers/plasma/pull/373) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-hope): add jest config [#373](https://github.com/salute-developers/plasma/pull/373) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v0.4.0 (Mon Feb 20 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v0.3.0 (Mon Feb 20 2023)

#### 🚀 Enhancement

- feat: add api reports [#347](https://github.com/salute-developers/plasma/pull/347) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-hope): export ModalViewProps as part API component [#347](https://github.com/salute-developers/plasma/pull/347) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-hope): add prop withBlur [#347](https://github.com/salute-developers/plasma/pull/347) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- fix(plasma-hope): resolve import for ModalView [#347](https://github.com/salute-developers/plasma/pull/347) ([@Yakutoc](https://github.com/Yakutoc))
- fix(plasma-hope): lint fixes [#347](https://github.com/salute-developers/plasma/pull/347) ([@Yakutoc](https://github.com/Yakutoc))
- docs(plasma-hope): extend readme text [#347](https://github.com/salute-developers/plasma/pull/347) ([@Yakutoc](https://github.com/Yakutoc))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v0.2.0 (Fri Feb 17 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
- ci: fix package-locks [#352](https://github.com/salute-developers/plasma/pull/352) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v0.1.1 (Thu Feb 16 2023)

#### 🐛 Bug Fix

- build: add api reports to plasma-core & hope [#349](https://github.com/salute-developers/plasma/pull/349) ([@Yeti-or](https://github.com/Yeti-or))
- fix(plasma-hope): export CalendarStateType [#349](https://github.com/salute-developers/plasma/pull/349) ([@Yeti-or](https://github.com/Yeti-or))
- build: add api-extractor [#342](https://github.com/salute-developers/plasma/pull/342) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v0.1.0 (Wed Feb 15 2023)

#### 🐛 Bug Fix

- fix(plasma-hope): publish pkg [#346](https://github.com/salute-developers/plasma/pull/346) ([@Yeti-or](https://github.com/Yeti-or))
- refactor(plasma-web/plasma-b2c): move common code to plasma-hope [#324](https://github.com/salute-developers/plasma/pull/324) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

