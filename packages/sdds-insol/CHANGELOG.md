# 0.158.0-dev.0 (10 декабря 2024)

## Функциональные изменения в компонентах

### Switch Outline

* добавлен отдельный `config` для вариации `outline`
* добавлена соответствующая поддержка во все библиотеки

core: Switch outline design (https://github.com/salute-developers/plasma/pull/1560)

### Switch

* исправлены токены целью добавления возможности реализации нового дизайна

plasma-new-hope: fix Switch design (https://github.com/salute-developers/plasma/pull/1569)

### Dropdown

* добавлено новое свойство `renderItem`;

feat(plasma-*, sdds-*): Add renderItem prop in Dropdown. Fix issues with Select and Combobox. (https://github.com/salute-developers/plasma/pull/1562)

### Select

* улучшено поведение свойства `renderItem` при работе с вложенными списками;
* исправлен баг, приводящий к неправильной работе чипов в режиме multiple при renderValue;

feat(plasma-*, sdds-*): Add renderItem prop in Dropdown. Fix issues with Select and Combobox. (https://github.com/salute-developers/plasma/pull/1562)

### Combobox

* улучшено поведение свойства `renderItem` при работе с вложенными списками;
* исправлен баг, приводящий к неправильной работе чипов в режиме multiple при renderValue;

feat(plasma-*, sdds-*): Add renderItem prop in Dropdown. Fix issues with Select and Combobox. (https://github.com/salute-developers/plasma/pull/1562)

### Badge

* добавлен surfaceClear токен для варианта clear

* добавлены padding для варианта clear

* реализован вариант только с иконкой

* добавлена возможность передать пользовательский цвет для текста и фона

feat(plasma-*,sdds-*): Icon only badge (https://github.com/salute-developers/plasma/pull/1546)

* добавлены св-ва required, requiredPlacement и optional;

![](https://github.com/user-attachments/assets/42fcb1fe-6a37-434b-843f-d285b4e6f279)

feat(plasma-*, sdds-*): Add required functionality in Select (https://github.com/salute-developers/plasma/pull/1561)

### TextField, Select

* добавлен новый проп `chipType`, который позволяет менять внешний вид для чипа в режиме multiselect;

![plasma-b2c Select -- prop chipType snap](https://github.com/user-attachments/assets/66c5cb36-bd40-444f-bace-1fb8dec2f130)

feat(plasma-*, sdds-*): Add chipType prop in TextField & Select (https://github.com/salute-developers/plasma/pull/1577)

### Dropzone

* добавлен новый компонент

<img width="515" src="https://github.com/user-attachments/assets/30f2131c-f1d1-48ba-b8e5-57f56c65b97d" />

feat(plasma-new-hope): Dropzone (https://github.com/salute-developers/plasma/pull/1534)

### TextField

* добавлено свойство keepPlaceholder для одновременного отображения label и placeholder

![image](https://github.com/user-attachments/assets/d3c1ad74-c214-4ddd-96fa-3467871e3a4c)

feat: add keepPlaceholder prop to TextField (https://github.com/salute-developers/plasma/pull/1556)

### TextArea

* добавлено свойство для выноса левого helper за пределы TextArea

feat: add leftHelperPlacement prop to TextArea (https://github.com/salute-developers/plasma/pull/1579)

* упростили типы связанный со свойством `required`

- упростили типы связанный со свойством `required`

fix: "RequiredProps" unions in TextField & TextArea (https://github.com/salute-developers/plasma/pull/1593)

## Изменения в библиотеки

### Button, IconButton

* добавлены размеры `XL`
* добавлен размер `XXS` для компонента `IconButton`

feat(sdds-insol): Update `Button` and `IconButton` design (https://github.com/salute-developers/plasma/pull/1576)


# 0.158.0-dev.0 (4 декабря 2024)

## Изменения в библиотеки

### Button, IconButton

* добавлены размеры `XL`
* добавлен размер `XXS` для компонента `IconButton`

feat(sdds-insol): Update `Button` and `IconButton` design (https://github.com/salute-developers/plasma/pull/1576)

## Функциональные изменения в компонентах

### Switch Outline

* добавлен отдельный `config` для вариации `outline`
* добавлена соответствующая поддержка во все библиотеки

core: Switch outline design (https://github.com/salute-developers/plasma/pull/1560)

### Switch

* исправлены токены целью добавления возможности реализации нового дизайна

plasma-new-hope: fix Switch design (https://github.com/salute-developers/plasma/pull/1569)

### Dropdown

* добавлено новое свойство `renderItem`;

feat(plasma-*, sdds-*): Add renderItem prop in Dropdown. Fix issues with Select and Combobox. (https://github.com/salute-developers/plasma/pull/1562)

### Select

* улучшено поведение свойства `renderItem` при работе с вложенными списками;
* исправлен баг, приводящий к неправильной работе чипов в режиме multiple при renderValue;

feat(plasma-*, sdds-*): Add renderItem prop in Dropdown. Fix issues with Select and Combobox. (https://github.com/salute-developers/plasma/pull/1562)

### Combobox

* улучшено поведение свойства `renderItem` при работе с вложенными списками;
* исправлен баг, приводящий к неправильной работе чипов в режиме multiple при renderValue;

feat(plasma-*, sdds-*): Add renderItem prop in Dropdown. Fix issues with Select and Combobox. (https://github.com/salute-developers/plasma/pull/1562)

### Badge

* добавлен surfaceClear токен для варианта clear

* добавлены padding для варианта clear

* реализован вариант только с иконкой

* добавлена возможность передать пользовательский цвет для текста и фона

feat(plasma-*,sdds-*): Icon only badge (https://github.com/salute-developers/plasma/pull/1546)

* добавлены св-ва required, requiredPlacement и optional;

![](https://github.com/user-attachments/assets/42fcb1fe-6a37-434b-843f-d285b4e6f279)

feat(plasma-*, sdds-*): Add required functionality in Select (https://github.com/salute-developers/plasma/pull/1561)

### TextField, Select

* добавлен новый проп `chipType`, который позволяет менять внешний вид для чипа в режиме multiselect;

![plasma-b2c Select -- prop chipType snap](https://github.com/user-attachments/assets/66c5cb36-bd40-444f-bace-1fb8dec2f130)

feat(plasma-*, sdds-*): Add chipType prop in TextField & Select (https://github.com/salute-developers/plasma/pull/1577)

### Dropzone

* добавлен новый компонент

<img width="515" src="https://github.com/user-attachments/assets/30f2131c-f1d1-48ba-b8e5-57f56c65b97d" />

feat(plasma-new-hope): Dropzone (https://github.com/salute-developers/plasma/pull/1534)

### TextField

* добавлено свойство keepPlaceholder для одновременного отображения label и placeholder

![image](https://github.com/user-attachments/assets/d3c1ad74-c214-4ddd-96fa-3467871e3a4c)

feat: add keepPlaceholder prop to TextField (https://github.com/salute-developers/plasma/pull/1556)

### TextArea

* добавлено свойство для выноса левого helper за пределы TextArea

feat: add leftHelperPlacement prop to TextArea (https://github.com/salute-developers/plasma/pull/1579)

* упростили типы связанный со свойством `required`

- упростили типы связанный со свойством `required`

fix: "RequiredProps" unions in TextField & TextArea (https://github.com/salute-developers/plasma/pull/1593)


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
