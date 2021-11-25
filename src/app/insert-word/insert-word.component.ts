import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-insert-word',
  templateUrl: './insert-word.component.html',
  styleUrls: ['./insert-word.component.css']
})
export class InsertWordComponent implements OnInit {
  @Output()
  outputWord!: String;
  enterWord = '';
  constructor() { }

  ngOnInit(): void {
    this.outputWord= this.enterWord;
  }

}
