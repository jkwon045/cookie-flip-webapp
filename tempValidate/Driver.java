import java.util.Arrays;
import java.util.Set;
import java.util.HashSet;

class Driver {

    private static String gridToString(Character[] grid) {

        StringBuilder sb = new StringBuilder();

        for (int i = 0; i < 64; i++) {

            sb.append(grid[i] == null ? '-' : grid[i]);

            sb.append(i % 8 == 7 ? '\n' : ' ');  // spaces or newlines between values
        }

        return sb.toString();
    }

    private static void printNumGrid() {

        for (int i = 0; i < 64; i++) {

            System.out.print((i < 10 ? "0" : "") + Integer.toString(i));
            System.out.print(i % 8 == 7 ? '\n' : ' ');
        }

    }

    private static void testVerify(Character whoseTurn, Integer[] redPositions, Integer[] bluePositions) {

        Character[] grid = new Character[64];
        Arrays.fill(grid, null);
        for (Integer i : redPositions)
            grid[i] = 'R';
        for (Integer i : bluePositions)
            grid[i] = 'B';

        System.out.println("Given grid:\n" + gridToString(grid));

        System.out.println(whoseTurn.equals('R') ?
            "Detecting moves for Red..." :
            "Detecting moves for Blue...");

        Set<Integer> possibleMoves = new HashSet<Integer>();
        Integer[] positions = whoseTurn.equals('R') ? redPositions : bluePositions;

        for (Integer piece : positions)
            possibleMoves.addAll(getPossibleMoves(whoseTurn, grid, piece));
        
        for (Integer move : possibleMoves)
            grid[move] = '!';

        System.out.println("Possible moves:\n" + gridToString(grid));
    }

    private static boolean outOfBounds(int i) {
        return i < 0 || i >= 64;
    }

    private static Set<Integer> getPossibleMoves(Character whoseTurn, Character[] grid, int i) {

        Set<Integer> possibleMoves = new HashSet<Integer>();

        if (outOfBounds(i)) return possibleMoves;

        // From an allied space, step in each of the 8 directions.
        // If you see an opposite color(s), then a ally color,
        // a move is possible.
        int walker = i;
        boolean lookForFoe = true; // false = looking for foe color, true = found and looking for empty space
        int[] stepDirections = { -9, // up left
                                 -8, // up
                                 -7, // up right
                                 1,  // right
                                 9,  // down right
                                 8,  // down
                                 7,  // down left
                                 -1  // left
        };

        for (int step : stepDirections) {

            // reset for each direction
            walker = i + step;
            lookForFoe = true;

            // Go to next direction if you're out of bounds
            while (!outOfBounds(walker)) {

                if (lookForFoe) {

                    // If we were looking for a foe and found an empty space,
                    // this space wouldn't be a valid move,
                    // so we can stop looking in this direction
                    if (grid[walker] == null)
                        break;

                    // If we were looking for a foe and found an ally,
                    // this wouldn't be a valid move
                    else if (grid[walker].equals(whoseTurn))
                        break;

                    // If we looked for a foe and found one, change state,
                    // but stay in loop to search for an empty spot
                    else
                        lookForFoe = false;
                }

                // Found a foe, am looking for an empty space to claim as a good move;
                // finding repeated foes should continue the loop
                else {

                    if (grid[walker] == null) {

                        // DEBUG, TODO: REMOVE
                        if (whoseTurn.equals('B') && walker == 55) {

                            System.out.println("Headed to " + walker + " from direction " + step);
                        }

                        possibleMoves.add(walker);
                        break;
                    }
                }

                walker += step;
            }
        }

        return possibleMoves;
    }

    public static void main(String[] args) {

        printNumGrid();

        // testVerify('R',
        //     new Integer[] { 27, 36 },
        //     new Integer[] { 28, 35 });

        // testVerify('B',
        //     new Integer[] { 20, 28, 36, 27 },
        //     new Integer[] { 35 });

        // testVerify('R',
        //     new Integer[] { 12, 20, 28, 36, 29 },
        //     new Integer[] { 21, 19, 27, 35, 43, 51, 34 });

        // 0 and 55 are wrong here
        testVerify('B',
            new Integer[] { 2, 3, 7, 
                            10, 11, 12, 14,
                            16, 19, 20, 21, 23, 
                            26,
                            34, 35, 37, 38,
                            41, 43, 44, 45,
                            48, 49, 50, 51, 52,
                            57, 59},
            new Integer[] { 4,
                            13,
                            17, 18, 22,
                            24, 25, 27, 28, 29, 30, 31,
                            32, 33, 36,
                            42,
                            54,
                            56, 63});

    }
}