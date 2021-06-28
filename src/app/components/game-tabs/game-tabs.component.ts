import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-game-tabs',
  templateUrl: './game-tabs.component.html',
  styleUrls: ['./game-tabs.component.scss']
})
export class GameTabsComponent implements OnInit {
  @Input() game: Game;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

}
