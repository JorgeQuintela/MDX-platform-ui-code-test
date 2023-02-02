import { ListComponent } from "./list.component";
import { Provider } from "./list.component";

describe("ListComponent", () => {
  let component: ListComponent;

  beforeEach(() => {
    localStorage.clear();
    component = new ListComponent();
    component.ngOnInit();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("unselected providers", () => {
    it("should have an initial length of 9", () => {
      expect(component.unselectedProviders.length).toEqual(9);
    });

    it("should have an id", () => {
      expect(component.unselectedProviders[0].id).toEqual("1");
    });

    it("should have a name", () => {
      expect(component.unselectedProviders[0].name).toEqual("John");
    });

    it("should have an address", () => {
      expect(component.unselectedProviders[0].address).toEqual(
        "123 Greenway Blvd"
      );
    });

    it("should have a phone", () => {
      expect(component.unselectedProviders[0].phone).toEqual("8991234321");
    });
  });

  describe("selected providers", () => {
    it("should have no initial length", () => {
      expect(component.selectedProviders.length).toEqual(0);
    });
  });
  describe("selecting providers", () => {
    it("should have length 1", () => {
      component.AddFavorite(providers[8]);
      expect(component.selectedProviders.length).toEqual(1);
    });
    it("localstorage should have length 1", () => {
      component.AddFavorite(providers[8]);
      expect(
        JSON.parse(localStorage.getItem("selectedProviders")).length
      ).toEqual(1);
    });
    it("should be Joey", () => {
      component.AddFavorite(providers[8]);
      expect(component.selectedProviders[0].name).toEqual("Joey");
    });
    it("selected should have length 9", () => {
      component.AddFavorite(providers[0]);
      component.AddFavorite(providers[1]);
      component.AddFavorite(providers[2]);
      component.AddFavorite(providers[3]);
      component.AddFavorite(providers[4]);
      component.AddFavorite(providers[5]);
      component.AddFavorite(providers[6]);
      component.AddFavorite(providers[7]);
      component.AddFavorite(providers[8]);
      expect(component.selectedProviders.length).toEqual(9);
    });
    it("unselected should have length 0", () => {
      component.AddFavorite(providers[0]);
      component.AddFavorite(providers[1]);
      component.AddFavorite(providers[2]);
      component.AddFavorite(providers[3]);
      component.AddFavorite(providers[4]);
      component.AddFavorite(providers[5]);
      component.AddFavorite(providers[6]);
      component.AddFavorite(providers[7]);
      component.AddFavorite(providers[8]);
      expect(component.unselectedProviders.length).toEqual(0);
    });
    it("unselected should have length 9", () => {
      component.AddFavorite(providers[0]);
      component.RemoveFavorite(providers[0]);
      component.AddFavorite(providers[0]);
      component.RemoveFavorite(providers[0]);
      component.AddFavorite(providers[0]);
      component.RemoveFavorite(providers[0]);
      component.AddFavorite(providers[0]);
      component.RemoveFavorite(providers[0]);
      expect(component.unselectedProviders.length).toEqual(9);
    });
    it("selected should have length 0", () => {
      component.AddFavorite(providers[0]);
      component.RemoveFavorite(providers[0]);
      component.AddFavorite(providers[0]);
      component.RemoveFavorite(providers[0]);
      component.AddFavorite(providers[0]);
      component.RemoveFavorite(providers[0]);
      expect(component.selectedProviders.length).toEqual(0);
    });
  });
});

var providers: Provider[] = [
  {
    id: "1",
    name: "John",
    address: "123 Greenway Blvd",
    phone: "8991234321",
  },
  {
    id: "2",
    name: "Mary",
    address: "443 Windwhisper Road",
    phone: "2233211903",
  },
  {
    id: "3",
    name: "Jason",
    address: "9992 Pumpkin Hollow",
    phone: "4345519384",
  },
  {
    id: "4",
    name: "Monica",
    address: "Clean Ln",
    phone: "4343218884",
  },
  {
    id: "5",
    name: "Rachel",
    address: "Onabreak Dr",
    phone: "4343281384",
  },
  {
    id: "6",
    name: "Phoebe",
    address: "Smelly Cat Blv",
    phone: "4343219384",
  },
  {
    id: "7",
    name: "Chandler",
    address: "Badabing Rd",
    phone: "4233219384",
  },
  {
    id: "8",
    name: "Ross",
    address: "T-Rex Av",
    phone: "4343559384",
  },
  {
    id: "9",
    name: "Joey",
    address: "Pizza St",
    phone: "4348539384",
  },
];
