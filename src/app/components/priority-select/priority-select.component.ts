import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Priority } from '../../models/priority';

@Component({
  selector: 'app-priority-select',
  templateUrl: './priority-select.component.html',
  styleUrls: ['./priority-select.component.scss']
})

export class PrioritySelectComponent {

  @Input() priority: Priority;

  @Output() prioritySelectedEvent : EventEmitter<any> = new EventEmitter<any>()

  priorities : Priority[] = [
    {
      id: 1,
      priorityName: "Low"
    },
    {
      id: 2,
      priorityName: "Medium"
    },
    {
      id: 3,
      priorityName: "High"
    }
  ]

  handlerPriority = (payload: any) => {
    let priorityId = payload.target.value

    console.log("Set priority to: " + priorityId)
    this.prioritySelectedEvent.emit({ id: priorityId })
  }
}
