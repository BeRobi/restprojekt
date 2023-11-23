export default class SorView {
  #obj = {};
  constructor(index, obj, szuloElem) {
    this.#obj = obj;
    this.index = index;
    this.szuloElem = szuloElem;
    console.log(this.#obj);
    this.htmLOsszerak();
  }
  htmLOsszerak() {
    let txt = "<tr>";
    for (const key in this.#obj) {
      txt += `<td>${this.#obj[key]}</td>`;
    }

    txt += "</tr>";
    console.log(txt);
    this.szuloElem.append(txt);
  }
}
