import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit {
  ngOnInit(): void {
    this.createChart();
  }

  public chart: any;

  taskData: number[] = [50, 25, 25]

  createChart = () => {
    this.chart = new Chart('MyChart', {
      type: 'pie', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: ['To do', 'In Progress', 'Done'],
        datasets: [
          {
            label: 'Task Count',
            data: this.taskData,
            backgroundColor: ['#C5CAED', '#C796DB', '#9F63D0'],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        aspectRatio: 1.5,
      },
    });
  };
}
