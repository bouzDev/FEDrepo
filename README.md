# Procesverslag

Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door _open_ toe te voegen aan een _details_ element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.

## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

### Auteur:

Anwar Bouzoubaa

#### Je startniveau:

Zwart

#### Je focus:

Beide

</details>

## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

### Je opdracht:

https://www.evina.com/

#### Screenshot(s) van de eerste pagina (small screen):

Home pagina
<img src="../readme-images/Evina-Homepage.webp" width="375px" alt="Op de home pagina zijn er appear animation, slider, counter animation, scroll animation">

#### Screenshot(s) van de tweede pagina (small screen):

Career pagina
<img src="../readme-images/Evina-Careerpage.webp" width="375px" alt="Op de career pagina is een filter en voor de rest veel plekken waar ik kan werken met grid en flex layout ">

</details>

## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 1e werkgroep</summary>

### Bevindingen

Lijst met je bevindingen die in de test naar voren kwamen:

#### Screenreader

Linkjes worden voorgelezen in het menu die niet te zien zijn. Het beste zou zijn deze display:none maken todat mensen de link kiezen.

De home link wordt voorgelezen als Evina. Dit is niet duidelijk voor mensen als ze erop klikken dat ze naar de home pagina gaan. Deze moet veranderd worden naar 'Home'.

De headers die voorgelezen worden hebben niet de juiste hiërarchie. Een heading in een card die in een section zit is aangeduind als een kopstuk #2 terwijl dit een kopstuk #3 moet zijn.

De linkjes hebben geen duidelijke benamingen. Dit kan anders door aan te geven wat er gebeurd als je daar op klikt.

#### Muis en Toetsenbord

De tab gaat in de submenu die je niet kan zien. Het beste zou zijn dat de submenu links pas ziet wanneer je enter drukt.

Heel veel buttons hebben geen focus state. Door een kleur verandering of omlijning toe te voegen is het duidelijker waar je precies bent.

#### Motoriek (shocks, elastiekjes)

Je kan niet goed scrollen met spasme. Gelukkig kan je met de pijtjes naar beneden scrollen.

#### Visueel (brillen, contrast, kleurenblind, dark/light).

De kleuren hebben een goeie contrast maakt niet uit welke kleurenblindheid.

De bril met blur/glare laat zien dat niet alle teksten goed leesbaar zijn. Ik denk dat het juist belangerijk is dat in ieder geval de headings wat groter moeten zijn zodat mensen weten naar welk kopje ze kijken.

</details>

## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 2e werkgroep</summary>

### de hele pagina:

  <img src="../readme-images/Breakdownschets.jpg" width="375px" alt="breakdown van de hele pagina">

### dynamisch deel (bijv menu):

  <img src="../readme-images/Breakdownschets-menu.jpg" width="375px" alt="breakdown van een dynamisch deel">

</details>

## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1e voortgang</summary>

### Stand van zaken

Ik had problemen met de target selector en de animatie van een zijmenu.

### Agenda voor meeting

samen met je groepje opstellen

| Anwar          | student 2          | student 3    | student 4        |
| -------------- | ------------------ | ------------ | ---------------- |
| Sup tag        | en dit             | en ik dit    | en dan ik dat    |
| A voor buttons | dit als er tijd is | nog een punt | dit wil ik zeker |
| gebruiker voor | ...                | ...          | ...              |
| target selec   | ...                | ...          | ...              |

### Verslag van meeting

hier na afloop snel de uitkomsten van de meeting vastleggen

-   Sup tag kan ik gewoon gebruiken.
-   Ik heb uiteindelijk geen target selector gebruikt omdat ik er een bug kwam
-   Ik heb nu een checkbox gebruikt voor een animatie

</details>

## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2e voortgang</summary>

### Stand van zaken

Ik heb in plaats van een target selector die de zij menu opent een input checkbox met 2 labels gebruikt.
De labels zorgen ervoor dat de checkbox getoggeld kunnen worden. Ik kan dan een het zijmenu tonen wanneer
het gecheckt is en wanneer het uncheckt is dan gaat het weer naar de originele positie

