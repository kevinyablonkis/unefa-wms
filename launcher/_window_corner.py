from flet import *
from flet_route import Params, Basket
import psutil

#Estilos que se aplicarán a los botones y texto de la ventana.
window_corner_style:dict = {
    "buttons":{
        "icon_color": "white",
        "scale":0.8
    },
    "text":{
        "value": "UNEFA WMS Launcher",
        "color": "white",
        "size": "15",
    },
    "container_text":{
        "padding": padding.only(left=15)
    }
}

#Clase para crear los bordes para la ventana.
class WindowCorner(UserControl):
    def __init__(self, widtsrc):
        super().__init__()
        self.widtsrc = widtsrc

    #Bordes de la ventana.
    def build(self):
        return ResponsiveRow([
            WindowDragArea(
                Container(
                    width = self.widtsrc,
                    content=self._build_corner(),
                    opacity=0.7
                ),
            )
        ])

    #Titulo y botones de minimizar y cerrar ventana.
    def _build_corner(self):
        title:Text = Text(**window_corner_style["text"])
        btn_minimize:IconButton = IconButton(icons.REMOVE, **window_corner_style["buttons"], on_click=self._minimize)
        btn_close:IconButton = IconButton(icons.CLOSE, **window_corner_style["buttons"], on_click=self._close)

        return Row(
            controls=[
                Container(
                    content=title, **window_corner_style["container_text"]
                ),
                Container(
                    content=Row(
                        controls=[
                            btn_minimize,
                            btn_close
                        ]
                    )
                )
            ],
            alignment=MainAxisAlignment.SPACE_BETWEEN
        )

    #Función para cerrar.
    def _close(self, e):
        self._stop_node()
        self.page.window_close()

    #Función para minimizar.
    def _minimize(self, e):
        self.page.window_minimized = True
        self.page.update()

    #Función para cerrar el servidor de Node.js
    def _stop_node(self):
        for proc in psutil.process_iter(["pid", "name"]):
            # if proc.info["name"] == ("node" or "node.exe"):
            if proc.info["name"] == "node.exe":
                p = psutil.Process(proc.info["pid"])
                p.terminate()