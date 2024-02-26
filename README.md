<h1>SISTEM DE GESTÓN DE BODEGAS (WMS) para la UNEFA basado en la SEPARATA-09</h1>

<h2>INDICE</h2>
<br>
<ul>
	<li>¿DE QUE TRATA EL PROYECTO?</li>
	<li>ESQUEMA DE FUNCIONAMIENTO DEL PROGRAMA</li>
	<li>LAS DOS PARTES DEL PROYECTO: JavaScript y Python</li>
	<li>COMO INSTALAR Y USAR</li>
</ul>

<h2>¿DE QUE TRATA EL PROYECTO?</h2>

Este proyecto fue desarrollado para cumplir la necesidad de tener su primer sistema de manejo de Base de Datos, y su primera Base de Datos en la universidad, ya que se suele usar Microsoft Excel para cumplir todos estos roles. Las funcionalidades del software fueron basadas con las necesidades de como se lleva el inventario, y respetando dichas normas. De esta forma se baso en la SEPARATA-09, la cual son las normas para llevar el inventario que se sigen en la UNEFA.

<h2>ESQUEMA DE FUNCIONAMIENTO DEL PROGRAMA</h2>

El proyecto cuenta con un Login con usuario y clave unica (que se pueden cambiar en el futuro [se recomienda que el Usuario y Clave sean confidenciales]), luego logeado arranca un Launcher para arrancar el programa, y dentro del programa cuenta con las tres funcionalidades principales; Conultar Infomacion de la base de datos, Agregar informaccion a la DB y Elminar infomacion de la DB. 

Asimismo, el programa cuenta con una guia de uso sencilla para un usuario que no tenga mucho conocimiento. Tambien cuenta con una funcionalidad de insercion de datos a un archivo de .xlsx o Excel, este ya alojado en el proyecto. Se creo esta funcion ya que se lleva el inventario de forma nacional de eesta forma (los datos de cada nucleo se presentan a la sede principal en formato Excel o .xlsx).

<em><strong>LOGIN</strong></em>
<br>
<br>
![login](https://github.com/kyablonkis/unefa-wms/assets/147773213/c14c85df-936d-459b-9d51-5803b7fe5d32)

<em><strong>LAUNCHER</strong></em>
<br>
<br>
![launcher](https://github.com/kyablonkis/unefa-wms/assets/147773213/0d9b5cd6-95d2-4d8e-9fdd-2c5420a00dd9)

<em><strong>PROGRAMA</strong></em>
<br>
<br>
![home-dark](https://github.com/kyablonkis/unefa-wms/assets/147773213/d087a7f1-7c6d-4b3d-88e3-6af2501678c1)

<h2>LAS DOS PARTES DEL PROYECTO: JavaScript y Python</h2>

La parte código de JavaScript del proyecto se basa en todas las funcionalidades que tienen que ver con el Sitio Web, manejo de la base de datos, presentacion de la información, código del lado del Backend y algunos toques de dinamismo en el Frontend. Y por otro lado todo el código en Python se basa en el Login, Launcher y Insercion de datos la a base de datos.

<h2>COMO INSTALAR Y USAR</h2>
<h3>REQUISITOS</h3>
<ul>
	<li>Python</li>
	<li>Node Js</li>
	<li>NPM</li>
</ul>
<h3>DEPENDENCIAS DE PYTHON</h3>
<ol>
	<li>openpyxl</li>
	<li>psutil</li>
	<li>flet</li>
	<li>flet-route</li>
</ol>

<em><strong>COMANDO PARA INSTALAR DEPENDENCIAS</strong></em>

	pip install openpyxl psutil flet flet-route
	 
<h3>DEPENDENCIAS DE NODE JS</h3>
<ol>
	<li>body-parser</li>
	<li>child_process</li>
	<li>cookie-parser</li>
	<li>express</li>
	<li>fs</li>
	<li>pug</li>
	<li>sqlite3</li>
</ol>

<em><strong>COMANDO PARA INSTALAR DEPENDENCIAS</strong></em>

	npm install

 

