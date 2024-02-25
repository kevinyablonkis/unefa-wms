import json
from copy import copy
from openpyxl.utils import rows_from_range
import openpyxl

class PasteData:
    def __init__(self, sheet):
        self.sheet = sheet

    def add_all_data(self, ranges, data):
        for i, rango in enumerate(ranges):
            self.add_data_sheet(rango, data[i])

    def add_data_sheet(self, rango, data):
        cell_range = self.sheet[rango]

        for i, cell in enumerate(cell_range):
            if i < len(data):
                cell[0].value = data[i]

class CopyPasteStyles:
    def __init__(self, src, dst):
        self.src = src
        self.dst = dst

    def copy_paste_all(self, src_rango, dst_rango):  # Accept both source and destination ranges
        self.copy_paste_styles(src_rango, dst_rango)
        self.copy_paste_attributes(src_rango)

    def copy_paste_styles(self, src_rango, dst_rango):
        for src_row, dst_row in zip(rows_from_range(src_rango), rows_from_range(dst_rango)):
            for src_cell, dst_cell in zip(src_row, dst_row):
                self.dst[dst_cell].font = copy(self.src[src_cell].font)
                self.dst[dst_cell].border = copy(self.src[src_cell].border)
                self.dst[dst_cell].fill = copy(self.src[src_cell].fill)
                self.dst[dst_cell].number_format = copy(self.src[src_cell].number_format)
                self.dst[dst_cell].protection = copy(self.src[src_cell].protection)
                self.dst[dst_cell].alignment = copy(self.src[src_cell].alignment)
                self.dst[dst_cell].value = self.src[src_cell].value

    def copy_paste_attributes(self, src_rango):
        self.dst.sheet_format = copy(self.src.sheet_format)
        self.dst.sheet_properties = copy(self.src.sheet_properties)
        self.dst.merged_cells = copy(self.src.merged_cells)
        self.dst.page_margins = copy(self.src.page_margins)
        self.dst.freeze_panes = copy(self.src.freeze_panes)
        self.dst.row_dimensions[50] = copy(self.src.row_dimensions[38])

        for rd in range(len(self.src.row_dimensions)):
            self.dst.row_dimensions[rd] = copy(self.src.row_dimensions[rd])

        for key, value in self.src.column_dimensions.items():
            self.dst.column_dimensions[key].min = copy(self.src.column_dimensions[key].min)
            self.dst.column_dimensions[key].max = copy(self.src.column_dimensions[key].max)
            self.dst.column_dimensions[key].width = copy(self.src.column_dimensions[key].width)
            self.dst.column_dimensions[key].hidden = copy(self.src.column_dimensions[key].hidden)

class JSONReader:
    def __init__(self, route):
        self.route = route

    def get_value_parameters(self, parameter):
        values = []

        for i in parameter:
            a = self.read_data(i)
            values.append(a)
        return values

    def get_value_parameters_name(self, parameter):
        with open(self.route) as content:
            r = json.load(content)

            data = []
            for i in parameter:
                obj = r.get(i)

                data.append(obj)

            return data

    def read_data(self, parameter):
        with open(self.route, encoding="utf-8") as content:
            r = json.load(content)

            data = []
            for info in r:
                obj = info.get(parameter)
                data.append(obj)

            return data