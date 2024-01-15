import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Terrain } from 'src/app/models/terrain';
import { TerrainService } from 'src/app/services/terrain/terrain.service';

@Component({
  selector: 'app-terrain',
  templateUrl: './terrain.component.html',
  styleUrls: ['./terrain.component.css'],
})
export class TerrainComponent implements OnInit {
  constructor(
    private terrainService: TerrainService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  terrains: Terrain[] | undefined;

  goToTerrainHome() {
    this.router.navigate(['/terrain']);
  }

  viewTaxe(terrainId: number) {
    // Naviguer vers la page "Taxe" avec l'ID du terrain
    this.router.navigate(['/taxe-terrain', terrainId]);
  }

  onSubmit() {
    // this.terrainService.updateTerrain(this.terrain).subscribe((data) => {
    //   this.goToTerrainHome();
    //   console.log('updated');
    //   Swal.fire({
    //     icon: 'success',
    //     title: 'Terrain updated Successfully!',
    //     showConfirmButton: true,
    //     confirmButtonText: 'OK',
    //   }).then((result) => {
    //     if (result.isConfirmed) {
    //       this.goToTerrainHome();
    //     }
    //   });
    // });
  }

  ngOnInit(): void {
    this.terrainService.getTerrainsList().subscribe((data) => {
      this.terrains = data;
    });
  }
}
