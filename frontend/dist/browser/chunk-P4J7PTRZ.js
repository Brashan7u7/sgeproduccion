import { J as i, M as r, R as l, _b as u, h as s } from "./chunk-R3GSGODC.js";
var a = class o {
  constructor(e) {
    this.http = e;
    let n = localStorage.getItem("token") || sessionStorage.getItem("token"),
      t = sessionStorage.getItem("role"),
      b = sessionStorage.getItem("id")
        ? Number(sessionStorage.getItem("id"))
        : null,
      c = sessionStorage.getItem("nombre");
    this.tokenSubject.next(n),
      this.roleSubject.next(t),
      this.idSubject.next(b),
      this.nombreSubject.next(c),
      this.updateSessionStatus(!!n);
  }
  tokenSubject = new s(null);
  token$ = this.tokenSubject.asObservable();
  roleSubject = new s(null);
  role$ = this.roleSubject.asObservable();
  idSubject = new s(null);
  id$ = this.idSubject.asObservable();
  nombreSubject = new s(null);
  nombre$ = this.nombreSubject.asObservable();
  sessionStatusSubject = new s(!1);
  sessionStatus$ = this.sessionStatusSubject.asObservable();
  login(e, n) {
    return this.http
      .post("http://servebrayan.duckdns.org:3000/auth/login", {
        correo: e,
        contrasena: n,
      })
      .pipe(
        i((t) => {
          t &&
            t.access_token &&
            (this.tokenSubject.next(t.access_token),
            this.roleSubject.next(t.role),
            this.idSubject.next(t.id),
            this.nombreSubject.next(t.nombre),
            sessionStorage.setItem("token", t.access_token),
            sessionStorage.setItem("role", t.role),
            sessionStorage.setItem("id", t.id.toString()),
            sessionStorage.setItem("nombre", t.nombre),
            this.updateSessionStatus(!0));
        })
      );
  }
  updateSessionStatus(e) {
    this.sessionStatusSubject.next(e);
  }
  isAuthenticated() {
    return !!this.tokenSubject.getValue();
  }
  logout() {
    this.tokenSubject.next(null),
      this.roleSubject.next(null),
      this.idSubject.next(null),
      sessionStorage.removeItem("token"),
      sessionStorage.removeItem("role"),
      sessionStorage.removeItem("id"),
      this.updateSessionStatus(!1);
  }
  getToken() {
    return this.tokenSubject.getValue();
  }
  getRole() {
    return this.roleSubject.getValue();
  }
  getNombre() {
    return this.nombreSubject.getValue();
  }
  getId() {
    return this.idSubject.getValue();
  }
  static ɵfac = function (n) {
    return new (n || o)(l(u));
  };
  static ɵprov = r({ token: o, factory: o.ɵfac, providedIn: "root" });
};
export { a };
