import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transcript',
  templateUrl: './transcript.component.html',
  styleUrls: ['./transcript.component.css']
})
export class TranscriptComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Subjects = [
    {
      name: 'Database',
      minscore: '80',
      tscore: '90',
      pscore:'90'
    },
    {
      name: 'Object Orientated Programming',
      minscore: '80',
      tscore: '80',
      pscore:'89'
    },
    {
      name: 'Web and IoT',
      minscore: '80',
      tscore: '95',
      pscore:'95'
    },
    {
      name: 'Creative Product & Entrepreneurship',
      minscore: '80',
      tscore: '98',
      pscore:'98'
    },
    {
      name: 'English',
      minscore: '78',
      tscore: '86',
      pscore:'86'
    },
  ]
}
