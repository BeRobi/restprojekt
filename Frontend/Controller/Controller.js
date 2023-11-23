import DataService from "../Model/DataService.js";

class Controller {
  constructor() {
    this.dataService = new DataService();
    this.dataService.getAxiosData("writers", this.megjelenit);
    this.dataService.postAxiosData("writers", {
      nev: "Jenöööö",
      szul: 1666,
    });

    this.dataservice.putAxiosData("writers", {
      id: 1,
      nev: "Átírt József Attila",
      szul: 1905,
    });

    this.dataservice.deleteAxiosData("writers", 15);
  }
  megjelenit(list) {
    console.log(list);
    new View(list, $(".article"));
  }
}
export default Controller;
