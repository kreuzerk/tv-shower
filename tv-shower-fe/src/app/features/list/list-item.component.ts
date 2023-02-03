import {Component, ElementRef, Input, ViewChild} from "@angular/core";
import {AsyncPipe, JsonPipe, NgIf} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {map, tap} from "rxjs";

import {TvShow} from "../../shared/tv-show.model";
import {TvShowsService} from "../../core/tv-shows.service";
import {useMutationResult} from "@ngneat/query";

@Component({
  selector: 'list-item',
  template: `

    <!--
    <pre class="text-white">
    {{ show | json }}
    </pre>
    -->

    <div class="rounded-2xl shadow-2xl text-white">
      <img class="h-56 w-48 bg-cover" [src]="show?.coverImageUrl" />
      <div class="p-5">
        <strong
          class="block py-2 mb-5 border-b-red-800 border-b-2"
          >{{ show?.title }}</strong
        >
        <input
          #updateInput
          *ngIf="edit$ | async"
          type="text"
          class="block bg-slate-900 pl-2 py-2 mb-5 border-b-red-800 border-b-2"
          [value]="show?.title"
        />
        <div class="flex justify-between">
          <span>{{ show?.rating }}</span>
        </div>

        <div class="flex justify-end">
          <button
            (click)="udpate()"
            *ngIf="edit$ | async"
            class="rounded-2xl text-white bg-gray-900 h-12 p-2 pl-5 pr-5 mt-10 hover:border hover:border-2 hover:border-red-900"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  `,
  imports: [NgIf, AsyncPipe, JsonPipe],
  standalone: true,
})
export class ListItemComponent {

  @ViewChild('updateInput') updateInput: ElementRef<any> | undefined;

  @Input() show: TvShow | undefined;
  edit$ = this.activatedRoute.paramMap.pipe(
    map((paramsMap) => paramsMap.has('edit'))
  );

  updateShow = useMutationResult();

  constructor(private activatedRoute: ActivatedRoute, private tvShowsService: TvShowsService) {}

  udpate(){
    this.updateShow.track();

    this.tvShowsService.update({
      ...this.show,
      title: this.updateInput?.nativeElement.value
    } as TvShow).pipe(
      tap(() => this.updateShow.track())
    ).subscribe();
  }
}
