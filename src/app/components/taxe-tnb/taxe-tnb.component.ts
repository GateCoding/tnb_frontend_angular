import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Taxe } from 'src/app/models/taxe';
import { Terrain } from 'src/app/models/terrain';
import { TaxeService } from 'src/app/services/taxe/taxe.service';
import { TerrainService } from 'src/app/services/terrain/terrain.service';

@Component({
  selector: 'app-taxe-tnb',
  templateUrl: './taxe-tnb.component.html',
  styleUrls: ['./taxe-tnb.component.css'],
})
export class TaxeTnbComponent implements OnInit {
  constructor(
    private terrainService: TerrainService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  taxes: Taxe[] | undefined;
  id: number | undefined;

  goToTaxeHome() {
    this.router.navigate(['/terrain', this.id]);
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
    this.id = this.route.snapshot.params['id'];
    this.terrainService.getTerrainById(this.id).subscribe((data) => {
      this.taxes = data.taxes;
    });
  }
}
