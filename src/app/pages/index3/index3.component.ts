import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-index3',
  templateUrl: './index3.component.html',
  styleUrls: ['./index3.component.scss'],
  encapsulation: ViewEncapsulation.None,
  styles: [`
  .dark-modal .modal-content {
    background-color: #000000;
    color: white;
    background: none;
    border: none;
  }
  .dark-modal .modal-header {
    border : none
  }
  .dark-modal .close {
    color: white;
  }
  .dark-modal .modal-dialog {
    max-width: 800px
  }
  .modal-header .close {
      padding: 1rem 1rem;
      margin: -1rem -1rem -1rem auto;
  }
  button.close {
    padding: 0;
    background-color: transparent;
    border: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  .close {
    float: right;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    opacity: 0.5;
  }
`]
})

/**
 * Index-3 component
 */
export class Index3Component implements OnInit {

  currentSection = 'home';

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  /**
   * Window scroll method
   */
  windowScroll() {
    const navbar = document.getElementById('navbar');
    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop > 50) {
      navbar.classList.add('nav-sticky');
    } else {
      navbar.classList.remove('nav-sticky');
    }
  }

  /**
   * Section changed method
   * @param sectionId specify the current sectionID
   */
  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  /**
   * Toggle navbar
   */
  toggleMenu() {
    document.getElementById('navbarCollapse').classList.toggle('show');
  }

  /**
   * Login modal
   */
  loginModal(content) {
    this.modalService.open(content, { centered: true });
  }

  /**
   * Register modal
   * @param registercontent content
   */
  registerModal(registercontent) {
    this.modalService.open(registercontent, { centered: true });
  }

  /**
   * Open modal for show the video
   * @param content content of modal
   */
  openWindowCustomClass(videocontent) {
    this.modalService.open(videocontent, { windowClass: 'dark-modal', centered: true });
  }
}
