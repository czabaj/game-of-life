import { UniqueCoordinates, getCandidates } from "../index";

test("It returns all candidates for previous living neighbours", () => {
  const world = new UniqueCoordinates([[1, 1], [1, 2]]);

  expect(getCandidates(world)).toEqual([
    [0, 0],
    [1, 0],
    [2, 0],
    [0, 1],
    [1, 1],
    [2, 1],
    [0, 2],
    [1, 2],
    [2, 2],
    [0, 3],
    [1, 3],
    [2, 3]
  ]);
});
