import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.css']
})
export class MatchDetailsComponent implements OnInit {

  matchDetails = matchDetails;
  constructor() { }

  ngOnInit(): void {
  }
  
}

export interface Match {
  homeTeam : Team;
  awayTeam : Team;
  time : String;
}

export interface Team {
  teamImgURL : String;
  teamName : String;
}

const matchDetails:Match  = {
  homeTeam : {
    teamImgURL : "https://www.cricket.com.au/-/media/Players/Men/Domestic/Melbourne%20Renegades/Dan_Christian_MR_BBL08.ashx",
    teamName : "MI"
  },
  awayTeam : {
    teamImgURL : "https://www.cricket.com.au/-/media/Players/Men/Domestic/Melbourne%20Renegades/Dan_Christian_MR_BBL08.ashx",
    teamName : "CHE"
  },
  time : "Today 4 PM"
};
