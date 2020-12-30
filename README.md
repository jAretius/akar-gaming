## AKAR GAMING
### ENDPOINTS
|Id|Method|Path|Description
|----------------|---------|-----------------------------|-----------------------------|
|1|get|`/`|Muestra la página de inicio desde dónde registrarse o loggearse|
|2|get|`/register`|Muestra la página desde la cual registrarse|
|3|post|`/register`|Contiene la lógica para crear un nuevo usuario y autenticarlo a la vez|
|4|get |`/login`|Muestra la página desde la cual loggearse|
|5|post|`/login`|Contiene la lógica para autenticar a un usuario|
|6|get|`/logout`|Contiene la lógica para desloggear a un usuario|
|7|post|`/search`|Permite realizar búsquedas en la página web|
|---|---------|-----------------------|--------------------------|
|8|get|`/games`|Listado de todos los juegos en la BD|
|9|get|`/games/:id`|Vista detalle del juego en cuestión|
|10|get|`/games/new`|Vista de creación de juegos|
|11|post|`/games/new`|Creación de juegos|
|12|get|`/games/edit`|Vista de edición de juegos|
|13|post|`/games/edit`|Edición de juegos|
|14|get|`/games/delete`|Eliminación de juegos|
|15|get|`/games/:id/articles`|Vista de artículos del juego en cuestión|
|16|get|`/games/:id/newArticle`|Vista de creación de reviews del juego en cuestión|
|17|post|`/games/:id/newArticle`|Creación de reviews del juego en cuestión|
|---|---------|-----------------------|--------------------------|
|18|get|`/companies`|Listado de todos las compañías en la BD|
|19|get|`/companies/:id`|Vista detalle de la compañía en cuestión|
|20|get|`/companies/new`|Vista de creación de compañías|
|21|post|`/companies/new`|Creación de compañías|
|22|get|`/companies/edit`|Vista de edición de compañías|
|23|post|`/companies/edit`|Edición de compañías|
|24|get|`/companies/delete`|Eliminación de compañías|
|25|get|`/companies/:id/articles`|Vista de artículos de la compañía en cuestión|
|26|get|`/companies/:id/newArticle`|Vista de creación de reviews de la compañía en cuestión|
|27|post|`/companies/:id/newArticle`|Creación de reviews de la compañía en cuestión|
|---|---------|-----------------------|--------------------------|
|28|get|`/users/:username`|Muestra la página principal del usuario|
|29|get|`/users/:username/activity`|Muestra los eventos el los que participa el usuario|
|30|get|`/users/:username/reviews`|Muestra las reviews hechas por el usuario|
|31|get|`/users/:username/settings`|Permite al usuario editar sus datos|
|32|post|`/users/ad/:gameId`|Permite al usuario añadir juegos a sus colecciones|
|33|get|`/users/collection/:type`|Permite al usuario visualizar sus colecciones en función del botón pulsado
|---|---------|-----------------------|--------------------------|
|34|get|`/events`|Lista todos los eventos en la BD|
|35|get|`/events/new`|Abre la vista para creación de eventos|
|36|post|`/events/new`|Creación de eventos|
|37|get|`/events/new`|Abre la vista para creación de eventos|
|38|get|`/events/edit`|Abre la vista para edición de eventos|
|39|post|`/events/edit`|Edición de eventos|
|40|get|`/events/delete`|Eliminación de eventos|
|---|---------|-----------------------|--------------------------|
|41|get|`/articles/edit`|Abre la vista para edición de artículos|
|42|post|`/articles/edit`|Edición de artículos|
|43|get|`/articles/delete`|Eliminación de artículos|

Site: [https://akar-gaming.herokuapp.com/](https://akar-gaming.herokuapp.com/)
