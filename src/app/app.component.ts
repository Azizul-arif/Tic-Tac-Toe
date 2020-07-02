import { Component } from '@angular/core';
//importing toastr : Hints are declare in Documentation Use section
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'tic-tac-toe';
  winMessage='';
  isCross=false;
  itemArray:string[]=new Array(9).fill('empty');
  // adds from doc
  constructor(private toastr: ToastrService) {};
  //click info works
  handleClick =(itemNumber:number) =>{
    //condition after winning to show notification
    if(this.winMessage)
    {
      return this.toastr.info(this.winMessage);
    }
    //condition to check the cross or circle sign
    if(this.itemArray[itemNumber]==='empty')
    {
      this.itemArray[itemNumber]=this.isCross ? 'cross' : 'circle';
      this.isCross =!this.isCross;
    }
    else{
      return this.toastr.error("Already Filled");
    }
    //condition for check the winner
    this.checkIsWinner();
  }
  //check for Winner
  //0,1,2 -row
  checkIsWinner = () => {
    if(this.itemArray[0] === this.itemArray[1] &&
      this.itemArray[1] === this.itemArray[2] &&
      this.itemArray [0]!='empty')
    {
      this.winMessage=`${this.itemArray[0]} won`;
    }
    //3,4,5 row
    else if(this.itemArray [3]!='empty' &&
      this.itemArray[3] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[5]
      )
    {
      this.winMessage=`${this.itemArray[3]} won`;
    }
    //6,7,8 row
    else if(this.itemArray [6]!='empty' &&
      this.itemArray[6] === this.itemArray[7] &&
      this.itemArray[7] === this.itemArray[8]
      )
    {
      this.winMessage=`${this.itemArray[6]} won`;
    }
    //0,3,6 column
    else if(this.itemArray [0]!='empty' &&
      this.itemArray[0] === this.itemArray[3] &&
      this.itemArray[3] === this.itemArray[6]
      )
    {
      this.winMessage=`${this.itemArray[0]} won`;
    }
    //1,4,7 column
    else if(this.itemArray [1]!='empty' &&
      this.itemArray[1] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[7]
      )
    {
      this.winMessage=`${this.itemArray[1]} won`;
    }
    //2,5,8 column
    else if(this.itemArray [2]!='empty' &&
      this.itemArray[2] === this.itemArray[5] &&
      this.itemArray[5] === this.itemArray[8]
      )
    {
      this.winMessage=`${this.itemArray[2]} won`;
    }
    //0,4,8 diagonal
    else if(this.itemArray [0]!='empty' &&
      this.itemArray[0] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[8]
      )
    {
      this.winMessage=`${this.itemArray[0]} won`;
    }
    //2,4,6 diagonal
    else if(this.itemArray [2]!='empty' &&
      this.itemArray[2] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[6]
      )
    {
      this.winMessage=`${this.itemArray[0]} won`;
    }
    // else{
    //   this.winMessage="Match Drawn";
    // }
    
  }

  //codition for Reset The game
  reSet = () =>{
    this.itemArray = new Array(9).fill('empty');
    this.isCross = false;
    this.winMessage='';
    
  }
  
  
}
