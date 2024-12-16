import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
import { ContractType, JobFilters } from 'src/app/types/Job';
import { JobsFacade } from '../../jobs.facade';

@Component({
  selector: 'app-jobs-search',
  standalone: true,
  imports: [
    CommonModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './jobs-search.component.html',
  styleUrls: ['./jobs-search.component.scss'],
})
export class JobsSearchComponent implements OnInit {
  @Output() public filtersChanged = new EventEmitter<JobFilters>();

  private readonly jobsFacade = inject(JobsFacade);

  public searchForm = new FormGroup({
    search: new FormControl<string>(''),
    contractTypes: new FormControl<ContractType[]>([]),
  });

  public contractTypeOptions: ContractType[] =
    this.jobsFacade.getContractType();

  public ngOnInit(): void {
    this.searchForm.valueChanges.subscribe((values) => {
      const filters: JobFilters = {
        search: values.search || '',
        contractTypes: values.contractTypes || [],
      };
      this.filtersChanged.emit(filters);
    });
  }
}
