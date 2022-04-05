let chr01 = {
  character: "世", // world
  strokes: [
    "M 706 457 Q 787 470 929 459 Q 954 458 960 467 Q 967 480 954 493 Q 923 520 876 539 Q 861 545 835 536 Q 772 520 712 508 L 664 500 Q 583 490 530 480 L 485 473 Q 400 463 345 454 L 292 446 Q 288 446 284 445 Q 208 430 96 425 Q 81 425 80 413 Q 80 400 100 386 Q 118 373 151 362 Q 161 358 181 367 Q 223 385 296 395 L 346 407 Q 410 422 486 432 L 531 437 Q 645 452 661 453 L 706 457 Z",
    "M 486 432 Q 486 323 469 284 C 459 256 554 273 541 300 Q 537 301 535 312 Q 534 372 531 437 L 530 480 Q 523 658 525 681 Q 529 693 517 705 Q 507 714 480 726 Q 461 735 453 728 Q 446 721 454 707 Q 481 665 485 473 L 486 432 Z",
    "M 691 323 Q 698 392 706 457 L 712 508 Q 721 631 748 720 Q 752 730 733 747 Q 699 768 674 773 Q 658 777 650 769 Q 641 762 649 747 Q 673 708 671 683 Q 670 595 664 500 L 661 453 Q 655 389 649 321 C 646 291 688 293 691 323 Z",
    "M 469 284 Q 445 263 482 225 Q 483 224 486 222 Q 496 215 511 227 Q 556 266 701 282 Q 722 283 721 293 Q 720 306 695 321 Q 694 322 691 323 L 649 321 Q 622 315 600 311 Q 542 301 541 300 C 512 293 470 285 469 284 Z",
    "M 345 454 Q 345 464 345 473 Q 341 582 344 604 Q 354 623 335 633 Q 292 652 272 652 Q 260 653 252 645 Q 243 638 258 623 Q 276 604 292 446 L 296 395 Q 314 260 292 129 Q 286 105 277 96 Q 246 66 294 34 Q 310 21 327 37 Q 378 103 731 103 Q 779 104 804 101 Q 849 97 850 118 Q 849 133 815 152 Q 781 171 762 169 Q 728 166 469 125 Q 370 106 362 116 Q 353 123 354 169 Q 355 193 352 249 Q 349 276 346 407 L 345 454 Z",
  ],
};

let chr02 = {
  character: "⺼", // moon
  strokes: [
    "M 198 381 Q 198 387 200 395 Q 208 449 211 506 L 212 544 Q 212 694 217 705 C 219 724 219 724 196 735 Q 152 759 133 751 Q 123 742 131 729 Q 153 706 158 641 L 159 613 Q 165 446 139 318 Q 112 204 48 82 L 42 69 Q 41 59 51 63 Q 67 67 92 104 Q 135 169 168 257 Q 180 296 190 345 L 198 381 Z",
    "M 217 705 L 289 727 Q 298 729 304 727 Q 326 723 325 672 Q 334 360 319 177 Q 318 149 310 137 Q 306 137 244 139 Q 243 140 242 140 Q 224 145 225 135 Q 242 122 255 108 Q 277 88 306 54 Q 318 40 330 36 Q 343 33 361 58 Q 387 96 386 147 Q 363 657 390 710 Q 402 729 390 741 Q 367 760 332 774 Q 312 782 269 757 Q 239 745 196 735 C 167 728 188 696 217 705 Z",
    "M 211 506 Q 260 514 295 515 Q 319 519 310 534 Q 298 549 272 553 Q 248 555 212 544 C 183 535 181 501 211 506 Z",
    "M 190 345 Q 205 345 287 355 Q 314 359 302 373 Q 274 406 198 381 C 169 372 160 344 190 345 Z",
  ],
};

function setup() {
  createCanvas(500, 500); // SVG 1024 x 1024
  background(255);

  rectMode(CENTER);
  rect(width / 2, height / 2, 300, 300);
  line(
    width / 2 - 300 / 2 + 300 / 3,
    height / 2 - 300 / 2,
    width / 2 - 300 / 2 + 300 / 3,
    height / 2 + 300 / 2
  );
  line(
    width / 2 - 300 / 2 + 600 / 3,
    height / 2 - 300 / 2,
    width / 2 - 300 / 2 + 600 / 3,
    height / 2 + 300 / 2
  );
  line(width / 2 - 300 / 2, height / 2, width / 2 + 300 / 2, height / 2);

  translate(100, 370);

  push();
  scale(0.2, -0.3);
  translate(450, 0);
  let ctx01 = drawingContext;
  ctx01.fillStyle = "black";
  ctx01.strokeStyle = "black";
  for (let j = 0; j < chr01.strokes.length; j++) {
    p = new Path2D(chr01.strokes[j]);
    ctx01.fill(p);
  }

  scale(1.35, 1);
  translate(-350, -40);
  let ctx02 = drawingContext;
  ctx02.fillStyle = "black";
  ctx02.strokeStyle = "black";
  for (let j = 0; j < chr02.strokes.length; j++) {
    p = new Path2D(chr02.strokes[j]);
    ctx02.fill(p);
  }
  pop();
}
