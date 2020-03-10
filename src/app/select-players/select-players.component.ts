import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarConfig } from '@angular/material/snack-bar/';

import { SESSION_ID } from '../appConstant';
import { Player } from '../appModels';

@Component({
  selector: 'app-select-players',
  templateUrl: './select-players.component.html',
  styleUrls: ['./select-players.component.css']
})
export class SelectPlayersComponent implements OnInit {

  displayedColumns = ['imgURL', 'name', 'points', 'price', 'checked'];
  wicketkeepers  = ELEMENT_DATA;
  batsmans = ELEMENT_DATA;
  allrounders = ELEMENT_DATA;
  bowlers = ELEMENT_DATA;
  selectedPlayers:Array<Player> = new Array;
  totalWKSelected = 2;
  totalBatSelected = 3;
  totalAlrSelected = 3;
  totalBowSelected = 3;

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  menuClick() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }

  onChange(event, item) {
    
    if(event.checked){
      this.selectedPlayers.push(item);
      console.log(item.name + " added");
    }
    else {
      const index = this.selectedPlayers.indexOf(item, 0);
      if (index > -1) {
        this.selectedPlayers.splice(index, 1);
        console.log(item.name + " removed");
      }
    }

    console.log(this.selectedPlayers);
  }

  submit(){
    let error //= this.validateSelectedPlayers();
    if(error != undefined){
      /* Error message is available */
      this.showSnackBar(error);
    }else {
      sessionStorage.setItem(SESSION_ID.SelectedPlayersKey, JSON.stringify(this.selectedPlayers)); 
      window.location.href = "/selectCaptain";
    }
  }

  private validateSelectedPlayers(){
    let errorMsg;
    if(this.selectedPlayers.length < 11){
      errorMsg = "Squad incomplete, please select 11 players."
    } else if(this.selectedPlayers.length > 11){
      errorMsg = "Too many players selected."
    } else if(this.selectedPlayers.filter(item=>{item.type === "WK"}).length>4){
      errorMsg = "WicetKeeper should not be more than 4."
    } else if(this.selectedPlayers.filter(item=>{item.type === "WK"}).length < 1){
      errorMsg = "Select Atleast 1 Wicketkeeper"
    } else if(this.selectedPlayers.filter(item=>{item.type === "BAT"}).length>6){
      errorMsg = "Batsman should not be more than 6."
    } else if(this.selectedPlayers.filter(item=>{item.type === "BAT"}).length < 3){
      errorMsg = "Select Atleast 3 Batsman"
    } else if(this.selectedPlayers.filter(item=>{item.type === "ALR"}).length>3){
      errorMsg = "All-rounder should not be more than 3."
    } else if(this.selectedPlayers.filter(item=>{item.type === "ALR"}).length < 1){
      errorMsg = "Select Atleast 1 All-rounder"
    } else if(this.selectedPlayers.filter(item=>{item.type === "BOW"}).length>6){
      errorMsg = "Bowler should not be more than 6."
    } else if(this.selectedPlayers.filter(item=>{item.type === "BOW"}).length < 3){
      errorMsg = "Select Atleast 3 Bowler"
    }

    return errorMsg;
  }

  private showSnackBar(message: string){
    let config = new MatSnackBarConfig();
        config.panelClass = ['snack-bar'];
        config.duration = 3000;
        this.snackBar.open(message, null ,config);
  }
}



const ELEMENT_DATA: Player[] = [
  {imgURL: "https://www.cricket.com.au/-/media/Players/Men/Domestic/Melbourne%20Renegades/Dan_Christian_MR_BBL08.ashx", name: 'Daniel Christan', points: 343, price: 9, checked: false, type: "ALR"},
  {imgURL: "https://www.cricket.com.au/-/media/Players/Men/Domestic/Melbourne%20Renegades/Dan_Christian_MR_BBL08.ashx", name: 'Dhoni', points: 425, price: 11, checked: false, type: "WK"},
  {imgURL: "https://www.cricket.com.au/-/media/Players/Men/Domestic/Melbourne%20Renegades/Dan_Christian_MR_BBL08.ashx", name: 'Ganguly', points: 563, price: 10.5, checked: false, type: "BAT"}
];
