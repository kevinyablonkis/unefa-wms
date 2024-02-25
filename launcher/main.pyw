from flet import *
from _window_corner import WindowCorner
from _launcher_gui import launcher_page, LauncherGUI
from _login_gui import login_page
from flet_route import Routing, path

WINDOW_HEIGHT:int = 300
WINDOW_WIDTH:int = 480

class Properties(UserControl):
    def __init__(self, page:Page):
        super().__init__()
        # Se forzo para que se vea bien en Windows
        page.window_width = WINDOW_WIDTH
        page.window_height = WINDOW_HEIGHT
        # Estilos usados para Linux
        # page.window_min_height = WINDOW_HEIGHT
        # page.window_max_height = WINDOW_HEIGHT
        # page.window_min_width = WINDOW_WIDTH
        # page.window_max_width = WINDOW_WIDTH
        page.window_frameless = True
        page.spacing = 0
        page.padding = 0
        page.theme = Theme(font_family="system-ui")
        page.theme_mode = ThemeMode.DARK
        page.window_center()

def main(page:Page):
    properties:UserControl = Properties(page)
    corner:ResponsiveRow = WindowCorner(page)
    launcher_gui:Container = LauncherGUI(page)
    #login_gui:Container = LoginGUI()

    app_route=[
        path(url="/", view=login_page, clear=True),
        path(url="/launcher", view=launcher_page, clear=True)
    ]

    Routing(page=page, app_routes=app_route)

    page.add(
        Container(
            Column(
                controls=[
                    page.go(page.route)
                ]
            )
        )
    )

    page.update()

app(target=main, assets_dir="assets")