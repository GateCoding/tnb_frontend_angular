import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Redevable } from 'src/app/models/redevable';
import { RedevableService } from 'src/app/services/redevable/redevable.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-redevable',
  templateUrl: './update-redevable.component.html',
  styleUrls: ['./update-redevable.component.css'],
})
export class UpdateRedevableComponent implements OnInit {
  constructor(
    private redevableService: RedevableService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  redevable: Redevable = new Redevable();
  id: number | undefined;

  goToRedevableHome() {
    this.router.navigate(['/redevable']);
  }

  onSubmit() {
    this.redevableService.updateRedevable(this.redevable).subscribe((data) => {
      this.goToRedevableHome();
      console.log('updated');
      Swal.fire({
        icon: 'success',
        title: 'Redevable updated Successfully!',
        showConfirmButton: true,
        confirmButtonText: 'OK',
      }).then((result) => {
        if (result.isConfirmed) {
          this.goToRedevableHome();
        }
      });
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.redevableService.getRedevableById(this.id).subscribe((data) => {
      this.redevable = data;
    });
  }
}
