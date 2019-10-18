import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-json-reader',
  templateUrl: './json-reader.component.html',
  styleUrls: ['./json-reader.component.scss']
})
export class JsonReaderComponent implements OnInit {
  @Input() json: JSON;
  jsonKeys: Array<string>;

  constructor() { }

  ngOnInit() {
    this.jsonKeys = Object.keys(this.json).sort();
  }

  checkIfComplex(value: any): boolean {
    return (typeof(value) === 'object') ? true : false;
  }

}
