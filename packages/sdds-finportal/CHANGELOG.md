# v0.112.0 (Tue Sep 10 2024)

#### 🚀 Enhancement

- plasma-*: Fix `TextField` placeholder logic [HOTFIX] [#1425](https://github.com/salute-developers/plasma/pull/1425) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- feat(plasma-*/sdds-*): update TextField stories ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))

---

# v0.111.0 (Thu Sep 05 2024)

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
- feat: update lock file [#1417](https://github.com/salute-developers/plasma/pull/1417) ([@Yakutoc](https://github.com/Yakutoc))
- feat(sdds-finportal): add package ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- Merge remote-tracking branch 'origin/dev' into release_2024-09-04 ([@Yakutoc](https://github.com/Yakutoc))
- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))

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

