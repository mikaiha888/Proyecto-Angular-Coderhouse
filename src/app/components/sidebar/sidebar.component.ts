import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: ``
})
export class SidebarComponent {
  expanded = true;

  setExpanded() {
    this.expanded = !this.expanded
  }

  getIconName() {
    return this.expanded ? 'chevronFirst' : 'chevronLast';
  }

  navButtons = [
    {name: 'Dashboard', iconName: 'layoutDashboard', active: false, alert: true},
    {name: 'Classroom', iconName: 'presentation', active: true, alert: false},
    {name: 'Calendar', iconName: 'squareGanttChart', active: false, alert: false},
  ]
  
  sideButtons = [
    {name: 'Notification', iconName: 'bell', active: false, alert: true},
    {name: 'Chat', iconName: 'messageCircleMore', active: false, alert: false},
    {name: 'Profile', iconName: 'circleUserRound', active: false, alert: false},
  ]
  
  trackByFn (index : number, item: any) {
    return item.iconName;
  }
}
