
Sushi Go: kártyajáték
JÁTÉKOSOK: Akik a játékot játszák és pontokat gyűjtenek.
ADMIN: az a játékos, aki a programot kezeli
JÁTÉK: Egy 3 fordulóból álló menet, aminek a végén a pontszámlálás van.
FORDULÓ: Egy kártyamenet. Minden játék 3 fordulóból áll
FIGURA: Maki, Sashimi, Tempura, Gözgombóc, Nigiri, Wasabis Nigiri, stb.



Scenario: Alapértelmezett forduló és játékos

Given a játékosok összegyültek
 When admin megnyitja az alkalmazást
 Then az 1-es játékos van kiválasztva
  And az 1. forduló van kiválasztva


Scenario: forduló kiválasztása

Given az alkalmazás el van indítva
 When az admin kiválaszt egy fordulót
 Then a forduló ki lesz választva


Scenario: játékos kiválasztása

Given az alkalmazás el van indítva
 When az admin kiválaszt egy játékost
 Then a játékos ki lesz választva


Scenario: játék kezdése

Given a játékosok összegyültek
 When admin megnyitja az alkalmazást
 Then 5 játékosnak be lehet írni a figurákat
  And 3 fordulóhoz lehet felvinni a figurákat
  And meg lehet az eredményeket nézni

Taszkok:
  * figurák billentyüi
  * Eredmény oldal elkászítése
  * Eredmény oldalra átvált



Scenario Outline: Figurák beírása

Given Ki van választva egy forduló
  And kiválasztott egy játékost
 When Admin kiválaszt <figura> figurát
 Then hozzáadódik a <figura> kiválasztott játékos kiválasztott fordulójához.

Example 
| figura               |
| tempura              |
| sashimi              | 
| gőzgombóc (?)        |
| maki      (?)        |
| tojás nigiri         |
| lazac nigiri         |
| polip nigiri         |
| wasabis tojás nigiri |
| wasabis lazac nigiri |
| wasabis polip nigiri |
| puding               |

Taszkok:
  * figurák bekerülnek a játékos-forduló összeadás-listába
  * 


Scenario: Összegyüjtött figurák ellenörzése

Given Egy játékos és egy forduló ki van választva
 When Admin ránéz a képernyöre
 Then Az eddig összegyüjtött figurák listáját és pontszámát láthatja.


Scenario: Makitekercsek összege

Given Ki van választva egy forduló
  And kiválasztott egy játékost
 When Admin kiválasztja a maki figurát 
  And megadja a makitekercsek számát
 Then hozzáadódik a megadott számú makitekercs a kiválasztott játékos kiválasztott fordulójához.
 

Scenario: Forduló pontjainak számítása.

Given Egy játékos és egy forduló ki van választva
  And a játékosnak van a gyűjteményében 
 When Admin kiválaszt egy tetszőleges figurát
 Then a kiválasztott játékos kiválasztott fordulójában újraszámítódik a pontszám


 
Scenario Outline: Egyszerű figurák értéke

Given egy játékos egy fordulójának a gyüjteménye
 When admin hozzáadott egy figurát
 Then Az eredmény nullázódik 
  And Az eredményhez a <figura> hozzáad <pont> pontot annyiszor, ahány figura megtalálható a gyüjteményben.

Example
| figura               | pont |
| tempura              | 5    |
| sashimi              | 9    |
| tojás nigiri         | 1    |
| lazac nigiri         | 2    |
| polip nigiri         | 3    |
| wasabis tojás nigiri | 3    |
| wasabis lazac nigiri | 6    |
| wasabis polip nigiri | 9    |



Scenario Outline: Gőzgombócok értéke

Given egy játékos egy fordulójának a gyüjteménye
 When admin hozzáadott egy gőzgombócot
 Then Az eredmény nullázódik 
  And Az eredményhez az egyszerű figurák hozzáadják a saját pontjaikat
  And a gőzgombócok <darab> db esetén hozzáadnak <x> pontot.

Example:

| darab | x  |
| 1     | 1  |
| 2     | 3  |
| 3     | 6  |
| 4     | 10 |
| 5     | 15 |
| 6     | 15 | 
| 7     | 15 |



Scenario Outline: Makitekercsek értéke

Given egy játékos egy fordulójának a gyüjteménye
 When admin hozzáadott valamennyi makitekercset 
  And ezzel a kiválasztott fordulóban <mstr> a kiválasztott játékosnak lesz a legtöbb makitekercse
 Then Az eredmény nullázódik 
  And Az eredményhez az egyszerű figurák hozzáadják a saját pontjaikat
  And a makitekercsek hozzáadnak <x> pontot.

Example:

| mstr     | x  |
| -        | 6  |
| nem      | 0  |


Scenario Outline: Pudingok értéke

Given egy játékos egy fordulójának a gyüjteménye
 When admin hozzáadott valamennyi pudingot 
  And ezzel a kiválasztott fordulóban <mstr> a kiválasztott játékosnak lesz a <leg> pudingja 
 Then Az eredmény nullázódik 
  And Az eredményhez az egyszerű figurák hozzáadják a saját pontjaikat
  And a pudingok hozzáadnak <x> pontot.

    Examples:
        | mstr     | leg         |   x  |
        | -        | legtöbb     |   6  |
        | -        | legkevesebb |  -6  |
        | nem      | legtöbb     |   0  |
        | nem      | legkevesebb |   0  |
