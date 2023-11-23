import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { JwtInterceptorService } from './services/jwt-interceptor.service';
import { ErrorInterceptorService } from './services/error-interceptor.service';
import { ListarPacienteComponent } from './pages/Paciente/listar-paciente/listar-paciente.component';
import { RegistrarPacienteComponent } from './pages/Paciente/registrar-paciente/registrar-paciente.component';
import { ListarFichaMedicaComponent } from './pages/AtencionMedica/FichaMedica/listar-ficha-medica/listar-ficha-medica.component';
import { ListarFichaPsicologicaComponent } from './pages/AtencionMedica/FichaPsicologica/listar-ficha-psicologica/listar-ficha-psicologica.component';
import { ListarFichaTerapeuticaComponent } from './pages/AtencionMedica/FichaTerapeutica/listar-ficha-terapeutica/listar-ficha-terapeutica.component';
import { RegistrarFichaMedicaComponent } from './pages/AtencionMedica/FichaMedica/registrar-ficha-medica/registrar-ficha-medica.component';
import { RegistrarFichaPsicologicaComponent } from './pages/AtencionMedica/FichaPsicologica/registrar-ficha-psicologica/registrar-ficha-psicologica.component';
import { RegistrarFichaTerapeuticaComponent } from './pages/AtencionMedica/FichaTerapeutica/registrar-ficha-terapeutica/registrar-ficha-terapeutica.component';
import { ListarUsuariosComponent } from './pages/Usuarios/listar-usuarios/listar-usuarios.component';
import { ListarMedicamentosComponent } from './pages/Medicamentos/listar-medicamentos/listar-medicamentos.component';
import { RegistrarMedicamentosComponent } from './pages/Medicamentos/registrar-medicamentos/registrar-medicamentos.component';
import { ListarMedicosComponent } from './pages/Medicos/listar-medicos/listar-medicos.component';
import { RegistrarMedicosComponent } from './pages/Medicos/registrar-medicos/registrar-medicos.component';
import { ListarTipoSangreComponent } from './pages/TipoSangre/listar-tipo-sangre/listar-tipo-sangre.component';
import { RegistrarTipoSangreComponent } from './pages/TipoSangre/registrar-tipo-sangre/registrar-tipo-sangre.component';

@NgModule({
  declarations: [ 
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    ListarPacienteComponent,
    RegistrarPacienteComponent,
    ListarFichaMedicaComponent,
    ListarFichaPsicologicaComponent,
    ListarFichaTerapeuticaComponent,
    RegistrarFichaMedicaComponent,
    RegistrarFichaPsicologicaComponent,
    RegistrarFichaTerapeuticaComponent,
    ListarUsuariosComponent,
    ListarMedicamentosComponent,
    RegistrarMedicamentosComponent,
    ListarMedicosComponent,
    RegistrarMedicosComponent,
    ListarTipoSangreComponent,
    RegistrarTipoSangreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,useClass: JwtInterceptorService,multi:true },
    {provide: HTTP_INTERCEPTORS,useClass: ErrorInterceptorService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
