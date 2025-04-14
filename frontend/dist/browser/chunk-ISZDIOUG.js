import { M as o, R as i, _b as n } from "./chunk-R3GSGODC.js";
var e = "http://192.168.1.76:3000/usuarios",
  s = class r {
    constructor(t) {
      this._http = t;
    }
    getUsuarios() {
      return this._http.get(e);
    }
    createUsuario(t) {
      return this._http.post(e, t);
    }
    updateUsuario(t, a) {
      return this._http.patch(`${e}/${t}`, a);
    }
    deleteUsuario(t) {
      return this._http.delete(`${e}/${t}`);
    }
    static ɵfac = function (a) {
      return new (a || r)(i(n));
    };
    static ɵprov = o({ token: r, factory: r.ɵfac, providedIn: "root" });
  };
export { s as a };
