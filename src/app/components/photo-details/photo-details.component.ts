import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchPhotosService } from 'src/app/services/search-photos.service';
import { PhotoDetail } from 'src/app/interfaces/photo-detail';
import { NavigationService } from 'src/app/services/navigation.service';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.scss']
})
export class PhotoDetailsComponent {

  photoDetail!: PhotoDetail;
  myStyles = {};

  constructor(private router: Router, private route: ActivatedRoute, private getPhoto: SearchPhotosService, private navService: NavigationService, private local: LocalService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => this.setParams(params.id));
    this.getLastRoute();
  }

  getLastRoute() {
    this.navService.queryItem = JSON.parse(this.local.getData('lastNav')!).queryItem;
    this.navService.current_page = JSON.parse(this.local.getData('lastNav')!).current_page;
  }

  setParams(params: string) {
    this.getPhoto.getPhoto(params).subscribe((response: PhotoDetail) => this.setSearchData(response));
  }

  setSearchData(response: PhotoDetail) {
    this.photoDetail = response;
    this.myStyles = {
      'background-image': 'url(' + this.photoDetail.user.profile_image.medium + ')',
      'background-size': 'cover'
    }
  }

  navigateToSearch(queryItem: string) {
    this.router.navigate([queryItem + '&page=' + '1'], { relativeTo: this.route.parent });
  }

  goBack() {
    if (!this.noLocalData())
      this.router.navigate([`${this.navService.queryItem}&page=${this.navService.current_page}`], { relativeTo: this.route.parent });
    else
      this.router.navigate([''], { relativeTo: this.route.parent });
  }

  
  noLocalData() {
    return !this.navService.queryItem || !this.navService.current_page;
  }


}
