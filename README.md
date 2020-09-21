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
|---|---------|-----------------------|--------------------------|
|7|get|`/games`|Listado de todos los juegos en la BD|
|8|get|`/games/:id`|Vista detalle del juego en cuestión|
|---|---------|-----------------------|--------------------------|
|9|get|`/company`|Listado de todos las compañías en la BD|
|10|get|`/company/:id`|Vista detalle de la compañía en cuestión|
|---|---------|-----------------------|--------------------------|
|11|get|`/users/:username`|Muestra la página principal del usuario|
|12|get|`/users/:username/activity`|Muestra los eventos el los que participa el usuario|
|13|get|`/users/:username/reviews`|Muestra las reviews hechas por el usuario|
|14|get|`/users/:username/settings`|Permite al usuario editar sus datos|
