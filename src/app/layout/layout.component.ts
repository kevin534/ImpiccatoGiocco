import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  providers: [LayoutService]
 
})
export class LayoutComponent implements OnInit {
  enterWord = '';
  control = true;
  disabled = false;
  tmp = '';

  words = ["red","zebra","melone"];
  lastWord = '';
  numWord= 0;
  tentativi = 0;
  punti= 0;
  pointFigure = 0;
  constructor(private layoutService: LayoutService) { }

  ngOnInit(): void {
    
  }
  
  onSelect(){
    const index = Math.floor(Math.random()*this.words.length);
    this.tmp = this.words[index];
    this.lastWord = this.tmp.slice(this.tmp.length - 1)
    this.numWord = this.tmp.length;
    this.disabled=true;
    this.control=false;
    console.log(this.disabled);
  }
  getSolution(){
    const index = Math.floor(Math.random()*this.words.length);
    this.tmp = this.words[index];
    this.lastWord = this.tmp.slice(this.tmp.length - 1)
    this.numWord = this.tmp.length;
   //this.layoutService.testSolution(this.words[index],this.enterWord,this.pointFigure,this.tentativi,this.punti);
    
   if(this.words[index] == this.enterWord){
    console.log("is the same word\n"+this.words[index]+"---"+this.enterWord);
    this.enterWord='';
    this.punti= this.punti + 10;
  }
  else{
    this.pointFigure = this.pointFigure + 1;
    console.log("is the Not same word\n"+this.words[index]+"---"+this.enterWord
    );
    this.enterWord='';
    this.tentativi = this.tentativi + 1;
  
  }
  if(this.tentativi == 7 || this.punti == 30){
    this.control=true;
   
  }

  }
  reload(){
    location.reload();
  }
}
