import { a as ie } from "./chunk-ZLXPWSJY.js";
import { a as R } from "./chunk-7MRC6WDX.js";
import { e as Ee } from "./chunk-T6JQC5LX.js";
import {
  a as z,
  c as B,
  d as I,
  f as V,
  h as q,
  i as P,
  j as te,
  n as Se,
  o as we,
  p as Me,
  q as Te,
  r as H,
  u as O,
} from "./chunk-P5RGL6UI.js";
import { a as Ce } from "./chunk-P4J7PTRZ.js";
import {
  $ as c,
  Fa as C,
  Ka as _,
  Lb as Y,
  M as K,
  Mb as N,
  Nb as M,
  Ob as he,
  Pb as ve,
  Qb as ye,
  R as Q,
  Ra as m,
  Sa as ge,
  Sb as $,
  Ta as i,
  Tb as T,
  Ua as e,
  Va as E,
  Wa as xe,
  Xa as fe,
  Ya as y,
  Yb as A,
  Za as g,
  _ as X,
  _a as x,
  _b as ee,
  a as Z,
  aa as u,
  ba as k,
  ca as G,
  cb as _e,
  db as r,
  eb as j,
  fb as f,
  ha as S,
  ib as b,
  jb as h,
  kb as v,
  mb as J,
  nb as me,
  ob as pe,
  pb as ce,
  qb as D,
  sb as W,
  tb as be,
  wa as s,
  xa as w,
} from "./chunk-R3GSGODC.js";
function Fe(a, o) {
  if (a & 1) {
    let t = y();
    i(0, "div", 13)(1, "ul", 14)(2, "li")(3, "button", 15),
      g("click", function () {
        c(t);
        let l = x();
        return u(l.selectOption("Todos"));
      }),
      r(4, " Mostrar todos los archivos "),
      e()(),
      i(5, "li")(6, "button", 15),
      g("click", function () {
        c(t);
        let l = x();
        return u(l.selectOption("Seccion I"));
      }),
      r(7, " Archivo de Tr\xE1mite (Secci\xF3n I Activos) "),
      e()(),
      i(8, "li")(9, "button", 15),
      g("click", function () {
        c(t);
        let l = x();
        return u(l.selectOption("Seccion II"));
      }),
      r(10, " Archivo de Concentraci\xF3n (Secci\xF3n II Semiactivos) "),
      e()(),
      i(11, "li")(12, "button", 15),
      g("click", function () {
        c(t);
        let l = x();
        return u(l.selectOption("Donador de sangre"));
      }),
      r(13, " Per\xEDodo adicional por ser donador de sangre "),
      e()(),
      i(14, "li")(15, "button", 15),
      g("click", function () {
        c(t);
        let l = x();
        return u(l.selectOption("SISI o Aut Judicial"));
      }),
      r(16, " Periodo adicional por SISI o Autoridad Judicial "),
      e()()()();
  }
}
var ne = class a {
  selectedOption = "Todos";
  isDropdownOpen = !1;
  searchText = "";
  filterChange = new S();
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  onSearchChange() {
    this.filterChange.emit({
      searchText: this.searchText,
      selectedOption: this.selectedOption,
    });
  }
  selectOption(o) {
    (this.selectedOption = o),
      (this.isDropdownOpen = !1),
      this.emitFilterChange();
  }
  onSearchInput(o) {
    (this.searchText = o.target.value), this.emitFilterChange();
  }
  emitFilterChange() {
    this.filterChange.emit({
      searchText: this.searchText,
      selectedOption: this.selectedOption,
    });
  }
  static ɵfac = function (t) {
    return new (t || a)();
  };
  static ɵcmp = C({
    type: a,
    selectors: [["app-search-form"]],
    outputs: { filterChange: "filterChange" },
    decls: 15,
    vars: 2,
    consts: [
      [1, "max-w-lg", "mx-auto"],
      [1, "flex", "relative", "min-w-0"],
      [1, "relative", "w-auto"],
      [
        "id",
        "dropdown-button",
        "type",
        "button",
        1,
        "w-full",
        "truncate",
        "z-10",
        "inline-flex",
        "items-center",
        "px-4",
        "h-10",
        "text-sm",
        "font-medium",
        "text-gray-900",
        "bg-gray-100",
        "border",
        "border-gray-300",
        "rounded-s-lg",
        "hover:bg-gray-200",
        "focus:ring-4",
        "focus:outline-none",
        "focus:ring-gray-100",
        "dark:bg-gray-700",
        "dark:hover:bg-gray-600",
        "dark:focus:ring-gray-700",
        "dark:text-white",
        "dark:border-gray-600",
        3,
        "click",
      ],
      [
        "aria-hidden",
        "true",
        "xmlns",
        "http://www.w3.org/2000/svg",
        "fill",
        "none",
        "viewBox",
        "0 0 10 6",
        1,
        "w-2.5",
        "h-2.5",
        "ms-2.5",
      ],
      [
        "stroke",
        "currentColor",
        "stroke-linecap",
        "round",
        "stroke-linejoin",
        "round",
        "stroke-width",
        "2",
        "d",
        "m1 1 4 4 4-4",
      ],
      [
        "class",
        "absolute z-20 bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-44 dark:bg-gray-700",
        4,
        "ngIf",
      ],
      [1, "relative", "flex-1", "min-w-0"],
      [
        "type",
        "search",
        "id",
        "search-dropdown",
        "placeholder",
        "B\xFAsqueda por n\xFAmero de seguridad social",
        "required",
        "",
        1,
        "block",
        "h-10",
        "p-2",
        "w-full",
        "text-sm",
        "text-gray-900",
        "bg-gray-50",
        "border",
        "border-gray-300",
        "border-s-0",
        "rounded-e-lg",
        "focus:ring-green-500",
        "focus:border-green-500",
        "dark:bg-gray-700",
        "dark:border-gray-600",
        "dark:placeholder-gray-400",
        "dark:text-white",
        "dark:focus:border-green-500",
        3,
        "keyup",
      ],
      [
        "type",
        "submit",
        1,
        "absolute",
        "top-0",
        "end-0",
        "h-10",
        "px-3",
        "text-sm",
        "font-medium",
        "text-white",
        "bg-green-700",
        "rounded-e-lg",
        "border",
        "border-green-700",
        "hover:bg-green-800",
        "focus:ring-4",
        "focus:outline-none",
        "focus:ring-green-300",
        "dark:bg-green-600",
        "dark:hover:bg-green-700",
        "dark:focus:ring-green-800",
      ],
      [
        "aria-hidden",
        "true",
        "xmlns",
        "http://www.w3.org/2000/svg",
        "fill",
        "none",
        "viewBox",
        "0 0 20 20",
        1,
        "w-4",
        "h-4",
      ],
      [
        "stroke",
        "currentColor",
        "stroke-linecap",
        "round",
        "stroke-linejoin",
        "round",
        "stroke-width",
        "2",
        "d",
        "m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z",
      ],
      [1, "sr-only"],
      [
        1,
        "absolute",
        "z-20",
        "bg-white",
        "divide-y",
        "divide-gray-100",
        "rounded-lg",
        "shadow-lg",
        "w-44",
        "dark:bg-gray-700",
      ],
      [1, "py-2", "text-sm", "text-gray-700", "dark:text-gray-200"],
      [
        "type",
        "button",
        1,
        "inline-flex",
        "w-full",
        "px-4",
        "py-2",
        "hover:bg-gray-100",
        "dark:hover:bg-gray-600",
        "dark:hover:text-white",
        3,
        "click",
      ],
    ],
    template: function (t, n) {
      t & 1 &&
        (i(0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3),
        g("click", function () {
          return n.toggleDropdown();
        }),
        r(4),
        k(),
        i(5, "svg", 4),
        E(6, "path", 5),
        e()(),
        _(7, Fe, 17, 0, "div", 6),
        e(),
        G(),
        i(8, "div", 7)(9, "input", 8),
        g("keyup", function (d) {
          return n.onSearchInput(d);
        }),
        e(),
        i(10, "button", 9),
        k(),
        i(11, "svg", 10),
        E(12, "path", 11),
        e(),
        G(),
        i(13, "span", 12),
        r(14, "Search"),
        e()()()()()),
        t & 2 &&
          (s(4),
          f(" ", n.selectedOption, " "),
          s(3),
          m("ngIf", n.isDropdownOpen));
    },
    dependencies: [T, M, O, P, I, V],
    encapsulation: 2,
  });
};
var L = class a {
  mensaje = "Operaci\xF3n realizada correctamente";
  onClose = new S();
  cerrar() {
    this.onClose.emit();
  }
  static ɵfac = function (t) {
    return new (t || a)();
  };
  static ɵcmp = C({
    type: a,
    selectors: [["app-modal-exito"]],
    inputs: { mensaje: "mensaje" },
    outputs: { onClose: "onClose" },
    decls: 8,
    vars: 1,
    consts: [
      [
        1,
        "fixed",
        "inset-0",
        "bg-black",
        "bg-opacity-50",
        "flex",
        "items-center",
        "justify-center",
        "z-50",
      ],
      [1, "bg-white", "rounded-lg", "shadow-lg", "p-6", "w-80", "text-center"],
      [1, "text-green-600", "font-bold", "text-xl", "mb-4"],
      [1, "text-gray-700", "mb-6"],
      [
        1,
        "bg-green-500",
        "hover:bg-green-600",
        "text-white",
        "px-4",
        "py-2",
        "rounded",
        3,
        "click",
      ],
    ],
    template: function (t, n) {
      t & 1 &&
        (i(0, "div", 0)(1, "div", 1)(2, "h2", 2),
        r(3, "\xA1\xC9xito!"),
        e(),
        i(4, "p", 3),
        r(5),
        e(),
        i(6, "button", 4),
        g("click", function () {
          return n.cerrar();
        }),
        r(7, "Aceptar"),
        e()()()),
        t & 2 && (s(5), j(n.mensaje));
    },
    encapsulation: 2,
  });
};
function je(a, o) {
  if (a & 1) {
    let t = y();
    i(0, "app-modal-exito", 20),
      g("onClose", function () {
        c(t);
        let l = x();
        return u((l.mostrarModalExito = !1));
      }),
      e();
  }
  a & 2 && m("mensaje", "\xA1Se actualiz\xF3 correctamente!");
}
var re = class a {
  constructor(o) {
    this.expedientesService = o;
  }
  expediente;
  onSave = new S();
  onClose = new S();
  mostrarModalExito = !1;
  expedienteEditado = {};
  ngOnChanges(o) {
    o.expediente?.currentValue &&
      ((this.expedienteEditado = Z({}, o.expediente.currentValue)),
      (this.expedienteEditado.fecha_cierre = this.formatDate(
        this.expediente.fecha_cierre
      )),
      (this.expedienteEditado.fecha_apertura = this.formatDate(
        this.expediente.fecha_apertura
      )));
  }
  formatDate(o) {
    return o ? o.split("T")[0] : "";
  }
  guardarCambios() {
    let o = this.expedienteEditado.id_expediente;
    if (!o) {
      console.error("Error: ID del expediente no definido.");
      return;
    }
    this.expedientesService
      .updateExpediente(o, this.expedienteEditado)
      .subscribe({
        next: (t) => {
          (this.mostrarModalExito = !0),
            this.onSave.emit(this.expedienteEditado);
        },
        error: (t) => {
          console.error("Error al actualizar expediente:", t);
        },
      });
  }
  close() {
    this.onClose.emit();
  }
  static ɵfac = function (t) {
    return new (t || a)(w(R));
  };
  static ɵcmp = C({
    type: a,
    selectors: [["app-modal-editar"]],
    inputs: { expediente: "expediente" },
    outputs: { onSave: "onSave", onClose: "onClose" },
    features: [X],
    decls: 47,
    vars: 9,
    consts: [
      [
        1,
        "fixed",
        "inset-0",
        "bg-black",
        "bg-opacity-60",
        "flex",
        "items-center",
        "justify-center",
        "z-50",
        "px-4",
      ],
      [
        1,
        "bg-white",
        "rounded-2xl",
        "shadow-xl",
        "w-full",
        "max-w-2xl",
        "p-8",
        "max-h-[90vh]",
        "overflow-y-auto",
      ],
      [
        1,
        "flex",
        "items-center",
        "justify-between",
        "mb-6",
        "border-b",
        "pb-3",
      ],
      [1, "text-3xl", "font-semibold", "text-green-800"],
      [
        1,
        "text-gray-500",
        "hover:text-red-500",
        "transition",
        "text-xl",
        3,
        "click",
      ],
      [1, "space-y-5", 3, "ngSubmit"],
      [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-5"],
      [1, "block", "text-sm", "font-medium", "text-gray-700", "mb-1"],
      [
        "type",
        "number",
        "name",
        "legajo",
        "required",
        "",
        1,
        "w-full",
        "bg-gray-50",
        "border",
        "border-gray-300",
        "text-sm",
        "rounded-lg",
        "px-4",
        "py-2",
        "focus:ring-2",
        "focus:ring-green-500",
        "outline-none",
        3,
        "ngModelChange",
        "ngModel",
      ],
      [
        "type",
        "number",
        "name",
        "folio",
        "required",
        "",
        1,
        "w-full",
        "bg-gray-50",
        "border",
        "border-gray-300",
        "text-sm",
        "rounded-lg",
        "px-4",
        "py-2",
        "focus:ring-2",
        "focus:ring-green-500",
        "outline-none",
        3,
        "ngModelChange",
        "ngModel",
      ],
      [
        "type",
        "number",
        "name",
        "fojas",
        "required",
        "",
        1,
        "w-full",
        "bg-gray-50",
        "border",
        "border-gray-300",
        "text-sm",
        "rounded-lg",
        "px-4",
        "py-2",
        "focus:ring-2",
        "focus:ring-green-500",
        "outline-none",
        3,
        "ngModelChange",
        "ngModel",
      ],
      [
        "type",
        "text",
        "name",
        "telefono",
        "required",
        "",
        1,
        "w-full",
        "bg-gray-50",
        "border",
        "border-gray-300",
        "text-sm",
        "rounded-lg",
        "px-4",
        "py-2",
        "focus:ring-2",
        "focus:ring-green-500",
        "outline-none",
        3,
        "ngModelChange",
        "ngModel",
      ],
      [
        "type",
        "date",
        "name",
        "fecha_apertura",
        "required",
        "",
        1,
        "w-full",
        "bg-gray-50",
        "border",
        "border-gray-300",
        "text-sm",
        "rounded-lg",
        "px-4",
        "py-2",
        "focus:ring-2",
        "focus:ring-green-500",
        "outline-none",
        3,
        "ngModelChange",
        "ngModel",
      ],
      [
        "type",
        "date",
        "name",
        "fecha_cierre",
        "required",
        "",
        1,
        "w-full",
        "bg-gray-50",
        "border",
        "border-gray-300",
        "text-sm",
        "rounded-lg",
        "px-4",
        "py-2",
        "focus:ring-2",
        "focus:ring-green-500",
        "outline-none",
        3,
        "ngModelChange",
        "ngModel",
      ],
      [
        "type",
        "text",
        "name",
        "domicilio",
        "required",
        "",
        1,
        "w-full",
        "bg-gray-50",
        "border",
        "border-gray-300",
        "text-sm",
        "rounded-lg",
        "px-4",
        "py-2",
        "focus:ring-2",
        "focus:ring-green-500",
        "outline-none",
        3,
        "ngModelChange",
        "ngModel",
      ],
      [
        "rows",
        "3",
        "name",
        "nota_medica",
        "required",
        "",
        1,
        "w-full",
        "bg-gray-50",
        "border",
        "border-gray-300",
        "text-sm",
        "rounded-lg",
        "px-4",
        "py-2",
        "resize-none",
        "focus:ring-2",
        "focus:ring-green-500",
        "outline-none",
        3,
        "ngModelChange",
        "ngModel",
      ],
      [1, "flex", "justify-end", "gap-3", "pt-6", "border-t", "mt-6"],
      [
        "type",
        "button",
        1,
        "px-5",
        "py-2",
        "text-sm",
        "font-medium",
        "text-gray-700",
        "bg-gray-200",
        "hover:bg-gray-300",
        "rounded-lg",
        "transition",
        3,
        "click",
      ],
      [
        "type",
        "submit",
        1,
        "px-6",
        "py-2",
        "text-sm",
        "font-medium",
        "text-white",
        "bg-green-600",
        "hover:bg-green-700",
        "rounded-lg",
        "transition",
      ],
      [3, "mensaje", "onClose", 4, "ngIf"],
      [3, "onClose", "mensaje"],
    ],
    template: function (t, n) {
      t & 1 &&
        (i(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3),
        r(4, "Editar Expediente"),
        e(),
        i(5, "button", 4),
        g("click", function () {
          return n.close();
        }),
        r(6, "\xD7"),
        e()(),
        i(7, "form", 5),
        g("ngSubmit", function () {
          return n.guardarCambios();
        }),
        i(8, "div", 6)(9, "div")(10, "label", 7),
        r(11, "Legajo"),
        e(),
        i(12, "input", 8),
        v("ngModelChange", function (d) {
          return (
            h(n.expedienteEditado.legajo, d) ||
              (n.expedienteEditado.legajo = d),
            d
          );
        }),
        e()(),
        i(13, "div")(14, "label", 7),
        r(15, "Folio"),
        e(),
        i(16, "input", 9),
        v("ngModelChange", function (d) {
          return (
            h(n.expedienteEditado.folio, d) || (n.expedienteEditado.folio = d),
            d
          );
        }),
        e()(),
        i(17, "div")(18, "label", 7),
        r(19, "Fojas"),
        e(),
        i(20, "input", 10),
        v("ngModelChange", function (d) {
          return (
            h(n.expedienteEditado.fojas, d) || (n.expedienteEditado.fojas = d),
            d
          );
        }),
        e()(),
        i(21, "div")(22, "label", 7),
        r(23, "Tel\xE9fono"),
        e(),
        i(24, "input", 11),
        v("ngModelChange", function (d) {
          return (
            h(n.expedienteEditado.telefono, d) ||
              (n.expedienteEditado.telefono = d),
            d
          );
        }),
        e()(),
        i(25, "div")(26, "label", 7),
        r(27, "Fecha de Apertura"),
        e(),
        i(28, "input", 12),
        v("ngModelChange", function (d) {
          return (
            h(n.expedienteEditado.fecha_apertura, d) ||
              (n.expedienteEditado.fecha_apertura = d),
            d
          );
        }),
        e()(),
        i(29, "div")(30, "label", 7),
        r(31, "Fecha de Cierre"),
        e(),
        i(32, "input", 13),
        v("ngModelChange", function (d) {
          return (
            h(n.expedienteEditado.fecha_cierre, d) ||
              (n.expedienteEditado.fecha_cierre = d),
            d
          );
        }),
        e()()(),
        i(33, "div")(34, "label", 7),
        r(35, "Domicilio"),
        e(),
        i(36, "input", 14),
        v("ngModelChange", function (d) {
          return (
            h(n.expedienteEditado.domicilio, d) ||
              (n.expedienteEditado.domicilio = d),
            d
          );
        }),
        e()(),
        i(37, "div")(38, "label", 7),
        r(39, "Nota M\xE9dica"),
        e(),
        i(40, "textarea", 15),
        v("ngModelChange", function (d) {
          return (
            h(n.expedienteEditado.nota_medica, d) ||
              (n.expedienteEditado.nota_medica = d),
            d
          );
        }),
        e()(),
        i(41, "div", 16)(42, "button", 17),
        g("click", function () {
          return n.close();
        }),
        r(43, " Cancelar "),
        e(),
        i(44, "button", 18),
        r(45, " Guardar Cambios "),
        e()()(),
        _(46, je, 1, 1, "app-modal-exito", 19),
        e()()),
        t & 2 &&
          (s(12),
          b("ngModel", n.expedienteEditado.legajo),
          s(4),
          b("ngModel", n.expedienteEditado.folio),
          s(4),
          b("ngModel", n.expedienteEditado.fojas),
          s(4),
          b("ngModel", n.expedienteEditado.telefono),
          s(4),
          b("ngModel", n.expedienteEditado.fecha_apertura),
          s(4),
          b("ngModel", n.expedienteEditado.fecha_cierre),
          s(4),
          b("ngModel", n.expedienteEditado.domicilio),
          s(4),
          b("ngModel", n.expedienteEditado.nota_medica),
          s(6),
          m("ngIf", n.mostrarModalExito));
    },
    dependencies: [O, P, z, te, B, I, H, q, V, T, M, L],
    encapsulation: 2,
  });
};
var Ie = "http://192.168.1.76:3000/observaciones",
  ae = class a {
    constructor(o) {
      this._http = o;
    }
    createObservacion(o) {
      let t = new A({ "Content-Type": "application/json" });
      return this._http.post(`${Ie}`, o, { headers: t });
    }
    getObservaciones(o) {
      return this._http.get(`${Ie}/expediente/${o}`);
    }
    static ɵfac = function (t) {
      return new (t || a)(Q(ee));
    };
    static ɵprov = K({ token: a, factory: a.ɵfac, providedIn: "root" });
  };
var Ve = (a, o) => ({
  "text-green-600 bg-white border-x border-t border-b-0 shadow-sm": a,
  "text-gray-600 hover:bg-gray-100": o,
});
function Ne(a, o) {
  if (
    (a & 1 &&
      (i(0, "li", 17)(1, "p", 18)(2, "strong"),
      r(3, "Fecha:"),
      e(),
      r(4),
      D(5, "date"),
      e(),
      i(6, "p", 19)(7, "strong"),
      r(8, "Descripci\xF3n:"),
      e(),
      r(9),
      e()()),
    a & 2)
  ) {
    let t = o.$implicit;
    s(4),
      f(" ", W(5, 2, t.fechahora_creacion, "dd/MM/yyyy HH:mm"), " "),
      s(5),
      f(" ", t.descripcion, " ");
  }
}
function Ae(a, o) {
  if ((a & 1 && (i(0, "ul"), _(1, Ne, 10, 5, "li", 16), e()), a & 2)) {
    let t = x(2);
    s(), m("ngForOf", t.observacionesLista);
  }
}
function ze(a, o) {
  a & 1 && (i(0, "p", 20), r(1, "No hay observaciones registradas."), e());
}
function Be(a, o) {
  if (
    (a & 1 &&
      (i(0, "div", 12)(1, "h3", 13),
      r(2, "Lista de Observaciones"),
      e(),
      i(3, "div", 14),
      _(4, Ae, 2, 1, "ul", 15)(5, ze, 2, 0, "ng-template", null, 0, be),
      e()()),
    a & 2)
  ) {
    let t = _e(6),
      n = x();
    s(4), m("ngIf", n.observacionesLista.length > 0)("ngIfElse", t);
  }
}
function qe(a, o) {
  if (a & 1) {
    let t = y();
    i(0, "div", 12)(1, "h3", 13),
      r(2, "Registrar Nueva Observaci\xF3n"),
      e(),
      i(3, "form", 21, 1),
      g("ngSubmit", function () {
        c(t);
        let l = x();
        return u(l.onSubmit());
      }),
      i(5, "div")(6, "label", 22),
      r(7, "Fecha y Hora"),
      e(),
      E(8, "input", 23),
      e(),
      i(9, "div")(10, "label", 24),
      r(11, "Observaci\xF3n"),
      e(),
      i(12, "textarea", 25),
      v("ngModelChange", function (l) {
        c(t);
        let d = x();
        return (
          h(d.observaciones.descripcion, l) ||
            (d.observaciones.descripcion = l),
          u(l)
        );
      }),
      e()(),
      i(13, "div", 26)(14, "button", 27),
      r(15, " Aceptar "),
      e()()()();
  }
  if (a & 2) {
    let t = x();
    s(8),
      m("value", t.observaciones.fechahora_creacion),
      s(4),
      b("ngModel", t.observaciones.descripcion);
  }
}
function He(a, o) {
  if (a & 1) {
    let t = y();
    i(0, "app-modal-exito", 28),
      g("onClose", function () {
        c(t);
        let l = x();
        return u(l.cerrarModalExito());
      }),
      e();
  }
  a & 2 && m("mensaje", "\xA1Se agreg\xF3 correctamente!");
}
function Re(a, o) {
  if (a & 1) {
    let t = y();
    i(0, "app-modal-errores", 29),
      g("onClose", function () {
        c(t);
        let l = x();
        return u(l.cerrarModalError());
      }),
      e();
  }
  if (a & 2) {
    let t = x();
    m("errores", t.errores);
  }
}
var se = class a {
  constructor(o) {
    this.observacionS = o;
  }
  expediente;
  onClose = new S();
  mostrarModalExito = !1;
  mostrarModalError = !1;
  mensajeError = "";
  errores = [];
  observaciones = { descripcion: "", fechahora_creacion: "", id_expediente: 0 };
  observacionesLista = [];
  currentTab = "ver";
  ngOnInit() {
    let o = new Date();
    (this.observaciones.fechahora_creacion = o
      .toISOString()
      .slice(0, 16)
      .replace("T", " ")),
      this.expediente &&
        (this.observaciones.id_expediente =
          this.expediente.id_expediente || this.expediente.id || 0),
      this.cargarObservaciones();
  }
  setTab(o) {
    this.currentTab = o;
  }
  cargarObservaciones() {
    this.observaciones.id_expediente &&
      this.observacionS
        .getObservaciones(this.observaciones.id_expediente)
        .subscribe({
          next: (o) => {
            this.observacionesLista = o;
          },
          error: (o) => {
            console.error("Error al cargar observaciones:", o),
              (this.mostrarModalError = !0),
              (this.mensajeError = "Error al cargar las observaciones");
          },
        });
  }
  close() {
    this.onClose.emit();
  }
  onSubmit() {
    if (!this.observaciones.descripcion.trim()) {
      (this.errores = [
        {
          field: "Observaci\xF3n",
          errors: ["La observaci\xF3n no puede estar vac\xEDa"],
        },
      ]),
        (this.mostrarModalError = !0);
      return;
    }
    this.observacionS.createObservacion(this.observaciones).subscribe({
      next: () => {
        (this.mostrarModalExito = !0),
          this.cargarObservaciones(),
          (this.observaciones.descripcion = "");
      },
      error: (o) => {
        console.error("Error al registrar observaci\xF3n", o),
          (this.errores = [
            {
              field: "Error del sistema",
              errors: ["Ocurri\xF3 un error al registrar la observaci\xF3n"],
            },
          ]),
          (this.mostrarModalError = !0);
      },
    });
  }
  cerrarModalError() {
    (this.mostrarModalError = !1), (this.errores = []);
  }
  cerrarModalExito() {
    (this.mostrarModalExito = !1), this.setTab("ver");
  }
  static ɵfac = function (t) {
    return new (t || a)(w(ae));
  };
  static ɵcmp = C({
    type: a,
    selectors: [["app-modal-observaciones"]],
    inputs: { expediente: "expediente" },
    outputs: { onClose: "onClose" },
    decls: 16,
    vars: 12,
    consts: [
      ["noObservaciones", ""],
      ["observacionForm", "ngForm"],
      [
        1,
        "fixed",
        "inset-0",
        "bg-black",
        "bg-opacity-50",
        "flex",
        "items-center",
        "justify-center",
        "z-50",
      ],
      [
        1,
        "bg-white",
        "rounded-2xl",
        "shadow-2xl",
        "w-full",
        "max-w-6xl",
        "h-[90vh]",
        "p-6",
        "md:p-8",
        "overflow-y-auto",
      ],
      [
        1,
        "text-3xl",
        "font-bold",
        "text-center",
        "text-gray-800",
        "mb-6",
        "border-b",
        "pb-4",
      ],
      [1, "flex", "space-x-4", "border-b", "border-gray-200", "mb-6"],
      [
        1,
        "py-2",
        "px-4",
        "text-sm",
        "font-medium",
        "transition-colors",
        "duration-200",
        "rounded-t-lg",
        3,
        "click",
        "ngClass",
      ],
      ["class", "space-y-4", 4, "ngIf"],
      [1, "flex", "justify-end", "mt-6"],
      [
        1,
        "bg-gray-200",
        "hover:bg-gray-300",
        "text-gray-800",
        "text-sm",
        "font-medium",
        "px-6",
        "py-2",
        "rounded-lg",
        "transition",
        3,
        "click",
      ],
      [3, "mensaje", "onClose", 4, "ngIf"],
      [3, "errores", "onClose", 4, "ngIf"],
      [1, "space-y-4"],
      [1, "text-lg", "font-semibold", "text-gray-700"],
      [
        1,
        "border",
        "border-gray-200",
        "rounded-xl",
        "p-4",
        "bg-gray-50",
        "max-h-[60vh]",
        "overflow-y-auto",
        "space-y-4",
      ],
      [4, "ngIf", "ngIfElse"],
      [
        "class",
        "bg-white p-3 rounded-lg shadow-sm border",
        4,
        "ngFor",
        "ngForOf",
      ],
      [1, "bg-white", "p-3", "rounded-lg", "shadow-sm", "border"],
      [1, "text-sm", "text-gray-700", "mb-1"],
      [1, "text-sm", "text-gray-700"],
      [1, "text-center", "text-sm", "text-gray-500", "italic"],
      [1, "space-y-5", 3, "ngSubmit"],
      [
        "for",
        "fecha-observacion",
        1,
        "block",
        "text-sm",
        "font-medium",
        "text-gray-700",
        "mb-1",
      ],
      [
        "type",
        "text",
        "id",
        "fecha-observacion",
        "readonly",
        "",
        1,
        "w-full",
        "bg-gray-100",
        "border",
        "border-gray-300",
        "text-sm",
        "rounded-lg",
        "px-4",
        "py-2",
        3,
        "value",
      ],
      [
        "for",
        "observacion",
        1,
        "block",
        "text-sm",
        "font-medium",
        "text-gray-700",
        "mb-1",
      ],
      [
        "id",
        "observacion",
        "name",
        "observacion",
        "rows",
        "4",
        "required",
        "",
        "placeholder",
        "Ingrese su observaci\xF3n aqu\xED...",
        1,
        "w-full",
        "bg-gray-50",
        "border",
        "border-gray-300",
        "text-sm",
        "rounded-lg",
        "px-4",
        "py-2",
        "resize-none",
        "focus:outline-none",
        "focus:ring-2",
        "focus:ring-green-500",
        3,
        "ngModelChange",
        "ngModel",
      ],
      [1, "flex", "justify-end"],
      [
        "type",
        "submit",
        1,
        "bg-green-600",
        "hover:bg-green-700",
        "text-white",
        "text-sm",
        "font-medium",
        "px-6",
        "py-2",
        "rounded-lg",
        "transition",
      ],
      [3, "onClose", "mensaje"],
      [3, "onClose", "errores"],
    ],
    template: function (t, n) {
      t & 1 &&
        (i(0, "div", 2)(1, "div", 3)(2, "h2", 4),
        r(3, "Observaciones del Expediente"),
        e(),
        i(4, "div", 5)(5, "button", 6),
        g("click", function () {
          return n.setTab("ver");
        }),
        r(6, " Ver Observaciones "),
        e(),
        i(7, "button", 6),
        g("click", function () {
          return n.setTab("agregar");
        }),
        r(8, " Agregar Observaci\xF3n "),
        e()(),
        _(9, Be, 7, 2, "div", 7)(10, qe, 16, 2, "div", 7),
        i(11, "div", 8)(12, "button", 9),
        g("click", function () {
          return n.close();
        }),
        r(13, " Cerrar "),
        e()(),
        _(14, He, 1, 1, "app-modal-exito", 10)(
          15,
          Re,
          1,
          1,
          "app-modal-errores",
          11
        ),
        e()()),
        t & 2 &&
          (s(5),
          m(
            "ngClass",
            me(6, Ve, n.currentTab === "ver", n.currentTab !== "ver")
          ),
          s(2),
          m(
            "ngClass",
            me(9, Ve, n.currentTab === "agregar", n.currentTab !== "agregar")
          ),
          s(2),
          m("ngIf", n.currentTab === "ver"),
          s(),
          m("ngIf", n.currentTab === "agregar"),
          s(4),
          m("ngIf", n.mostrarModalExito),
          s(),
          m("ngIf", n.mostrarModalError));
    },
    dependencies: [O, P, z, B, I, H, q, V, T, Y, N, M, $, L, ie],
    encapsulation: 2,
  });
};
var Ge = "http://192.168.1.76:3000/prestamos/crearprestamo",
  le = class a {
    constructor(o) {
      this._http = o;
    }
    createPrestamo(o) {
      let t = new A({ "Content-Type": "application/json" });
      return this._http.post(Ge, o, { headers: t });
    }
    verPrestamos() {
      return this._http.get("http://192.168.1.76:3000/prestamos");
    }
    getPrestamos(o) {
      return this._http.get(`http://192.168.1.76:3000/prestamos/todos/${o}`);
    }
    ActualizarPrestamo(o, t) {
      let n = new A({ "Content-Type": "application/json" });
      return this._http.patch(`http://192.168.1.76:3000/prestamos/${o}`, t, {
        headers: n,
      });
    }
    AutorizarPrestamo(o, t) {
      let n = new A({ "Content-Type": "application/json" });
      return this._http.patch(
        `http://192.168.1.76:3000/prestamos/autorizar/${o}`,
        t,
        { headers: n }
      );
    }
    static ɵfac = function (t) {
      return new (t || a)(Q(ee));
    };
    static ɵprov = K({ token: a, factory: a.ɵfac, providedIn: "root" });
  };
var Pe = (a, o, t, n) => ({
    "text-green-500": a,
    "bg-white": o,
    "border-b-2 border-green-500": t,
    "hover:bg-gray-100": n,
  }),
  Oe = (a) => ({ hidden: a }),
  Ue = (a, o, t) => ({
    "border-green-500": a,
    "border-yellow-500": o,
    "border-red-500": t,
  }),
  Ze = (a, o, t) => ({
    "bg-green-100 text-green-700": a,
    "bg-yellow-100 text-yellow-700": o,
    "bg-red-100 text-red-700": t,
  });
function Ke(a, o) {
  a & 1 &&
    (i(0, "div")(1, "h2", 57),
    r(2, " Registrar Pr\xE9stamo de Expediente (ARIMAC) "),
    e()());
}
function Qe(a, o) {
  a & 1 &&
    (i(0, "div")(1, "h2", 57),
    r(2, " Registrar Pr\xE9stamo de Expediente (ADMINISTRADOR) "),
    e()());
}
function Xe(a, o) {
  a & 1 &&
    (i(0, "div", 58)(1, "div", 59),
    r(2, "No hay pr\xE9stamos registrados."),
    e()());
}
function Ye(a, o) {
  if (
    (a & 1 && (i(0, "p")(1, "span", 67), r(2, "Datos extra:"), e(), r(3), e()),
    a & 2)
  ) {
    let t = x().$implicit;
    s(3), f(" ", t.datos_solicitante, " ");
  }
}
function $e(a, o) {
  if (
    (a & 1 &&
      (i(0, "p")(1, "span", 67), r(2, "Observaciones:"), e(), r(3), e()),
    a & 2)
  ) {
    let t = x().$implicit;
    s(3), f(" ", t.observaciones, " ");
  }
}
function et(a, o) {
  if (
    (a & 1 &&
      (i(0, "p")(1, "span", 67),
      r(2, "Fecha de Devoluci\xF3n:"),
      e(),
      r(3),
      D(4, "date"),
      e()),
    a & 2)
  ) {
    let t = x().$implicit;
    s(3), f(" ", W(4, 1, t.fecha_devolucion, "dd/MM/yyyy"), " ");
  }
}
function tt(a, o) {
  if (a & 1) {
    let t = y();
    i(0, "div", 73)(1, "button", 74),
      g("click", function () {
        c(t);
        let l = x(3);
        return u(l.devolverPrestamo());
      }),
      r(2, " Devolver Pr\xE9stamo "),
      e()();
  }
}
function it(a, o) {
  if (a & 1) {
    let t = y();
    i(0, "div", 75)(1, "button", 76),
      g("click", function () {
        c(t);
        let l = x(3);
        return u(l.autorizarPrestamo());
      }),
      r(2, " Autorizar "),
      e(),
      i(3, "button", 77),
      g("click", function () {
        c(t);
        let l = x(3);
        return u(l.rechazarPrestamo());
      }),
      r(4, " Rechazar "),
      e()();
  }
}
function nt(a, o) {
  if (
    (a & 1 &&
      (i(0, "div", 70), _(1, tt, 3, 0, "div", 71)(2, it, 5, 0, "div", 72), e()),
    a & 2)
  ) {
    let t = x().$implicit;
    s(),
      m("ngIf", t.estado === "Aprobado"),
      s(),
      m("ngIf", t.estado === "Pendiente");
  }
}
function ot(a, o) {
  if (
    (a & 1 &&
      (i(0, "div", 60)(1, "div", 61)(2, "div")(3, "h4", 62),
      r(4),
      e(),
      i(5, "p", 63),
      r(6),
      D(7, "date"),
      e()(),
      i(8, "div", 64),
      r(9),
      e()(),
      i(10, "div")(11, "h5", 65),
      r(12, "Datos del Solicitante"),
      e(),
      i(13, "div", 66)(14, "p")(15, "span", 67),
      r(16, "Nombre:"),
      e(),
      r(17),
      e(),
      i(18, "p")(19, "span", 67),
      r(20, "Matr\xEDcula:"),
      e(),
      r(21),
      e(),
      i(22, "p")(23, "span", 67),
      r(24, "Correo:"),
      e(),
      r(25),
      e(),
      i(26, "p")(27, "span", 67),
      r(28, "Tel\xE9fono:"),
      e(),
      r(29),
      e(),
      _(30, Ye, 4, 1, "p", 3),
      e()(),
      i(31, "div")(32, "h5", 65),
      r(33, "Detalles del Pr\xE9stamo"),
      e(),
      i(34, "div", 66)(35, "p")(36, "span", 67),
      r(37, "Especialidad:"),
      e(),
      r(38),
      e(),
      i(39, "p")(40, "span", 67),
      r(41, "Consultorio:"),
      e(),
      r(42),
      e(),
      i(43, "p")(44, "span", 67),
      r(45, "Categor\xEDa:"),
      e(),
      r(46),
      e(),
      i(47, "p")(48, "span", 67),
      r(49, "Tipo:"),
      e(),
      r(50),
      e(),
      i(51, "p")(52, "span", 67),
      r(53, "Turno:"),
      e(),
      r(54),
      e(),
      i(55, "p")(56, "span", 67),
      r(57, "Motivo:"),
      e(),
      r(58),
      e(),
      _(59, $e, 4, 1, "p", 3),
      e()(),
      i(60, "div")(61, "h5", 65),
      r(62, "Fechas"),
      e(),
      i(63, "div", 68)(64, "p")(65, "span", 67),
      r(66, "Fecha de Pr\xE9stamo:"),
      e(),
      r(67),
      D(68, "date"),
      e(),
      _(69, et, 5, 4, "p", 3),
      e()(),
      _(70, nt, 3, 2, "div", 69),
      e()),
    a & 2)
  ) {
    let t = o.$implicit,
      n = x();
    m(
      "ngClass",
      pe(
        26,
        Ue,
        t.estado === "Aprobado",
        t.estado === "Pendiente",
        t.estado === "Rechazado"
      )
    ),
      s(4),
      f("Folio: ", t.folio, ""),
      s(2),
      f("Solicitud: ", W(7, 20, t.fecha_solicitud, "dd/MM/yyyy HH:mm"), ""),
      s(2),
      m(
        "ngClass",
        pe(
          30,
          Ze,
          t.estado === "Aprobado",
          t.estado === "Pendiente",
          t.estado === "Rechazado"
        )
      ),
      s(),
      f(" ", t.estado, " "),
      s(8),
      f(" ", t.nombre, " "),
      s(4),
      f(" ", t.matricula, " "),
      s(4),
      f(" ", t.correo, " "),
      s(4),
      f(" ", t.telefono, " "),
      s(),
      m("ngIf", t.datos_solicitante),
      s(8),
      f(" ", t.serv_especialidad, " "),
      s(4),
      f(" ", t.consultorio, " "),
      s(4),
      f(" ", t.categoria, " "),
      s(4),
      f(" ", t.prestamo_tipo, " "),
      s(4),
      f(" ", t.turno === "M" ? "Matutino" : "Vespertino", " "),
      s(4),
      f(" ", t.motivo, " "),
      s(),
      m("ngIf", t.observaciones),
      s(8),
      f(" ", W(68, 23, t.fecha_prestamo, "dd/MM/yyyy"), " "),
      s(2),
      m("ngIf", t.fecha_devolucion),
      s(),
      m("ngIf", n.role === "admin");
  }
}
function rt(a, o) {
  a & 1 && (i(0, "span"), r(1, "Registrar Pr\xE9stamo"), e());
}
function at(a, o) {
  a & 1 &&
    (i(0, "span", 78),
    k(),
    i(1, "svg", 79),
    E(2, "circle", 80)(3, "path", 81),
    e(),
    r(4, " Procesando... "),
    e());
}
function st(a, o) {
  if (a & 1) {
    let t = y();
    i(0, "app-modal-exito", 82),
      g("onClose", function () {
        c(t);
        let l = x();
        return u(l.cerrarModalExito());
      }),
      e();
  }
  if (a & 2) {
    let t = x();
    m("mensaje", t.mensajeExito);
  }
}
function lt(a, o) {
  if (a & 1) {
    let t = y();
    i(0, "app-modal-errores", 83),
      g("onClose", function () {
        c(t);
        let l = x();
        return u(l.cerrarModalError());
      }),
      e();
  }
  if (a & 2) {
    let t = x();
    m("errores", t.errores);
  }
}
var de = class a {
  constructor(o, t, n) {
    this.expedienteS = o;
    this.authService = t;
    this.prestamoS = n;
  }
  id_prestamo;
  prestamo = {
    fecha_solicitud: "",
    fecha_prestamo: null,
    fecha_devolucion: null,
    datos_solicitante: "",
    observaciones: "",
    id_expediente: 0,
    folio: 0,
    nombre: "",
    matricula: 0,
    categoria: "",
    serv_especialidad: "",
    consultorio: "",
    turno: "",
    telefono: "",
    correo: "",
    motivo: "",
  };
  expediente;
  onClose = new S();
  currentTab = "tab1";
  prestamos = [];
  role = null;
  errores = [];
  id_usuario = null;
  mostrarModalExito = !1;
  mostrarModalError = !1;
  mensajeExito = "";
  procesando = !1;
  ngOnInit() {
    (this.role = this.authService.getRole()),
      (this.id_usuario = this.authService.getId()),
      this.obtenerPrestamos(this.expediente.id_expediente);
  }
  ngOnChanges(o) {
    o.expediente && this.expediente;
  }
  obtenerPrestamos(o) {
    this.prestamoS.getPrestamos(o).subscribe({
      next: (t) => {
        (this.prestamos = Array.isArray(t) ? t : [t]),
          (this.id_prestamo = this.prestamos[0]?.id_prestamo || null);
      },
      error: (t) => {
        console.error("Error al obtener pr\xE9stamos:", t),
          this.mostrarError("Error al obtener los pr\xE9stamos");
      },
    });
  }
  onSubmit() {
    (this.procesando = !0),
      (this.prestamo.fecha_solicitud = new Date().toISOString()),
      (this.prestamo.id_expediente = this.expediente.id_expediente),
      this.prestamoS.createPrestamo(this.prestamo).subscribe({
        next: (o) => {
          this.mostrarExito("Pr\xE9stamo creado correctamente"),
            this.obtenerPrestamos(this.expediente.id_expediente),
            (this.currentTab = "tab1"),
            this.resetForm();
        },
        error: (o) => {
          o.status === 400 && o.error && Array.isArray(o.error.message)
            ? ((this.errores = o.error.message.map((t) => ({
                field: "Error de validaci\xF3n",
                errors: [t],
              }))),
              (this.mostrarModalError = !0))
            : this.mostrarError("Error al crear el pr\xE9stamo"),
            (this.procesando = !1);
        },
        complete: () => {
          this.procesando = !1;
        },
      });
  }
  devolverPrestamo() {
    this.procesando = !0;
    let o = { estado: "Devuelto", fecha_devolucion: new Date().toISOString() };
    this.prestamoS.ActualizarPrestamo(this.id_prestamo, o).subscribe({
      next: () => {
        this.mostrarExito("Pr\xE9stamo devuelto correctamente"),
          this.obtenerPrestamos(this.expediente.id_expediente);
      },
      error: () => {
        this.mostrarError("Error al devolver el pr\xE9stamo"),
          (this.procesando = !1);
      },
      complete: () => {
        this.procesando = !1;
      },
    });
  }
  autorizarPrestamo() {
    this.procesando = !0;
    let o = { estado: "Aprobado", fecha_prestamo: new Date().toISOString() };
    this.prestamoS.AutorizarPrestamo(this.id_prestamo, o).subscribe({
      next: () => {
        this.mostrarExito("Pr\xE9stamo autorizado correctamente"),
          this.obtenerPrestamos(this.expediente.id_expediente);
      },
      error: () => {
        this.mostrarError("Error al autorizar el pr\xE9stamo"),
          (this.procesando = !1);
      },
      complete: () => {
        this.procesando = !1;
      },
    });
  }
  rechazarPrestamo() {
    this.procesando = !0;
    let o = { estado: "Rechazado" };
    this.prestamoS.ActualizarPrestamo(this.id_prestamo, o).subscribe({
      next: () => {
        this.mostrarExito("Pr\xE9stamo rechazado correctamente"),
          this.obtenerPrestamos(this.expediente.id_expediente);
      },
      error: () => {
        this.mostrarError("Error al rechazar el pr\xE9stamo"),
          (this.procesando = !1);
      },
      complete: () => {
        this.procesando = !1;
      },
    });
  }
  setTab(o) {
    this.currentTab = o;
  }
  resetForm() {
    this.prestamo = {
      fecha_solicitud: "",
      fecha_prestamo: null,
      fecha_devolucion: null,
      datos_solicitante: "",
      observaciones: "",
      id_expediente: this.expediente.id_expediente,
      folio: 0,
      nombre: "",
      matricula: 0,
      categoria: "",
      serv_especialidad: "",
      consultorio: "",
      turno: "",
      telefono: "",
      correo: "",
      motivo: "",
    };
  }
  mostrarExito(o) {
    (this.mensajeExito = o), (this.mostrarModalExito = !0);
  }
  mostrarError(o) {
    (this.errores = [{ field: "Error", errors: [o] }]),
      (this.mostrarModalError = !0);
  }
  cerrarModalExito() {
    this.mostrarModalExito = !1;
  }
  cerrarModalError() {
    this.mostrarModalError = !1;
  }
  close() {
    this.onClose.emit();
  }
  mostrarErrores(o) {
    this.errores = o.map((t) => ({
      field: "Campo no especificado",
      errors: [t],
    }));
  }
  static ɵfac = function (t) {
    return new (t || a)(w(R), w(Ce), w(le));
  };
  static ɵcmp = C({
    type: a,
    selectors: [["app-modal-solicitantes-list"]],
    inputs: { expediente: "expediente" },
    outputs: { onClose: "onClose" },
    features: [X],
    decls: 106,
    vars: 39,
    consts: [
      ["prestamoForm", "ngForm"],
      [
        1,
        "fixed",
        "inset-0",
        "bg-black",
        "bg-opacity-50",
        "flex",
        "items-center",
        "justify-center",
        "z-50",
      ],
      [
        1,
        "bg-white",
        "rounded-lg",
        "shadow-lg",
        "w-[80vw]",
        "md:w-[60vw]",
        "p-8",
        "h-[80vh]",
        "overflow-y-auto",
      ],
      [4, "ngIf"],
      [1, "flex", "mb-6", "border-b", "border-gray-300"],
      [
        1,
        "py-2",
        "px-6",
        "text-sm",
        "font-medium",
        "text-gray-700",
        "rounded-t-lg",
        "focus:outline-none",
        "relative",
        3,
        "click",
        "ngClass",
      ],
      [1, "space-y-10", 3, "ngClass"],
      [1, "text-2xl", "font-bold", "text-gray-800"],
      ["class", "text-center text-gray-500 py-10", 4, "ngIf"],
      [
        "class",
        "bg-white border-l-4 rounded-lg shadow-sm p-6 space-y-6",
        3,
        "ngClass",
        4,
        "ngFor",
        "ngForOf",
      ],
      [1, "flex", "justify-end"],
      [
        "type",
        "button",
        1,
        "bg-gray-300",
        "hover:bg-gray-400",
        "text-gray-700",
        "text-sm",
        "px-6",
        "py-3",
        "rounded-md",
        3,
        "click",
      ],
      [3, "ngClass"],
      [1, "text-xl", "font-bold", "text-gray-800", "mb-6", "border-b", "pb-2"],
      [1, "w-full", "max-w-3xl", "mx-auto", 3, "ngSubmit"],
      [1, "text-lg", "font-semibold", "text-gray-700", "mt-6", "mb-4"],
      [1, "grid", "md:grid-cols-2", "gap-6"],
      [
        "for",
        "folio",
        1,
        "block",
        "text-sm",
        "font-medium",
        "text-gray-600",
        "mb-1",
      ],
      [
        "type",
        "number",
        "id",
        "folio",
        "name",
        "folio",
        "required",
        "",
        "min",
        "0",
        "autocomplete",
        "off",
        "placeholder",
        "Ingrese el folio",
        1,
        "w-full",
        "border",
        "border-gray-300",
        "rounded-lg",
        "px-4",
        "py-2",
        "text-gray-800",
        "focus:outline-none",
        "focus:ring-2",
        "focus:ring-green-500",
        3,
        "ngModelChange",
        "ngModel",
      ],
      [
        "for",
        "nombre",
        1,
        "block",
        "text-sm",
        "font-medium",
        "text-gray-600",
        "mb-1",
      ],
      [
        "type",
        "text",
        "id",
        "nombre",
        "name",
        "nombre",
        "required",
        "",
        "autocomplete",
        "name",
        "placeholder",
        "Ingrese el nombre del solicitante",
        1,
        "w-full",
        "border",
        "border-gray-300",
        "rounded-lg",
        "px-4",
        "py-2",
        "text-gray-800",
        "focus:outline-none",
        "focus:ring-2",
        "focus:ring-green-500",
        3,
        "ngModelChange",
        "ngModel",
      ],
      [
        "for",
        "matricula",
        1,
        "block",
        "text-sm",
        "font-medium",
        "text-gray-600",
        "mb-1",
      ],
      [
        "type",
        "text",
        "id",
        "matricula",
        "name",
        "matricula",
        "required",
        "",
        "placeholder",
        "Ingrese la matr\xEDcula del solicitante",
        1,
        "w-full",
        "border",
        "border-gray-300",
        "rounded-lg",
        "px-4",
        "py-2",
        "text-gray-800",
        "focus:outline-none",
        "focus:ring-2",
        "focus:ring-green-500",
        3,
        "ngModelChange",
        "ngModel",
      ],
      [
        "for",
        "categoria",
        1,
        "block",
        "text-sm",
        "font-medium",
        "text-gray-600",
        "mb-1",
      ],
      [
        "type",
        "text",
        "id",
        "categoria",
        "name",
        "categoria",
        "required",
        "",
        "placeholder",
        "Ingrese la categor\xEDa",
        1,
        "w-full",
        "border",
        "border-gray-300",
        "rounded-lg",
        "px-4",
        "py-2",
        "text-gray-800",
        "focus:outline-none",
        "focus:ring-2",
        "focus:ring-green-500",
        3,
        "ngModelChange",
        "ngModel",
      ],
      [
        "for",
        "servicio",
        1,
        "block",
        "text-sm",
        "font-medium",
        "text-gray-600",
        "mb-1",
      ],
      [
        "type",
        "text",
        "id",
        "servicio",
        "name",
        "servicio",
        "required",
        "",
        "placeholder",
        "Ingrese el servicio o especialidad",
        1,
        "w-full",
        "border",
        "border-gray-300",
        "rounded-lg",
        "px-4",
        "py-2",
        "text-gray-800",
        "focus:outline-none",
        "focus:ring-2",
        "focus:ring-green-500",
        3,
        "ngModelChange",
        "ngModel",
      ],
      [
        "for",
        "consultorio",
        1,
        "block",
        "text-sm",
        "font-medium",
        "text-gray-600",
        "mb-1",
      ],
      [
        "type",
        "text",
        "id",
        "consultorio",
        "name",
        "consultorio",
        "required",
        "",
        "placeholder",
        "Ingrese el consultorio",
        1,
        "w-full",
        "border",
        "border-gray-300",
        "rounded-lg",
        "px-4",
        "py-2",
        "text-gray-800",
        "focus:outline-none",
        "focus:ring-2",
        "focus:ring-green-500",
        3,
        "ngModelChange",
        "ngModel",
      ],
      [1, "text-lg", "font-semibold", "text-gray-700", "mt-8", "mb-4"],
      [
        "for",
        "telefono",
        1,
        "block",
        "text-sm",
        "font-medium",
        "text-gray-600",
        "mb-1",
      ],
      [
        "type",
        "tel",
        "id",
        "telefono",
        "name",
        "telefono",
        "required",
        "",
        "autocomplete",
        "tel",
        "placeholder",
        "Ingrese el tel\xE9fono o extensi\xF3n",
        1,
        "w-full",
        "border",
        "border-gray-300",
        "rounded-lg",
        "px-4",
        "py-2",
        "text-gray-800",
        "focus:outline-none",
        "focus:ring-2",
        "focus:ring-green-500",
        3,
        "ngModelChange",
        "ngModel",
      ],
      [
        "for",
        "correo",
        1,
        "block",
        "text-sm",
        "font-medium",
        "text-gray-600",
        "mb-1",
      ],
      [
        "type",
        "email",
        "id",
        "correo",
        "name",
        "correo",
        "required",
        "",
        "autocomplete",
        "email",
        "placeholder",
        "Ingrese el correo",
        1,
        "w-full",
        "border",
        "border-gray-300",
        "rounded-lg",
        "px-4",
        "py-2",
        "text-gray-800",
        "focus:outline-none",
        "focus:ring-2",
        "focus:ring-green-500",
        3,
        "ngModelChange",
        "ngModel",
      ],
      [
        "for",
        "turno",
        1,
        "block",
        "text-sm",
        "font-medium",
        "text-gray-600",
        "mb-1",
      ],
      [
        "id",
        "turno",
        "name",
        "turno",
        "required",
        "",
        1,
        "w-full",
        "border",
        "border-gray-300",
        "rounded-lg",
        "px-4",
        "py-2",
        "bg-white",
        "text-gray-800",
        "focus:outline-none",
        "focus:ring-2",
        "focus:ring-green-500",
        3,
        "ngModelChange",
        "ngModel",
      ],
      ["value", "", "disabled", "", "selected", ""],
      ["value", "M"],
      ["value", "V"],
      [
        "for",
        "motivo",
        1,
        "block",
        "text-sm",
        "font-medium",
        "text-gray-600",
        "mb-1",
      ],
      [
        "id",
        "motivo",
        "name",
        "motivo",
        "required",
        "",
        1,
        "w-full",
        "border",
        "border-gray-300",
        "rounded-lg",
        "px-4",
        "py-2",
        "bg-white",
        "text-gray-800",
        "focus:outline-none",
        "focus:ring-2",
        "focus:ring-green-500",
        3,
        "ngModelChange",
        "ngModel",
      ],
      ["value", "Investigacion"],
      ["value", "Auditoria y Superviciones"],
      ["value", "Auditoria Judicial"],
      ["value", "Capital Constitutivo"],
      ["value", "Atencion Medica"],
      [1, "mt-6", "grid", "gap-6"],
      [
        "for",
        "datos_solicitante",
        1,
        "block",
        "text-sm",
        "font-medium",
        "text-gray-600",
        "mb-1",
      ],
      [
        "id",
        "datos_solicitante",
        "name",
        "datos_solicitante",
        "rows",
        "3",
        "placeholder",
        "Ingrese datos adicionales del solicitante",
        1,
        "w-full",
        "border",
        "border-gray-300",
        "rounded-lg",
        "px-4",
        "py-2",
        "text-gray-800",
        "focus:outline-none",
        "focus:ring-2",
        "focus:ring-green-500",
        3,
        "ngModelChange",
        "ngModel",
      ],
      [
        "for",
        "observaciones",
        1,
        "block",
        "text-sm",
        "font-medium",
        "text-gray-600",
        "mb-1",
      ],
      [
        "id",
        "observaciones",
        "name",
        "observaciones",
        "rows",
        "3",
        "placeholder",
        "Ingrese observaciones adicionales",
        1,
        "w-full",
        "border",
        "border-gray-300",
        "rounded-lg",
        "px-4",
        "py-2",
        "text-gray-800",
        "focus:outline-none",
        "focus:ring-2",
        "focus:ring-green-500",
        3,
        "ngModelChange",
        "ngModel",
      ],
      [1, "flex", "justify-end", "mt-8", "gap-4"],
      [
        "type",
        "button",
        1,
        "bg-gray-300",
        "hover:bg-gray-400",
        "text-gray-800",
        "text-sm",
        "font-medium",
        "px-6",
        "py-2",
        "rounded-lg",
        "transition",
        3,
        "click",
      ],
      [
        "type",
        "submit",
        1,
        "bg-green-600",
        "hover:bg-green-700",
        "text-white",
        "text-sm",
        "font-medium",
        "px-6",
        "py-2",
        "rounded-lg",
        "transition",
        "flex",
        "items-center",
        "justify-center",
        3,
        "disabled",
      ],
      ["class", "flex items-center", 4, "ngIf"],
      [3, "mensaje", "onClose", 4, "ngIf"],
      [3, "errores", "onClose", 4, "ngIf"],
      [
        1,
        "text-2xl",
        "font-bold",
        "text-center",
        "text-green-700",
        "dark:text-white",
        "mb-6",
      ],
      [1, "text-center", "text-gray-500", "py-10"],
      [1, "text-lg"],
      [
        1,
        "bg-white",
        "border-l-4",
        "rounded-lg",
        "shadow-sm",
        "p-6",
        "space-y-6",
        3,
        "ngClass",
      ],
      [1, "flex", "justify-between", "items-start"],
      [1, "text-lg", "font-semibold", "text-gray-800"],
      [1, "text-sm", "text-gray-500"],
      [
        1,
        "px-3",
        "py-1",
        "rounded-full",
        "text-sm",
        "font-medium",
        3,
        "ngClass",
      ],
      [
        1,
        "text-sm",
        "font-semibold",
        "text-gray-500",
        "mb-2",
        "border-b",
        "pb-1",
      ],
      [
        1,
        "grid",
        "grid-cols-1",
        "md:grid-cols-2",
        "gap-2",
        "text-sm",
        "text-gray-700",
      ],
      [1, "font-semibold"],
      [
        1,
        "grid",
        "grid-cols-1",
        "md:grid-cols-3",
        "gap-2",
        "text-sm",
        "text-gray-700",
      ],
      ["class", "flex justify-end mt-6", 4, "ngIf"],
      [1, "flex", "justify-end", "mt-6"],
      ["class", "space-x-2", 4, "ngIf"],
      ["class", "flex flex-wrap gap-3", 4, "ngIf"],
      [1, "space-x-2"],
      [
        1,
        "bg-blue-600",
        "hover:bg-blue-700",
        "focus:ring-4",
        "focus:ring-blue-300",
        "dark:focus:ring-blue-800",
        "text-white",
        "text-sm",
        "font-semibold",
        "px-5",
        "py-2.5",
        "rounded-md",
        "transition",
        "duration-200",
        3,
        "click",
      ],
      [1, "flex", "flex-wrap", "gap-3"],
      [
        1,
        "bg-green-600",
        "hover:bg-green-700",
        "focus:ring-4",
        "focus:ring-green-300",
        "dark:focus:ring-green-800",
        "text-white",
        "text-sm",
        "font-semibold",
        "px-5",
        "py-2.5",
        "rounded-md",
        "transition",
        "duration-200",
        3,
        "click",
      ],
      [
        1,
        "bg-red-600",
        "hover:bg-red-700",
        "focus:ring-4",
        "focus:ring-red-300",
        "dark:focus:ring-red-800",
        "text-white",
        "text-sm",
        "font-semibold",
        "px-5",
        "py-2.5",
        "rounded-md",
        "transition",
        "duration-200",
        3,
        "click",
      ],
      [1, "flex", "items-center"],
      [
        "xmlns",
        "http://www.w3.org/2000/svg",
        "fill",
        "none",
        "viewBox",
        "0 0 24 24",
        1,
        "animate-spin",
        "-ml-1",
        "mr-2",
        "h-4",
        "w-4",
        "text-white",
      ],
      [
        "cx",
        "12",
        "cy",
        "12",
        "r",
        "10",
        "stroke",
        "currentColor",
        "stroke-width",
        "4",
        1,
        "opacity-25",
      ],
      [
        "fill",
        "currentColor",
        "d",
        "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
        1,
        "opacity-75",
      ],
      [3, "onClose", "mensaje"],
      [3, "onClose", "errores"],
    ],
    template: function (t, n) {
      if (t & 1) {
        let l = y();
        i(0, "div", 1)(1, "div", 2),
          _(2, Ke, 3, 0, "div", 3)(3, Qe, 3, 0, "div", 3),
          i(4, "div", 4)(5, "button", 5),
          g("click", function () {
            return c(l), u(n.setTab("tab1"));
          }),
          r(6, " Ver pr\xE9stamos "),
          e(),
          i(7, "button", 5),
          g("click", function () {
            return c(l), u(n.setTab("tab2"));
          }),
          r(8, " Agregar pr\xE9stamo "),
          e()(),
          i(9, "div", 6)(10, "h3", 7),
          r(11, "Historial de Pr\xE9stamos"),
          e(),
          _(12, Xe, 3, 0, "div", 8)(13, ot, 71, 34, "div", 9),
          i(14, "div", 10)(15, "button", 11),
          g("click", function () {
            return c(l), u(n.close());
          }),
          r(16, " Cerrar "),
          e()()(),
          i(17, "div", 12)(18, "h3", 13),
          r(19, "Crear nuevo pr\xE9stamo"),
          e(),
          i(20, "form", 14, 0),
          g("ngSubmit", function () {
            return c(l), u(n.onSubmit());
          }),
          i(22, "h4", 15),
          r(23, "Datos del Solicitante"),
          e(),
          i(24, "div", 16)(25, "div")(26, "label", 17),
          r(27, "Folio"),
          e(),
          i(28, "input", 18),
          v("ngModelChange", function (p) {
            return c(l), h(n.prestamo.folio, p) || (n.prestamo.folio = p), u(p);
          }),
          e()(),
          i(29, "div")(30, "label", 19),
          r(31, "Nombre"),
          e(),
          i(32, "input", 20),
          v("ngModelChange", function (p) {
            return (
              c(l), h(n.prestamo.nombre, p) || (n.prestamo.nombre = p), u(p)
            );
          }),
          e()(),
          i(33, "div")(34, "label", 21),
          r(35, "Matr\xEDcula"),
          e(),
          i(36, "input", 22),
          v("ngModelChange", function (p) {
            return (
              c(l),
              h(n.prestamo.matricula, p) || (n.prestamo.matricula = p),
              u(p)
            );
          }),
          e()(),
          i(37, "div")(38, "label", 23),
          r(39, "Categor\xEDa"),
          e(),
          i(40, "input", 24),
          v("ngModelChange", function (p) {
            return (
              c(l),
              h(n.prestamo.categoria, p) || (n.prestamo.categoria = p),
              u(p)
            );
          }),
          e()(),
          i(41, "div")(42, "label", 25),
          r(43, "Servicio o Especialidad"),
          e(),
          i(44, "input", 26),
          v("ngModelChange", function (p) {
            return (
              c(l),
              h(n.prestamo.serv_especialidad, p) ||
                (n.prestamo.serv_especialidad = p),
              u(p)
            );
          }),
          e()(),
          i(45, "div")(46, "label", 27),
          r(47, "Consultorio"),
          e(),
          i(48, "input", 28),
          v("ngModelChange", function (p) {
            return (
              c(l),
              h(n.prestamo.consultorio, p) || (n.prestamo.consultorio = p),
              u(p)
            );
          }),
          e()()(),
          i(49, "h4", 29),
          r(50, "Informaci\xF3n de Contacto"),
          e(),
          i(51, "div", 16)(52, "div")(53, "label", 30),
          r(54, "Tel\xE9fono / Ext"),
          e(),
          i(55, "input", 31),
          v("ngModelChange", function (p) {
            return (
              c(l), h(n.prestamo.telefono, p) || (n.prestamo.telefono = p), u(p)
            );
          }),
          e()(),
          i(56, "div")(57, "label", 32),
          r(58, "Correo electr\xF3nico"),
          e(),
          i(59, "input", 33),
          v("ngModelChange", function (p) {
            return (
              c(l), h(n.prestamo.correo, p) || (n.prestamo.correo = p), u(p)
            );
          }),
          e()()(),
          i(60, "h4", 29),
          r(61, "Detalles del Pr\xE9stamo"),
          e(),
          i(62, "div", 16)(63, "div")(64, "label", 34),
          r(65, "Turno"),
          e(),
          i(66, "select", 35),
          v("ngModelChange", function (p) {
            return c(l), h(n.prestamo.turno, p) || (n.prestamo.turno = p), u(p);
          }),
          i(67, "option", 36),
          r(68, "Seleccione el turno"),
          e(),
          i(69, "option", 37),
          r(70, "Matutino"),
          e(),
          i(71, "option", 38),
          r(72, "Vespertino"),
          e()()(),
          i(73, "div")(74, "label", 39),
          r(75, "Motivo del Pr\xE9stamo"),
          e(),
          i(76, "select", 40),
          v("ngModelChange", function (p) {
            return (
              c(l), h(n.prestamo.motivo, p) || (n.prestamo.motivo = p), u(p)
            );
          }),
          i(77, "option", 36),
          r(78, "Seleccione el motivo"),
          e(),
          i(79, "option", 41),
          r(80, "Investigaci\xF3n"),
          e(),
          i(81, "option", 42),
          r(82, "Auditor\xEDa y Supervisiones"),
          e(),
          i(83, "option", 43),
          r(84, "Auditor\xEDa Judicial"),
          e(),
          i(85, "option", 44),
          r(86, "Capital Constitutivo"),
          e(),
          i(87, "option", 45),
          r(88, "Atenci\xF3n M\xE9dica"),
          e()()()(),
          i(89, "div", 46)(90, "div")(91, "label", 47),
          r(92, " Datos extra del solicitante "),
          e(),
          i(93, "textarea", 48),
          v("ngModelChange", function (p) {
            return (
              c(l),
              h(n.prestamo.datos_solicitante, p) ||
                (n.prestamo.datos_solicitante = p),
              u(p)
            );
          }),
          e()(),
          i(94, "div")(95, "label", 49),
          r(96, "Observaciones"),
          e(),
          i(97, "textarea", 50),
          v("ngModelChange", function (p) {
            return (
              c(l),
              h(n.prestamo.observaciones, p) || (n.prestamo.observaciones = p),
              u(p)
            );
          }),
          e()()(),
          i(98, "div", 51)(99, "button", 52),
          g("click", function () {
            return c(l), u(n.close());
          }),
          r(100, " Cerrar "),
          e(),
          i(101, "button", 53),
          _(102, rt, 2, 0, "span", 3)(103, at, 5, 0, "span", 54),
          e()()()(),
          _(104, st, 1, 1, "app-modal-exito", 55)(
            105,
            lt,
            1,
            1,
            "app-modal-errores",
            56
          ),
          e()();
      }
      t & 2 &&
        (s(2),
        m("ngIf", n.role === "arimac"),
        s(),
        m("ngIf", n.role === "admin"),
        s(2),
        m(
          "ngClass",
          ce(
            25,
            Pe,
            n.currentTab === "tab1",
            n.currentTab === "tab1",
            n.currentTab === "tab1",
            n.currentTab !== "tab1"
          )
        ),
        s(2),
        m(
          "ngClass",
          ce(
            30,
            Pe,
            n.currentTab === "tab2",
            n.currentTab === "tab2",
            n.currentTab === "tab2",
            n.currentTab !== "tab2"
          )
        ),
        s(2),
        m("ngClass", J(35, Oe, n.currentTab !== "tab1")),
        s(3),
        m("ngIf", n.prestamos.length === 0),
        s(),
        m("ngForOf", n.prestamos),
        s(4),
        m("ngClass", J(37, Oe, n.currentTab !== "tab2")),
        s(11),
        b("ngModel", n.prestamo.folio),
        s(4),
        b("ngModel", n.prestamo.nombre),
        s(4),
        b("ngModel", n.prestamo.matricula),
        s(4),
        b("ngModel", n.prestamo.categoria),
        s(4),
        b("ngModel", n.prestamo.serv_especialidad),
        s(4),
        b("ngModel", n.prestamo.consultorio),
        s(7),
        b("ngModel", n.prestamo.telefono),
        s(4),
        b("ngModel", n.prestamo.correo),
        s(7),
        b("ngModel", n.prestamo.turno),
        s(10),
        b("ngModel", n.prestamo.motivo),
        s(17),
        b("ngModel", n.prestamo.datos_solicitante),
        s(4),
        b("ngModel", n.prestamo.observaciones),
        s(4),
        m("disabled", n.procesando),
        s(),
        m("ngIf", !n.procesando),
        s(),
        m("ngIf", n.procesando),
        s(),
        m("ngIf", n.mostrarModalExito),
        s(),
        m("ngIf", n.mostrarModalError));
    },
    dependencies: [
      T,
      Y,
      N,
      M,
      $,
      O,
      P,
      we,
      Me,
      z,
      te,
      Se,
      B,
      I,
      H,
      Te,
      q,
      V,
      L,
      ie,
    ],
    encapsulation: 2,
  });
};
var dt = (a) => ["/files_view", a];
function mt(a, o) {
  a & 1 &&
    (i(0, "span", 37),
    r(1, " Archivo de Tr\xE1mite (Secci\xF3n I Activos) "),
    e());
}
function pt(a, o) {
  a & 1 &&
    (i(0, "span", 38),
    r(1, " Archivo de Concentraci\xF3n (Secci\xF3n II Semiactivos) "),
    e());
}
function ct(a, o) {
  a & 1 &&
    (i(0, "span", 39),
    r(1, " Per\xEDodo adicional por ser donador de sangre "),
    e());
}
function ut(a, o) {
  a & 1 &&
    (i(0, "span", 40),
    r(1, " Per\xEDodo adicional por SISI o Autoridad Judicial "),
    e());
}
function gt(a, o) {
  a & 1 && (i(0, "span", 41), r(1, " Vigencia desconocida "), e());
}
function xt(a, o) {
  if (a & 1) {
    let t = y();
    i(0, "app-modal-editar", 42),
      g("onSave", function (l) {
        c(t);
        let d = x(2);
        return u(d.handleSave(l));
      })("onClose", function () {
        c(t);
        let l = x(2);
        return u(l.closeModal("editar"));
      }),
      e();
  }
  if (a & 2) {
    let t = x(2);
    m("expediente", t.showModalEditar);
  }
}
function ft(a, o) {
  if (a & 1) {
    let t = y();
    i(0, "app-modal-observaciones", 43),
      g("onClose", function () {
        c(t);
        let l = x(2);
        return u(l.closeModal("observaciones"));
      }),
      e();
  }
  if (a & 2) {
    let t = x(2);
    m("expediente", t.showModalObservaciones);
  }
}
function _t(a, o) {
  if (a & 1) {
    let t = y();
    i(0, "app-modal-solicitantes-list", 43),
      g("onClose", function () {
        c(t);
        let l = x(2);
        return u(l.closeModal("prestamo"));
      }),
      e();
  }
  if (a & 2) {
    let t = x(2);
    m("expediente", t.showModalPrestamo);
  }
}
function bt(a, o) {
  if (a & 1) {
    let t = y();
    i(0, "tr", 16)(1, "td", 17),
      r(2),
      e(),
      i(3, "td", 18),
      r(4),
      e(),
      i(5, "td", 18),
      r(6),
      e(),
      i(7, "td", 18),
      r(8),
      e(),
      i(9, "td", 19),
      xe(10, 20),
      _(11, mt, 2, 0, "span", 21)(12, pt, 2, 0, "span", 22)(
        13,
        ct,
        2,
        0,
        "span",
        23
      )(14, ut, 2, 0, "span", 24)(15, gt, 2, 0, "span", 25),
      fe(),
      e(),
      i(16, "td", 26)(17, "a", 27),
      E(18, "img", 28),
      e(),
      i(19, "button", 29),
      g("click", function () {
        let l = c(t).$implicit,
          d = x();
        return u(d.openModal("editar", l));
      }),
      E(20, "img", 30),
      e(),
      _(21, xt, 1, 1, "app-modal-editar", 31),
      i(22, "button", 32),
      g("click", function () {
        let l = c(t).$implicit,
          d = x();
        return u(d.openModal("observaciones", l));
      }),
      E(23, "img", 33),
      e(),
      _(24, ft, 1, 1, "app-modal-observaciones", 34)(
        25,
        _t,
        1,
        1,
        "app-modal-solicitantes-list",
        34
      ),
      i(26, "button", 35),
      g("click", function () {
        let l = c(t).$implicit,
          d = x();
        return u(d.openModal("prestamo", l));
      }),
      E(27, "img", 36),
      e()()();
  }
  if (a & 2) {
    let t = o.$implicit,
      n = x();
    s(2),
      f(" ", t.num_seg_social, " "),
      s(2),
      j(t.agregado_medico),
      s(2),
      j(t.nombre),
      s(2),
      j(t.apellido_paterno),
      s(2),
      m("ngSwitch", t.vigencia_documental),
      s(),
      m("ngSwitchCase", "Seccion I"),
      s(),
      m("ngSwitchCase", "Seccion II"),
      s(),
      m("ngSwitchCase", "Donador de sangre"),
      s(),
      m("ngSwitchCase", "SISI o Aut Judicial"),
      s(3),
      m("routerLink", J(13, dt, t.id_expediente)),
      s(4),
      m("ngIf", n.showModalEditar === t),
      s(3),
      m("ngIf", n.showModalObservaciones === t),
      s(),
      m("ngIf", n.showModalPrestamo === t);
  }
}
function ht(a, o) {
  if (a & 1) {
    let t = y();
    i(0, "button", 44),
      g("click", function () {
        let l = c(t).$implicit,
          d = x();
        return u(d.goToPage(l));
      }),
      r(1),
      e();
  }
  if (a & 2) {
    let t = o.$implicit,
      n = x();
    ge("bg-gray-200", n.currentPage === t), s(), f(" ", t, " ");
  }
}
var Le = class a {
  constructor(o) {
    this.expedientesService = o;
  }
  listExpedientes = [];
  filteredExpedientes = [];
  searchText = "";
  selectedOption = "Todos";
  showModalEditar = null;
  showModalPrestamo = null;
  showModalBaja = null;
  showModalObservaciones = null;
  currentPage = 1;
  totalExpedientes = 0;
  lastPage = 1;
  limit = 10;
  maxPagesVisible = 10;
  ngOnInit() {
    this.getExpedientes();
  }
  onFilterChange(o) {
    (this.searchText = o.searchText),
      (this.selectedOption = o.selectedOption),
      (this.currentPage = 1),
      this.getExpedientes();
  }
  getExpedientes() {
    this.expedientesService
      .getExpedientes(
        this.currentPage,
        this.limit,
        this.selectedOption,
        this.searchText
      )
      .subscribe((o) => {
        (this.listExpedientes = o.data),
          (this.totalExpedientes = o.total),
          (this.lastPage = o.lastPage);
      });
  }
  getPaginatedPages() {
    let o = Math.max(
        1,
        this.currentPage - Math.floor(this.maxPagesVisible / 2)
      ),
      t = Math.min(this.lastPage, o + this.maxPagesVisible - 1);
    return (
      t - o < this.maxPagesVisible - 1 &&
        (o = Math.max(1, t - this.maxPagesVisible + 1)),
      Array.from({ length: t - o + 1 }, (n, l) => l + o)
    );
  }
  goToPage(o) {
    o >= 1 &&
      o <= this.lastPage &&
      ((this.currentPage = o), this.getExpedientes());
  }
  nextPage() {
    this.currentPage < this.lastPage &&
      (this.currentPage++, this.getExpedientes());
  }
  prevPage() {
    this.currentPage > 1 && (this.currentPage--, this.getExpedientes());
  }
  openModal(o, t) {
    o === "editar" && (this.showModalEditar = t),
      o === "baja" && (this.showModalBaja = t),
      o === "observaciones" && (this.showModalObservaciones = t);
  }
  handleSave(o) {
    let t = this.listExpedientes.findIndex(
      (n) => n.id_expediente === o.id_expediente
    );
    t !== -1 && (this.listExpedientes[t] = Z({}, o)), this.closeModal("editar");
  }
  closeModal(o) {
    o === "editar" && (this.showModalEditar = null),
      o === "baja" && (this.showModalBaja = null),
      o === "observaciones" && (this.showModalObservaciones = null),
      o === "prestamo" && (this.showModalPrestamo = null);
  }
  static ɵfac = function (t) {
    return new (t || a)(w(R));
  };
  static ɵcmp = C({
    type: a,
    selectors: [["app-expedientes-list"]],
    decls: 32,
    vars: 4,
    consts: [
      [1, "container", "mx-auto", "p-6"],
      [
        1,
        "text-center",
        "text-2xl",
        "font-bold",
        "text-gray-800",
        "dark:text-gray-200",
        "mb-8",
      ],
      [1, "mb-6"],
      [3, "filterChange"],
      [
        1,
        "relative",
        "overflow-x-auto",
        "shadow-lg",
        "sm:rounded-lg",
        "border",
        "border-gray-200",
        "dark:border-gray-700",
        "max-h-[calc(5000vh-50px)]",
      ],
      [
        1,
        "w-full",
        "text-sm",
        "text-left",
        "rtl:text-right",
        "text-gray-600",
        "dark:text-gray-400",
      ],
      [
        1,
        "text-xs",
        "text-gray-700",
        "uppercase",
        "bg-gray-100",
        "dark:bg-gray-800",
        "dark:text-gray-300",
      ],
      [1, "px-6", "py-3", "text-center"],
      [
        "class",
        "bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 text-center",
        4,
        "ngFor",
        "ngForOf",
      ],
      [
        1,
        "flex",
        "justify-end",
        "w-full",
        "sticky",
        "bottom-0",
        "bg-white",
        "z-10",
        "py-2",
        "px-4",
      ],
      ["aria-label", "Pagination", 1, "flex", "items-center", "-space-x-px"],
      [
        "type",
        "button",
        1,
        "min-h-[38px]",
        "min-w-[38px]",
        "py-2",
        "px-2.5",
        "inline-flex",
        "justify-center",
        "items-center",
        "gap-x-1.5",
        "text-sm",
        "first:rounded-s-lg",
        "last:rounded-e-lg",
        "border",
        "border-gray-200",
        "text-gray-800",
        "hover:bg-gray-100",
        "focus:outline-none",
        "focus:bg-gray-100",
        3,
        "click",
        "disabled",
      ],
      [
        "xmlns",
        "http://www.w3.org/2000/svg",
        "width",
        "24",
        "height",
        "24",
        "viewBox",
        "0 0 24 24",
        "fill",
        "none",
        "stroke",
        "currentColor",
        "stroke-width",
        "2",
        "stroke-linecap",
        "round",
        "stroke-linejoin",
        "round",
        1,
        "shrink-0",
        "size-3.5",
      ],
      ["d", "m15 18-6-6 6-6"],
      [
        "class",
        "min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-200 text-gray-800 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none focus:bg-gray-300",
        3,
        "bg-gray-200",
        "click",
        4,
        "ngFor",
        "ngForOf",
      ],
      ["d", "m9 18 6-6-6-6"],
      [
        1,
        "bg-white",
        "dark:bg-gray-900",
        "hover:bg-gray-50",
        "dark:hover:bg-gray-800",
        "text-center",
      ],
      [
        1,
        "px-6",
        "py-4",
        "font-medium",
        "text-gray-900",
        "whitespace-nowrap",
        "dark:text-gray-100",
        "text-center",
      ],
      [1, "px-6", "py-4", "text-gray-700", "dark:text-gray-300", "text-center"],
      [1, "px-6", "py-4"],
      [3, "ngSwitch"],
      [
        "class",
        "bg-green-200 text-green-900 px-4 py-2 rounded-full font-semibold text-center block",
        4,
        "ngSwitchCase",
      ],
      [
        "class",
        "bg-yellow-200 text-yellow-900 px-4 py-2 rounded-full font-semibold text-center block",
        4,
        "ngSwitchCase",
      ],
      [
        "class",
        "bg-blue-200 text-blue-900 px-4 py-2 rounded-full font-semibold text-center block",
        4,
        "ngSwitchCase",
      ],
      [
        "class",
        "bg-red-200 text-red-900 px-4 py-2 rounded-full font-semibold text-center block",
        4,
        "ngSwitchCase",
      ],
      [
        "class",
        "bg-gray-200 text-gray-900 px-4 py-2 rounded-full font-semibold text-center block",
        4,
        "ngSwitchDefault",
      ],
      [1, "px-6", "py-4", "space-x-2", "flex", "items-center"],
      [
        "title",
        "Visualizar",
        1,
        "inline-flex",
        "items-center",
        "text-green-600",
        "dark:text-green-400",
        "hover:underline",
        3,
        "routerLink",
      ],
      [
        "src",
        "images/vision.png",
        "alt",
        "Visualizar",
        1,
        "w-6",
        "h-6",
        "mr-2",
      ],
      [
        "title",
        "Editar",
        1,
        "inline-flex",
        "items-center",
        "text-blue-600",
        "dark:text-blue-400",
        "hover:underline",
        3,
        "click",
      ],
      ["src", "images/edit.png", "alt", "Editar", 1, "w-6", "h-6", "mr-2"],
      [3, "expediente", "onSave", "onClose", 4, "ngIf"],
      [
        "title",
        "Observaciones",
        1,
        "inline-flex",
        "items-center",
        "text-yellow-600",
        "dark:text-yellow-400",
        "hover:underline",
        3,
        "click",
      ],
      [
        "src",
        "images/observaciones.png",
        "alt",
        "Observaciones",
        1,
        "w-6",
        "h-6",
        "mr-2",
      ],
      [3, "expediente", "onClose", 4, "ngIf"],
      [
        "title",
        "Solicitante",
        1,
        "inline-flex",
        "items-center",
        "text-yellow-600",
        "dark:text-yellow-400",
        "hover:underline",
        3,
        "click",
      ],
      [
        "src",
        "images/solicitante.png",
        "alt",
        "Prestamo",
        1,
        "w-6",
        "h-6",
        "mr-2",
      ],
      [
        1,
        "bg-green-200",
        "text-green-900",
        "px-4",
        "py-2",
        "rounded-full",
        "font-semibold",
        "text-center",
        "block",
      ],
      [
        1,
        "bg-yellow-200",
        "text-yellow-900",
        "px-4",
        "py-2",
        "rounded-full",
        "font-semibold",
        "text-center",
        "block",
      ],
      [
        1,
        "bg-blue-200",
        "text-blue-900",
        "px-4",
        "py-2",
        "rounded-full",
        "font-semibold",
        "text-center",
        "block",
      ],
      [
        1,
        "bg-red-200",
        "text-red-900",
        "px-4",
        "py-2",
        "rounded-full",
        "font-semibold",
        "text-center",
        "block",
      ],
      [
        1,
        "bg-gray-200",
        "text-gray-900",
        "px-4",
        "py-2",
        "rounded-full",
        "font-semibold",
        "text-center",
        "block",
      ],
      [3, "onSave", "onClose", "expediente"],
      [3, "onClose", "expediente"],
      [
        1,
        "min-h-[38px]",
        "min-w-[38px]",
        "flex",
        "justify-center",
        "items-center",
        "border",
        "border-gray-200",
        "text-gray-800",
        "py-2",
        "px-3",
        "text-sm",
        "first:rounded-s-lg",
        "last:rounded-e-lg",
        "focus:outline-none",
        "focus:bg-gray-300",
        3,
        "click",
      ],
    ],
    template: function (t, n) {
      t & 1 &&
        (i(0, "div", 0)(1, "h1", 1),
        r(2, " B\xFAsqueda de Pacientes por Expediente "),
        e(),
        i(3, "div", 2)(4, "app-search-form", 3),
        g("filterChange", function (d) {
          return n.onFilterChange(d);
        }),
        e()(),
        i(5, "div", 4)(6, "table", 5)(7, "thead", 6)(8, "tr")(9, "th", 7),
        r(10, "Num. de Seguridad Social"),
        e(),
        i(11, "th", 7),
        r(12, "Agregado M\xE9dico"),
        e(),
        i(13, "th", 7),
        r(14, "Nombre"),
        e(),
        i(15, "th", 7),
        r(16, "Apellido Paterno"),
        e(),
        i(17, "th", 7),
        r(18, "Vigencia documental"),
        e(),
        i(19, "th", 7),
        r(20, "Opciones"),
        e()()(),
        i(21, "tbody"),
        _(22, bt, 28, 15, "tr", 8),
        e()()(),
        i(23, "div", 9)(24, "nav", 10)(25, "button", 11),
        g("click", function () {
          return n.prevPage();
        }),
        k(),
        i(26, "svg", 12),
        E(27, "path", 13),
        e()(),
        _(28, ht, 2, 3, "button", 14),
        G(),
        i(29, "button", 11),
        g("click", function () {
          return n.nextPage();
        }),
        k(),
        i(30, "svg", 12),
        E(31, "path", 15),
        e()()()()()),
        t & 2 &&
          (s(22),
          m("ngForOf", n.listExpedientes),
          s(3),
          m("disabled", n.currentPage === 1),
          s(3),
          m("ngForOf", n.getPaginatedPages()),
          s(),
          m("disabled", n.currentPage === n.lastPage));
    },
    dependencies: [T, N, M, he, ve, ye, ne, re, se, Ee, de],
    encapsulation: 2,
  });
};
export { Le as ExpedientesListComponent };
