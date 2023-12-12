import { Component, OnInit } from '@angular/core';

import { ActorService } from '../../service/actor.service';
import { Actor } from '../../models/actor-list.interface';


@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {

  constructor(private actorService: ActorService) { }
  actorList: Actor[] = [];
  actorsFound: number = 0;
  actorCount!: number;
  currentPage = 1;

  ngOnInit(): void {
    this.loadNewPage();
  }

  loadNewPage(): void {
    this.actorService.getList(this.currentPage).subscribe(resp => {
      this.actorList = resp.results
      this.actorCount = resp.total_results;
    });
  }

  loadPageForName(event: any) {
    let nameActor = event.target.value;
    if (nameActor == '') {
      this.loadNewPage();
    } else {
      this.actorService.getByName(nameActor, this.currentPage).subscribe(resp => {
        this.actorList = resp.results;
        this.actorsFound = resp.total_results;
      });
    }
  }

}
