import { Component, OnInit } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products = products;
  day: number = 0;

  share() {
    window.alert('The product has been shared!');
  }
  ngOnInit() {
    this.nextLine();
  }

  nextLine() {
    this.day++;
    if (this.day == 6) {
      this.day = 1;
    }

    switch (this.day) {
      case 1:
        document.getElementById('textbox')!.textContent =
          'I choose you, Pikachu!';
        break;
      case 2:
        document.getElementById('textbox')!.textContent =
          'I like being a dog2!';
        break;
      case 3:
        document.getElementById('textbox')!.textContent =
          'I like being a dog3!';
        break;
      case 4:
        document.getElementById('textbox')!.textContent =
          'I like being a dog4!';
        break;
      case 5:
        document.getElementById('textbox')!.textContent =
          'I like being a dog5!';
        break;
      case 6:
        document.getElementById('textbox')!.textContent =
          'I like being a dog6!';
        break;
      default:
        console.log('No such day exists!');
        break;
    }
    var el = document.getElementById('textbox');
    el!.style.animation = 'none';
    el!.offsetHeight; /* trigger reflow */
    el!.style.animation = null!;

    var e2 = document.getElementById('showArrow');
    e2!.style.animation = 'none';
    e2!.offsetHeight; /* trigger reflow */
    e2!.style.animation = null!;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
