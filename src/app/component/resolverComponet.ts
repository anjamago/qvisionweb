import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { LoginProviderService } from "../provider/login-provider.service";

@Injectable({ providedIn: 'root' })
export class ResolverComponent implements Resolve<any> {
  constructor(private service$: LoginProviderService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    this.initSession();
  }

  initSession(){
    this.service$.login().subscribe(
      res=>{
        console.log(res);
        sessionStorage.setItem('tk', res.data);
      }, er=>console.log(er)
    )
  }
}
