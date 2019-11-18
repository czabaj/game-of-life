export class UniqueCoordinates {
  constructor(coordinates) {
    this._set = new Set();
    coordinates && coordinates.forEach(coordinate => this.add(coordinate));
  }

  add(coordinate) {
    this._set.add(JSON.stringify(coordinate));
  }

  getAll() {
    return Array.from(this._set).map(k => JSON.parse(k));
  }

  has(coordinate) {
    this._set.has(JSON.stringify(coordinate));
  }
}

export const getNeighboursIncludeSelf = cell => {
  const [x, y] = cell;
  return [0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => [
    x + (i % 3) - 1,
    y + Math.trunc(i / 3) - 1
  ]);
};

export const getCandidates = world => {
  const coordinates = new UniqueCoordinates();

  world
    .getAll()
    .forEach(livingCell =>
      getNeighboursIncludeSelf(livingCell).forEach(canditate =>
        coordinates.add(canditate)
      )
    );

  return coordinates.getAll();
};
