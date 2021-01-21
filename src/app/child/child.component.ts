import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit {
  @Input() public firstName: string;
  @Input() public lastName: string;

  public name: string = "";

  public getNameCallCheck: number = 0;
  public initializedNameCheck: number = 0;

  constructor() {}

  public get nameGetter() {
    this.getNameCallCheck += 1;
    return `${this.firstName} ${this.lastName}`;
  }

  ngOnInit() {
    this.initializedNameCheck += 1;
    this.name = `${this.firstName} ${this.lastName}`;
  }
}
