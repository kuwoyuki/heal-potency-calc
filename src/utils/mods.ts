const levelMods = [
  [1, 10000, 20, 56, 56, 86, 52, 2],
  [2, 10000, 21, 57, 57, 101, 54, 2],
  [3, 10000, 22, 60, 60, 109, 56, 3],
  [4, 10000, 24, 62, 62, 116, 58, 3],
  [5, 10000, 26, 65, 65, 123, 60, 3],
  [6, 10000, 27, 68, 68, 131, 62, 3],
  [7, 10000, 29, 70, 70, 138, 64, 4],
  [8, 10000, 31, 73, 73, 145, 66, 4],
  [9, 10000, 33, 76, 76, 153, 68, 4],
  [10, 10000, 35, 78, 78, 160, 70, 5],
  [11, 10000, 36, 82, 82, 174, 73, 5],
  [12, 10000, 38, 85, 85, 188, 75, 5],
  [13, 10000, 41, 89, 89, 202, 78, 6],
  [14, 10000, 44, 93, 93, 216, 81, 6],
  [15, 10000, 46, 96, 96, 230, 84, 7],
  [16, 10000, 49, 100, 100, 244, 86, 7],
  [17, 10000, 52, 104, 104, 258, 89, 8],
  [18, 10000, 54, 109, 109, 272, 93, 9],
  [19, 10000, 57, 113, 113, 286, 95, 9],
  [20, 10000, 60, 116, 116, 300, 98, 10],
  [21, 10000, 63, 122, 122, "333?", 102, 10],
  [22, 10000, 67, 127, 127, 366, 105, 11],
  [23, 10000, 71, 133, 133, 399, 109, 12],
  [24, 10000, 74, 138, 138, 432, 113, 13],
  [25, 10000, 78, 144, 144, 465, 117, 14],
  [26, 10000, 81, 150, 150, "498?", 121, 15],
  [27, 10000, 85, 155, 155, 531, 125, 16],
  [28, 10000, 89, 162, 162, 564, 129, 17],
  [29, 10000, 92, 168, 168, "597?", 133, 18],
  [30, 10000, 97, 173, 173, 630, 137, 19],
  [31, 10000, 101, 181, 181, 669, 143, 20],
  [32, 10000, 106, 188, 188, 708, 148, 22],
  [33, 10000, 110, 194, 194, 747, 153, 23],
  [34, 10000, 115, 202, 202, 786, 159, 25],
  [35, 10000, 119, 209, 209, 825, 165, 27],
  [36, 10000, 124, 215, 215, 864, 170, 29],
  [37, 10000, 128, 223, 223, 903, 176, 31],
  [38, 10000, 134, 229, 229, 942, 181, 33],
  [39, 10000, 139, 236, 236, 981, 186, 35],
  [40, 10000, 144, 244, 244, 1020, 192, 38],
  [41, 10000, 150, 253, 253, 1088, 200, 40],
  [42, 10000, 155, 263, 263, 1156, 207, 43],
  [43, 10000, 161, 272, 272, 1224, 215, 46],
  [44, 10000, 166, 283, 283, 1292, 223, 49],
  [45, 10000, 171, 292, 292, "1360?", 231, 52],
  [46, 10000, 177, 302, 302, "1428?", 238, 55],
  [47, 10000, 183, 311, 311, 1496, 246, 58],
  [48, 10000, 189, 322, 322, "1564?", 254, 62],
  [49, 10000, 196, 331, 331, 1632, 261, 66],
  [50, 10000, 202, 341, 341, 1700, 269, 70],
  [51, 10000, 204, 342, 366, "??", "??", "??"],
  [52, 10000, 205, 344, 392, "??", "??", "??"],
  [53, 10000, 207, 345, 418, "??", "??", "??"],
  [54, 10000, 209, 346, 444, "??", "??", "??"],
  [55, 10000, 210, 347, 470, "??", "??", "??"],
  [56, 10000, 212, 349, 496, "??", "??", "??"],
  [57, 10000, 214, 350, 522, "??", "??", "??"],
  [58, 10000, 215, 351, 548, "??", "??", "??"],
  [59, 10000, 217, 352, 574, "??", "??", "??"],
  [60, 10000, 218, 354, 600, "??", "??", "??"],
  [61, 10000, 224, 355, 630, "??", "??", "??"],
  [62, 10000, 228, 356, 660, "??", "??", "??"],
  [63, 10000, 236, 357, 690, "??", "??", "??"],
  [64, 10000, 244, 358, 720, "??", "??", "??"],
  [65, 10000, 252, 359, 750, "??", "??", "??"],
  [66, 10000, 260, 360, 780, "??", "??", "??"],
  [67, 10000, 268, 361, 810, "??", "??", "??"],
  [68, 10000, 276, 362, 840, "??", "??", "??"],
  [69, 10000, 284, 363, 870, "??", "??", "??"],
  [70, 10000, 292, 364, 900, "??", "??", "??"],
  [71, 10000, 296, 365, 940, "??", "??", "??"],
  [72, 10000, 300, 366, 980, "??", "??", "??"],
  [73, 10000, 305, 367, 1020, "??", "??", "??"],
  [74, 10000, 310, 368, 1060, "??", "??", "??"],
  [75, 10000, 315, 370, 1100, "??", "??", "??"],
  [76, 10000, 320, 372, 1140, "??", "??", "??"],
  [77, 10000, 325, 374, 1180, "??", "??", "??"],
  [78, 10000, 330, 376, 1220, "??", "??", "??"],
  [79, 10000, 335, 378, 1260, "??", "??", "??"],
  [80, 10000, 340, 380, 1300, "??", "??", "??"],
  [81, 10000, 345, 382, 1360, "??", "??", "??"],
  [82, 10000, 350, 384, 1420, "??", "??", "??"],
  [83, 10000, 355, 386, 1480, "??", "??", "??"],
  [84, 10000, 360, 388, 1540, "??", "??", "??"],
  [85, 10000, 365, 390, 1600, "??", "??", "??"],
  [86, 10000, 370, 392, 1660, "??", "??", "??"],
  [87, 10000, 375, 394, 1720, "??", "??", "??"],
  [88, 10000, 380, 396, 1780, "??", "??", "??"],
  [89, 10000, 385, 398, 1840, "??", "??", "??"],
  [90, 10000, 390, 400, 1900, 3000, "??", "??"],
];

