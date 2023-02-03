import { Component, OnInit } from '@angular/core';
import { UseIsFetching, UseIsMutating } from '@ngneat/query';
import { map, merge, Observable, tap } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'spinner',
  template: ` <div *ngIf="isFetching$ | async" class="loading"></div> `,
  styles: [
    `
      .loading {
        width: 20px;
        height: 20px;
        border: 3px solid rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        border-top-color: #fff;
        animation: spin 1s ease-in-out infinite;
        -webkit-animation: spin 1s ease-in-out infinite;
      }

      @keyframes spin {
        to {
          -webkit-transform: rotate(360deg);
        }
      }

      @-webkit-keyframes spin {
        to {
          -webkit-transform: rotate(360deg);
        }
      }
    `,
  ],
  standalone: true,
  imports: [NgIf, AsyncPipe],
})
export class SpinnerComponent implements OnInit {
  isFetching$: Observable<boolean> | undefined;

  constructor(
    private useIsFetching: UseIsFetching,
    private useIsMutating: UseIsMutating
  ) {}

  ngOnInit(): void {
    this.isFetching$ = merge(
      this.useIsFetching().pipe(
        map((isFetching) => !!isFetching),
        tap((e) => console.log('fetching', e))
      ),
      this.useIsMutating().pipe(
        map((isMutating) => !!isMutating),
        tap((e) => console.log('mutating', e))
      )
    );
  }
}
