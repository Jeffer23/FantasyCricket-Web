import { Component, OnInit } from '@angular/core';

import { SESSION_ID } from '../appConstant';
import { Player } from '../appModels';

@Component({
  selector: 'app-select-captain',
  templateUrl: './select-captain.component.html',
  styleUrls: ['./select-captain.component.css']
})
export class SelectCaptainComponent implements OnInit {

  displayedColumns = ['imgURL', 'name', 'points', 'price'];
  selectedPlayers: Player;
  constructor() { }

  ngOnInit(): void {
    this.selectedPlayers = JSON.parse(sessionStorage.getItem(SESSION_ID.SelectedPlayersKey));
  }

}
