import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TimeseriesChartComponent } from '../timeseries-chart/timeseries-chart.component';
import { LatestChartComponent } from '../latest-chart/latest-chart.component';

/**
 * Component for managing the dashboard, including view/edit modes,
 * toggling charts, and modifying visibility.
 */
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, TimeseriesChartComponent, LatestChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  /** Tracks whether the dashboard is in edit mode */
  isEditMode: boolean = false;

  /** Keeps track of the currently displayed chart boxes */
  displayedBoxes: string[] = ['timeseries', 'latest'];

  /**
   * Toggles between view and edit modes.
   *
   * @returns {void}
   */
  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
  }

  /**
   * Hides a chart box if there is at least one visible.
   *
   * @param {string} boxType - The chart type to hide (e.g., 'timeseries' or 'latest').
   * @throws {Error} If trying to remove the last remaining box.
   * @returns {void}
   */
  hideBox(boxType: string): void {
    if (this.displayedBoxes.length > 0) {
      this.displayedBoxes = this.displayedBoxes.filter(
        (box) => box !== boxType
      );
    } else {
      console.error('Cannot remove the last remaining chart.');
    }
  }

  /**
   * Adds a chart box if fewer than two boxes are currently displayed.
   *
   * @param {string} boxType - The chart type to add (e.g., 'timeseries' or 'latest').
   * @throws {Error} If attempting to add a duplicate chart.
   * @returns {void}
   */
  addBox(boxType: string): void {
    if (
      this.displayedBoxes.length < 2 &&
      !this.displayedBoxes.includes(boxType)
    ) {
      this.displayedBoxes.push(boxType);
    } else {
      console.error(`Cannot add duplicate chart: ${boxType}`);
    }
  }
}
