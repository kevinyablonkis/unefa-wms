#Página para la vista del launcher de la app UNEFA WMS, que servirá para iniciar y detener el servidor de Node.js para la ejecución web de la app.

from flet import *
from time import sleep
import os
import subprocess as sp
import webbrowser as wb
from flet_route import Params, Basket
from _window_corner import WindowCorner

#Dirección para localizar el archivo index.js para iniciar el servidor.
ROOT_DIRECTORY = os.path.dirname(__file__)
INDEXJS = os.path.join(ROOT_DIRECTORY, "../index.js")

#Controles que se mostrarán en la página
class LauncherGUI(UserControl):
    def __init__(self, page:Page):
        super().__init__()
        self.page = page

    #Función build() para retornar los controles, la función para cerrar el servidor es importada de la clase WindowCorner encontrada en _window_corner.py
    def build(self):
        logo = Image(src="logo-unefa.png", width=130, height=130, fit=ImageFit.CONTAIN)
        name = Text(value="UNEFA WMS", size=40)
        btn_start = FloatingActionButton(text="Iniciar", width=180, on_click=self.start)
        btn_close = FloatingActionButton(text="Cerrar", width=180, bgcolor=colors.RED_800, on_click=lambda e: WindowCorner._stop_node(self))

        return Container(
            Column(controls=[
                WindowCorner(widtsrc=self.page.window_width),
                Row(
                    controls=[
                        logo,
                        Container(name, padding=padding.only(right=20))
                    ],
                    alignment=MainAxisAlignment.CENTER,
                    spacing=0,
                ),
                Row(
                    controls=[
                        btn_start,
                        btn_close
                    ],
                    alignment=MainAxisAlignment.SPACE_AROUND
                )
            ],
            spacing=20,
            horizontal_alignment=CrossAxisAlignment.CENTER
            )
        )

    #Función para iniciar el server y abrir el proyecto en el navegador en el puerto 3000
    def start(self, e):
        sp.Popen(f"node ../index.js", shell=True)
        sleep(3)
        wb.open("http://localhost:3000")

#Retornor de la Vista "/launcher" para mostrar la página
def launcher_page(page:Page, params:Params, basket:Basket):
    return View(
        "/launcher",
        controls=[LauncherGUI(page)],
        padding=0,
        spacing=0
    )