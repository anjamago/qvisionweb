import { FormControl, FormGroup, Validators } from '@angular/forms';
export const EditorialForm = new FormGroup({
  Nombre: new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]),
  Sede: new FormControl('', [Validators.required, Validators.minLength(3)]),
  Id: new FormControl()
});
