import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Actor } from '../../models/actor-list.interface';


@Component({
  selector: 'app-actor-item',
  templateUrl: './actor-item.component.html',
  styleUrls: ['./actor-item.component.css']
})
export class ActorItemComponent {

  @Input() actor!: Actor;
  @Output() clickMovie = new EventEmitter<number>();

  getImage(profile_path: String | undefined) {
    return `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${profile_path}`;
  }

  toUpperCase(title: String) {
    title = title[0].toUpperCase() + title.substring(1);
    return title;
  }

}
