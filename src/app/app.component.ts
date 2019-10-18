import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'idiotproof-i18n';
  file: File;
  reader = new FileReader();
  json: JSON;

  onFileChange(event) {
    this.file = event.target.files[0];
    console.log(event);
    this.processFile(this.file);
  }

  processFile(file: File) {
    this.reader.onload = () => {
      const text = this.reader.result as string;
      this.json = JSON.parse(text);
      console.log(this.json);
    };
    this.reader.readAsText(file);
  }

  addJson

}
