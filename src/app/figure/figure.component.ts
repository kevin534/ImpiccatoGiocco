import { Component, Input, OnInit } from '@angular/core';
import { LayoutComponent } from '../layout/layout.component';


@Component({
  selector: 'app-figure',
  templateUrl: './figure.component.html',
  styleUrls: ['./figure.component.css']
})
export class FigureComponent implements OnInit {
 @Input()
  pointFigure!: number;
  control = false;
  constructor() { }

  ngOnInit(): void {
     this.control = false;
  }

}
