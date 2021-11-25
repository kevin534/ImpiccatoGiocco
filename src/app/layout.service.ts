export class LayoutService{
    testSolution(word:string,enterWord:string,pointFigure:number,tentativi:number,punti:number){
        if(word == enterWord){
            console.log("is the same word\n"+word+"---"+enterWord);
            enterWord='';
            punti= punti + 10;
          }
          else{
            pointFigure = pointFigure + 1;
            console.log("is the Not same word\n"+word+"---"+enterWord
            );
            enterWord='';
            tentativi = tentativi + 1;
          
          }
    }
}