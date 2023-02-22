import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit {
  public chart: any

  taskCount: number[] = []

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.taskService.countTaskByStatus().subscribe((tc) => {
      this.createChart(tc)
    })
  }

  createChart = (tc: number[]) => {
    console.log(tc)

    tc.forEach(element => {
      this.taskCount.push(element)
    });

    this.chart = new Chart('MyChart', {
      type: 'pie', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: ['To do', 'In Progress', 'Done'],
        datasets: [
          {
            label: 'Task Count',
            data: this.taskCount,
            backgroundColor: ['#C5CAED', '#C796DB', '#9F63D0'],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        aspectRatio: .59,
      },
    });
  };
}
