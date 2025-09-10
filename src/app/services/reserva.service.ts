import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private reservas: any[] = [];

  agregarReserva(reserva: any) {
    this.reservas.push(reserva);
  }

  obtenerReservas() {
    return this.reservas;
  }

  limpiarReservas() {
    this.reservas = [];
  }
}