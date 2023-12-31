import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { ListarPacienteComponent } from './pages/Paciente/listar-paciente/listar-paciente.component';
import { ListarFichaMedicaComponent } from './pages/AtencionMedica/FichaMedica/listar-ficha-medica/listar-ficha-medica.component';
import { ListarFichaPsicologicaComponent } from './pages/AtencionMedica/FichaPsicologica/listar-ficha-psicologica/listar-ficha-psicologica.component';
import { ListarFichaTerapeuticaComponent } from './pages/AtencionMedica/FichaTerapeutica/listar-ficha-terapeutica/listar-ficha-terapeutica.component';
import { ListarMedicamentosComponent } from './pages/Medicamentos/listar-medicamentos/listar-medicamentos.component';
import { ListarMedicosComponent } from './pages/Medicos/listar-medicos/listar-medicos.component';
import { ListarTipoSangreComponent } from './pages/TipoSangre/listar-tipo-sangre/listar-tipo-sangre.component';
import { RegistrarTipoSangreComponent } from './pages/TipoSangre/registrar-tipo-sangre/registrar-tipo-sangre.component';
import { RegistrarMedicosComponent } from './pages/Medicos/registrar-medicos/registrar-medicos.component';
import { ListarUsuariosComponent } from './pages/Usuarios/listar-usuarios/listar-usuarios.component';
import { RegistrarMedicamentosComponent } from './pages/Medicamentos/registrar-medicamentos/registrar-medicamentos.component';
import { RegistrarPacienteComponent } from './pages/Paciente/registrar-paciente/registrar-paciente.component';
import { RegistrarFichaMedicaComponent } from './pages/AtencionMedica/FichaMedica/registrar-ficha-medica/registrar-ficha-medica.component';
import { RegistrarFichaPsicologicaComponent } from './pages/AtencionMedica/FichaPsicologica/registrar-ficha-psicologica/registrar-ficha-psicologica.component';

const routes: Routes = [
  {
  path:'',
  component: HomeComponent,
  pathMatch: 'full'
  },
  {
    path:'signup',
    component: SignupComponent,
    pathMatch: 'full'
  },
  {
    path:'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'listar_paciente',
    component: ListarPacienteComponent,
    pathMatch: 'full'
  },
  {
    path: 'listar_fichame',
    component: ListarFichaMedicaComponent,
    pathMatch: 'full'
  },
  {
    path: 'listar_fichaps',
    component: ListarFichaPsicologicaComponent,
    pathMatch: 'full'
  },
  {
    path: 'listar_fichatp',
    component: ListarFichaTerapeuticaComponent,
    pathMatch: 'full'
  },
  {
    path: 'listar_usuario',
    component: ListarUsuariosComponent,
    pathMatch: 'full'
  },
  {
    path: 'listar_medicamentos',
    component: ListarMedicamentosComponent,
    pathMatch: 'full'
  }
  ,
  {
    path: 'listar_medicos',
    component: ListarMedicosComponent,
    pathMatch: 'full'
  }
  ,
  {
    path: 'listar_tiposangre',
    component: ListarTipoSangreComponent,
    pathMatch: 'full'
  },
  {
    path: 'createtiposangre',
    component: RegistrarTipoSangreComponent,
    pathMatch: 'full'
  },
  {
    path: 'createmedicos',
    component: RegistrarMedicosComponent,
    pathMatch: 'full'
  },
  {
    path: 'createmedicamentos',
    component: RegistrarMedicamentosComponent,
    pathMatch: 'full'
  },
  {
    path: 'createpaciente',
    component: RegistrarPacienteComponent,
    pathMatch: 'full'
  },
  {
    path: 'createficha_medica',
    component: RegistrarFichaMedicaComponent,
    pathMatch: 'full'
  },
  {
    path: 'createficha_psciologica',
    component: RegistrarFichaPsicologicaComponent,
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
