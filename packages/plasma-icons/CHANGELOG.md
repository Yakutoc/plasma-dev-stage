# v1.194.0 (Thu Jun 13 2024)

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
- fix(plasma-icons): replace stroke value to "currentColor" [#1226](https://github.com/salute-developers/plasma/pull/1226) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 3

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alexander Lobyntsev ([@Yakutoc](https://github.com/Yakutoc))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.193.0 (Thu May 16 2024)

#### 🚀 Enhancement

- Release by 15.05.2024 [#1205](https://github.com/salute-developers/plasma/pull/1205) ([@renovate[bot]](https://github.com/renovate[bot]) [@iljs](https://github.com/iljs) [@Salute-Eva](https://github.com/Salute-Eva) [@Yakutoc](https://github.com/Yakutoc) [@TitanKuzmich](https://github.com/TitanKuzmich) [@shuga2704](https://github.com/shuga2704) [@akhdrv](https://github.com/akhdrv))

#### 🐛 Bug Fix

- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- fix(icons): Fix dislike and like [#1202](https://github.com/salute-developers/plasma/pull/1202) ([@iljs](https://github.com/iljs))

#### Authors: 7

- [@iljs](https://github.com/iljs)
- [@renovate[bot]](https://github.com/renovate[bot])
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))
- Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))

---

# v1.192.0 (Thu Apr 25 2024)

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

#### Authors: 5

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.191.0 (Thu Apr 11 2024)

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
- feat: add generateIconsIos script [#1163](https://github.com/salute-developers/plasma/pull/1163) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- chore: add fast-glob package ([@Yakutoc](https://github.com/Yakutoc))
- chore: add sharp package ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 6

- [@iljs](https://github.com/iljs)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.190.0 (Thu Mar 28 2024)

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
- feat(plasma-icons): script to generate android icons [#1109](https://github.com/salute-developers/plasma/pull/1109) ([@kayman233](https://github.com/kayman233))

#### 🐛 Bug Fix

- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- fix: add old dir to publish [#1149](https://github.com/salute-developers/plasma/pull/1149) ([@Yakutoc](https://github.com/Yakutoc))
- fix(plasma-icons): replace primary var to hardcode value [#1106](https://github.com/salute-developers/plasma/pull/1106) ([@Yakutoc](https://github.com/Yakutoc))
- chore(plasma-icons): delete unnecessary dep "plasma-core" ([@Yakutoc](https://github.com/Yakutoc))
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

# v1.188.0 (Thu Mar 14 2024)

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
- feat(plasma-icons): build-time generate Icon components [#1101](https://github.com/salute-developers/plasma/pull/1101) ([@kayman233](https://github.com/kayman233))
- feat(plasma-icons): move old icons to own directory ([@kayman233](https://github.com/kayman233))
- feat(plasma-icons): remove react components from scalable ([@kayman233](https://github.com/kayman233))
- feat(plasma-icons): Add svg icons T, V, W [#1095](https://github.com/salute-developers/plasma/pull/1095) ([@kayman233](https://github.com/kayman233))
- feat(plasma-icons): Add svg icons R, S ([@kayman233](https://github.com/kayman233))
- feat(plasma-icons): Add svg icons L-Q ([@kayman233](https://github.com/kayman233))
- feat(plasma-icons): Add svg icons D-K ([@kayman233](https://github.com/kayman233))
- feat(plasma-icons): Fix svg icons A, B, C ([@kayman233](https://github.com/kayman233))
- feat(plasma-icons): Add svg icons A, B, C ([@kayman233](https://github.com/kayman233))

#### 🐛 Bug Fix

- Merge remote-tracking branch 'origin/dev' into release_2024-03-13 ([@Yakutoc](https://github.com/Yakutoc))
- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
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

# v1.186.1 (Tue Mar 05 2024)

#### 🐛 Bug Fix

- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.186.0 (Fri Mar 01 2024)

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

# v1.182.0 (Thu Feb 15 2024)

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

#### 🐛 Bug Fix

- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- fix(plasma-icons): fix tree-shaking [#1031](https://github.com/salute-developers/plasma/pull/1031) ([@kayman233](https://github.com/kayman233))
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

# v1.179.0 (Thu Feb 01 2024)

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

#### 🐛 Bug Fix

- Merge remote-tracking branch 'origin/dev' into release_2024-01-31 ([@Yakutoc](https://github.com/Yakutoc))
- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- fix(plasma-icons): fix package publish [#989](https://github.com/salute-developers/plasma/pull/989) ([@kayman233](https://github.com/kayman233))

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

# v1.177.1 (Fri Jan 19 2024)

#### 🐛 Bug Fix

- fix(plasma-icons): fix package publish [#988](https://github.com/salute-developers/plasma/pull/988) ([@kayman233](https://github.com/kayman233))
- fix(plasma-icons): fix package publish ([@kayman233](https://github.com/kayman233))
- chore: Update package-lock.json files \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.177.0 (Thu Jan 18 2024)

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
- fix(plasma-icons): fix IconRoot API [#955](https://github.com/salute-developers/plasma/pull/955) ([@kayman233](https://github.com/kayman233))
- feat(plasma-icons): remove name conflicting old icons ([@kayman233](https://github.com/kayman233))
- feat(plasma-icons): Add missing icons `PeopleGroup, Share` ([@kayman233](https://github.com/kayman233))
- feat(plasma-icons): add new icons in website ([@kayman233](https://github.com/kayman233))
- feat(plasma-icons): Add icons `VW` ([@kayman233](https://github.com/kayman233))
- feat(plasma-icons): Add icons `T` ([@kayman233](https://github.com/kayman233))
- feat(plasma-icons): Add icons `S2` ([@kayman233](https://github.com/kayman233))
- feat(plasma-icons): Add icons `S1` ([@kayman233](https://github.com/kayman233))
- feat(plasma-icons): Add icons `P2` ([@kayman233](https://github.com/kayman233))
- feat(plasma-icons): Add icons `P1` ([@kayman233](https://github.com/kayman233))
- feat(plasma-icons): Add icons `M2` ([@kayman233](https://github.com/kayman233))
- feat(plasma-icons): Add icons `M1` ([@kayman233](https://github.com/kayman233))
- feat(plasma-icons): Add icons `ILNOQR` ([@kayman233](https://github.com/kayman233))
- feat(plasma-icons): Add icons `FH` ([@kayman233](https://github.com/kayman233))
- feat(plasma-icons): Add icons `D` ([@kayman233](https://github.com/kayman233))
- feat(plasma-icons): Add icons `C2` ([@kayman233](https://github.com/kayman233))
- feat(plasma-icons): Add icons `C1` ([@kayman233](https://github.com/kayman233))
- feat(plasma-icons): Add icons `B` ([@kayman233](https://github.com/kayman233))
- feat(plasma-icons): Add icons `AEGK` ([@kayman233](https://github.com/kayman233))
- feat(plasma-icons): remove old icons scalable ([@kayman233](https://github.com/kayman233))

#### 🐛 Bug Fix

- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 7

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))
- Dima Shugaev ([@shuga2704](https://github.com/shuga2704))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.174.0 (Fri Dec 22 2023)

#### 🚀 Enhancement

- Release by 22.12.2023 [#944](https://github.com/salute-developers/plasma/pull/944) ([@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@Yakutoc](https://github.com/Yakutoc) [@kayman233](https://github.com/kayman233) [@neretin-trike](https://github.com/neretin-trike))
- feat: bump manual package-locks [#933](https://github.com/salute-developers/plasma/pull/933) ([@TitanKuzmich](https://github.com/TitanKuzmich))

#### 🐛 Bug Fix

- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 5

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.173.0 (Thu Nov 30 2023)

#### 🚀 Enhancement

- Release from 30.11.2023 [#883](https://github.com/salute-developers/plasma/pull/883) ([@Yakutoc](https://github.com/Yakutoc) [@kayman233](https://github.com/kayman233) [@Salute-Eva](https://github.com/Salute-Eva) [@TitanKuzmich](https://github.com/TitanKuzmich) [@neretin-trike](https://github.com/neretin-trike) [@Yeti-or](https://github.com/Yeti-or))
- feat: update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- feat: Update package-lock.json files ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- chore: update package locks [#880](https://github.com/salute-developers/plasma/pull/880) ([@TitanKuzmich](https://github.com/TitanKuzmich))
- Update package-lock.json files ([@Salute-Eva](https://github.com/Salute-Eva))
- chore(plasma-icons): npm audit fix vulnerabilities ([@Yakutoc](https://github.com/Yakutoc))
- chore: bump TS to 4.2.4 [#869](https://github.com/salute-developers/plasma/pull/869) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 6

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.171.0 (Thu Nov 16 2023)

### Release Notes

#### Release 16.11.2023 ([#852](https://github.com/salute-developers/plasma/pull/852))

Релиз от 16.11.2023

---

#### 🚀 Enhancement

- Release 16.11.2023 [#852](https://github.com/salute-developers/plasma/pull/852) ([@TitanKuzmich](https://github.com/TitanKuzmich) [@Salute-Eva](https://github.com/Salute-Eva) [@Yakutoc](https://github.com/Yakutoc) [@kayman233](https://github.com/kayman233) [@akhdrv](https://github.com/akhdrv))
- feat(plasma-icons): raisedHand Icon added [#830](https://github.com/salute-developers/plasma/pull/830) ([@kayman233](https://github.com/kayman233))

#### 🐛 Bug Fix

- chore: update package-locks ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- chore(packages): reformat package.json ([@Yakutoc](https://github.com/Yakutoc))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 5

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))
- Krivonos Aleksandr ([@TitanKuzmich](https://github.com/TitanKuzmich))

---

# v1.168.0 (Thu Nov 02 2023)

#### 🚀 Enhancement

- Release 02.11.2023 [#829](https://github.com/salute-developers/plasma/pull/829) ([@akhdrv](https://github.com/akhdrv) [@neretin-trike](https://github.com/neretin-trike) [@Salute-Eva](https://github.com/Salute-Eva) [@kayman233](https://github.com/kayman233) [@Yakutoc](https://github.com/Yakutoc) [@nikewht](https://github.com/nikewht))
- feat: manual bump versions [#826](https://github.com/salute-developers/plasma/pull/826) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- chore: update package-locks ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions ([@Salute-Eva](https://github.com/Salute-Eva))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 6

- [@kayman233](https://github.com/kayman233)
- [@nikewht](https://github.com/nikewht)
- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- Artem Khaydarov ([@akhdrv](https://github.com/akhdrv))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.165.0 (Fri Sep 29 2023)

#### 🐛 Bug Fix

- chore: update package-locks [#781](https://github.com/salute-developers/plasma/pull/781) ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions [#781](https://github.com/salute-developers/plasma/pull/781) ([@Salute-Eva](https://github.com/Salute-Eva))
- fix: Bump package-lock versions [#781](https://github.com/salute-developers/plasma/pull/781) ([@neretin-trike](https://github.com/neretin-trike))
- chore: update version [#781](https://github.com/salute-developers/plasma/pull/781) ([@Yakutoc](https://github.com/Yakutoc))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 3

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.161.0 (Thu Sep 14 2023)

#### 🐛 Bug Fix

- chore: update package-locks [#699](https://github.com/salute-developers/plasma/pull/699) ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions [#699](https://github.com/salute-developers/plasma/pull/699) ([@Salute-Eva](https://github.com/Salute-Eva))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.159.0 (Mon Sep 04 2023)

#### 🚀 Enhancement

- feat(plasma-icons): add MessageChatFill [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-icons): add CameraVideoFill [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- feat(plasma-icons): add SberSpasibo [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- chore: update package-locks [#681](https://github.com/salute-developers/plasma/pull/681) ([@Salute-Eva](https://github.com/Salute-Eva))
- Update versions [#681](https://github.com/salute-developers/plasma/pull/681) ([@Salute-Eva](https://github.com/Salute-Eva))
- docs(plasma-icons): add part "How to add new icon" [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- chore(packages): add lint script [#681](https://github.com/salute-developers/plasma/pull/681) ([@Yakutoc](https://github.com/Yakutoc))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.155.0 (Fri Aug 18 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.154.0 (Thu Aug 03 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.153.0 (Thu Jul 13 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.152.0 (Thu Jun 29 2023)

#### 🐛 Bug Fix

- chore: add forgotten license [#582](https://github.com/salute-developers/plasma/pull/582) ([@Yeti-or](https://github.com/Yeti-or))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.150.0 (Thu Jun 01 2023)

#### 🐛 Bug Fix

- chore: [packages] update package-lock files [#526](https://github.com/salute-developers/plasma/pull/526) ([@Yakutoc](https://github.com/Yakutoc))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.149.0 (Mon May 22 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.147.0 (Fri May 19 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.146.0 (Fri May 19 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.142.0 (Thu Apr 27 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.141.0 (Wed Apr 26 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.140.1 (Tue Apr 25 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.140.0 (Mon Apr 24 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.137.0 (Wed Apr 12 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.135.0 (Wed Mar 29 2023)

#### 🚀 Enhancement

- feat(plasma-icons): add "Menu" icon [#448](https://github.com/salute-developers/plasma/pull/448) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.134.0 (Tue Mar 21 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.133.0 (Fri Mar 17 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.130.0 (Tue Mar 14 2023)

#### 🚀 Enhancement

- feat(plasm-*): Bump typescript version to 4.0.8 [#408](https://github.com/salute-developers/plasma/pull/408) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.129.0 (Mon Mar 06 2023)

#### 🐛 Bug Fix

- build(plasma-icons): bump react to 18x [#194](https://github.com/salute-developers/plasma/pull/194) ([@Yeti-or](https://github.com/Yeti-or))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.127.0 (Mon Feb 20 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.126.0 (Fri Feb 17 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))
- ci: fix package-locks [#352](https://github.com/salute-developers/plasma/pull/352) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.125.1 (Thu Feb 16 2023)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.124.0 (Tue Feb 14 2023)

#### 🚀 Enhancement

- feat(plasma-*): Remove declarationMap from tsconfig.json [#326](https://github.com/salute-developers/plasma/pull/326) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.120.0 (Thu Feb 02 2023)

#### 🚀 Enhancement

- feat(plasma-*): Remove source maps from bundles [#309](https://github.com/salute-developers/plasma/pull/309) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.116.0 (Wed Jan 11 2023)

#### 🚀 Enhancement

- feat(plasma-icons): Add `CloudUpload`, `Record` and `Recording` icons [#277](https://github.com/salute-developers/plasma/pull/277) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.115.0 (Mon Dec 26 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.112.0 (Wed Dec 14 2022)

#### 🐛 Bug Fix

- Bump independent versions \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### ⚠️ Pushed to `master`

- Merge commit '2de734f1' into test ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.110.1 (Thu Nov 24 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.109.0 (Wed Nov 23 2022)

#### 🚀 Enhancement

- feat(plasma-icons): add aria-hidden attr [#222](https://github.com/salute-developers/plasma/pull/222) ([@Yakutoc](https://github.com/Yakutoc))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.107.0 (Wed Nov 09 2022)

#### 🚀 Enhancement

- feat(plasma-icons): Add new call icons [#216](https://github.com/salute-developers/plasma/pull/216) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.106.2 (Wed Nov 09 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.105.1 (Mon Oct 31 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.103.1 (Thu Oct 27 2022)

#### 🐛 Bug Fix

- chore(plasma-icons,plasma-sb-utils): Bump plasma-core version [#200](https://github.com/salute-developers/plasma/pull/200) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.102.2 (Mon Oct 10 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.102.1 (Mon Oct 10 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.101.0 (Thu Oct 06 2022)

#### 🐛 Bug Fix

- chore(plasma-sb-utils): bump @salutejs/plasma-core version [#179](https://github.com/salute-developers/plasma/pull/179) ([@Yakutoc](https://github.com/Yakutoc))

#### Authors: 1

- Alex Czech ([@Yakutoc](https://github.com/Yakutoc))

---

# v1.100.0 (Mon Oct 03 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.99.0 (Wed Sep 28 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.98.2 (Mon Sep 26 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.98.1 (Tue Sep 20 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.98.0 (Thu Sep 15 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.91.1 (Tue Aug 16 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.90.0 (Tue Jul 19 2022)

#### 🚀 Enhancement

- feat(plasma-icons): Add `LocationFill` icon [#102](https://github.com/salute-developers/plasma/pull/102) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.87.0 (Wed Jun 22 2022)

#### 🐛 Bug Fix

- build(plasma-ui): added @babel/plugin-transform-react-constant-elements [#46](https://github.com/salute-developers/plasma/pull/46) ([@SeanSilke](https://github.com/SeanSilke))

#### Authors: 1

- Sergey Orlov ([@SeanSilke](https://github.com/SeanSilke))

---

# v1.86.0 (Thu Jun 09 2022)

#### 🚀 Enhancement

- feat(plasma-icons): Add Sber Icons [#63](https://github.com/salute-developers/plasma/pull/63) ([@andart71](https://github.com/andart71))

#### Authors: 1

- Andrey Loshkarev ([@andart71](https://github.com/andart71))

---

# v1.85.0 (Tue Jun 07 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.84.0 (Tue May 24 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.83.1 (Thu May 19 2022)

#### 🐛 Bug Fix

- ci(plasma-icons): fix deps [#24](https://github.com/salute-developers/plasma/pull/24) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.83.0 (Wed May 11 2022)

#### 🚀 Enhancement

- feat(plasma-icons): Add icons for `36 dp` from P to W [#13](https://github.com/salute-developers/plasma/pull/13) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-icons): Add icons for `36 dp` from G to O [#11](https://github.com/salute-developers/plasma/pull/11) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.82.0 (Wed May 11 2022)

#### 🚀 Enhancement

- feat(plasma-icons): Add icons for `36 dp` from A to E [#12](https://github.com/salute-developers/plasma/pull/12) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- chore: update package-locks [#18](https://github.com/salute-developers/plasma/pull/18) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 2

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.81.0 (Thu May 05 2022)

#### 🚀 Enhancement

- feat(plasma-icons): Add icons for `24 dp` from N to W [#10](https://github.com/salute-developers/plasma/pull/10) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.80.0 (Thu May 05 2022)

#### 🚀 Enhancement

- feat(plasma-icons): Add icons for `24 dp` from F to M [#14](https://github.com/salute-developers/plasma/pull/14) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.79.0 (Thu May 05 2022)

#### 🚀 Enhancement

- feat(plasma-icons): Add icons for `24 dp` from A to E [#15](https://github.com/salute-developers/plasma/pull/15) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.78.0 (Thu May 05 2022)

#### 🚀 Enhancement

- feat(plasma-icons): Add other icons for `24 dp` and `16 dp` [#9](https://github.com/salute-developers/plasma/pull/9) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.77.0 (Thu May 05 2022)

#### 🚀 Enhancement

- feat(plasma-icons): Add icons for `16 dp` [#8](https://github.com/salute-developers/plasma/pull/8) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.76.0 (Wed Apr 27 2022)

#### 🐛 Bug Fix

- fix: monorepo deps resolved [#1](https://github.com/salute-developers/plasma/pull/1) ([@Yeti-or](https://github.com/Yeti-or))
- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.72.0 (Fri Mar 25 2022)

#### 🚀 Enhancement

- feat(plasma-icons): Add new root files for scalable icons [#1152](https://github.com/salute-developers/plasma/pull/1152) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-icons): Add first icons for 16,24 and 36 sizes [#1152](https://github.com/salute-developers/plasma/pull/1152) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- chore(plasma-icons): Update .gitignore and package.json [#1152](https://github.com/salute-developers/plasma/pull/1152) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.70.0 (Fri Mar 04 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.69.1 (Tue Mar 01 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.69.0 (Tue Mar 01 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.68.0 (Tue Mar 01 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.67.8 (Thu Feb 24 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.67.5 (Thu Feb 17 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.67.3 (Mon Feb 14 2022)

#### 🐛 Bug Fix

- fix(plasma-icons): remove unused icon [#1085](https://github.com/salute-developers/plasma/pull/1085) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.67.1 (Thu Feb 03 2022)

#### 🐛 Bug Fix

- fix: peer dependencies versions [#1053](https://github.com/salute-developers/plasma/pull/1053) ([@LamaEats](https://github.com/LamaEats))

#### Authors: 1

- Sviridov Maksim ([@LamaEats](https://github.com/LamaEats))

---

# v1.67.0 (Wed Feb 02 2022)

#### 🚀 Enhancement

- feat(plasma-icons): Add all devices icons [#1051](https://github.com/salute-developers/plasma/pull/1051) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.66.0 (Tue Feb 01 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.65.1 (Fri Jan 28 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.63.2 (Thu Jan 13 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.63.1 (Tue Jan 11 2022)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.61.0 (Wed Dec 15 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.60.0 (Wed Dec 15 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.56.0 (Wed Dec 01 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.54.0 (Mon Nov 22 2021)

#### 🚀 Enhancement

- feat(plasma-icons): Mark IconSpinner as deprecated [#919](https://github.com/salute-developers/plasma/pull/919) ([@neretin-trike](https://github.com/neretin-trike))

#### 🐛 Bug Fix

- fix(plasma-icons): Remove IconVolumeMute icon [#919](https://github.com/salute-developers/plasma/pull/919) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.52.0 (Tue Nov 16 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.51.1 (Tue Nov 09 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.49.0 (Thu Oct 28 2021)

#### 🚀 Enhancement

- feat(plasma-icons): Update design for `Hearts` icons [#896](https://github.com/salute-developers/plasma/pull/896) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.48.0 (Thu Oct 21 2021)

#### 🚀 Enhancement

- feat(plasma-icons): Added `PictureFilled` icon [#819](https://github.com/salute-developers/plasma/pull/819) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-icons): Added `Drag` icon [#819](https://github.com/salute-developers/plasma/pull/819) ([@neretin-trike](https://github.com/neretin-trike))
- feat(plasma-icons): Added `Music` icon [#819](https://github.com/salute-developers/plasma/pull/819) ([@neretin-trike](https://github.com/neretin-trike))

#### Authors: 1

- neretinaa ([@neretin-trike](https://github.com/neretin-trike))

---

# v1.47.2 (Thu Oct 14 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.47.1 (Wed Oct 13 2021)

#### 🐛 Bug Fix

- fix: Update package-locks [#853](https://github.com/salute-developers/plasma/pull/853) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.44.0 (Sun Oct 03 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.43.0 (Tue Sep 28 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.41.1 (Tue Sep 21 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.40.0 (Tue Sep 14 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.39.3 (Thu Sep 09 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.39.2 (Thu Sep 09 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.39.1 (Wed Sep 08 2021)

#### 🐛 Bug Fix

- chore(plasma-icons): update deps [#728](https://github.com/salute-developers/plasma/pull/728) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.39.0 (Wed Sep 01 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.38.1 (Tue Aug 31 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.37.0 (Fri Aug 27 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.36.0 (Mon Aug 23 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.35.0 (Fri Aug 20 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.33.1 (Wed Aug 18 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.32.0 (Tue Aug 10 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.31.0 (Fri Aug 06 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.30.0 (Fri Aug 06 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.28.0 (Mon Aug 02 2021)

#### 🐛 Bug Fix

- chore: update package-locks \[skip ci\] ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.27.0 (Mon Aug 02 2021)

#### 🐛 Bug Fix

- ci: Build plasma without rollup [#563](https://github.com/salute-developers/plasma/pull/563) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil' Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.26.0 (Tue Jul 27 2021)

#### 🐛 Bug Fix

- fix(plasma-icons): chevron-icons updated [#551](https://github.com/salute-developers/plasma/pull/551) ([@kayman233](https://github.com/kayman233))

#### Authors: 1

- [@kayman233](https://github.com/kayman233)

---

# v1.25.0 (Thu Jul 15 2021)

#### 🐛 Bug Fix

- {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.23.2 (Tue Jul 13 2021)

#### 🐛 Bug Fix

- {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.23.1 (Tue Jul 13 2021)

#### 🐛 Bug Fix

- {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.23.0 (Tue Jul 13 2021)

#### 🚀 Enhancement

- feat: react17 and test job added [#496](https://github.com/salute-developers/plasma/pull/496) ([@kayman233](https://github.com/kayman233))

#### 🐛 Bug Fix

- {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@kayman233](https://github.com/kayman233)
- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.21.1 (Wed Jul 07 2021)

#### 🐛 Bug Fix

- {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.21.0 (Fri Jul 02 2021)

#### 🐛 Bug Fix

- {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.20.1 (Thu Jul 01 2021)

#### 🐛 Bug Fix

- {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.20.0 (Thu Jul 01 2021)

#### 🐛 Bug Fix

- {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.17.0 (Fri Jun 18 2021)

#### 🐛 Bug Fix

- {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.16.0 (Wed Jun 09 2021)

#### 🐛 Bug Fix

- {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.15.1 (Wed Jun 09 2021)

#### 🐛 Bug Fix

- {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.14.0 (Mon May 31 2021)

#### 🚀 Enhancement

- feat: update plus circle icon [#412](https://github.com/salute-developers/plasma/pull/412) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
- feat: update heart stroke icon [#412](https://github.com/salute-developers/plasma/pull/412) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
- feat: add percent stroke icon [#412](https://github.com/salute-developers/plasma/pull/412) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
- feat: update plis circle icon [#412](https://github.com/salute-developers/plasma/pull/412) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))

#### 🐛 Bug Fix

- {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 2

- [@Salute-Eva](https://github.com/Salute-Eva)
- [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)

---

# v1.13.0 (Mon May 31 2021)

#### 🐛 Bug Fix

- fix: import es module from core in icons [#341](https://github.com/salute-developers/plasma/pull/341) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))

#### Authors: 1

- [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)

---

# v1.12.2 (Mon May 31 2021)

#### 🐛 Bug Fix

- add Star icons [#418](https://github.com/salute-developers/plasma/pull/418) ([@Kud8](https://github.com/Kud8))

#### Authors: 1

- [@Kud8](https://github.com/Kud8)

---

# v1.12.1 (Thu May 20 2021)

#### 🐛 Bug Fix

- {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.11.1 (Mon May 17 2021)

#### 🐛 Bug Fix

- {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.10.0 (Fri May 14 2021)

#### 🐛 Bug Fix

- {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.9.0 (Thu May 13 2021)

#### 🐛 Bug Fix

- chore: update package-locks [#344](https://github.com/salute-developers/plasma/pull/344) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))
- chore: soft peerDependencies only [#344](https://github.com/salute-developers/plasma/pull/344) ([@VladislavPetyukevich](https://github.com/VladislavPetyukevich))

#### Authors: 1

- [@VladislavPetyukevich](https://github.com/VladislavPetyukevich)

---

# v1.8.0 (Tue May 11 2021)

#### 🐛 Bug Fix

- {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.7.0 (Fri May 07 2021)

#### 🐛 Bug Fix

- {chore: update package-locks \[skip ci\]} ([@Salute-Eva](https://github.com/Salute-Eva))

#### Authors: 1

- [@Salute-Eva](https://github.com/Salute-Eva)

---

# v1.6.0 (Thu May 06 2021)

#### 🐛 Bug Fix

- build: fix package-locks [#337](https://github.com/salute-developers/plasma/pull/337) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# vnull (Tue Apr 27 2021)

#### ⚠️ Pushed to `master`

- {chore: update package-locks} ([@github-actions[bot]](https://github.com/github-actions[bot]))

#### Authors: 1

- [@github-actions[bot]](https://github.com/github-actions[bot])

---

# v1.2.0 (Thu Apr 15 2021)

#### 🚀 Enhancement

- feat(plasma-icons): Using plasma-core's tokens [#280](https://github.com/salute-developers/plasma/pull/280) ([@fanisco](https://github.com/fanisco))

#### Authors: 1

- Fanil Zubairov ([@fanisco](https://github.com/fanisco))

---

# v1.1.1 (Thu Apr 15 2021)

#### 🐛 Bug Fix

- fix: bump peerDeps [#307](https://github.com/salute-developers/plasma/pull/307) ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.1.0 (Wed Apr 07 2021)

#### 🐛 Bug Fix

- Bump independent versions \[skip ci\] ([@Yeti-or](https://github.com/Yeti-or))
- Update CHANGELOG.md \[skip ci\] ([@Yeti-or](https://github.com/Yeti-or))

#### Authors: 1

- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))

---

# v1.0.0 (Fri Apr 02 2021)

#### 🚀 Enhancement

- feat: esm build, fix package-lock after rebase [#279](https://github.com/salute-developers/plasma/pull/279) ([@KateKate](https://github.com/KateKate))
- feat: esm build core, icons, ui, web [#279](https://github.com/salute-developers/plasma/pull/279) ([@KateKate](https://github.com/KateKate))
- feat: Button text-overflow, Icon flex [#279](https://github.com/salute-developers/plasma/pull/279) ([@fanisco](https://github.com/fanisco))
- feat(plasma-icons): убрать фильтры [#279](https://github.com/salute-developers/plasma/pull/279) (alisabelousova007@gmail.com)
- feat(plasma-icons): новые иконки [#279](https://github.com/salute-developers/plasma/pull/279) ([@IgorAntonov](https://github.com/IgorAntonov))
- feat(plasma-icons): добавлена иконка feedback [#279](https://github.com/salute-developers/plasma/pull/279) ([@IgorAntonov](https://github.com/IgorAntonov))
- feat: иконки вынесены в plasma-icons [#279](https://github.com/salute-developers/plasma/pull/279) ([@IgorAntonov](https://github.com/IgorAntonov))

#### 🐛 Bug Fix

- fix: plasma doc before major [#279](https://github.com/salute-developers/plasma/pull/279) ([@Yeti-or](https://github.com/Yeti-or))
- fix(plasma-icons): Icon move className to root obj [#279](https://github.com/salute-developers/plasma/pull/279) ([@Yeti-or](https://github.com/Yeti-or))
- chore: изменены ссылки на документацию [#279](https://github.com/salute-developers/plasma/pull/279) ([@IgorAntonov](https://github.com/IgorAntonov))
- fix(plasma-icons): добавлены styled-components [#279](https://github.com/salute-developers/plasma/pull/279) ([@IgorAntonov](https://github.com/IgorAntonov))
- refactor: убраны rem-ы из html svg [#279](https://github.com/salute-developers/plasma/pull/279) ([@IgorAntonov](https://github.com/IgorAntonov))
- chore(plasma-icons): иконки Info и Share [#279](https://github.com/salute-developers/plasma/pull/279) ([@IgorAntonov](https://github.com/IgorAntonov))
- fix: исправлена ошибка при билде документации [#279](https://github.com/salute-developers/plasma/pull/279) ([@IgorAntonov](https://github.com/IgorAntonov))
- chore: изменен скрипт сборки доки [#279](https://github.com/salute-developers/plasma/pull/279) ([@IgorAntonov](https://github.com/IgorAntonov))
- chore: изменена документация для иконок [#279](https://github.com/salute-developers/plasma/pull/279) ([@IgorAntonov](https://github.com/IgorAntonov))
- chore: изменены имена некоторых иконок по фигме [#279](https://github.com/salute-developers/plasma/pull/279) ([@IgorAntonov](https://github.com/IgorAntonov))

#### Authors: 5

- [@IgorAntonov](https://github.com/IgorAntonov)
- Ekaterina Anishkina ([@KateKate](https://github.com/KateKate))
- Fanil Zubairov ([@fanisco](https://github.com/fanisco))
- Vasiliy ([@Yeti-or](https://github.com/Yeti-or))
- Белоусова Алиса Дмитриевна (alisabelousova007@gmail.com)
