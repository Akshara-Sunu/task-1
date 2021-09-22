import { Project } from './../../project';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  project: Project = {
    id: 18,
    name: 'Sphere',
    desc: 'abcd',
    cl: 'Inovics'
  }

  constructor() {}

  //public Project : any = []

 // project = 'Windstorm';

  ngOnInit(): void {
  }

}
