import { Component, OnInit } from "@angular/core";
import { __String } from "typescript";

export interface Provider {
  id: string;
  name: string;
  address: string;
  phone: string;
}

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent implements OnInit {
  public selectedProviders: Provider[] = [];
  public unselectedProviders: Provider[] = [];
  InitData() {
    //checks data from API and localstorage
    var sp = localStorage.getItem("selectedProviders");
    var up = localStorage.getItem("unselectedProviders");
    if (sp && up) {
      //have data stored, show it!
      //TODO: validate data, if API response brings different providers, localstorage info should be manipulated (or invalidated) to reflect that
      this.selectedProviders = JSON.parse(sp);
      this.unselectedProviders = JSON.parse(up);
    } else {
      //dont have data or its corrupted, show default
      this.selectedProviders = [];
      this.unselectedProviders = this.apiResponse;
    }
  }

  public UpdatePersistentData() {
    localStorage.setItem(
      "selectedProviders",
      JSON.stringify(this.selectedProviders)
    );
    localStorage.setItem(
      "unselectedProviders",
      JSON.stringify(this.unselectedProviders)
    );
  }

  public RemoveFavorite(provider: Provider) {
    this.selectedProviders.forEach((value, index) => {
      if (value.id == provider.id) {
        this.selectedProviders.splice(index, 1);
        this.unselectedProviders.push(value);
        this.UpdatePersistentData();
      }
    });
  }

  public AddFavorite(provider: Provider) {
    this.unselectedProviders.forEach((value, index) => {
      if (value.id == provider.id) {
        this.unselectedProviders.splice(index, 1);
        this.selectedProviders.push(value);
        this.UpdatePersistentData();
      }
    });
  }

  public ProcessCardCallback(callBackObj: {
    isSaved: any;
    provider: Provider;
  }) {
    if (callBackObj.isSaved) {
      //process click on saved provider card
      this.RemoveFavorite(callBackObj.provider);
    } else {
      //process click on UNsaved card
      this.AddFavorite(callBackObj.provider);
    }
  }

  public apiResponse: Provider[] = [
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
      phone: "4343219384",
    },
    {
      id: "4",
      name: "Monica",
      address: "Clean Ln",
      phone: "4343219384",
    },
    {
      id: "5",
      name: "Rachel",
      address: "Onabreak Dr",
      phone: "4343219384",
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
      phone: "4343219384",
    },
    {
      id: "8",
      name: "Ross",
      address: "T-Rex Av",
      phone: "4343219384",
    },
    {
      id: "9",
      name: "Joey",
      address: "Pizza St",
      phone: "4343219384",
    },
  ];

  /*public favoriteProvider(provider: Provider) {
    ///alert("Favorite " + provider.name);
    this.AddFavorite(provider);
  }*/

  /*public unfavoriteProvider(provider: Provider) {
    //alert("Unfavorite " + provider.name);
    this.RemoveFavorite(provider);
  }*/

  constructor() {}

  ngOnInit() {
    this.InitData();
  }
}
