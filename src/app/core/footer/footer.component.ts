import { Component } from '@angular/core';
import { assetUrl } from '../../../single-spa/asset-url';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  public logoPath: string = assetUrl('logo.png');
  brandlogo='https://www.pngkey.com/png/detail/361-3617936_b2b-e-commerce-b2b-e-commerce-icon.png';
  year=new Date().getFullYear();
  brand='Back 2 Buy';
}
