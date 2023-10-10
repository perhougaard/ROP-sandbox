import { Component, OnInit } from '@angular/core';
import { GridSize } from '@progress/kendo-angular-grid';
import { Subscription } from 'rxjs';
import { IRegnskabPost } from 'src/app/models/regnskabpost.model';
import { RegnskabService } from 'src/app/services/regnskab.service';

@Component({
  selector: 'app-regnskab',
  templateUrl: './regnskab.component.html',
  styleUrls: ['./regnskab.component.css']
})
export class RegnskabComponent implements OnInit {

  constructor(private regnskabService: RegnskabService) {
  }
  regnskabPoster: IRegnskabPost[] = [];
  public gridSize: GridSize = "none";
  sub!: Subscription;
  ngOnInit(): void {
    this.sub = this.regnskabService.getAllRegnskabPoster().subscribe({
      next: (regnskabPoster: IRegnskabPost[]) => { this.regnskabPoster = regnskabPoster}
    });
  }
}