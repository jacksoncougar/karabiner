# karabiner 60% keyboard layout keybindings

Custom complex-modifications for [karabiner-elements](https://karabiner-elements.pqrs.org/).
Adds key-remapping layers that aim to replicate the experience of using a 60% keyboard layout with layer support.


## Modifiers:

- `capslock`: enables Layer-1
- `capslock + tab`; enables Layer-2

## Bindings on Layer-1:

|From         |To                            |
|-------------|------------------------------|
|i`,`j,`k`,`l`| `up`, `left`, `down`, `right`|
|`h,n`        | `home`, `end`                |
|`[`,`'`      | `backspace`, `delete`        |

## Bindings on Layer-2:


|From           |To                            |
|---------------|------------------------------|
|`b`,`n`,`m`,`,`| `0`,`1`,`2`,`3`              |
|`h`,`j`,`k`    | `4`,`5`,`6`                  |
|`y`,`u`,`i`    | `7`,`8`,`9`                  |
|`t`,`g`        | `/`,`*`                      |
|`o`,`l`        | `-`,`+`                      |

## TODO:

- [x] Create domain specific language (DSL) for karabiner 
- [ ] Add language support for modifier keys
- [ ] Add language support for other conditions (e.g. active application)
- [ ] Add function to compiler to generate documentation for bindings?