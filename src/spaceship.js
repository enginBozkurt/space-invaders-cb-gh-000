class Spaceship {
  constructor(name, crew, phasers, shields){
    this.name = name;
    this.crew = crew;
    this.phasers = phasers;
    this.shields = shields;
    this.phasersCharge = 'uncharged';
    this.cloaked =  false;
    this.warpDrive = 'disengaged';
    crew.length ? (this.docked = false) : (this.docked = true);
    this.setCrewCurrentShip();
  }
  
  setCrewCurrentShip() {
    this.crew.forEach((crew) => {
      crew.currentShip = this;
    });
  }
}