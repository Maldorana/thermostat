'use strict';

class Thermostat {
  constructor() {
    this.MINIMUM_TEMPERATURE = 10;
    this.MAXIMUM_TEMPERATURE_PSM_ON = 25;
    this.MAXIMUM_TEMPERATURE_PSM_OFF = 32;
    this.temperature = 20;
    this.PowerSavingMode = true;
  }
  getCurrentTemperature() {
    return this.temperature;
  }
  isMinimumTemperature() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  }
  isMaximumTemperature() {
    if (this.isPowerSavingModeOn()) {
      return this.temperature === this.MAXIMUM_TEMPERATURE_PSM_ON;
    } else {
      return this.temperature === this.MAXIMUM_TEMPERATURE_PSM_OFF;
    }
  }
  isPowerSavingModeOn() {
    return this.PowerSavingMode === true;
  }
  switchPowerSavingModeOff() {
    this.PowerSavingMode = false;
  }
  switchPowerSavingModeOn() {
    this.PowerSavingMode = true;
  }
  up() {
    if (this.isMaximumTemperature()) {
      return;
    }
    this.temperature += 1;
  }
  down() {
    if (this.isMinimumTemperature()) {
      return;
    }
    this.temperature -= 1;
  }
};