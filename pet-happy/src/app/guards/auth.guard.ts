import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { Observable } from "rxjs";
import { LoadingService } from "../services/loading.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    
    constructor(private authService: AuthService, private router: Router, private loadingService: LoadingService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (this.authService.estaAutenticado()) {
            return true;
        } else {
            if (this.loadingService.isLoading$) this.loadingService.stop();
            this.router.navigate(['/login']);
            return false;
        }
    }
}