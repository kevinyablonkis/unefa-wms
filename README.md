<h1>SISTEM DE GESTÓN DE BODEGAS (WMS) para la UNEFA basado en la SEPARATA-09</h1>

<h2>ÍNDICE</h2>
<ul>
	<li>¿DE QUÉ TRATA EL PROYECTO?</li>
	<li>ESQUEMA DE FUNCIONAMIENTO DEL PROGRAMA</li>
	<li>LAS DOS PARTES DEL PROYECTO: JavaScript y Python</li>
	<li>COMO INSTALAR Y USAR</li>
</ul>

<h2>¿DE QUÉ TRATA EL PROYECTO?</h2>

Este proyecto fue desarrollado para cumplir la necesidad de tener su primer sistema de manejo de Base de Datos, y su primera Base de Datos en la universidad, ya que se suele usar Microsoft Excel para cumplir todos estos roles. Las funcionalidades del software fueron basadas con las necesidades de como se lleva el inventario, y respetando dichas normas. De esta forma se basó en la SEPARATA-09, la cuál es la norma que se sigue en la UNEFA para llevar el inventario.

<h2>ESQUEMA DE FUNCIONAMIENTO DEL PROGRAMA</h2>

El proyecto cuenta con un Login con usuario y clave única (que se pueden cambiar en el futuro [se recomienda que el Usuario y Clave sean confidenciales]), luego logeado arranca un launcher para arrancar el programa, y dentro del programa cuenta con las tres funcionalidades principales; Consultar Información de la base de datos, Agregar información a la base de datos y Eliminar información de la base de datos. 

Asimismo, el programa cuenta con una, guía de uso sencillo para un usuario que no tenga mucho conocimiento. También cuenta con una funcionalidad de inserción de datos a un archivo de .xlsx o Excel, este ya alojado en el proyecto. Se creó esta función, ya que se lleva el inventario de forma nacional de esta forma (los datos de cada núcleo se presentan a la sede principal en formato Excel o .xlsx).

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

La parte código de JavaScript del proyecto se basa en todas las funcionalidades que tienen que ver con el Sitio Web, manejo de la base de datos, presentación de la información, código del lado del Back-end y algunos toques de dinamismo en el Front-end. Y, por otro lado, todo el código en Python se basa en el Login, Launcher e Inserción a la hoja de cálculo.

<h2>COMO INSTALAR Y USAR</h2>
<h3>REQUISITOS</h3>
<ul>
	<li>Python</li>
	<li>PIP</li>
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

<h3>ARRANCAR EL PROYECTO</h2>

El launcher se encuentra en la carpeta de <em><strong>/launcher</strong></em>, el archivo a ejecutar o hacer CLICK sería <em><strong>main.pyw.</strong></em>.

<em><strong>NOTA:</strong></em> La extensión .pyw es para que se ejecute Python en segundo plano sin mostrar la consola. Sí se desea ver la consola cambiar <em><strong>.pyw</strong></em> por <em><strong>.py</strong></em>.

<em><strong>NOTA IMPORTANTE:</strong></em> El Usuario y clave del Login están en la carpeta del proyecto <em><strong>/launcher/assets/users</strong></em>

