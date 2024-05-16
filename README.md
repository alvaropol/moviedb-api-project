# Proyecto TMDB

El proyecto TMDB API es una aplicación web que utiliza la API de TMDB (The Movie Database) para permitir a los usuarios explorar y gestionar información relacionada con películas, series de televisión y actores. Este proyecto ha sido desarrollado por: Álvaro Polonio Domínguez.

## Descripción del proyecto

El objetivo de este proyecto es brindar a los usuarios una plataforma para explorar y gestionar contenido relacionado con películas, series de televisión y actores utilizando la base de datos que tiene TMDB. 

Las principales características de la aplicación incluyen:

- Exploración de Películas/Series/Actores: Los usuarios pueden ver listas de todas las películas/series/actores que existen, mediante paginación o por búsqueda por nombre.

- Detalle de Películas/Series/Actores: Los usuarios pueden acceder a información detallada sobre cada película/serie/actor, incluyendo sinopsis, puntuaciones, actores principales, y más detalles.

- Favoritos: Los usuarios pueden agregar películas y series a su lista de favoritos para un acceso rápido y fácil.

- Valoración: Los usuarios pueden calificar películas y series para compartir sus opiniones con la comunidad.

- Gestión de listas personalizadas las cuales el usuario puede crear/editar/eliminar, y donde puede añadir películas, series, etc.

### IMPORTANTE 

Para que la valoración funcione hay que meterse al detalle de la película y *darle a f5 (actualizar página)* --> detalle a corregir

- Listas Personalizadas: Los usuarios pueden crear listas personalizadas y agregar películas y series a estas listas para organizar su contenido de acuerdo a sus preferencias.

- Trending: Los usuarios podrán visitar una sección llamada "Trending" donde pueden ver las tendencias del dia o de la semana en peliculas/series o actores.

## Instrucciones para desplegar en localhost

Para ejecutar esta aplicación en tu máquina local, sigue estos pasos:

1. Asegúrate de tener Node.js y npm instalados en tu sistema. Si aún no lo tienes, puedes descargarlos e instalarlos desde [nodejs.org](https://nodejs.org/).

2. Clona este repositorio en tu ordenador utilizando Git: *git clone https://github.com/nonoml16/proyecto-angular-tmdb-api.git*

3. Una vez que clones el repositorio, abre el proyecto en un editor de código fuente (concretamente Visual Studio Code)

4. Dentro de vscode, abre una nueva terminal y navega hasta la raíz del proyecto donde hayas clonado el repositorio.

5. Una vez en la ruta de la raíz del proyecto, ejecuta el comando *npm install* para instalar las carpetas y los módulos necesarios para la ejecución del proyecto en Angular.

6. Por último ejecuta *ng serve -o* y coloca la ruta *http://localhost:4200/* en tu navegador favorito para así poder ver la aplicación web.

## Documentation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