### Agenda voor meeting

samen met je groepje opstellen

| Anwar                 | student 2          | student 3    | student 4        |
| --------------------- | ------------------ | ------------ | ---------------- |
| Media query volgorde. | en dit             | en ik dit    | en dan ik dat    |
| Hoe appear animatie?  | dit als er tijd is | nog een punt | dit wil ik zeker |
|                       | ...                | ...          | ...              |

### Verslag van meeting

hier na afloop snel de uitkomsten van de meeting vastleggen

-   Media query beginnen met mobile en dan tablet en dan desktop
-   Ik moet intersection obserber gebruiken.

</details>

## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 8e werkgroep</summary>

### Bevindingen

Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

#### Screenreader

-   Alles een juiste naam geven dmv area-labels of correcte beschrijvingen.

#### Muis en Toetsenbord

-   Navbar/hamburger menu openen wanneer je met de screen reader hier in terecht komt.

#### Motoriek (shocks, elastiekjes)

-   Motoriek beperkt houd je ook niet tegen om de site te gebruiken.

#### Visueel (brillen, contrast, kleurenblind, dark/light).

-   Door goed gebruik van contrast is kleurenblindheid geen probleem.
-   Bij Central field loss wordt het wat lastiger ivm dat alles in het midden staat. Desondanks is de site wel goed te volgen.
-   Combined loss maakt het lezen van de kleine teksten wel wat lastiger maar niet onmogelijk. Misschien kan je hier nog wat mee doen.
-   Hemifield loss (half zicht) heeft weinig invloed op het gebruik van jouw site, dit heb je goed gedaan door de belangrijke info in het midden te zetten en eventuele bredere elementen dmv visual hints aan te geven.

</details>

## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3e voortgang</summary>

### Stand van zaken

### Agenda voor meeting

samen met je groepje opstellen

| student 1        | student 2          | student 3    | student 4        |
| ---------------- | ------------------ | ------------ | ---------------- |
| button all unset | en dit             | en ik dit    | en dan ik dat    |
| svg animeren     | dit als er tijd is | nog een punt | dit wil ik zeker |
| unset op media   |
| query            | ...                | ...          | ...              |

### Verslag van meeting

hier na afloop snel de uitkomsten van de meeting vastleggen

-   Foto's maken van oudere commits
-   Document het menu
-   Hoeft geen unset op media query wanneer van display flex naar display grid gaat.

</details>

## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

### Je uitkomst - karakteristiek screenshots:

  <img src="../readme-images/Evina-Homepage-new.webp" width="375px" alt="Mijn homepagina helemaal uitgewerkt in detail">
  <img src="../readme-images/Evina-Careerpage-new.webp" width="375px" alt="De career pagina helemaal uitgewerkt">

### Dit ging goed/Heb ik geleerd:

Nieuwe dingen geleerd zoals aria-label, direct sibling selector en intersection observer.
Ik heb display grid gebruikt om geen div als container te gebruiken.

### Dit was lastig/Is niet gelukt:

Ik vond het lastig om geen Divs te gebruiken maar dat was juist de challenge voor mij.
Dit heeft er voor gezorgd dat het wat langer duurde om deze website te maken.
Ook wilde ik geen javascript gebruiken voor sommige interacties.
Het is mij niet gelukt om het formulier te maken die zou verschijnen wanneer je op een button klikt

</details>

## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg).

1. https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within
2. https://www.w3schools.com/howto/howto_css_hide_scrollbars.asp
3. https://www.youtube.com/watch?v=2IbRtjez6ag
4. https://css-tricks.com/what-does-playsinline-mean-in-web-video/
5. https://css-tricks.com/snippets/css/a-guide-to-flexbox/
6. https://css-tricks.com/snippets/css/complete-guide-grid/
7. https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label
8. https://www.w3schools.com/tags/tag_summary.asp
9. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl

</details>
