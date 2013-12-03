SodaSoft
========

Aplicación para la gestión de Soderia, desarrollado para la catedra de Ingenieria del Software 2 Año 2013
- Esta aplicacion hibrida fue analizada, diseñada y propotipada en el trayecto de la cursada
de la materia Ingenieria del Software 1 y 2 de la carrera de Ing. Informatica de la UNJu.



Arqutiectura del Core de la aplicacion 
=====================================

Esta arquitercura solo esta contemplando parte del diseño y solo el nucleo de la App hibrida
-Nota: Para el armado del proyecto definitivo necesita adicionarle la arquitectura de Android y los jar 
correspondientes a Apache Cordova (Phonegap), como asi tambien la activiti inicial


SodaSoft.
├── config.xml
├── css
│   ├── bootstrap.css
│   ├── bootstrap.min.css
│   ├── bootstrap-responsive.css
│   ├── bootstrap-responsive.min.css
│   └── index.css
├── html
│   ├── backup.html
│   ├── calendario.html
│   ├── crearInforme.html
│   ├── detalleCliente.html
│   ├── login.html
│   ├── nuevoBackup.html
│   ├── nuevoCalendario.html
│   ├── pago.html
│   └── venta.html
├── icon.png
├── img
│   ├── glyphicons-halflings.png
│   ├── glyphicons-halflings-white.png
│   └── logo.png
├── index.html
├── js
│   ├── bootstrap.js
│   ├── bootstrap.min.js
│   ├── index.js
│   ├── jquery-1.10.1.min.js
│   └── SodaSoft
│       ├── businesslogic
│       │   ├── detalleCliente.js
│       │   ├── manager.js                                                                                         
│       │   ├── nuevoCliente.js                                                                                    
│       │   └── visitasDeHoy.js                                            
│       ├── connection                                                          
│       │   └── connection.js              
│       ├── model                                                                                                  
│       │   ├── dao
│       │   │   └── clienteDAO.js
│       │   └── vo
│       │       ├── barrioVO.js
│       │       ├── clienteVO.js
│       │       ├── estadoActivoVO.js
│       │       ├── estadoInactivoVO.js
│       │       ├── estadoMorosoVO.js
│       │       └── estadoVO.js
│       └── pruebas
│           └── pruebas.js
├── LICENSE
├── README.md
├── res
│   ├── icon
│   │   ├── android
│   │   │   ├── icon-36-ldpi.png
│   │   │   ├── icon-48-mdpi.png
│   │   │   ├── icon-72-hdpi.png
│   │   │   └── icon-96-xhdpi.png
│   │   ├── bada
│   │   │   └── icon-128.png
│   │   ├── bada-wac
│   │   │   ├── icon-48-type5.png
│   │   │   ├── icon-50-type3.png
│   │   │   └── icon-80-type4.png
│   │   ├── blackberry
│   │   │   └── icon-80.png
│   │   ├── ios
│   │   │   ├── icon-57-2x.png
│   │   │   ├── icon-57.png
│   │   │   ├── icon-72-2x.png
│   │   │   └── icon-72.png
│   │   ├── tizen
│   │   │   └── icon-128.png
│   │   ├── webos
│   │   │   └── icon-64.png
│   │   └── windows-phone
│   │       ├── icon-173-tile.png
│   │       ├── icon-48.png
│   │       └── icon-62-tile.png
│   └── screen
│       ├── android
│       │   ├── screen-hdpi-landscape.png
│       │   ├── screen-hdpi-portrait.png
│       │   ├── screen-ldpi-landscape.png
│       │   ├── screen-ldpi-portrait.png
│       │   ├── screen-mdpi-landscape.png
│       │   ├── screen-mdpi-portrait.png
│       │   ├── screen-xhdpi-landscape.png
│       │   └── screen-xhdpi-portrait.png
│       ├── bada
│       │   └── screen-portrait.png
│       ├── bada-wac
│       │   ├── screen-type3.png
│       │   ├── screen-type4.png
│       │   └── screen-type5.png
│       ├── blackberry
│       │   └── screen-225.png
│       ├── ios
│       │   ├── screen-ipad-landscape-2x.png
│       │   ├── screen-ipad-landscape.png
│       │   ├── screen-ipad-portrait-2x.png
│       │   ├── screen-ipad-portrait.png
│       │   ├── screen-iphone-landscape-2x.png
│       │   ├── screen-iphone-landscape.png
│       │   ├── screen-iphone-portrait-2x.png
│       │   ├── screen-iphone-portrait-568h-2x.png
│       │   └── screen-iphone-portrait.png
│       ├── tizen
│       │   └── README.md
│       ├── webos
│       │   └── screen-64.png
│       └── windows-phone
│           └── screen-portrait.jpg
├── spec
│   ├── helper.js
│   ├── index.js
│   └── lib
│       └── jasmine-1.2.0
│           ├── jasmine.css
│           ├── jasmine-html.js
│           ├── jasmine.js
│           └── MIT.LICENSE
└── spec.html


Pruebas de Unitaria del modulo Visita de Hoy
=============================================

Dado que la app es hibrida y que esta solo usa el motor V8 que preveen los browser Google Chrome y Safari
esta puede ser corrida sobre uno de estos. Independientemente del S.O. que este usando

Para el inicio de la prueba necesita descomentar las lineas (115-118) del index.html correspondientes a los
script de carga de base de datos. Una vez hecho esto y ejecutado es index.html, debe, volver a comentarlas
para evitar que se hagan sobrecargas.

La prueba consiste en que dependiendo el dia y el horario en el que se encuentre, el sistema va a traer los
correspondientes clientes que correspondan al calendario de ese dia y turno (ej. Lunes , Mañana) con estos 
datos el se hace un flitrado de los clientes corresponientes a los barrios que tiene el calendario y con ellos
mostrar a los clientes correspondientes. Tener en cuenta que  la app toma la fecha y hora del sistema, pero si 
quiere realizar pruebas con otros dias en las lineas (37 - 45) del archivo SodaSoft/js/SodaSoft/model/dao/clienteDAO.js podra encontrar la sentencia SQL parseada de SQLite la cual podra 
ejecurala sobre la base de dataos creada.(1)
Con esto relizado podemos obtener claramente el resultado correcto y esperado, por lo que concluimos que las pruebas fueron realizadas correctamente


(1)Nota: Para encontrar la base de datos en GNU/Linux esta se guarda en el directorio 
		~/.config/google-chrome/Default/databases/file__0 con el nombre correspondiente al ID del registro
		de bd en la bd maestra Databases.db ubicado en el directoria anterior
		Recomendamos el uso de sqlitebrowser para su visualizacion y manejo
		site: http://sqlitebrowser.sourceforge.net/


Pruebas Funcionales
===================

- La aplicación tendrá que cargar ocupando un limite máximo de 400 mb de memoria R- La aplicación no debe tardar mas de 10 segundos en estar cargue completamente. Esta prueba si bien se llevo a cabo sobre con un prototipo logro ser aceptada, para ello emulamos un las herramientas de SDK de Google un tablet generica con las carectericas pretendidas y una Nexus 7, probados con Android 2.3 y Android 4.0 en ambos casos. Tambien se realizo un apk para
el cual fue ejecutado en un Galaxy Young (un dispositivo muy por debajo de lo requerido) obteniendo resultados 
favorables

- La base de datos (base de datos) de la aplicación no debe sobrepasar 16 GB. Este requisito es gratamente superado dado que con una carga inicial de prueba la base de datos SQLite3 no sobrepasa 40 KB


	
	

