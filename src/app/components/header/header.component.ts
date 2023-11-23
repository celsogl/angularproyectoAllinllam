import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Route, Router } from '@angular/router';

@Component({

  selector: 'app-header',
  template: `<nav class="bg-white shadow shadow-slate-100 w-full px-4 md:px-8">
    <div class="container mx-auto flex items-center justify-between h-16">
      <!-- Logo aligned to the start -->
      <div class="flex-shrink-0">
      <img src="../assets/logo.png" alt="logo" class="h-8 md:h-10">
      </div>
      <!-- Menu Items -->
      <div class="hidden md:flex">
        <ul class="flex">
          <li class="px-4 py-2 text-teal-700 hover:text-customCyan">
            <a href="/">Inicio</a>
          </li>
          <li *ngIf="userLoginOn" class="px-4 py-2 text-teal-700 hover:text-customCyan">
            <a href="/#">Paciente</a>
          </li>
          
          <li *ngIf="userLoginOn" class="px-4 py-2 text-teal-700 hover:text-customCyan relative" (click)="toggleDropdown()">
            <a href="#" (click)="$event.preventDefault()">Atención Médica</a>
            <!-- Dropdown Menu Items -->
            <ul class="absolute hidden bg-white shadow-md mt-1" [class.hidden]="!isDropdownOpen">
              <li><a href="/#" class="block px-4 py-2 text-teal-600 hover:bg-teal-100">Ficha Médica</a></li>
              <li><a href="/#" class="block px-4 py-2 text-teal-600 hover:bg-teal-100">Ficha Psicológica</a></li>
              <li><a href="/#" class="block px-4 py-2 text-teal-600 hover:bg-teal-100">Ficha Terapéutica</a></li>
              <!-- More dropdown items -->
            </ul>
          </li>
          <li  *ngIf="userLoginOn" class="px-4 py-2 text-teal-700 hover:text-customCyan relative" (click)="toggleDropdown2()">
            <a href="#" (click)="$event.preventDefault()">Otros</a>
            <!-- Dropdown Menu Items -->
            <ul class="absolute hidden bg-white shadow-md mt-1" [class.hidden]="!isDropdownOpen2">
              <li><a href="/#" class="block px-4 py-2 text-teal-600 hover:bg-teal-100">Usuario</a></li>
              <li><a href="/#" class="block px-4 py-2 text-teal-600 hover:bg-teal-100">Medicamentos</a></li>
              <li><a href="/#" class="block px-4 py-2 text-teal-600 hover:bg-teal-100">Médicos</a></li>
              <li><a href="/#" class="block px-4 py-2 text-teal-600 hover:bg-teal-100">Tipo Sangre</a></li>
              <!-- More dropdown items -->
            </ul>
          </li>
        </ul>
      </div>
      
      
      <div class="order-2 md:order-3">
      <button *ngIf="!userLoginOn"	class="px-3 py-2 bg-customCyan hover:bg-cyan-500 text-white rounded-lg flex items-center gap-2"
						onclick="window.location.href='/login'">
						<!-- Heroicons - Login Solid -->
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"
							viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd"
								d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
								clip-rule="evenodd" />
						</svg>
						<span>Login</span>
					</button>

          <div class="flex justify-center" *ngIf="userLoginOn">
								<button class="px-3 py-2 bg-customCyan hover:bg-cyan-500 text-white rounded-lg flex items-center gap-2" (click)="logout()"	type="button">
									<span>Cerrar Sesión</span>
								</button>
							</div>
				</div>

      </div>

  </nav>
  `
})

export class HeaderComponent implements OnInit {
  isDropdownOpen = false;
  isDropdownOpen2 = false;

  userLoginOn: boolean = false;

  constructor(private loginService:LoginService, private router: Router){ } 
  
  ngOnInit(): void {
   this.loginService.currentUserLoginOn.subscribe(
    {
      next:(userLoginOn)=> {
          this.userLoginOn=userLoginOn;
      }
    }
   )
  }

  logout(){
    this.loginService.logout();
    this.router.navigate(["/"]);
  }


  toggleDropdown() {
    if (!this.isDropdownOpen) {
      this.isDropdownOpen = true;
      this.isDropdownOpen2 = false;
    } else {
      this.isDropdownOpen = false;
    }
  }

  toggleDropdown2() {
    if (!this.isDropdownOpen2) {
      this.isDropdownOpen2 = true;
      this.isDropdownOpen = false;
    } else {
      this.isDropdownOpen2 = false;
    }
  }
}