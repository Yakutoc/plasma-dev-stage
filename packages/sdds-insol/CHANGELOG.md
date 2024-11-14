# v0.166.0 (Thu Nov 14 2024)

### Release Notes

#### Release by 13.11.2024 ([#1559](https://github.com/salute-developers/plasma/pull/1559))

## Components

### Autocomplete

- добавлены новые св-ва `required`, `requiredPlacement` и `optional`;
 
feat(plasma-*, sdds-*): Add required functionality in Autocomplete (https://github.com/salute-developers/plasma/pull/1522)

### Combobox

- добавлены новые св-ва `required`, `requiredPlacement` и `optional`;

feat(plasma-*, sdds-*): Add required functionality in Combobox (https://github.com/salute-developers/plasma/pull/1527)

### Range, DatePickerRange

- добавлена возможность передать свойство `autoComplete`

feat(plasma-new-hope): Add autoComplete prop to Range (https://github.com/salute-developers/plasma/pull/1530)

### Chip

- добавлено событие `onClickClose` по клику на крестик
- `onClear` помечено как deprecated
- написан тест на onClickClose

feat(plasma-new-hope): Divide chip events (https://github.com/salute-developers/plasma/pull/1536)

### Badge, Tabs

- реализована возможность обрезания текста по максимальной ширине

feat: add Badge & Tabs truncate props (https://github.com/salute-developers/plasma/pull/1500)

### NumberInput

- компонент включен в поставку `plasma-*` и `sdds-*` библиотек

**After**:
<img width="216" alt="image" src="https://github.com/user-attachments/assets/4b51c0e6-099d-41d7-af07-88344f7f77b0" />

feat(plasma-new-hope): Add NumberInput component (https://github.com/salute-developers/plasma/pull/1511)

### Dropdown

- добавлено свойство alwaysOpened
- добавлен тест на новое свойство

feat(plasma-new-hope): Add alwaysOpened prop for Dropdown (https://github.com/salute-developers/plasma/pull/1538)

### TextField

- добавлен токен изменения цвета фона компонента при наведении

feat(plasma-*,sdds-*): Fix TextField hover tokens (https://github.com/salute-developers/plasma/pull/1551)

### Tabs

- для `sdds-cs` исправлены значения токенов `itemSelectedDividerColor` и `itemSelectedDividerColorHover`
- для `sdds-dfa` исправлены токены для состояния `disabled`
- исправлены `argTypes` в stories

### Breadcrumbs

- исправлен курсор при наведении на текущий `Breadcrumb`
- исправлены токены для `hover` и `active` состояний у `Breadcrumb` 

`plasma-new-hope, sdds-cs`: fix `Tabs` and `Breadcrumbs` (https://github.com/salute-developers/plasma/pull/1532)

### Switch
- добавлены размеры `s`, `l`
- добавлено свойство `description`
- добавлено свойство `toggleSize`
- обновлены документация и тесты

`plasma-*, sdds-*`: `Switch` sizes added (https://github.com/salute-developers/plasma/pull/1539)

### Attach, Button

- свойство `square` у `Button` помечено как `deprecated`
- свойство `square` удалено из storybooks для `Attach`
- для размеров `m`, `l` у `Attach` исправлен размер иконки по умолчанию в варианте `IconButton`
- исправлены токены для view=secondary в пакете `sdds-cs`

### IconButton
- исправлены токены для view=secondary в пакете `sdds-cs`

`plasma-*, sdds-*`: fix `Attach` `square` prop (https://github.com/salute-developers/plasma/pull/1525)

### Steps

- исправлены смещающиеся активные элементы
- добавлен фокус 
- добавлены тесты
 
plasma-*: Fix `Steps` jumping bullets (https://github.com/salute-developers/plasma/pull/1517)

### Select

- осуществлен переход на `floating-ui`
- расширена типизация, позволяющая использовать компонент в режиме uncontrolled (b2c и web)
- исправлено некорректное отображение ячейки выпадающего списка при длинных значениях
- расширены возможности использования компонента через портал. Теперь помимо рефки можно пробросить id `dom-элемента`
- исправлены UI-баги при использовании портала
- улучшена поддержка типов
 
feat(plasma-*, sdds-*): Select improvements (https://github.com/salute-developers/plasma/pull/1550)

### Tabs

- вернули возможность использовать `TabItemProps`, `TabsProps` во все пакетах

`plasma-*, sdds-*`: `TabItemProps`, `TabsProps` exported (https://github.com/salute-developers/plasma/pull/1545)


## Вертикали 

### `SDDS-CS`

- добавлен view `negative` для `Combobox` 
- добавлен view `negative` для `Autocomplete`

plasma(sdds-cs): Add view negative to combobox and autocomplite (https://github.com/salute-developers/plasma/pull/1523)

Добавлены новые токены для компонентов: 

- `Autocomplete`, 
- `Combobox`, 
- `Dropdown`, 
- `Notifications`, 
- `Range`, 
- `Pagination`, 
- `Tabs`, 
- `DatePicker`
 
feat(new-hope): Add new tokens to components (https://github.com/salute-developers/plasma/pull/1506)
 
### `SDDS-INSOL`

- обновлена тема `sdds_insol`
- обновлено свойство `background-color` на background в компоненте `Button` для поддержки градиентов в значениях у токенов.
- обновлены конфигурации для компонентов `Button`, `TextArea` и  `TextField`

feat(sdds-insol): Update configs for `Button`, `TextArea` and  `TextField` components [part 1] (https://github.com/salute-developers/plasma/pull/1526)

## Docs

### Edit docs components for correctly view

- изменена документация ( значения `size` ) для корректного отображения в документации в вертикали `sdds-cs`

fix(sdds-cs-docs): Edit docs components for correctly view (https://github.com/salute-developers/plasma/pull/1557)

### Theme documentation

- добавлен подраздел примеры смены тем
 
feat: change theme docs (https://github.com/salute-developers/plasma/pull/1516)

---

#### 🚀 Enhancement

- Release by 13.11.2024 [#1559](https://github.com/salute-developers/plasma/pull/1559) ([@iljs](https://github.com/iljs) [@Salute-Eva](https://github.com/Salute-Eva) [@shuga2704](https://github.com/shuga2704) [@neretin-trike](https://github.com/neretin-trike) [@Yakutoc](https://github.com/Yakutoc) [@vadim-kudr](https://github.com/vadim-kudr) [@TitanKuzmich](https://github.com/TitanKuzmich) [@denivladislav](https://github.com/denivladislav) [@luizasok](https://github.com/luizasok))
- docs(): api reports regenerated [#1539](https://github.com/salute-developers/plasma/pull/1539) ([@denivladislav](https://github.com/denivladislav))
- feat(sdds-*): add alwaysOpened to Dropdown [#1538](https://github.com/salute-developers/plasma/pull/1538) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(sdds-*): add NumberInput component [#1511](https://github.com/salute-developers/plasma/pull/1511) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat: add Badge & Tabs truncate props [#1500](https://github.com/salute-developers/plasma/pull/1500) ([@vadim-kudr](https://github.com/vadim-kudr))
- feat(sdds-insol): Update config for `Button`, `TextField` and `TextArea` components [#1526](https://github.com/salute-developers/plasma/pull/1526) ([@neretin-trike](https://github.com/neretin-trike))
- feat(new-hope): add thin cross to notification and toast [#1506](https://github.com/salute-developers/plasma/pull/1506) ([@iljs](https://github.com/iljs))

#### 🐛 Bug Fix

- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- feat(plasma-*, sdds-*): Select improvements [#1550](https://github.com/salute-developers/plasma/pull/1550) ([@shuga2704](https://github.com/shuga2704))
- chore: include css by tree shaking [#1554](https://github.com/salute-developers/plasma/pull/1554) ([@Yakutoc](https://github.com/Yakutoc))
- fix(plasma-*, sdds-*): square control removed from storybooks ([@denivladislav](https://github.com/denivladislav))
- chore(plasma-*, sdds-*): Switch ported; tests added ([@denivladislav](https://github.com/denivladislav))
- fix(plasma-*, sdds-*): fixed Tabs storybooks ([@denivladislav](https://github.com/denivladislav))
- docs(): api reports regenerated [#1545](https://github.com/salute-developers/plasma/pull/1545) ([@denivladislav](https://github.com/denivladislav))
- fix(plasma-*, sdds-*): TabItemProps and TabsProps exported ([@denivladislav](https://github.com/denivladislav))
- docs: generate new api reports ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-*, sdds-*): Add required functionality in Combobox [#1527](https://github.com/salute-developers/plasma/pull/1527) ([@shuga2704](https://github.com/shuga2704))
- feat(plasma-*, sdds-*): Add required functionality in Autocomplete [#1522](https://github.com/salute-developers/plasma/pull/1522) ([@shuga2704](https://github.com/shuga2704))
- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 9

- [@iljs](https://github.com/iljs)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alexander Lobyntsev ([@Yakutoc](https://github.com/Yakutoc))
- Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- Luiza_Sok ([@luizasok](https://github.com/luizasok))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vadim ([@vadim-kudr](https://github.com/vadim-kudr))
- Vlad Denisov  ([@denivladislav](https://github.com/denivladislav))

---

# v0.153.0 (Thu Oct 31 2024)

### Release Notes

#### Release by 30.10.2024 ([#1521](https://github.com/salute-developers/plasma/pull/1521))

## Components

### Генерация CSS linaria для SDDS SERV

-   styled components перенесены в папку `styled-components` для пакета `sdds-serv`
-   добавлена генерация CSS Linaria по-умолчанию для пакета `sdds-serv`

 
feat(sdds-serv): Add linaria (https://github.com/salute-developers/plasma/pull/1419)

### Accordion

- исправлен параметр `contentRight`
- исправлен отступы во всех поставках `sdds` в `AccordionItem`
- добавлен новый параметр `opened`, для контроля состоянием вне компонента
- добавлена возможность прокидывать `ref` в `AccordionItem`

 
feat(*): Fix Accordion Right Content and Paddings (https://github.com/salute-developers/plasma/pull/1484)

### TextArea, TextField

- добавлены подсказки сверху справа и в виде Tooltip
- обновлены тесты и документация

**After**:
<img width="498" alt="image" src="https://github.com/user-attachments/assets/31f03fe2-1325-4412-80b5-b443e19e2a2d">


 
feat(plasma-*,sdds-*): add TextArea and TextField hints (https://github.com/salute-developers/plasma/pull/1459)


### Select

- добавлены новые токены в ядро компонента
- исправлена конфигурация компонента с учетом новых токенов для поставки `sdds-cs`

 
plasma-*: Update config for `Select` (https://github.com/salute-developers/plasma/pull/1504)

### Dropdown
- компонент Dropdown переведен на новую архитекутуру. API сохранен;
- исправлен баг, связанный с невозможностью раскрытия выпадающего списка в старом(legacy) Dropdown;
- исправлены недочеты по UI;
- расширены возможности использования через портал;

 
feat(plasma-*, sdds-*): Dropdown architecture improvement (https://github.com/salute-developers/plasma/pull/1497)

### Combobox
- несуществующие value (которых нет в массиве items) теперь отбрасываются и не принимают участие в работе компонента;
- изменение массива items теперь приводит к обновлению выбранных элементов (для гибкой асинхронной работы);
- исправлен баг, связанный с мутацией исходного массива items;
- добавлено новое св-во renderValue;

### Select
- несуществующие value (которых нет в массиве items) теперь отбрасываются и не принимают участие в работе компонента;
- изменение массива items теперь приводит к обновлению выбранных элементов (для гибкой асинхронной работы);

 
feat(plasma-*, sdds-*): Combobox & Select improvements (https://github.com/salute-developers/plasma/pull/1505)

### Slider

* добавлено вертикальное отображение
* обновлен дизайн горизонтального отображения

 
feat: vertical single Slider (https://github.com/salute-developers/plasma/pull/1452)

### Notification

- изменен `type` для `title` на `ReactNode`
- добавлено расположение `bottom-left`

 
feat: Notification placement prop (https://github.com/salute-developers/plasma/pull/1503)

### Tabs
- добавлены `Header Tabs`
- добавлены `hover` и `active` состояния для стрелок
- обновлены тесты и `storybooks`

 
plasma-*, sdds-*: Header Tabs added (https://github.com/salute-developers/plasma/pull/1502)

### SDDS-CS

- добавлена `view negative` для компонента `Select`
- исправлен цветовой токен для `contentLeftColor` в компоненте `Select`
- убраны лишние опции и примеры из storybook для компонента `Select`

 
[PLASMA-3718]: Fix config for `Select` (https://github.com/salute-developers/plasma/pull/1519)

### Combobox

- добавлены тесты;


feat(plasma-b2c, plasma-web): Combobox component tests (https://github.com/salute-developers/plasma/pull/1518)

### Counter
- видимое значение не может быть меньше 1
- для значений от 1 до 9 `Counter` становится круглым
- добавлены размеры `l`, `m`, `s` во все пакеты (в `sdds-cs` только размер `s`)
- исправлены токены отступов для размера `xxs`
- обновлены `storybooks` и документация

**Before**:

<img width="292" alt="berfore" src="https://github.com/user-attachments/assets/7762823b-2ae4-4474-abb6-d638fd98b805">

**After**:

<img width="827" alt="after" src="https://github.com/user-attachments/assets/27ec7202-6243-43a7-91a6-b94131f3b84f">
 

`plasma-*, sdds-*`: `Counter` impovements added (https://github.com/salute-developers/plasma/pull/1514)


## Tokens

### Tokens

- собраны изменение всех тем в один PR:
  * https://github.com/salute-developers/plasma/pull/1491
  * https://github.com/salute-developers/plasma/pull/1489
  * https://github.com/salute-developers/plasma/pull/1486
  * https://github.com/salute-developers/plasma/pull/1485
- добавлена новая тема `sdds_os` на основе `sdds_serv`
- обновлена `default` тема для пакета plasma-tokens

 
feat(plasma-tokens,sdds-themes,plasma-themes): Add and update themes from other PRs (https://github.com/salute-developers/plasma/pull/1495)

### Tokens

* обновлены токены типографики в теме `sdds-cs`. Теперь для всех размеров экранов (L, M и S) значения всех параметров одинаковые

 
fix(sdds-themes): Update typography tokens for `sdds-cs` theme (https://github.com/salute-developers/plasma/pull/1507)

### Tokens

- исправлена генерация токенов для модульного css, а также обновлены все темы
- добавлены методы генерации наборов токенов (dark и light режимов) для компонента `ViewContainer`
- добавлено подключение темы через css модули из пакета @salutejs/plasma-themes в plasma-new-hope

### ViewContainer

- добавлен компонент `ViewContainer` в plasma-new-hope в качестве примера
- добавлен декоратор `decoratorViewContainer` в plasma-new-hope с возможностью переключения тем и режимов контейнера (onDark / onLight / default)
- добавлен компонент `ViewContainer` во все библиотеки вертикали `sdds`, а также примеры и документация


feat(plasma-new-hope, sdds-*): Add `ViewContainer` component (https://github.com/salute-developers/plasma/pull/1488)


## Misc

### Calendar

- поправлено поведение hover для дней на календарной сетке

**Before**:

https://github.com/user-attachments/assets/992d2566-10a1-40ff-8d76-d3e2d8de4d13

**After**:

https://github.com/user-attachments/assets/8e0bf060-a103-46ba-aa4a-b5bc6bef632d

 
fix(plasma-new-hope): Fix Calendar hover behaviour (https://github.com/salute-developers/plasma/pull/1498)

### Sdds-insol

- добавлена новая библиотека

 
sdds-insol: Add library of components `sdds-insol` (https://github.com/salute-developers/plasma/pull/1509)

---

#### 🚀 Enhancement

- Release by 30.10.2024 [#1521](https://github.com/salute-developers/plasma/pull/1521) ([@iljs](https://github.com/iljs) [@Salute-Eva](https://github.com/Salute-Eva) [@simashova](https://github.com/simashova) [@Irinkv](https://github.com/Irinkv) [@neretin-trike](https://github.com/neretin-trike) [@Yakutoc](https://github.com/Yakutoc) [@TitanKuzmich](https://github.com/TitanKuzmich) [@shuga2704](https://github.com/shuga2704) [@vadim-kudr](https://github.com/vadim-kudr) [@denivladislav](https://github.com/denivladislav))
- feat(sdds-insol): Add library of components [#1509](https://github.com/salute-developers/plasma/pull/1509) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- docs(sdds-insol-docs): Add docs ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 10

- [@iljs](https://github.com/iljs)
- [@Irinkv](https://github.com/Irinkv)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alexander Lobyntsev ([@Yakutoc](https://github.com/Yakutoc))
- Anastasia Simashova ([@simashova](https://github.com/simashova))
- Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vadim ([@vadim-kudr](https://github.com/vadim-kudr))
- Vladislav Denisov  ([@denivladislav](https://github.com/denivladislav))
