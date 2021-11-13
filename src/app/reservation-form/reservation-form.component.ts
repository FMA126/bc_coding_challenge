import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { MOCK_DATA, Customer } from 'src/mock-data/mock-data';

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

  constructor(private fb: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {

    const cust = CUSTOMER_DATA.find(el => el.customer_id = this.route.snapshot.url[1]?.path)
    // if (cust) {
    // this.customerForm.patchValue({})
    // }
  }

  onSubmit(): void {
    if (this.customerForm.valid) {
      alert(JSON.stringify(this.customerForm.value))
    }
  }

}

const CUSTOMER_DATA: Customer[] = MOCK_DATA;
