import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Skills = [
    {
      name: 'Python',
      value: '85',
      description:'Specialized in IoT programming and Machine Learning!'
    },
    {
      name: 'Server & Desktop',
      value: '80',
      description:'Advanced configuration for linux and windows Server/Desktop.'
    },
    {
      name: 'PHP',
      value: '85',
      description:'Able to create full-stack website in Laravel php framework.'
    },
    {
      name: 'SQL',
      value: '95',
      description:'Able to integrate all SQL Database such as MySQL and SQL Server.'
    },
    {
      name: 'Angular',
      value: '80',
      description:'This portofolio website was created in angular!'
    },
    {
      name: 'Flutter',
      value: '80',
      description:'Able to create simple app with flutter.'
    },
    {
      name: 'C# & VB.NET',
      value: '85',
      description:'Familiar with UWP, WPF, .Net XML for desktop application.'
    },
    {
      name: 'Javascript',
      value: '85',
      description:'Good undestanding over Javascript algorithm and syntax.'
    },
    {
      name: 'Go',
      value: '85',
      description:'Skillset gained in bootcamp from german.'
    },
    {
      name: 'NoSQL',
      value: '95',
      description:'Able to integrate all NoSQL Database such as MongoDB and Redis.'
    },
    {
      name: 'NodeJS',
      value: '80',
      description:'Good understanding of CRUDSRUD REST API with NodeJS and ExpressJS.'
    },
    {
      name: 'Javascript',
      value: '75',
      description:'Familiar with UWP, WPF, .Net XML for desktop application.'
    },
  ]
}
