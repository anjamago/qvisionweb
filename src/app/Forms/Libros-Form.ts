import { FormControl, FormGroup, Validators } from '@angular/forms';

export const LibroForm = new FormGroup({
  Titulo: new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]),
  Sinopsi: new FormControl('', [
    Validators.required,
    Validators.minLength(4),
  ]),
  NumeroPagina: new FormControl('', [
    Validators.required,
  ]),
  IdAutor: new FormControl('', [
    Validators.required,
  ]),
  IdEditorial: new FormControl('', [
    Validators.required,
  ]),
});
