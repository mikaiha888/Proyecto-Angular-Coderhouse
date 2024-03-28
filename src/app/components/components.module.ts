import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { StudentsComponent } from './students/students.component';
import {
  LucideAngularModule,
  ChevronFirst,
  ChevronLast,
  MoreVertical,
  Home,
  LayoutDashboard,
  Presentation,
  SquareGanttChart,
  CircleUserRound,
  MessageCircleMore,
  Bell
} from 'lucide-angular';

@NgModule({
  declarations: [
    SidebarComponent,
    ToolbarComponent,
    StudentsComponent,
  ],
  imports: [
    CommonModule,
    LucideAngularModule.pick({
      ChevronFirst,
      ChevronLast,
      MoreVertical,
      Home,
      LayoutDashboard,
      Presentation,
      SquareGanttChart,
      CircleUserRound,
      MessageCircleMore,
      Bell
    }),
  ],
  exports: [SidebarComponent, ToolbarComponent, StudentsComponent],
})
export class ComponentsModule {}
