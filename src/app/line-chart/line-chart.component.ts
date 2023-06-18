import {Component, Input, OnInit} from '@angular/core';
import Chart from 'chart.js/auto';
import {StatsPeriodItem} from "../data/stats";
import {dateToClientMonthFormat} from "../mapping/formetters";

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  public chart: any;

  @Input() public stats!: StatsPeriodItem[];

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart('Chart', {
      type: 'line',
      data: {
        labels: this.stats.map(x => {
          return dateToClientMonthFormat(x.period);
        }),
        datasets: [
          {
            label: "Values",
            data: this.stats.map(x => x.value),
            backgroundColor: 'blue'
          },
        ]
      },
      options: {
        animation: false,
        aspectRatio: 4
      }
    });
  }
}
