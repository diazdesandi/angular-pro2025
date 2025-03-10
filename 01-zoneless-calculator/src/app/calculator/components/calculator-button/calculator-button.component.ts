import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'calculator-button',
  standalone: true,
  imports: [],
  templateUrl: './calculator-button.component.html',
  styleUrls: ['./calculator-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'w-1/4 border-r border-b border-indigo-400',
  },
  // encapsulation: ViewEncapsulation.None,
})
export class CalculatorButtonComponent {
  // Input decorator with a custom transform function
  // if the value is a string, it will be converted to a boolean
  public isCommand = input(false, {
    transform: (value: boolean | string) =>
      typeof value === 'string' ? value === '' : value,
  });

  public isDoubleSize = input(false, {
    transform: (value: boolean | string) =>
      typeof value === 'string' ? value === '' : value,
  });

  // HostBinding decorator with a custom class
  // if the value is true, the class will be added
  // if the value is false, the class will be removed
  // @HostBinding('class.is-command') get commandStyle() {
  //   return this.isCommand();
  // }
  @HostBinding('class.w-2/4') get commandStyle() {
    return this.isDoubleSize();
  }
}
