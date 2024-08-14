# uBlock Lite -compatible con Manifest v3- para Chrome y navegadores basados en Chromium (Vivaldi, Opera...) - fork con filtros adicionales específicos para webs españolas

Si tienes uBlock Origin, verás 'Esta extensión dejará de estar disponible pronto ya que no sigue las buenas prácticas de extensiones para Chrome / This extension may soon no longer be supported because it doesn't follow best practices for Chrome extensions.'

Básicamente, en el 'nombre de la seguridad', Google va a dejar obsoleto el mítico uBlock Origin (El #1 bloqueador de anuncios - más ligero y completo) junto a muchas otras extensiones al implementar el polémico Manifest v3 o 'MV3', para aislar y restringir permisos a las extensiones. 

Cuesta creer del todo que sea la razón, al ver la cantidad de extensiones fake en la Store (extensiones VPN que te convierten en botnet, clones de otras extensiones...) junto a las estrictas restricciones que matan extensiones tan populares como uBlock Origin.



¿En qué se diferenecia uBlock Origin de uBoL (uBlock Lite)?
uBoL:
-No va con blocklists ( URls de hostnames, dominios y regex en un .txt), si no con 'rulesets': uBoL inyecta código que bloquea la carga de los ads y demás molestias.
-No se pueden añadir rulesets en los Ajustes de la extensión, deben formar parte de la extensión ya built - por eso he creado este fork.
-No tiene la selección de 'filtro cosmético' (Seleccionar un área para bloquearla).
-Es mucho más ligera que uBlock origin y súper eficiente, soportada en dispositivos muy antiguos (Tanto PC como Android -Kiwi Browser-).

Créditos a GorkHill, el creador de uBo y de uBoL. 

Nota: En la instalación, salen más pop-ups 'solicitando permisos' - pero dado las restricciones de MV3, usa muchos menos en comparación.
Es típico diseño UX deceptive para causar duda. Puedes leer todos los detalles en la FAQ - Wiki: 

<p align="center">

1) Instálala:
<a href="https://chrome.google.com/webstore/detail/ublock-origin-lite/ddkjiahejlhfcafbddmgiahcphecmpfh"><img src="https://user-images.githubusercontent.com/585534/107280622-91a8ea80-6a26-11eb-8d07-77c548b28665.png" alt="URl de instalación de uBO Lite para Chromium"></a>

2) Acepta los 'permisos adicionales' - necesario para que filtre bien inyectando bloqueos.

![uBOL's popup panel: permissions to inject content](https://user-images.githubusercontent.com/585534/195342612-85d109d9-9006-4eb5-95a5-fec8a4f233ea.png)

3) En ajustes, selecciona el modo 'Optimal or Complete' como default.

De nuevo te pedirá aceptar permisos para modificar y leer datos de las webs, acepta:
![uBOL's options: Default filtering mode](https://user-images.githubusercontent.com/585534/195343335-a0aa103e-621e-4137-9bcf-9821dc881be1.png)

Por defecto, trae los rulesets actualizados o parámetros de las mismas listas que vienen por defecto en uBlock Origin:
- uBlock Origin's built-in filter lists.
- EasyList - España y LATAM.
- EasyPrivacy - España y LATAM.
- Peter Lowe’s Ad and tracking server list.


#### `noFiltering`

An array of hostnames (string) for which no filtering will occur.

#### `disableFirstRunPage`

A boolean which if set to `true` will prevent uBOL's first-run page to be opened.

## FAQ - Wiki: (https://github.com/uBlockOrigin/uBOL-home/wiki/Frequently-asked-questions-(FAQ)).
