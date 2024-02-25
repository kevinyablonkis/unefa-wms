# Importaciones
from flet import *
from flet_route import Params, Basket
from _window_corner import WindowCorner
import json
import os

# Variables
root_dir = os.path.dirname(__file__)
json_dir = os.path.join(root_dir, "assets/users/login.json")

# Estilos para la interfaz de usuario
login_gui_style:dict = {
  "label":{
    "hint_style":TextStyle(color="black"),
    "height":40,
    "width":350,
    "bgcolor":"white",
    "color":"black",
    "content_padding":5
  },
  "btn":{
    "width":200
  }
}

# Clase para la interfaz de usuario del login
class LoginGUI(UserControl):
  def __init__(self, page:Page):
    # Inicialización de la clase
    super().__init__()
    self.page = page
    self.user = TextField(hint_text="Usuario", prefix_icon=icons.PERSON, **login_gui_style["label"])
    self.password = TextField(hint_text="Contraseña", prefix_icon=icons.LOCK, password=True,**login_gui_style["label"])
    self.btn_login = ElevatedButton(text="Iniciar", on_click=self.login, **login_gui_style["btn"])

  def build(self):
    # Construcción de la estructura visual
    return Container(
      content=Column(
        controls=[
          WindowCorner(widtsrc=self.page.window_width),
          self.title(),
          self.labels()
        ],
      ),
      expand=True
    )

  def title(self):
    # Creación del título
    return Row(
      controls=[
        Text(value="Iniciar Sesión", size=30, weight="w900")
      ],
      alignment=MainAxisAlignment.CENTER
    )

  def labels(self):
    # Creación de los campos de usuario y contraseña
    return Row(
      controls=[Column(
        controls=[
          self.user,
          self.password,
          Container(self.btn_login, padding=padding.only(left=70, top=5))
        ],
      )],
      alignment=MainAxisAlignment.CENTER
    )

  def login(self, e):
    # Manejo del evento de clic en el botón de inicio
    with open(json_dir) as content:
      data = json.load(content)
    username = self.user.value
    password = self.password.value

    # Validación de campos vacíos
    if ((username == "") and (password == "")):
      self.page.snack_bar = SnackBar(
        Text("Campos Vacíos",size=15, color="white", weight="w500"),
        bgcolor=colors.RED_700
      )
      self.page.snack_bar.open = True
      self.page.update()

    # Validación de credenciales
    else:
      for user in data:
        if ((user.get("username") == username) and (user.get("password") == password)):
          data_login:dict={
            "value":True,
            "username":username
          }
          self.page.session.set("loginme", data_login)
          self.page.go("/launcher")
        else:
          self.page.snack_bar = SnackBar(
            Text("Datos Incorrectos",size=15, color="white", weight="w500"),
            bgcolor=colors.RED_700
          )
          self.page.snack_bar.open = True
          self.page.update()

# Función para la vista principal de la página de login
def login_page(page:Page, params:Params, basket:Basket):
  return View(
    "/",
    controls=[LoginGUI(page)],
    spacing=0,
    padding=0
  )
