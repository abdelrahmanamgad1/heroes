import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from 'src/hero';

@Pipe({
  name: 'filterPipe',
  pure: false,
})
export class FilterPipePipe implements PipeTransform {
  transform(value: Hero[], inputValue: string): Hero[] {
    if (inputValue.length > 0) {
      return value.filter((item) => item.name.includes(inputValue));
    } else {
      return (value = []);
    }
  }
}
