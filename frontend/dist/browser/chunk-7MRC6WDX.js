import { M as p, R as l, Yb as s, _b as c } from "./chunk-R3GSGODC.js";
var r = "http://servebrayan.duckdns.org:3000/expedientes",
  b = class a {
    constructor(t) {
      this._http = t;
    }
    getExpedienteById(t) {
      return this._http.get(`${r}/${t}`);
    }
    getExpedientes(t = 1, e = 10, n, o) {
      let i = `${r}?page=${t}&limit=${e}`;
      return (
        n && (i += `&vigencia_documental=${n}`),
        o && (i += `&num_seg_social=${o}`),
        this._http.get(i)
      );
    }
    getExpedientesnum_seg_social(t) {
      return this._http.get(
        `http://servebrayan.duckdns.org:3000/search/num_seg_socialocial/${t}`
      );
    }
    createExpediente(t) {
      let e = new s({ "Content-Type": "application/json" });
      return this._http.post(`${r}`, t, { headers: e });
    }
    updateExpediente(t, e) {
      let n = new s({ "Content-Type": "application/json" });
      return this._http.patch(`${r}/${t}`, e, { headers: n });
    }
    static ɵfac = function (e) {
      return new (e || a)(l(c));
    };
    static ɵprov = p({ token: a, factory: a.ɵfac, providedIn: "root" });
  };
export { b as a };
