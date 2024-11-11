import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../../modules/product/model/Product.model';
import { AuthService } from '../../shared/services/auth/auth.service';
import { MENU } from '../../shared/constants';
import { assetUrl } from '../../../single-spa/asset-url';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  cart:Product[]=[];
  public logoPath: string = "http://localhost:4201"+assetUrl('logo.png');
  menulist:{title:string;path:string}[]=MENU;
  isMenu=false;
  constructor(private cartService:CartService, public authService:AuthService){
    console.log(+this.logoPath);
  }
  openMenu(){
    this.isMenu=true;
  }
  closeMenu(){
    this.isMenu=false;
  }
  logOut(){
    this.authService.logout();
  }
  ngOnInit(): void {
    this.cart=this.cartService.getCart;
  }
}
