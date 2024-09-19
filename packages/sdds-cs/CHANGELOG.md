# v0.128.0 (Thu Sep 19 2024)

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
- feat(sdds-*): update Badge stories & configs [#1424](https://github.com/salute-developers/plasma/pull/1424) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-*/sdds-*): update TextField stories [#1426](https://github.com/salute-developers/plasma/pull/1426) ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

- Merge remote-tracking branch 'origin/dev' into release_2024-09-18 ([@Yakutoc](https://github.com/Yakutoc))
- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- fix(sdds-*): use correct default view for Grid [#1431](https://github.com/salute-developers/plasma/pull/1431) ([@Yakutoc](https://github.com/Yakutoc))
- docs: generate new api reports ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-*,sdds-*): update Combobox stories props ([@TitanKuzmich](https://github.com/TitanKuzmich))
- fix(api-report): update api report (InputHTMLAttributes) [#1429](https://github.com/salute-developers/plasma/pull/1429) ([@Yakutoc](https://github.com/Yakutoc))
- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 6

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alexander Lobyntsev ([@Yakutoc](https://github.com/Yakutoc))
- Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
- Igor Yaroslavtsev ([@IgorYar](https://github.com/IgorYar))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v0.120.0 (Tue Sep 10 2024)

#### 🚀 Enhancement

- plasma-*: Fix `TextField` placeholder logic [HOTFIX] [#1425](https://github.com/salute-developers/plasma/pull/1425) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-*/sdds-*): update TextField stories ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))

---

# v0.119.0 (Thu Sep 05 2024)

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
- feat(*): add format and lang [#1404](https://github.com/salute-developers/plasma/pull/1404) ([@iljs](https://github.com/iljs))
- feat(*): set background arrow tooltip [#1361](https://github.com/salute-developers/plasma/pull/1361) ([@iljs](https://github.com/iljs))
- feat(tokens): update screenshoots and add themes ([@iljs](https://github.com/iljs))
- feat(*): set tokens in components ([@iljs](https://github.com/iljs))
- feat(sdds-*): update Checkbox stories ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

- Merge remote-tracking branch 'origin/dev' into release_2024-09-04 ([@Yakutoc](https://github.com/Yakutoc))
- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- feat(b2c, web, sdds): Combobox v2 [#1406](https://github.com/salute-developers/plasma/pull/1406) ([@shuga2704](https://github.com/shuga2704))
- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
- docs: regenerate api reports ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-*, sdds-*): tokens and hover state updated ([@denivladislav](https://github.com/denivladislav))

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

# v0.111.1 (Fri Aug 30 2024)

#### 🐛 Bug Fix

- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v0.111.0 (Wed Aug 28 2024)

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
- fix(sdds-cs): hide segment [#1368](https://github.com/salute-developers/plasma/pull/1368) ([@iljs](https://github.com/iljs))
- feat(*): add custom background trigger for checkbox and rasiobox ([@iljs](https://github.com/iljs))
- feat(*): add custom loading background to button ([@iljs](https://github.com/iljs))
- feat(sdds-cs): edit components config ([@iljs](https://github.com/iljs))

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

# v0.106.0 (Thu Aug 22 2024)

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
- feat(web, b2c): Select and SelectNew are merged. SelectNew is gone. [#1349](https://github.com/salute-developers/plasma/pull/1349) ([@shuga2704](https://github.com/shuga2704))
- docs(plasma-{b2c, web}, sdds-*): api reports regenerated [#1362](https://github.com/salute-developers/plasma/pull/1362) ([@denivladislav](https://github.com/denivladislav))
- feat(plasma-{b2c, web}, sdds-*): TabsController description fixed ([@denivladislav](https://github.com/denivladislav))
- fix(sdds-*): type casting removed ([@denivladislav](https://github.com/denivladislav))
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

# v0.95.0 (Thu Aug 08 2024)

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
- fix(plasma-tokens,sdds-theme): Update token value `on-dark-text-primary` [#1344](https://github.com/salute-developers/plasma/pull/1344) ([@neretin-trike](https://github.com/neretin-trike))
- feat(sdds-cs): edit badge ([@iljs](https://github.com/iljs))
- feat(sdds-cs/plasma-web): add view for accordion and edit configs sdds-cs ([@iljs](https://github.com/iljs))
- feat(plasma-new-hope): added renderTarget prop in Select [#1328](https://github.com/salute-developers/plasma/pull/1328) ([@shuga2704](https://github.com/shuga2704))
- feat(new-hope/sdds-cs): add to sdds-cs and edits [#1310](https://github.com/salute-developers/plasma/pull/1310) ([@iljs](https://github.com/iljs))
- feat(package): edit doc [#1334](https://github.com/salute-developers/plasma/pull/1334) ([@iljs](https://github.com/iljs))
- feat(package): add git ci ([@iljs](https://github.com/iljs))
- feat(package): add sdds-cs ([@iljs](https://github.com/iljs))

#### 🐛 Bug Fix

- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- fix(plasma-*, sdds-*): stretch turned into conditional control ([@denivladislav](https://github.com/denivladislav))
- docs(plasma-*, sdds-*): api reports regenerated ([@denivladislav](https://github.com/denivladislav))
- fix(plasma-{b2c, web}, sdds-*): storybooks and tests updated ([@denivladislav](https://github.com/denivladislav))
- fix(plasma-*, sdds-*): configs fixed ([@denivladislav](https://github.com/denivladislav))
- fix(sdds-cs): edit chip config ([@iljs](https://github.com/iljs))
- fix(core): edit focus trap and add animation example to modal [#1345](https://github.com/salute-developers/plasma/pull/1345) ([@iljs](https://github.com/iljs))

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

# v0.85.0 (Thu Jul 25 2024)### Release Notes#### Release by 24.07.2024 ([#1319](https://github.com/salute-developers/plasma/pull/1319))## Components### Portal/Popup-   убрана зависимость от свойства `frame` в элементе `PopupRootContainer`-   переделан компонент `Portal` из конфигурируемого в обычный функциональный компонентfix(plasma-new-hope): `Popup` and `Portal` improvements (https://github.com/salute-developers/plasma/pull/1299)### Chip-   добавлено новое свойство `hasClear`-   добавлен тест и обновлена документацияplasma-\*: Add prop `hasClear` for Chip (https://github.com/salute-developers/plasma/pull/1312)### DatePicker-   добавлена поддержка выбора кварталов-   добавлены 4ре варианта работы с календарем (выбор дней, месяцев, календарей, лет)-   добавлена поддержка кварталов в datepicker-   добавлена возможность задавать события для каждой календарной сетки-   добавлена возможность задавать неактивные элементы для каждой календарной сетки**Before:**<div style="display: flex"><img src="https://github.com/user-attachments/assets/2208459a-92ee-493c-974e-b01f216e268b" width="200" height="200"><img src="https://github.com/user-attachments/assets/c765d898-bfbb-42a2-be30-8982f27031bb" width="200" height="200"><img src="https://github.com/user-attachments/assets/bc61edf5-0a18-47a8-b34e-672f2eb0379e" width="200" height="200"></div>**After:**<div style="display: flex"><img src="https://github.com/user-attachments/assets/0b42d119-8964-4a52-b9e0-564b0f1a8141" width="200" height="200"><img src="https://github.com/user-attachments/assets/1e2cb981-4a16-475d-ba07-51a774130349" width="200" height="200"><img src="https://github.com/user-attachments/assets/30f898e9-06c5-47ae-bf66-b4c29f4eb9a0" width="200" height="200"><img src="https://github.com/user-attachments/assets/0236ddcc-4473-4b46-a200-ae088f960b50" width="200" height="200"></div>plasma-\*: Datepicker improvements (https://github.com/salute-developers/plasma/pull/1302)### Autocomplete-   добавлен в поставку во все клиентские библиотекиfeat: Autocomplete (https://github.com/salute-developers/plasma/pull/1292)### Price, Portal-   компонент `Price` добавлен в `plasma-new-hope`, портирован в `plasma-{web, b2c}`, `sdds-{serv, dfa}`-   для `Price` обновлены тесты и документация-   исправлена ошибка отсутствующего `PropsTable` в документации `Portal`plasma-\*: add `Price` component (https://github.com/salute-developers/plasma/pull/1307)### Select-   добавлен новый компонент с поддержкой вложенных списков-   поставлен во все клиентские библиотекиfeat: Select (https://github.com/salute-developers/plasma/pull/1233)### SDDS-SERV-   добавлены компоненты:    -   Calendar    -   Notification    -   ButtonBase    -   Skeleton    -   Accordion### SDDS-{SERV, DFA}-   заменены старые токены с префиксом `--plasma-colors...` на корректные.Sdds-serv & sdds-dfa sync (https://github.com/salute-developers/plasma/pull/1314)### Accordion-   добавлен новый view (b2c)-   добавлена возможность добавить класс в accordionItem-   исправлена работы disabled-   добавлен флаг startLeftPosition-   переделаны новые отступы из нового дизайнаAdd functional to accordion (https://github.com/salute-developers/plasma/pull/1301)### Typography-   добавлен пропс color-   в секции plasma-web storybook добавлен color pickerfeat: Add color prop in Typography (https://github.com/salute-developers/plasma/pull/1308)## Tokens-   Добавлена новая темая `sdds_cs` в библиотеку `@salutejs/sdds-themes` с учётом обновленных токенов типографики.feat(sdds-themes): Add `sdds_cs` theme (https://github.com/salute-developers/plasma/pull/1309)## Docs### AudioPlayer-   изменен `cdn` в примерах`https://vc-static.sberdevices.ru/smartmarket-video-news/` на `https://cdn1.newsback.sberdevices.ru/p-newsback/`plasma-{b2c,web}: Fix vc cdn url (https://github.com/salute-developers/plasma/pull/1298)## Misc### Tooltip-   исправлен проброс стилей в Tooltipplasma-new-hope: forward styles and className to Tooltip root (https://github.com/salute-developers/plasma/pull/1311)### Textarea-   исправлена логика при использовании свойства `autoResize` (теперь ширина автоматически растягивается)Результат с включенным `autoResize` после изменения ширины**До:**![](https://github.com/salute-developers/plasma/assets/38344415/70ad8513-353e-477f-a0fe-e4d3ee5cfd55)**После:**![](https://github.com/salute-developers/plasma/assets/38344415/84306373-b4fb-4f13-8a77-b2fd05c08721)plasma-\*: Fix width autoresize prop in textarea (https://github.com/salute-developers/plasma/pull/1297)---#### 🚀 Enhancement-   Release by 24.07.2024 [#1319](https://github.com/salute-developers/plasma/pull/1319) ([@Yeti-or](https://github.com/Yeti-or) [@neretin-trike](https://github.com/neretin-trike) [@Salute-Eva](https://github.com/Salute-Eva) [@simashova](https://github.com/simashova) [@TitanKuzmich](https://github.com/TitanKuzmich) [@iljs](https://github.com/iljs) [@shuga2704](https://github.com/shuga2704) [@denivladislav](https://github.com/denivladislav) [@vadim-kudr](https://github.com/vadim-kudr) [@Yakutoc](https://github.com/Yakutoc))-   feat: Add color prop to Typography, code review fixes [#1308](https://github.com/salute-developers/plasma/pull/1308) ([@vadim-kudr](https://github.com/vadim-kudr))-   feat: Add color prop to Typography, fixes ([@vadim-kudr](https://github.com/vadim-kudr))-   feat(plasma-{new-hope, b2c, web}, sdds-{dfa, serv}): indian rupee added [#1307](https://github.com/salute-developers/plasma/pull/1307) ([@denivladislav](https://github.com/denivladislav))-   feat(sdds-serv/dfa): update Calendar configs & stories ([@TitanKuzmich](https://github.com/TitanKuzmich))#### 🐛 Bug Fix-   Merge remote-tracking branch 'origin/dev' into release_2024-07-24 ([@Yakutoc](https://github.com/Yakutoc))-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))-   feat(sdds-dfa, sdds-serv): Sync [#1314](https://github.com/salute-developers/plasma/pull/1314) ([@shuga2704](https://github.com/shuga2704))-   feat(plasma-new-hope, b2c, web, sdds-serv, sdds-dfa): Select [#1233](https://github.com/salute-developers/plasma/pull/1233) ([@shuga2704](https://github.com/shuga2704))-   docs(plasma-{new-hope, web}, sdds-{serv, dfa}): api reports regenerated ([@denivladislav](https://github.com/denivladislav))-   feat(sdds-{serv, dfa}): Price component ported ([@denivladislav](https://github.com/denivladislav))-   feat(plasma-new-hope, web, b2c, sdds-serv, sdds-dfa): Autocomplete [#1292](https://github.com/salute-developers/plasma/pull/1292) ([@shuga2704](https://github.com/shuga2704))-   feat(plasma-web/b2c,sdds-serv/dfa): update DatePicker configs ([@TitanKuzmich](https://github.com/TitanKuzmich))-   docs: regenerate api reports ([@TitanKuzmich](https://github.com/TitanKuzmich))-   feat(plasma-web/b2c,sdds-serv/dfa): add hasClear prop to Chip stories ([@TitanKuzmich](https://github.com/TitanKuzmich))-   fix(sdds-_,plasma-_,caldera-online): Update `Portal` component usage [#1299](https://github.com/salute-developers/plasma/pull/1299) ([@neretin-trike](https://github.com/neretin-trike))-   chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))#### Authors: 10-   [@iljs](https://github.com/iljs)-   [@Salute-Eva](https://github.com/Salute-Eva)-   Alexander Lobyntsev ([@Yakutoc](https://github.com/Yakutoc))-   Anastasia Simashova ([@simashova](https://github.com/simashova))-   Dima Shugaev ([@shuga2704](https://github.com/shuga2704))-   Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))-   Vadim ([@vadim-kudr](https://github.com/vadim-kudr))-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))-   Vladislav Denisov ([@denivladislav](https://github.com/denivladislav))---# v0.78.0 (Thu Jul 11 2024)### Release Notes#### Release by 11.07.2024 ([#1296](https://github.com/salute-developers/plasma/pull/1296))## Components### DatePicker-   добавлен новый компонент DatePicker-   написаны тесты и документация-   проведен рефакторинг стилей и токенов календаря-   исправлен отступ от первой иконки в Rangefeat(plasma-new-hope): add DatePicker component (https://github.com/salute-developers/plasma/pull/1224)### Portal-   компонент добавлен в `plasma-new-hope`, портирован в `plasma-{web, b2c}`, `caldera`, `sdds`-   добавлены тесты и документация-   компонент внедрён в `Popover` и `Popup`-   исправлено имя теста для `Popover`plasma-\*: Add `Portal` component (https://github.com/salute-developers/plasma/pull/1272)### Sheet-   убран из примеров в `stories` лишний горизонтальный скролл-   добавлена недостающая документация в `caldera-online`**Before**:<img width="1726" alt="scrollBefore" src="https://github.com/salute-developers/plasma/assets/71961494/f37919f8-df31-427e-aff9-34228cb920b6" />**After**:<img width="1725" alt="scrollAfter" src="https://github.com/salute-developers/plasma/assets/71961494/6c3ae1df-e3cc-42d0-ae54-6b11fba55690" />plasma-\*: Fix `Sheet` scroll (https://github.com/salute-developers/plasma/pull/1273)### Dropdown-   добавлено новое свойство `portal`feat(plasma-new-hope): Added prop portal into Dropdown component (https://github.com/salute-developers/plasma/pull/1260)### SDDS DFA-   добавлена тема `sdds_dfa` в библиотеку вертикалей `@salutejs/sdds-themes`-   добавлена библиотека `@salutejs/sdds-dfa`-   поправлены компоненты `Header`, `Skeleton`, `Accordion`feat(sdds-dfa): Add `sdds-dfa` components library (https://github.com/salute-developers/plasma/pull/1293)### SDDS-SERV-   добавлена поддержка пакета `@emotion`sdds-serv: Add support `@emotion` package (https://github.com/salute-developers/plasma/pull/1281)## Icons### Website: Icons page-   новый UI для блока поиск-   исправлен вывод набора иконок-   исправлено `isDeprecate` на `isDeprecated`plasma-website: New UI search block (https://github.com/salute-developers/plasma/pull/1270)### iOS-   исправлена генерация иконок под iOS**Before:**<img width="248" src="https://github.com/salute-developers/plasma/assets/2895992/e93abb36-8a51-4451-aab3-3107959a8904" />**After:**<img width="248" src="https://github.com/salute-developers/plasma/assets/2895992/8415a3b2-3f6e-46fb-9a3e-767f0317aa30" />plasma-icons: Rewrite generate icons for iOS (https://github.com/salute-developers/plasma/pull/1283)### Opacity-   удалено **ненужное** свойство `opacity` в наборе старых иконокplasma-icons: Delete unnecessary prop opacity (https://github.com/salute-developers/plasma/pull/1282)## Infra### Required checks-   реорганизовали обязательные проверки (стало меньше и быстрее)plasma-infra: Simplify required checks (https://github.com/salute-developers/plasma/pull/1278)### Scaffold-   скрипт для генерации компонентов вынесен в отдельную командуplasma-infra(scaffold): Extend script for update/sync component list (https://github.com/salute-developers/plasma/pull/1275)### Support emotion engine-   добавлена поддержка пакета `@emotion` для библиотеки `plasma-new-hope`feat(plasma-new-hope): add emotion support (https://github.com/salute-developers/plasma/pull/1276)## Tokens-   добавлены методы генерации токенов для web приложений на основе новой json структуры.-   перегенированы темы для всех вертикалей: `sdds`, `plasma`, `flamingo` и `caldera-online` на основе json файлов из [данного репозитория](https://github.com/salute-developers/theme-converter/tree/main/themes).-   удалены старые json темы из пакета `@salutejs/data-themes`.-   переименован пакет `@salutejs/data-themes` в `@salutejs/core-themes` и обновлены все зависимостиfeat(data-themes): Add new token generators for web via new json scheme and update themes (https://github.com/salute-developers/plasma/pull/1274)## Docs### Storybook link-   убрана ссылка/кнопка на storybook из документации для `plasma-{web,ui}`**Before:**<img width="1944" src="https://github.com/salute-developers/plasma/assets/2895992/458182dc-07eb-4954-9b06-a2f0eabc867f" />**After:**<img width="1944" src="https://github.com/salute-developers/plasma/assets/2895992/ea812456-7644-4194-8188-88a085b416f6" />plasma-docs: hide short links for storybook (https://github.com/salute-developers/plasma/pull/1286)### SDDS-DFA/SERVE-   добавлен шаблон документации для компонент `Accordion`-   добавлена документация для пакета `sdds-dfa`-   исправлена документация для `Popover`feat: Add `sdds-dfa-docs` (https://github.com/salute-developers/plasma/pull/1295)## Misc### TextField-   добавлены токены цвета и размера textBefore/After-   исправлен line-height у иконокfeat: add textfield textBefore/After tokens (https://github.com/salute-developers/plasma/pull/1253)### Website: colors palette-   добавлена страница с цветовой палитрой**Страница выбора цвета**![Выбор цвета](https://github.com/salute-developers/plasma/assets/38344415/6527ea89-7727-4a4e-b435-35436e74b788)**Страница выбора оттенка**![Выбор оттенка](https://github.com/salute-developers/plasma/assets/38344415/632a842e-4922-42a4-bfe7-79081f6ea2e0)plasma-website: add page colors (https://github.com/salute-developers/plasma/pull/1266)---#### 🚀 Enhancement-   Release by 11.07.2024 [#1296](https://github.com/salute-developers/plasma/pull/1296) ([@Yakutoc](https://github.com/Yakutoc) [@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@denivladislav](https://github.com/denivladislav) [@Yeti-or](https://github.com/Yeti-or) [@shuga2704](https://github.com/shuga2704) [@neretin-trike](https://github.com/neretin-trike) [@iljs](https://github.com/iljs))-   feat(sdds-docs): add Emotion docs [#1281](https://github.com/salute-developers/plasma/pull/1281) ([@iljs](https://github.com/iljs))-   feat(sdds): add emotion ([@iljs](https://github.com/iljs))-   feat(plasma-web/b2c,sdds-serv): update Textfield configs [#1287](https://github.com/salute-developers/plasma/pull/1287) ([@TitanKuzmich](https://github.com/TitanKuzmich))-   feat: update TextField configs ([@TitanKuzmich](https://github.com/TitanKuzmich))-   feat(plasma-new-hope): add emotion support [#1276](https://github.com/salute-developers/plasma/pull/1276) ([@Yeti-or](https://github.com/Yeti-or))-   feat(sdds-serv): add DatePicker component ([@TitanKuzmich](https://github.com/TitanKuzmich))#### 🐛 Bug Fix-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))-   fix(sdds-\*): update api report [#1295](https://github.com/salute-developers/plasma/pull/1295) ([@Yakutoc](https://github.com/Yakutoc))-   fix(sdds-\*): use `styled-components@5.3.1` ([@Yakutoc](https://github.com/Yakutoc))-   fix(sdds-serv,sdds-dfa): Update configs for `Combobox` and `TextField` components ([@neretin-trike](https://github.com/neretin-trike))-   feat(sdds-serv,sdds-dfa): Remove `Header` and old `Select` components ([@neretin-trike](https://github.com/neretin-trike))-   docs: regenerate api reports ([@TitanKuzmich](https://github.com/TitanKuzmich))-   chore: update package-locks.json files \[skip ci\] ([@Yakutoc](https://github.com/Yakutoc))-   fix(plasma-{new-hope, web, b2c}, caldera-online, sdds-serv): fix Sheet horizontal scroll in stories ([@denivladislav](https://github.com/denivladislav))-   docs(plasma-{b2c, web}, caldera, sdds): api reports regenerated ([@denivladislav](https://github.com/denivladislav))-   feat(plasma-{b2c, web}, caldera, sdds): Portal component ported ([@denivladislav](https://github.com/denivladislav))-   chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))#### Authors: 8-   [@iljs](https://github.com/iljs)-   [@Salute-Eva](https://github.com/Salute-Eva)-   Alexander Lobyntsev ([@Yakutoc](https://github.com/Yakutoc))-   Dima Shugaev ([@shuga2704](https://github.com/shuga2704))-   Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))-   Vladislav Denisov ([@denivladislav](https://github.com/denivladislav))---# v0.66.0 (Thu Jun 27 2024)### Release Notes#### Release by 26.06.2024 ([#1269](https://github.com/salute-developers/plasma/pull/1269))## Components### Accordion-   добавлен новый компонент в поставку для `plasma-{web,b2c}`plasma-\*: Add accordion (https://github.com/salute-developers/plasma/pull/1254)### Sheet-   Добавлен компонент `Sheet`plasma-new-hope: add Sheet component (https://github.com/salute-developers/plasma/pull/1225)### TextArea-   `TextArea` портирован в `sdds`sdds-serv: add TextArea component (https://github.com/salute-developers/plasma/pull/1263)### TextArea-   исправлена типизация (разбитие на три группы `rows / cols`, `height / width`, `autoResize / minAuto / maxAuto`)-   исправлен расчёт `autoResize`-   исправлена документацияplasma-new-hope: TextArea height / width fixes (https://github.com/salute-developers/plasma/pull/1261)### TextArea-   удалено упоминание `resize` (свойство `deprecated`)(plasma-{new-hope, web}, sdds-serv): remove resize from docs (https://github.com/salute-developers/plasma/pull/1267)### Segment-   добавлена возможность задать выбранные по умолчанию сегменты-   добавлен тест на выбранные значения-   добавлено пояснение в документацииfeat(plasma-new-hope): add default selected segment (https://github.com/salute-developers/plasma/pull/1252)## Icons### 24 [s, small]-   обновлен набор `.svg` иконок-   обновлены/расширенны категории иконок-   обновлены snapshots для тестов измененных иконокfeat(plasma-icons): Add icons preset [24, s, small](https://github.com/salute-developers/plasma/pull/1247)### 16 [xs, xsmall]-   обновлен набор `.svg` иконокfeat(plasma-icons): Add icons preset [16, xs, xsmall](https://github.com/salute-developers/plasma/pull/1250)### 36 [m, medium]-   обновлен набор `.svg` иконокfeat(plasma-icons): Add icons preset [36, m, medium](https://github.com/salute-developers/plasma/pull/1257)### React-   добавлена обработка всех имеющихся размеров: 16, 24, 36-   обновлены cypress snapshots с использованием иконки `IconDone`#### Before/After![Icon](https://github.com/salute-developers/plasma/assets/2895992/5d7551d5-d392-4a9f-993e-e265a28d6362)### New-hope-   изменен токен по-умолчанию для свойство `color` в `IconRoot` (теперь `var(--text-primary)`)-   обновлены cypress snapshots связанные с `var(--text-primary)`plasma-icons: Handle all sizes [React](https://github.com/salute-developers/plasma/pull/1258)### Android-   добавлены `.xml` иконки для всех имеющихся размеров: 16, 24, 36#### After<img width="672" alt="Screenshot 2024-06-19 at 13 44 22" src="https://github.com/salute-developers/plasma/assets/2895992/878745f3-9f20-4224-826d-c0d898d1a94d" /><img width="1920" alt="Screenshot 2024-06-19 at 13 46 09" src="https://github.com/salute-developers/plasma/assets/2895992/dca1102a-abbc-4a65-a628-f5acf40f80d8" />plasma-icons: handle all icons size [Android](https://github.com/salute-developers/plasma/pull/1259)### Icons page-   добавлен вывод комбинации (старых + новых) иконок-   добавлено динамическое изменение размера иконок в grid-   косметические правки по дизайнуplasma-website: Redesign "Icons" page [Part 2](https://github.com/salute-developers/plasma/pull/1262)### Icons page-   добавлено меню фильтра по размеру-   внесены дизайн правкиplasma-website: Add icons filter menu (https://github.com/salute-developers/plasma/pull/1265)## Docs### Edit docs-   исправлена документация для компонента `Switch`, `Checkbox` и `Radiobox`-   изменена работа документации, теперь при генерации файла документации туда добавляются все типы, в том числе и из `react`-   в компонент `PropsTable` добавлен параметр `include`, который добавляет свойство в документацию, если он является типом из `react`plasma-\*: Edit docs core and change docs Switch, Checkbox and Radiobox (https://github.com/salute-developers/plasma/pull/1232)### Carousel-   исправлено свойства `stylingCallback` на `scopeCallback`-   исправлено свойства `stylingResetCallback` на `scopeResetCallback`### Before/After<img width="1778" src="https://github.com/salute-developers/plasma/assets/38344415/7e21b0f0-8fc8-4a45-a5e6-2ca704eba57f" />Edit carousel docs (https://github.com/salute-developers/plasma/pull/1256)### Caldera-online-   добавлена документация для библиотеки `caldera-online`-   поправлены шаблоны документации для `Button, Segment, Radiobox`caldera-online: Add documentation (https://github.com/salute-developers/plasma/pull/1249)### TextArea-   удалено упоминание `resize` (свойство `deprecated`)(plasma-{new-hope, web}, sdds-serv): remove resize from docs (https://github.com/salute-developers/plasma/pull/1267)---#### 🚀 Enhancement-   Release by 26.06.2024 [#1269](https://github.com/salute-developers/plasma/pull/1269) ([@iljs](https://github.com/iljs) [@Salute-Eva](https://github.com/Salute-Eva) [@Yakutoc](https://github.com/Yakutoc) [@denivladislav](https://github.com/denivladislav) [@TitanKuzmich](https://github.com/TitanKuzmich))-   feat(sdds-serv,caldera-online): add SegmentProviderProps type export [#1252](https://github.com/salute-developers/plasma/pull/1252) ([@TitanKuzmich](https://github.com/TitanKuzmich))-   docs(sdds-serv): api report regenerated [#1261](https://github.com/salute-developers/plasma/pull/1261) ([@denivladislav](https://github.com/denivladislav))-   docs(plasma-b2c, plasma-web, sdds-serv): api reports regenerated [#1263](https://github.com/salute-developers/plasma/pull/1263) ([@denivladislav](https://github.com/denivladislav))-   feat(sdds-serv): TextArea added ([@denivladislav](https://github.com/denivladislav))#### 🐛 Bug Fix-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))-   docs: regenerate api reports ([@TitanKuzmich](https://github.com/TitanKuzmich))-   fix(plasma-new-hope): fix Sheet types, design and animation ([@denivladislav](https://github.com/denivladislav))-   docs(plasma-web, plasma-b2c, caldera-online, sdds-serv): api reports regenerated ([@denivladislav](https://github.com/denivladislav))-   feat(plasma-web, plasma-b2c, caldera-online, sdds-serv): Sheet exported ([@denivladislav](https://github.com/denivladislav))-   fix(docs): Change proptable and check types after json generate [#1232](https://github.com/salute-developers/plasma/pull/1232) ([@iljs](https://github.com/iljs))-   fix(sdds-serv): Fix switch types and auto fix docs ([@iljs](https://github.com/iljs))-   chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))#### Authors: 5-   [@iljs](https://github.com/iljs)-   [@Salute-Eva](https://github.com/Salute-Eva)-   Alexander Lobyntsev ([@Yakutoc](https://github.com/Yakutoc))-   Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))-   Vladislav Denisov ([@denivladislav](https://github.com/denivladislav))---# v0.56.0 (Thu Jun 13 2024)### Release Notes#### Release by 11.06.2024 ([#1238](https://github.com/salute-developers/plasma/pull/1238))## Icons### Stroke-   заменили значение свойства `stroke` на `currentColor`#### Before<img width="1919" alt="Screenshot 2024-06-03 at 18 35 35" src="https://github.com/salute-developers/plasma/assets/2895992/85e34f50-5ed6-4d92-93b9-f430f36d5b2d" />#### After<img width="1909" alt="Screenshot 2024-06-03 at 18 33 57" src="https://github.com/salute-developers/plasma/assets/2895992/ec5e440e-bd71-474a-b971-883f83b7bf9c" />plasma-icons: Replace stroke value to "currentColor" (https://github.com/salute-developers/plasma/pull/1226)## Tokens### Theme-   добавлены классы для более гибкого и удобного управления темами, созданных в новом формате.-   добавлена возможность генерации базовой темы в новом формате.-   добавлена возможность считывать темы в новом формате и конвертировать их в экземпляры созданных классов.-   добавлена возможность записывать темы в новом формате на основе созданного экземпляра класса.feat(plasma-tokens): Add write / read and generation new format of theme.json (https://github.com/salute-developers/plasma/pull/1207)## Website### Icons page-   редизайн grid-   редизайн cell grid-   редизайн меню расширенной информации об иконки#### Before<img width="1911" alt="Screenshot 2024-06-11 at 14 53 26" src="https://github.com/salute-developers/plasma/assets/2895992/6d10a1e2-5722-4e5f-a69b-de595eb64019" />#### After<img width="1920" alt="Screenshot 2024-06-11 at 15 05 21" src="https://github.com/salute-developers/plasma/assets/2895992/d2481ef5-229d-48d2-b0f2-2b4ba3e1a550" />plasma-website: Redesign Icons page [Part I](https://github.com/salute-developers/plasma/pull/1228)---#### 🚀 Enhancement-   Release by 11.06.2024 [#1238](https://github.com/salute-developers/plasma/pull/1238) ([@neretin-trike](https://github.com/neretin-trike) [@Salute-Eva](https://github.com/Salute-Eva) [@Yakutoc](https://github.com/Yakutoc))#### 🐛 Bug Fix-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))-   chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))#### Authors: 3-   [@Salute-Eva](https://github.com/Salute-Eva)-   Alexander Lobyntsev ([@Yakutoc](https://github.com/Yakutoc))-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))---# v0.55.0 (Thu May 30 2024)### Release Notes#### Release by 29.05.2024 ([#1222](https://github.com/salute-developers/plasma/pull/1222))## Components### Calendar-   добавлен пропс для включения/исключения минимума и максимума диапазона датfeat: add calendar edge dates control (https://github.com/salute-developers/plasma/pull/1203)### Slider-   добавлен компонент Sliderfeat(plasma-new-hope): add slider component (https://github.com/salute-developers/plasma/pull/1194)### Textarea-   изменен `padding` для `label`fix(plasma-\*): Fix padding on textarea (https://github.com/salute-developers/plasma/pull/1209)### Range-   включен в поставку `plasma-{b2c,web} / sdds-serv`-   написаны тесты и документацияfeat: Add range component (https://github.com/salute-developers/plasma/pull/1208)### IconButton-   включен в поставку `sdds-serv`-   добавлена документация в `sdds-serv-docs`feat(sdds-serv): add icon button (https://github.com/salute-developers/plasma/pull/1214)### Tabs-   добавлен корректный проброс `className` в `Tab` и `TabItem`-   поправлена документация для `Tab` и `Segment`#### ДО:![image](https://github.com/salute-developers/plasma/assets/40370966/797f897d-95cc-4114-b54a-8629b281b2c7)![image](https://github.com/salute-developers/plasma/assets/40370966/8a0e6de3-f6cd-4e7b-b87b-a1a26b5dd4e7)#### ПОСЛЕ:![image](https://github.com/salute-developers/plasma/assets/40370966/9dd690cc-e8ed-4623-baa0-52e1f22cf71c)![image](https://github.com/salute-developers/plasma/assets/40370966/0c8bb69e-b2d3-4ae9-aed4-2fd4c4b5bd9b)feat(plasma-new-hope): fix tabs styles (https://github.com/salute-developers/plasma/pull/1220)### Button-   добавлено отображение `value`-   исправлены внутренние отступы от `contentLeft`, `contentRight`-   дополнены тесты и документация-   исправлены тесты, зависящие от `Button: Notification, Pagination, Toast, Toolbar`-   добавлен токен переопределения цвета `value` в `ButtonGroup`feat: add button value (https://github.com/salute-developers/plasma/pull/1213)## Tokens### Tokens-   добавлены токены прозрачности для positive, warning, negative цветов-   добавлены токены с active, hover модификаторамиtokens: add surface transparent tokens to sdds (https://github.com/salute-developers/plasma/pull/1206)## Misc### Checkbox/Radiobox-   исправлен types компонентов для библиотек `plasma-asdk`, `sdds-serv` и `caldera-online`Fix checkbox types (https://github.com/salute-developers/plasma/pull/1217)---#### 🚀 Enhancement-   Release by 29.05.2024 [#1222](https://github.com/salute-developers/plasma/pull/1222) ([@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@akhdrv](https://github.com/akhdrv) [@Yakutoc](https://github.com/Yakutoc) [@iljs](https://github.com/iljs))-   feat(sdds-serv): update config and stories for Button [#1213](https://github.com/salute-developers/plasma/pull/1213) ([@TitanKuzmich](https://github.com/TitanKuzmich))-   feat(sdds-serv): add IconButton [#1214](https://github.com/salute-developers/plasma/pull/1214) ([@TitanKuzmich](https://github.com/TitanKuzmich))-   feat(sdds-serv): add Range component ([@TitanKuzmich](https://github.com/TitanKuzmich))-   feat(plasma-new-hope): add react-draggable [#1194](https://github.com/salute-developers/plasma/pull/1194) ([@TitanKuzmich](https://github.com/TitanKuzmich))#### 🐛 Bug Fix-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))-   fix(plasma-web/b2c,sdds-serv): fix configs & stories depending on Button ([@TitanKuzmich](https://github.com/TitanKuzmich))-   docs: regenerate api reports ([@TitanKuzmich](https://github.com/TitanKuzmich))-   fix(components): fix checkbox types (sdds-serv, caldera-online, plasma-asdk) [#1217](https://github.com/salute-developers/plasma/pull/1217) ([@iljs](https://github.com/iljs))-   chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))#### Authors: 5-   [@iljs](https://github.com/iljs)-   [@Salute-Eva](https://github.com/Salute-Eva)-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))-   Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))-   Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))---# v0.47.0 (Thu May 16 2024)#### 🚀 Enhancement-   Release by 15.05.2024 [#1205](https://github.com/salute-developers/plasma/pull/1205) ([@renovate[bot]](https://github.com/renovate[bot]) [@iljs](https://github.com/iljs) [@Salute-Eva](https://github.com/Salute-Eva) [@Yakutoc](https://github.com/Yakutoc) [@TitanKuzmich](https://github.com/TitanKuzmich) [@shuga2704](https://github.com/shuga2704) [@akhdrv](https://github.com/akhdrv))-   fix(sdds-serv): update api report [#1198](https://github.com/salute-developers/plasma/pull/1198) ([@Yakutoc](https://github.com/Yakutoc))-   feat(sdds-serv): add Popover component ([@TitanKuzmich](https://github.com/TitanKuzmich))-   feat(plasma-asdk,caldera-online,sdds-serv): refactor Checkbox & Radiobox configs [#1176](https://github.com/salute-developers/plasma/pull/1176) ([@TitanKuzmich](https://github.com/TitanKuzmich))#### 🐛 Bug Fix-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))-   fix(sdds-serv): export Pagination ([@Yakutoc](https://github.com/Yakutoc))-   feat(plasma-new-hope, web, b2c): Dropdown refactoring ([@TitanKuzmich](https://github.com/TitanKuzmich))-   fix(plasma-\*): update api report [#1197](https://github.com/salute-developers/plasma/pull/1197) ([@Yakutoc](https://github.com/Yakutoc))-   chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))#### Authors: 7-   [@iljs](https://github.com/iljs)-   [@renovate[bot]](https://github.com/renovate[bot])-   [@Salute-Eva](https://github.com/Salute-Eva)-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))-   Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))-   Dima Shugaev ([@shuga2704](https://github.com/shuga2704))-   Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))---# v0.43.0 (Thu Apr 25 2024)### Release Notes#### Release by 24.04.2024 ([#1196](https://github.com/salute-developers/plasma/pull/1196))## Components### Tooltip-   исправлено позиционирование стрелочки-   добавлен тест на много-строчный сценарий#### Before:![image](https://github.com/salute-developers/plasma/assets/40370966/230bbda5-2c2f-4628-b5b4-7a7a14ffc2c9)#### After:![image](https://github.com/salute-developers/plasma/assets/40370966/6c142730-0b4b-47de-a64d-1c6ad2c4fc77)fix(plasma-new-hope): fix tooltip arrow placing (https://github.com/salute-developers/plasma/pull/1171)### Radiobox-   расширен пример в `stories` с учетом `a11y` возможностейplasma-new-hope(radiobox): Improved a11y (https://github.com/salute-developers/plasma/pull/1188)### Storybook-   исправлено некорректное поведение свойства `placement`-   исправлено свойство `enableContentLeft` и `enableContentRight` в TextFieldfeat(plasma-new-hope, b2c, web, sdds): Fix storybook argTypes (https://github.com/salute-developers/plasma/pull/1182)### Avatar-   добавлен `aria-label`-   расширены примеры с доступностьюplasma-new-hope(avatar): Refactoring + a11y (https://github.com/salute-developers/plasma/pull/1180)### Chip-   удален лишнее свойство `hasClear` из примера в `story`-   заменены со старого формата на новый токены в конфигурации (без приставки `--plasma-colors`)-   добавлена недостающие свойство `view=accent`-   обновлены `cypress snapshots`fix: remove extra chip prop in stories (https://github.com/salute-developers/plasma/pull/1179)## Colors-   добавлены файлы фирменной палитры в формате `.json`-   добавлена директория `src` в gitignore, т.к. теперь его содержимое генерируется автоматически на основе `.json`feat(plasma-color): Add generate color palette from json (https://github.com/salute-developers/plasma/pull/1172)## Infra### Audit vulnerabilities-   исправлены все уязвимости в клиентских пакетах (аля `plasma-web`)-   обновлен до `vite@4.5.3`-   обновлен `@babel` и его зависимости до latest-   заменен `babel-plugin-transform-class-properties` на `@babel/plugin-transform-class-properties`### `@salutejs/plasma-sb-utils`-   обновлены `TS` до 4.2.4-   обновлен `@storybook/react` до 7.6.17-   исправлены все уязвимости-   поправлены мелкие ошибки в типахplasma-infra(sb-utils): Update dependencies versions (https://github.com/salute-developers/plasma/pull/1178)---#### 🚀 Enhancement-   Release by 24.04.2024 [#1196](https://github.com/salute-developers/plasma/pull/1196) ([@Yakutoc](https://github.com/Yakutoc) [@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@neretin-trike](https://github.com/neretin-trike) [@shuga2704](https://github.com/shuga2704))-   feat(plasma-web/b2c,sdds-serv): add new button views to ButtonGroup [#1170](https://github.com/salute-developers/plasma/pull/1170) ([@TitanKuzmich](https://github.com/TitanKuzmich))-   feat(sdds-serv): replace primary to default view ([@TitanKuzmich](https://github.com/TitanKuzmich))#### 🐛 Bug Fix-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))-   fix: update api-report [#1180](https://github.com/salute-developers/plasma/pull/1180) ([@Yakutoc](https://github.com/Yakutoc))-   chore(avatar): delete unnecessary file `.png` ([@Yakutoc](https://github.com/Yakutoc))-   chore(avatar): delete unnecessary component alias ([@Yakutoc](https://github.com/Yakutoc))-   fix: audit fix [#1184](https://github.com/salute-developers/plasma/pull/1184) ([@Yakutoc](https://github.com/Yakutoc))-   chore: update deps ([@Yakutoc](https://github.com/Yakutoc))-   feat(plasma-new-hope/web/b2c,sdds-serv): update tokens for Chip configs [#1179](https://github.com/salute-developers/plasma/pull/1179) ([@TitanKuzmich](https://github.com/TitanKuzmich))-   docs: regenerate api reports ([@TitanKuzmich](https://github.com/TitanKuzmich))-   feat(plasma-new-hope/web/b2c,sdds-serv): fix stories for Chip ([@TitanKuzmich](https://github.com/TitanKuzmich))-   feat(plasma-new-hope, b2c, web, sdds): Fix storybook argTypes [#1182](https://github.com/salute-developers/plasma/pull/1182) ([@shuga2704](https://github.com/shuga2704))-   chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))#### Authors: 5-   [@Salute-Eva](https://github.com/Salute-Eva)-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))-   Dima Shugaev ([@shuga2704](https://github.com/shuga2704))-   Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))---# v0.39.0 (Thu Apr 11 2024)### Release Notes#### Release by 10.04.2024 ([#1175](https://github.com/salute-developers/plasma/pull/1175))## Components### Dropdown-   добавлена прослойка для dropdown в `b2c` и `web` (работает на старом api и с dropdown из new-hope)feat(plasma-new-hope, b2c, web): Dropdown interlayer (https://github.com/salute-developers/plasma/pull/1104)### Cell-   добавлен в поставку `plasma-{web,b2c}`feat(new-hope): Add cell (https://github.com/salute-developers/plasma/pull/1148)### Chip-   поправлена типизация-   компонент добавлен в поставку для `sdds-serv`, включая документациюfeat(plasma-new-hope): fix Chip types (https://github.com/salute-developers/plasma/pull/1155)### Button-   добавлены токены состояний (active / hover) для конфигов компонента в библиотеках `@salutejs/plasma-{b2c,web,asdk}`, `@salutejs/sdds-serv`, `@salutejs/caldera-online` .fix(plasma-web,plasma-b2c,plasma-asdk,sdds-serv,calder-online): Update state tokens for `Button` component (https://github.com/salute-developers/plasma/pull/1167)### Select-   убрана поддержка вложенности-   добавлена прослойка для компонента в `plasma-{b2c,web}` и `sdds-serv` (\* работает на старом api и с select из new-hope).-   переделаны тесты и обновлена документацияfeat(plasma-new-hope, b2c, web, sdds-serv): Select interlayer (https://github.com/salute-developers/plasma/pull/1161)### TextField-   проведен рефакторинг и редизайн-   обновлены тесты и документация-   добавлен в поставку в sdds-servfeat(plasma-new-hope): TextField redesign (https://github.com/salute-developers/plasma/pull/1160)## Icons### iOS-   добавлен конвертор SVG в PNG для iOS appplasma-icons: Convert SVG to PNG for iOS (https://github.com/salute-developers/plasma/pull/1163)## Tokens### Tokens-   исправлена формула для расчёта `hover / active` состояний-   добавлены новые токены (но в выключенном состоянии) в существующие темы и схемы для библиотек `@salutejs/plasma-tokens`, `@salutejs/data-themes`, `@salutejs/caldera-online-themes`, `@salutejs/sdds-serv-themes`, `@salutejs/plasma-themes`, `@salutejs/flamingo-themes`-   добавлены недостающие токены для обратной совместимости у библиотек `@salutejs/plasma-tokens-web`, `@salutejs/plasma-tokens-b2c`, `@salutejs/plasma-tokens-b2b`,-   добавлены недостающие токены в темы `plasma_b2c`, `plasma_web`, `sds_engineer` для библиотеки `@salutejs/plasma-new-hope`feat(plasma-tokens,plasma-theme-builder): Add tokens to existed themes (https://github.com/salute-developers/plasma/pull/1165)## Docs### Popup-   исправлена ошибка в документацииfix(new-hope): Fix popup doc (https://github.com/salute-developers/plasma/pull/1168)## Misc### Plasma Theme Builder-   Добавлена генерация hover / active состояний для групп токенов.feat(plasma-theme-builder): Add generate hover / active state for tokens (https://github.com/salute-developers/plasma/pull/1134)### Pagination-   исправлена ошибка навигации с помощью кнопок `next` \ `pre`fix(new-hope): Edit storybook content (https://github.com/salute-developers/plasma/pull/1154)### Website icons grid-   исправлен поиск иконок по названию-   исправлен grid для набора иконокfix(plasma-website): Fix Icons (https://github.com/salute-developers/plasma/pull/1169)---#### 🚀 Enhancement-   Release by 10.04.2024 [#1175](https://github.com/salute-developers/plasma/pull/1175) ([@shuga2704](https://github.com/shuga2704) [@Salute-Eva](https://github.com/Salute-Eva) [@neretin-trike](https://github.com/neretin-trike) [@Yakutoc](https://github.com/Yakutoc) [@iljs](https://github.com/iljs) [@TitanKuzmich](https://github.com/TitanKuzmich))-   feat(sdds-serv): add TextField from new-hope [#1160](https://github.com/salute-developers/plasma/pull/1160) ([@TitanKuzmich](https://github.com/TitanKuzmich))-   feat(sdds-serv): update components actual list [#1174](https://github.com/salute-developers/plasma/pull/1174) ([@TitanKuzmich](https://github.com/TitanKuzmich))-   feat(sdds-serv): add Chip from new-hope ([@TitanKuzmich](https://github.com/TitanKuzmich))#### 🐛 Bug Fix-   Merge remote-tracking branch 'origin/dev' into release_2024-04-10 ([@Yakutoc](https://github.com/Yakutoc))-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))-   docs: regenerate api reports ([@TitanKuzmich](https://github.com/TitanKuzmich))-   feat(plasma-hope, b2c, web, new-hope, sdds-serv): Select interlayer [#1161](https://github.com/salute-developers/plasma/pull/1161) ([@shuga2704](https://github.com/shuga2704))-   docs: regenerate api docs ([@TitanKuzmich](https://github.com/TitanKuzmich))-   fix(plasma-web,plasma-b2c,plasma-asdk,sdds-serv,calder-online): Update API report [#1167](https://github.com/salute-developers/plasma/pull/1167) ([@neretin-trike](https://github.com/neretin-trike))-   fix(plasma-web,plasma-b2c,plasma-asdk,sdds-serv,calder-online): Update state tokens for `Button` ([@neretin-trike](https://github.com/neretin-trike))-   fix(new-hope): Edit storybook content [#1154](https://github.com/salute-developers/plasma/pull/1154) ([@iljs](https://github.com/iljs))-   chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))#### Authors: 6-   [@iljs](https://github.com/iljs)-   [@Salute-Eva](https://github.com/Salute-Eva)-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))-   Dima Shugaev ([@shuga2704](https://github.com/shuga2704))-   Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))---# v0.31.1 (Tue Apr 02 2024)#### 🐛 Bug Fix-   fix(new-hope): Edit core and storybook [#1157](https://github.com/salute-developers/plasma/pull/1157) ([@iljs](https://github.com/iljs))-   fix(new-hope): Edit core and storybook ([@iljs](https://github.com/iljs))-   chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))#### Authors: 2-   [@iljs](https://github.com/iljs)-   [@Salute-Eva](https://github.com/Salute-Eva)---# v0.31.0 (Thu Mar 28 2024)### Release Notes#### Release by 27.03.2024 ([#1151](https://github.com/salute-developers/plasma/pull/1151))## Components### Progress-   добавлен в библиотеку в `new-hope`-   добавлен в поставку пакетов `plasma-{b2c, web}, sdds-serv`-   написаны тесты и документацияfeat: Progress redesign refactor (https://github.com/salute-developers/plasma/pull/1126)### Tooltip-   добавлены fallback на следующие свойства: isVisible, arrow, animatedfeat(plasma-new-hope): tooltip old api fallback (https://github.com/salute-developers/plasma/pull/1140)### Divider-   включен в поставку `plasma-{b2c/web}` и `sdds-serv`-   написаны тесты и документацияfeat(plasma-new-hope): Divider component (https://github.com/salute-developers/plasma/pull/1132)### Pagination-   добавлен в поставку клиентских библиотекfeat(new-hope): Pagination (https://github.com/salute-developers/plasma/pull/1107)### Toolbar-   включили в поставку в `plasma-{b2c/web}` \ `sdds-serv`-   написаны тесты и документацияfeat(plasma-new-hope): add toolbar component (https://github.com/salute-developers/plasma/pull/1150)## Icons### Icons for android-   Добавлен скрипт генерации иконок под android на основе svg-   Обновлена инструкция по добавлению иконокplasma-icons: script to generate android icons (https://github.com/salute-developers/plasma/pull/1109)### Icons publish-   добавлена директория `old` для обратной совместимостиplasma-icons: Add `old` dir for publish (https://github.com/salute-developers/plasma/pull/1149)## Infra### Scaffold docs CLI-   добавлен CLI для создание **директории** документации по шаблону-   добавлен CLI для создание **компонента** документации по шаблонуplasma-infra: Scaffold docs dir CLI (https://github.com/salute-developers/plasma/pull/1099)### Retry-   добавлен retry для шага `Update package-lock files` для обхода ошибки `ECONNRESET`-   добавлен `workflow` для ручного запуска `Update package-lock files`plasma-infra: Retry failure step (https://github.com/salute-developers/plasma/pull/922)### Deploy documentations artefacts-   распараллели процесс создания и загрузки артефактов документации-   добавили `marocchino/sticky-pull-request-comment` для приклеивания сообщения к одному комментарию в pr-   добавлена конфигурация: `config-ci.json`-   удалены неиспользуемые переменныеplasma-infra: Refactoring deploy documentations artefacts [PR context](https://github.com/salute-developers/plasma/pull/1125)### Build android icons plugin-   добавлен dispatch события для запуска `build icons` в `plasma-android`plasma-infra: Dispatch build-icons event (https://github.com/salute-developers/plasma/pull/1145)### Scaffold components docs-   добавлена генерация компонентов по заданному шаблонуplasma-infra: Scaffold components docs by template (https://github.com/salute-developers/plasma/pull/1128)## Docs### Docs-   Исправлена ошибка примера путём обновления токенов бэграундов в сторибуке для библиотек `plasma-web`, `plasma-b2c`, `plasma-asdk`.#### До:<img width="412" alt="Screenshot 2024-03-21 at 12 28 41" src="https://github.com/salute-developers/plasma/assets/26903236/5814e04f-1425-403c-8e20-1151a12063c6" />#### После:<img width="412" alt="Screenshot 2024-03-21 at 17 03 31" src="https://github.com/salute-developers/plasma/assets/26903236/259c6397-2e5c-4d82-a2a6-4d6fdcc31e79" />fix(plasma-web,plasma-b2c,plasma-asdk): Replace tokens for background in storybook to new (https://github.com/salute-developers/plasma/pull/1139)## Misc### Drawer-   изменили величину измерения высоты на dvh в storybookfix: change height for Drawer stories (https://github.com/salute-developers/plasma/pull/1116)### Image-   поправлена передача `props` в `Image.stories`fix: fix args for Image stories (https://github.com/salute-developers/plasma/pull/1119)### Plasma Theme Builder-   произведён рефакторинг методов, которые генерируют токены-   актуализированы базовые токены, которые генерируются сервисом ThemeBuilder-   добавлена новая группа `outline`, используемая в обводках / рамкахfeat(plasma-theme-builder): Actualize default tokens (https://github.com/salute-developers/plasma/pull/1127)### Button-   поправлен размер и отступ фокуса на кнопкеfeat(plasma-new-hope): fix button focus (https://github.com/salute-developers/plasma/pull/1141)### Badge-   поправлен токен фона для `transparent-accent` Badge-   поправлен токен цвета текста для `transparent-light`#### До:![image](https://github.com/salute-developers/plasma/assets/40370966/67673520-cfe8-4b6d-87eb-f700df308627)![image](https://github.com/salute-developers/plasma/assets/40370966/aa9fb631-c1b3-4f58-aa0b-4e5a9dc9617c)#### После:![image](https://github.com/salute-developers/plasma/assets/40370966/59170271-0a32-4680-ab18-5aa4afde0cef)![image](https://github.com/salute-developers/plasma/assets/40370966/9fdc8bea-add8-4798-955d-a896d6c32a40)feat: update badge view tokens (https://github.com/salute-developers/plasma/pull/1142)---#### 🚀 Enhancement-   Release by 27.03.2024 [#1151](https://github.com/salute-developers/plasma/pull/1151) ([@kayman233](https://github.com/kayman233) [@Salute-Eva](https://github.com/Salute-Eva) [@iljs](https://github.com/iljs) [@Yakutoc](https://github.com/Yakutoc) [@TitanKuzmich](https://github.com/TitanKuzmich) [@neretin-trike](https://github.com/neretin-trike) [@akhdrv](https://github.com/akhdrv) [@eg-zhuravlev](https://github.com/eg-zhuravlev))-   feat(sdds-serv): Component Toolbar added [#1150](https://github.com/salute-developers/plasma/pull/1150) ([@TitanKuzmich](https://github.com/TitanKuzmich))-   feat(new-hope): add sdds-serv [#1107](https://github.com/salute-developers/plasma/pull/1107) ([@iljs](https://github.com/iljs))-   feat(sdds-serv): fix Badge view tokens [#1142](https://github.com/salute-developers/plasma/pull/1142) ([@TitanKuzmich](https://github.com/TitanKuzmich))-   feat(sdds-serv): add Divider from new-hope ([@TitanKuzmich](https://github.com/TitanKuzmich))-   feat(plasma-b2c/web,sdds-serv): fix tooltip stories [#1140](https://github.com/salute-developers/plasma/pull/1140) ([@TitanKuzmich](https://github.com/TitanKuzmich))-   feat(sdds-serv): add Tooltip from new-hope ([@TitanKuzmich](https://github.com/TitanKuzmich))-   feat(sdds-serv): add Progress from new-hope ([@TitanKuzmich](https://github.com/TitanKuzmich))#### 🐛 Bug Fix-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))-   docs: regenerate api reports ([@eg-zhuravlev](https://github.com/eg-zhuravlev))-   docs: regenerate api reports ([@TitanKuzmich](https://github.com/TitanKuzmich))-   docs(sdds-serv): regenerate api report ([@TitanKuzmich](https://github.com/TitanKuzmich))-   chore: Update package-lock.json files [no ci](<[@Yakutoc](https://github.com/Yakutoc)>)-   chore: bump manual package-locks [#1119](https://github.com/salute-developers/plasma/pull/1119) ([@TitanKuzmich](https://github.com/TitanKuzmich))-   fix: fix args for Image stories ([@TitanKuzmich](https://github.com/TitanKuzmich))-   fix: change height for Drawer stories [#1116](https://github.com/salute-developers/plasma/pull/1116) ([@TitanKuzmich](https://github.com/TitanKuzmich))-   chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))#### Authors: 8-   [@iljs](https://github.com/iljs)-   [@kayman233](https://github.com/kayman233)-   [@Salute-Eva](https://github.com/Salute-Eva)-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))-   Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))-   Evgeniy Zhuravlev ([@eg-zhuravlev](https://github.com/eg-zhuravlev))-   Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))---# v0.24.0 (Thu Mar 14 2024)### Release Notes#### Release by 13.03.2024 ([#1112](https://github.com/salute-developers/plasma/pull/1112))## Components### Calendar-   добавлено возможность выбора одного дня для `range`feat(new-hope): edit calendar range logic and fix name (https://github.com/salute-developers/plasma/pull/1084)### TextField-   исправлен ошибка связанная с прозрачностью в `Safari`feat(plasma-new-hope): TextField issue with opacity (https://github.com/salute-developers/plasma/pull/1082)### Button-   удалены токены `scale` из кнопки и группы кнопок в пакетах `plasma-{b2c, web, sdds-serv}, caldera/-online`-   удалены токены `scale` из `example` для `plasma-new-hope`feat: remove scale tokens from Button & ButtonGroup (https://github.com/salute-developers/plasma/pull/1110)### Grid-   добавлен в поставку в `plasma-{b2c, web, new-hope}, sdds-serv`-   написаны тесты и обновлена документацияfeat(plasma-new-hope): Grid refactor redesign (https://github.com/salute-developers/plasma/pull/1105)### ButtonBase-   добавлен базовый компонент для создания `custom` кнопок для библиотек `plasma-{b2c,new-hope}`feat(plasma-new-hope, b2c): ButtonBase (https://github.com/salute-developers/plasma/pull/1080)## Icons### SVG-   добавлен svg формат иконок (не попадают в итоговой билд)feat(plasma-icons): Add svg icons (https://github.com/salute-developers/plasma/pull/1095)### Icons generation-   добавлена генерация компонентов иконок на основе svg во время билда-   удалены компоненты и их assets из gitplasma-icons: build-time generate Icon components (https://github.com/salute-developers/plasma/pull/1101)## Docs### SDDS SERV DOCS-   добавлена новый пакет документацииplasma-docs: Setup `sdds-serv` package docs (https://github.com/salute-developers/plasma/pull/1062)## Misc### Tooltip-   исправлена логика работы classname, теперь все наследуется корректноfix(new-hope): remove wrapper from popover (https://github.com/salute-developers/plasma/pull/1083)### Pickers-   исправлена ошибка UI в документацииfix(ui): fix pickers documentation bug with overflow (https://github.com/salute-developers/plasma/pull/1089)---#### 🚀 Enhancement-   Release by 13.03.2024 [#1112](https://github.com/salute-developers/plasma/pull/1112) ([@Yakutoc](https://github.com/Yakutoc) [@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@iljs](https://github.com/iljs) [@neretin-trike](https://github.com/neretin-trike) [@shuga2704](https://github.com/shuga2704) [@kayman233](https://github.com/kayman233))-   feat(sdds-serv): add grid component [#1105](https://github.com/salute-developers/plasma/pull/1105) ([@TitanKuzmich](https://github.com/TitanKuzmich))-   feat: remove scale tokens from bButton & ButtonGroup [#1110](https://github.com/salute-developers/plasma/pull/1110) ([@TitanKuzmich](https://github.com/TitanKuzmich))-   feat(sdds-serv): add Button Group & Dropdown ([@TitanKuzmich](https://github.com/TitanKuzmich))#### 🐛 Bug Fix-   Merge remote-tracking branch 'origin/dev' into release_2024-03-13 ([@Yakutoc](https://github.com/Yakutoc))-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))-   docs: regenerate api reports ([@TitanKuzmich](https://github.com/TitanKuzmich))-   chore: bump manual package-locks [#1111](https://github.com/salute-developers/plasma/pull/1111) ([@TitanKuzmich](https://github.com/TitanKuzmich))-   chore(storybook): bump storybook to "@latest" [#1096](https://github.com/salute-developers/plasma/pull/1096) ([@Yakutoc](https://github.com/Yakutoc))-   chore: update package-locks [no ci](<[@Yakutoc](https://github.com/Yakutoc)>)-   chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))-   docs: regenrate api reports ([@TitanKuzmich](https://github.com/TitanKuzmich))#### Authors: 7-   [@iljs](https://github.com/iljs)-   [@kayman233](https://github.com/kayman233)-   [@Salute-Eva](https://github.com/Salute-Eva)-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))-   Dima Shugaev ([@shuga2704](https://github.com/shuga2704))-   Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))---# v0.16.1 (Tue Mar 05 2024)#### 🐛 Bug Fix-   chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))#### Authors: 1-   [@Salute-Eva](https://github.com/Salute-Eva)---# v0.16.0 (Fri Mar 01 2024)### Release Notes#### Release by 29.02.2024 ([#1079](https://github.com/salute-developers/plasma/pull/1079))## Components### Drawer-   добавлены компоненты `Drawer` и `Panel`-   включен в поставку `plasma-{b2c/web/sdds-serv}`-   для компонента `Drawer` написаны тестыfeat(plasma-new-hope): add Drawer (https://github.com/salute-developers/plasma/pull/1068)### Indicator-   добавлены тесты и документация-   добавлен в поставку для библиотек: `plasma-{web,b2c}`-   интегрирован в компонент `Avatar`feat(plasma-new-hope, web, b2c): Indicator component (https://github.com/salute-developers/plasma/pull/1067)### ButtonGroup-   добавлен новый компонент и тесты с документацией-   исправлена структура файлов для `Spiner`-   добавлен компонент `Button` в поставку в `plasma-{b2c,web}`-   обновлена документация для `Button`-   обновлены тесты зависящие от `Button`feat(plasma-new-hope): add button group component (https://github.com/salute-developers/plasma/pull/1061)### TextField [Note]TextField перевезен на новую Архитектуру, могут быть незначительные отличия от текущего поведeния.### Рефакторинг TextField-   поведение анимация `label` внутри поля стала запускаться одинаковым между `b2c` и `web`. Запуск на фокусе, а не на начале редактирования.-   при показе `label` внутри поля больше не учитывается `placeholder`### TextField [plasma-b2c]-   исправлено поведение для цвет `placeholder`, больше не зависит от наличия `leftHelper`feat(plasma-new-hope): TextField (https://github.com/salute-developers/plasma/pull/949)## Infra### Upload assets-   добавлена возможность указать пакет/релиз к которому нужно прикрепить assetsplasma-infra: Upload assets for target package(-s) (https://github.com/salute-developers/plasma/pull/1054)### plasma-temple-   удалены все упоминания о пакете `plasma-temple` из текущего репозиторияRemove `plasma-temple` from repo [Part 1](https://github.com/salute-developers/plasma/pull/1048)## Tokens-   Добавлен пакет `@salutejs/data-themes`, который содержит все созданные json-схемы, а также набор методов, позволяющие сгенерировать темы для web-платформы в формате js объектов для `styled-component` и css стилей для подключения с помощью нативных способов.-   В пакетах с наборами тем были объеденены токены с цветами и типографикой.-   Так же если необходимы токены цвета или типографики отдельно, забрать их можно по пути `@salutejs/<vertical-name>-themes/tokens` для общих токенов и `@salutejs/<vertical-name>-themes/tokens/<theme-name>` для конкретных тем.-   Добавлена новые пакеты с наборами тем для следующих дизайн вертикаль:    -   `@salutejs/plasma-themes` - для вертикали `Plasma` - пока нигде не используется;    -   `@salutejs/sdds-themes` - для вертикали `SDDS` - используется с библиотекой `@salutejs/sdds-serv`;    -   `@salutejs/cladera-online-themes` - для вертикали `Caldera Online` - используется с библиотеками `@salutejs/cladera-online` и `@salutejs/cladera`;    -   `@salutejs/flamingo-themes` - для вертикали `Flamingo` - пока нигде не используется;### New-hope-   Удалена зависимость `@salutejs/plasma-tokens` из пакета.### SDDS-Serv-   Обновлена документация со способом установки и подключением;-   Убрана зависимость от пакета `@salutejs/plasma-tokens` и добавлен пакет `@salutejs/sdds-themes`;-   Обновлён способ подключение темы в storybook;-   Исправлена сторис LiveDemo в компоненте `Toast`;-   Заменены токены цветов в конфигах компонента `Segment` на актуальные### Caldera / Caldera Online-   Обновлена документация со способом установки и подключением;-   Убрана зависимость от пакета `@salutejs/plasma-tokens` и добавлен пакет `@salutejs/caldera-online-themes`;-   Обновлён способ подключение темы в storybook;-   Исправлена сторис LiveDemo в компоненте `Toast`;-   Заменены токены цветов в конфигах компонента `Segment` на актуальныеAdd new tokens architecture (https://github.com/salute-developers/plasma/pull/1074)## Docs### Сontributing Typos-   исправлены опечатки в документации-   добавлен параграф об обязательном наличие локально browser `chromium`plasma-docs: Fix cypress cli commands (https://github.com/salute-developers/plasma/pull/1058)## Misc### SDDS Android-   добавлен `SDDS Android` проект, включающий:    -   Theme Builder Gradle Plugin    -   SDDS Sandbox App    -   UIKit    -   UIKit Compose    -   файл с лицензией и `README.md` в каждый модульchore[sdds-android]: SDDS Android project was created. (https://github.com/salute-developers/plasma/pull/1045)### CI/CD Pipeline [SDDS Android]-   Project build system migration to composite builds was made to support multiproject structure.-   Code quality check workflow was created.-   Merge report tasks were added.-   Codeowners file was modified.chore[sdds-android, cicd]: code quality check workflow (https://github.com/salute-developers/plasma/pull/1070)---#### 🚀 Enhancement-   Release by 29.02.2024 [#1079](https://github.com/salute-developers/plasma/pull/1079) ([@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@Yakutoc](https://github.com/Yakutoc) [@neretin-trike](https://github.com/neretin-trike) [@malilex](https://github.com/malilex) [@shuga2704](https://github.com/shuga2704) [@Yeti-or](https://github.com/Yeti-or) [@kayman233](https://github.com/kayman233))-   feat(sdds-serv): add Drawer [#1068](https://github.com/salute-developers/plasma/pull/1068) ([@TitanKuzmich](https://github.com/TitanKuzmich))-   feat(sdds-serv): Add new package with tokens for theming ([@neretin-trike](https://github.com/neretin-trike))-   feat(sdds-serv): add components from new-hope [#1056](https://github.com/salute-developers/plasma/pull/1056) ([@TitanKuzmich](https://github.com/TitanKuzmich))-   feat(sdds-serv): rename package ([@TitanKuzmich](https://github.com/TitanKuzmich))#### 🐛 Bug Fix-   Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))-   Update versions ([@Salute-Eva](https://github.com/Salute-Eva))-   docs(plasma-web/b2c,sdds-serv): regenerate api docs ([@TitanKuzmich](https://github.com/TitanKuzmich))-   chore: update package-locks [no ci](<[@Yakutoc](https://github.com/Yakutoc)>)-   chore(sdds-serv): add devDep "plasma-icons" [no ci](<[@Yakutoc](https://github.com/Yakutoc)>)-   fix(sdds-serv): package rename [#1072](https://github.com/salute-developers/plasma/pull/1072) ([@Yeti-or](https://github.com/Yeti-or))-   feat(plasma-asdk,sdds-srvc,caldera/-online): update Button config ([@TitanKuzmich](https://github.com/TitanKuzmich))-   docs: regenerate api docs ([@TitanKuzmich](https://github.com/TitanKuzmich))-   docs(plasma-b2c/web,sdds-serv): generate api docs ([@TitanKuzmich](https://github.com/TitanKuzmich))#### Authors: 8-   [@kayman233](https://github.com/kayman233)-   [@Salute-Eva](https://github.com/Salute-Eva)-   Alex Czech ([@Yakutoc](https://github.com/Yakutoc))-   Alexander Malishev ([@malilex](https://github.com/malilex))-   Dima Shugaev ([@shuga2704](https://github.com/shuga2704))-   Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))-   neretinaa ([@neretin-trike](https://github.com/neretin-trike))-   Vasiliy ([@Yeti-or](https://github.com/Yeti-or))