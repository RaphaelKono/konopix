import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  query = new FormControl('', [Validators.required, Validators.pattern('\\S.*')]);

  
  constructor(private router: Router, private route: ActivatedRoute) { }

  openSearch() {
    if (this.query.valid && this.query.value)
      this.router.navigate([this.query.value + '&page=' + '1'], { relativeTo: this.route });
  }
}
