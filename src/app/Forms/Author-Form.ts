import { FormGroup, FormControl, Validators } from '@angular/forms';

export const AuthorForm = new FormGroup({
  Nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
  Apellido: new FormControl('', [Validators.required, Validators.minLength(3)]),
  
});
