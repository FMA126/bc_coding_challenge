import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.sass']
})
export class ReservationFormComponent implements OnInit {

  customerForm = this.fb.group({
    customerName: this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    }),
    address: this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required]
    }),
    vehicleInfo: this.fb.group({
      year: ['', Validators.required],
      make: ['', Validators.required],
      model: ['', Validators.required],
      licensePlate: ['', Validators.required],
      vin: ['', Validators.required],
    }),
    booking: this.fb.group({
      date: ['', Validators.required],
      time: ['', Validators.required],
    })
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.customerForm.valid) {
      alert(JSON.stringify(this.customerForm.value))
    }
  }

}
