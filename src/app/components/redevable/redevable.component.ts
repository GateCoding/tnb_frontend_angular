import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Redevable } from 'src/app/models/redevable';
import { RedevableService } from 'src/app/services/redevable/redevable.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-redevable',
  templateUrl: './redevable.component.html',
  styleUrls: ['./redevable.component.css'],
})
export class RedevableComponent implements OnInit {
  redevables: Redevable[] | undefined;
  redevable: Redevable = new Redevable();

  constructor(
    private redevableService: RedevableService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getRedevables();
  }

  private getRedevables() {
    this.redevableService.getRedevablesList().subscribe((data) => {
      this.redevables = data;
    });
  }

  deleteRedevable(id: number | undefined) {
    this.redevableService.deleteRedevable(id).subscribe((data) => {
      Swal.fire({
        icon: 'success',
        title: 'Redevable Deleted Successfully!',
        showConfirmButton: true,
        confirmButtonText: 'OK',
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      });
    });
  }

  createRedevable() {
    this.redevableService.createRedevable(this.redevable).subscribe(
      (data) => {
        console.log(data);
        Swal.fire({
          icon: 'success',
          title: 'Redevable Created Successfully!',
          showConfirmButton: true,
          confirmButtonText: 'OK',
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          }
        }); // here
      },
      (error) => {
        console.error(error);
        Swal.fire({
          icon: 'warning',
          title: 'Error Creating Redevable',
          text: 'Something went wrong while Creating the redevable. Please try again.',
          showConfirmButton: true,
          confirmButtonText: 'OK',
        });
      }
    );
  }

  updateRedevable(id: number | undefined) {
    this.router.navigate(['update-redevable', id]);
  }

  viewTaxe(terrainId: number) {
    this.router.navigate(['/taxe', terrainId]);
  }

  ngSubmit() {
    this.createRedevable();
  }
}
