# Language Design Document

## Create alternative syntax for creating layers

Creating anything using the json format was pretty painful; it would be nice to have a human usable 
domain specific language for creating keyboard layers with simple key remappings.

MVP features:
- layers can have sets of mapping, toggles, or extend another layer's mappings.
- the 'is' keyword defines a straight one-to-one key remapping that works with all modifiers.
- the 'nothing' keyword can be used to disable a key, or create a layer that only has remapped keys.

### Example

```
capslock toggles layer1

up is nothing
left is nothing
down is nothing
right is nothing

create layer named layer2
  extends layer1
  has numpad set
done

create layer named layer1
  has nav set
  tab toggles layer2
done

create layer named numpad
  extends nothing
  has numpad set
done

create set named nav
  i is up
  j is left
  k is down
  l is right
  a is shift
  s is control
done

create set named numpad
  b is 0
  n is 1
  m is 2
  , is 3
  h is 4
  j is 5
  k is 6
  y is 7
  u is 8
  i is 9
done
```

### Tokens

Keywords:
- nothing
- create
- is
- toggles
- extends
- has
- layer
- set
- named
- done

Keys:
- ` 1 2 3 4 5 6 7 8 9 0 - = q w e r t y u i o p [ ] \ a s d f g h j k l ; ' z x c v b n m , . /
- tab space right left ... return esc
- f1 ... f20

### Grammar

    IS_STATEMENT        is KEY_NAME IS_KEYWORD KEY_NAME

    EXTENDS_STATEMENT   is EXTENDS_KEYWORD LAYER_NAME
                        or EXTENDS_KEYWORD NOTHING_KEYWORD

    HAS_STATEMENT       is HAS_KEYWORD SET_NAME

    TOGGLE_STATEMENT    is KEY_NAME TOGGLE_KEYWORD LAYER_NAME

    SET_STATEMENT       is IS_STATMENT

    LAYER_STATEMENT     is HAS_STATMENT
                        or EXTENDS_STATMENT
                        or TOGGLE_STATEMENT

    NOTHING             is

    LAYER_STATEMENTS    is NOTHING
                        or LAYER_STATEMENT LAYER_STATEMENTS

    SET_STATEMENTS      is NOTHING
                        or SET_STATEMENT SET_STATEMENTS

    CREATE_NAMED_LAYER  is CREATE_KEYWORD LAYER_KEYWORD NAMED_KEYWORD LAYER_NAME

    CREATE_NAMED_SET    is CREATE_KEYWORD SET_KEYWORD NAMED_KEYWORD SET_NAME

    LAYER_BLOCK         is CREATE_NAMED_LAYER LAYER_STATEMENTS DONE_KEYWORD

    SET_BLOCK           is CREATE_NAMED_SET SET_STATEMENTS DONE_KEYWORD

<!---
## Plaintext tab tables

Automatically format text into columns based on thr presence of tabs/double spaces
--->