const jobMods = [
  [1, "GLA 剣", 130, 100, 95, 100, 90, 50, 95],
  [2, "PGL 格", 105, 100, 100, 95, 100, 45, 85],
  [3, "MRD 斧", 135, 100, 100, 100, 90, 30, 50],
  [4, "LNC 槍", 110, 100, 105, 100, 95, 40, 60],
  [5, "ARC 弓", 100, 100, 85, 95, 105, 80, 75],
  [6, "CNJ 幻", 100, 100, 50, 95, 100, 100, 105],
  [7, "THM 呪", 100, 100, 40, 95, 95, 105, 70],
  [19, "PLD ナ", 140, 100, 100, 110, 95, 60, 100],
  [20, "MNK モ", 110, 100, 110, 100, 105, 50, 90],
  [21, "WAR 戦", 145, 100, 105, 110, 95, 40, 55],
  [22, "DRG 竜", 115, 100, 115, 105, 100, 45, 65],
  [23, "BRD 吟", 105, 100, 90, 100, 115, 85, 80],
  [24, "WHM 白", 105, 100, 55, 100, 105, 105, 115],
  [25, "BLM 黒", 105, 100, 45, 100, 100, 115, 75],
  [26, "ACN 巴", 100, 100, 85, 95, 95, 105, 75],
  [27, "SMN 召", 105, 100, 90, 100, 100, 115, 80],
  [28, "SCH 学", 105, 100, 90, 100, 100, 105, 115],
  [29, "ROG 双", 103, 100, 80, 95, 100, 60, 70],
  [30, "NIN 忍", 108, 100, 85, 100, 110, 65, 75],
  [31, "MCH 機", 105, 100, 85, 100, 115, 80, 85],
  [32, "DRK 暗", 140, 100, 105, 110, 95, 60, 40],
  [33, "AST 占", 105, 100, 50, 100, 100, 105, 115],
  [34, "SAM 侍", 109, 100, 112, 100, 108, 60, 50],
  [35, "RDM 赤", 105, 100, 55, 100, 105, 115, 110],
  [36, "BLU 青", 105, 100, 70, 100, 110, 115, 105],
  [37, "GNB ガ", 120, 100, 100, 110, 95, 60, 100],
  [38, "DNC 踊", 105, 100, 90, 100, 115, 85, 80],
  [39, "RPR リ", 115, 100, 115, 105, 100, 80, 40],
  [40, "SGE 賢", 105, 100, 60, 100, 100, 115, 115],
];
//   [1, "GLA", 110, 49, 95, 100, 90, 50, 95],
//   [2, "PGL", 105, 34, 100, 95, 100, 45, 85],
//   [3, "MRD", 115, 28, 100, 100, 90, 30, 50],
//   [4, "LNC", 110, 39, 105, 100, 95, 40, 60],
//   [5, "ARC", 100, 69, 85, 95, 105, 80, 75],
//   [6, "CNJ", 100, 117, 50, 95, 100, 100, 105],
//   [7, "THM", 100, 123, 40, 95, 95, 105, 70],
//   [19, "PLD", 120, 59, 100, 110, 95, 60, 100],
//   [20, "MNK", 110, 43, 110, 100, 105, 50, 90],
//   [21, "WAR", 125, 38, 105, 110, 95, 40, 55],
//   [22, "DRG", 115, 49, 115, 105, 100, 45, 65],
//   [23, "BRD", 105, 79, 90, 100, 115, 85, 80],
//   [24, "WHM", 105, 124, 55, 100, 105, 105, 115],
//   [25, "BLM", 105, 129, 45, 100, 100, 115, 75],
//   [26, "ACN", 100, 110, 85, 95, 95, 105, 75],
//   [27, "SMN", 105, 111, 90, 100, 100, 115, 80],
//   [28, "SCH", 105, 119, 90, 100, 100, 105, 115],
//   [29, "ROG", 103, 38, 80, 95, 100, 60, 70],
//   [30, "NIN", 108, 48, 85, 100, 110, 65, 75],
//   [31, "MCH", 105, 79, 85, 100, 115, 80, 85],
//   [32, "DRK", 120, 79, 105, 110, 95, 60, 40],
//   [33, "AST", 105, 124, 50, 100, 100, 105, 115],
//   [34, "SAM", 109, 40, 112, 100, 108, 60, 50],
//   [35, "RDM", 105, 120, 55, 100, 105, 115, 110],
//   [36, "BLU", 105, 120, 70, 100, 110, 115, 105],
//   [37, "GNB", 120, 59, 100, 110, 95, 60, 100],
//   [38, "DNC", 105, 79, 90, 100, 115, 85, 80],
// ];

export { jobMods, levelMods };
