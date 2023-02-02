import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { __String } from "typescript";
import { Provider } from "../list/list.component";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent implements OnInit {
  @Input() provider: Provider;
  @Input() isSaved: boolean;
  @Output() callbackFunction = new EventEmitter();

  public ProcessClick() {
    this.callbackFunction.emit({
      provider: this.provider,
      isSaved: this.isSaved,
    });
  }

  constructor() {}

  ngOnInit() {}
}
