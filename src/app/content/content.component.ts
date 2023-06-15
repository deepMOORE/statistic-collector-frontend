import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ContentComponent {
  entities: any[] = [
    { name: '2023-01-01', value: 11 },
    { name: '2023-01-01', value: 22 },
    { name: '2023-02-01', value: 33 },
    { name: '2023-03-01', value: 44 },
    { name: '2023-04-01', value: 55 },
    { name: '2023-05-01', value: 66 },
    { name: '2023-06-01', value: 77 },
    { name: '2023-07-01', value: 88 },
    { name: '2023-08-01', value: 99 },
    { name: '2023-09-01', value: 110 },
    { name: '2023-10-01', value: 121 },
    { name: '2023-11-01', value: 132 },
    { name: '2023-12-01', value: 143 },
  ];
}
