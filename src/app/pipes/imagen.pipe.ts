import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(pathFinal: string, size: string = 'w500'): string {
    let basePath = environment.imgBasePath;

    if (!pathFinal) {
      return '/assets/no-image-banner.jpg';
    }

    const fullUrl = `${basePath}/${size}${pathFinal}`
    // console.log(fullUrl);

    return fullUrl;
  }

}
