import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    id: '',
    firstName: [null, Validators.required],
    email: [null, Validators.required],
    phone: [null, Validators.required],    
    password: [null, Validators.required]
  });

  hasUnitNumber = false;

  //constructor(private fb: FormBuilder, private service: UserService) {}
  //getErrorMessage(){
  //  if(this.email.hasError('requeride')){
  //    return 'o email é obrigatorio!'
  //  }
  //  'Voçê deve preencher um valor para o email válido!'
  //  return this.email.hasError('email')? 'Voçê deve preencher um valor para o email válido!': '';
  //}
  
  onSubmit(): void {
    alert('Thanks!');
  }
}
