import { a as M } from "./chunk-P4J7PTRZ.js";
import {
  Fa as f,
  Ka as x,
  M as d,
  Mb as y,
  Nb as S,
  R as v,
  Ra as p,
  Sb as I,
  Ta as n,
  Tb as _,
  Ua as o,
  Va as u,
  _b as C,
  db as r,
  eb as m,
  fb as g,
  qb as b,
  sb as h,
  wa as a,
  xa as l,
} from "./chunk-R3GSGODC.js";
var E = "http://servebrayan.duckdns.org:3000/movimientos",
  s = class t {
    constructor(i) {
      this._http = i;
    }
    getMisMovimientos(i) {
      return this._http.get(`${E}/${i}`);
    }
    static ɵfac = function (e) {
      return new (e || t)(v(C));
    };
    static ɵprov = d({ token: t, factory: t.ɵfac, providedIn: "root" });
  };
function F(t, i) {
  if (
    (t & 1 &&
      (n(0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "p", 9),
      r(4),
      n(5, "span", 10),
      r(6),
      o()(),
      n(7, "p", 11),
      r(8),
      b(9, "date"),
      o()(),
      n(10, "div", 12)(11, "div", 13)(12, "p", 14),
      r(13),
      o()(),
      u(14, "div", 15),
      o()()()),
    t & 2)
  ) {
    let e = i.$implicit;
    a(4),
      g(" ", e.tipo_accion, " - "),
      a(2),
      m(e.tipo_actor),
      a(2),
      m(h(9, 4, e.fecha_accion, "short")),
      a(5),
      m(e.descripcion_accion);
  }
}
function O(t, i) {
  t & 1 &&
    (n(0, "div", 16)(1, "p", 17),
    r(2, "No se han registrado movimientos."),
    o()());
}
var w = class t {
  constructor(i, e) {
    this.movimientoService = i;
    this.authService = e;
  }
  movimientos = [];
  id_usuario = 0;
  ngOnInit() {
    (this.id_usuario = this.authService.getId() ?? 0),
      this.movimientoService
        .getMisMovimientos(this.id_usuario)
        .subscribe((i) => {
          this.movimientos = i;
        });
  }
  static ɵfac = function (e) {
    return new (e || t)(l(s), l(M));
  };
  static ɵcmp = f({
    type: t,
    selectors: [["app-perfil"]],
    decls: 8,
    vars: 2,
    consts: [
      [1, "container", "mx-auto", "p-6", "max-w-4xl"],
      [1, "text-4xl", "font-bold", "text-center", "text-green-600", "mb-8"],
      [
        1,
        "bg-white",
        "p-8",
        "rounded-lg",
        "shadow-xl",
        "space-y-6",
        "border",
        "border-gray-200",
      ],
      [1, "text-2xl", "font-semibold", "text-gray-800", "mb-4"],
      [
        "class",
        "border-b last:border-b-0 py-6 px-4 rounded-lg transition-all duration-300 hover:bg-green-50",
        4,
        "ngFor",
        "ngForOf",
      ],
      ["class", "text-center text-gray-500 mt-4", 4, "ngIf"],
      [
        1,
        "border-b",
        "last:border-b-0",
        "py-6",
        "px-4",
        "rounded-lg",
        "transition-all",
        "duration-300",
        "hover:bg-green-50",
      ],
      [1, "flex", "justify-between", "items-start", "space-x-4"],
      [1, "flex", "flex-col", "space-y-1"],
      [1, "text-lg", "font-semibold", "text-gray-800"],
      [1, "text-green-500"],
      [1, "text-sm", "text-gray-500"],
      [1, "flex", "flex-col", "items-end", "space-y-1"],
      [1, "overflow-x-auto", "max-w-full"],
      [
        1,
        "text-sm",
        "text-gray-700",
        "font-medium",
        "whitespace-pre-wrap",
        "break-all",
      ],
      [1, "mt-2"],
      [1, "text-center", "text-gray-500", "mt-4"],
      [1, "italic"],
    ],
    template: function (e, c) {
      e & 1 &&
        (n(0, "div", 0)(1, "h2", 1),
        r(2, "Perfil"),
        o(),
        n(3, "div", 2)(4, "h3", 3),
        r(5, "Historial de Movimientos"),
        o(),
        x(6, F, 15, 7, "div", 4)(7, O, 3, 0, "div", 5),
        o()()),
        e & 2 &&
          (a(6),
          p("ngForOf", c.movimientos),
          a(),
          p("ngIf", c.movimientos.length === 0));
    },
    dependencies: [_, y, S, I],
    encapsulation: 2,
  });
};
export { w as PerfilComponent };
