import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Taxe } from 'src/app/models/taxe';
import { TaxeService } from 'src/app/services/taxe/taxe.service';

@Component({
  selector: 'app-taxe',
  templateUrl: './taxe.component.html',
  styleUrls: ['./taxe.component.css'],
})
export class TaxeComponent implements OnInit {
  constructor(
    private taxeService: TaxeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  taxes: Taxe[] | undefined;
  cin: string | undefined;

  goToTaxeHome() {
    this.router.navigate(['/taxe-redevable', this.cin]);
  }

  onSubmit() {
    // this.taxeService.updateTaxe(this.taxe).subscribe((data) => {
    //   this.goToTaxeHome();
    //   console.log('updated');
    //   Swal.fire({
    //     icon: 'success',
    //     title: 'Taxe updated Successfully!',
    //     showConfirmButton: true,
    //     confirmButtonText: 'OK',
    //   }).then((result) => {
    //     if (result.isConfirmed) {
    //       this.goToTaxeHome();
    //     }
    //   });
    // });
  }

  ngOnInit(): void {
    this.cin = this.route.snapshot.params['cin'];
    this.taxeService.getTaxesList(this.cin).subscribe((data) => {
      this.taxes = data;
    });
  }
}
