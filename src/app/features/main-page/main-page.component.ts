
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { DataService } from '../../core/data.service';
import { IAlbum } from '../../models/album';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  displayedColumns: string[] = ['albumId', 'id', 'thumbnailUrl', 'title', 'url'];
  dataSource: MatTableDataSource<IAlbum>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  albums: IAlbum[] = [];
  assumptions = [
    { title: 'Browsers', text: 'I have assumed modern browsers will be used to run this application, (Specifically, Chrome 67) no provision has been made to fail gracefully, no browser testing has been undertaken.' },
    { title: 'Testing', text: 'No unit, integration or end to end testing has been undertaken.' },
    { title: 'routing and routeGuards', text: 'In normal circumstances I would route away from app.component and create a routable feature module. The feature module would be lazy loaded and have a route guard in place for protected pages.' },
    { title: 'Comments', text: 'Due to time constraints, the quality and frequency of comments falls below what one would expect in a production version.' },
    { title: 'Angular 6', text: 'Angular 6 has been used for this app. Since version 6 has only been recently released, one would probably use version 5 for production.' },
    { title: 'State management', text: 'Since this is a simple demo app, no attempt has been made to use a state management too like Redux. Redux would normally be deployed for state management in a more complex production app.' },
    { title: 'http get request', text: 'No provision has been made to catch http errors' },
    { title: 'UI Style', text: 'The UI styling is quite basic, obviously in a production version more effort would go into this.' },
    { title: 'Search results', text: 'No provision has been made to display a friendly message when a search results in zero results.' },
    { title: 'Responsiveness', text: 'No attempt has been made to make the app fully responsive. Obviously in a production version this would not be the case.' },
    { title: 'Data table component', text: 'With more time I would have converted the data table into a shared re-usable component.' },
    { title: 'Structure', text: 'This app uses a data service, a routable module and a component which is probably overkill, but would form the start of a solid foundation to build upon.' }
  ];


  constructor(private ads: DataService) {
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.ads.getData()
      .subscribe(response => {
        this.albums = response.map(albumData => {
          const album: IAlbum = {
            albumId: albumData.albumId,
            id: albumData.id,
            title: albumData.title,
            thumbnailUrl: albumData.thumbnailUrl
          };
          return album;
        });
        this.dataSource = new MatTableDataSource(this.albums);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
