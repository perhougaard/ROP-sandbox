import { Component, OnInit } from '@angular/core';
import { PriskurantService } from '../../services/priskurant.service';
import { IPriskurantPost } from '../../models/priskurantpost.model';
import { Subscription } from 'rxjs';
import { DataResult, GroupDescriptor, SortDescriptor, process } from "@progress/kendo-data-query";
import { GroupKey } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-priskurant',
  templateUrl: './priskurant.component.html',
  styleUrls: ['./priskurant.component.css']
})
export class PriskurantComponent implements OnInit {
  constructor(private priskurantService: PriskurantService) {}

  public groups: GroupDescriptor[] = [{field: "Priskurant"}, { field: "PriskurantAfsnit" }, {field: "PriskurantGruppe"}];
  public sort: SortDescriptor[] = [{field: 'Omraade', dir: 'asc'}, {field: 'AfsnitNummer', dir: 'asc'}];
  public expandedGroupKeys: GroupKey[] = [];
  priskurantPoster: IPriskurantPost[] = [];
  public initiallyExpanded = false;
  sub!: Subscription;
  
  ngOnInit(): void {
    this.sub = this.priskurantService.getAllPriskurantPoster().subscribe({
      next: (priskurantPoster: IPriskurantPost[]) => { this.priskurantPoster = priskurantPoster}
    });
  }
}

function ViewChild(arg0: string): (target: undefined, context: ClassFieldDecoratorContext<PriskurantComponent, any> & { name: "grid"; private: false; static: false; }) => void | ((this: PriskurantComponent, value: any) => any) {
  throw new Error('Function not implemented.'); 
}
