let chra1 = {
  character: "辶",
  strokes: [
    "M 239 734 Q 267 712 297 686 Q 313 673 332 675 Q 344 676 348 692 Q 352 710 340 743 Q 325 776 229 788 Q 210 791 204 787 Q 198 783 201 768 Q 207 755 239 734 Z",
    "M 292 201 Q 307 210 312 229 Q 319 269 276 345 Q 246 406 329 498 Q 351 517 332 532 Q 311 548 277 563 Q 255 576 237 558 Q 206 536 166 521 Q 114 499 96 502 Q 89 502 86 497 Q 85 493 93 488 Q 135 467 227 505 Q 237 508 245 498 Q 267 474 244 446 Q 190 394 236 331 Q 281 246 270 206 Q 269 205 268 202 C 261 173 270 181 292 201 Z",
    "M 268 202 Q 225 203 180 188 Q 146 175 94 169 Q 87 169 84 160 Q 81 153 90 143 Q 108 125 132 114 Q 144 108 162 123 Q 225 174 296 161 Q 363 146 497 86 Q 722 -17 808 5 Q 809 6 812 6 Q 875 28 928 65 Q 952 80 927 80 Q 708 80 569 113 Q 481 138 369 181 Q 332 197 292 201 L 268 202 Z",
  ],
};

let chra2 = {
  character: "牠",
  strokes: [
    "M 204 503 Q 220 539 251 588 Q 261 601 245 615 Q 200 646 173 640 Q 161 636 165 622 Q 183 532 102 423 Q 90 413 68 376 Q 61 360 76 366 Q 127 381 193 482 L 204 503 Z",
    "M 357 498 Q 376 505 401 510 Q 429 517 433 522 Q 440 529 436 537 Q 429 547 401 552 Q 377 556 358 547 L 311 529 Q 242 510 204 503 C 175 497 165 494 193 482 Q 208 475 229 471 Q 256 468 283 478 Q 295 482 310 485 L 357 498 Z",
    "M 307 377 Q 73 212 73 211 Q 52 208 48 191 Q 48 182 63 170 Q 82 157 106 152 Q 122 149 130 162 Q 178 222 306 339 L 354 381 Q 360 387 367 392 Q 388 408 397 424 Q 403 437 392 436 Q 382 432 361 416 Q 358 415 355 412 L 307 377 Z",
    "M 306 339 Q 300 198 284 134 Q 271 122 276 82 Q 276 67 295 22 Q 302 4 310 1 Q 316 -6 324 3 Q 331 7 342 28 Q 352 53 351 85 Q 350 122 354 381 L 355 412 Q 355 452 357 498 L 358 547 Q 358 659 378 736 Q 393 760 363 782 Q 347 794 322 809 Q 298 827 277 811 Q 273 805 278 790 Q 308 744 310 669 Q 310 600 311 529 L 310 485 Q 309 433 307 377 L 306 339 Z",
    "M 521 371 Q 552 390 607 420 L 650 445 Q 696 472 756 504 Q 772 511 778 502 Q 785 492 776 459 Q 766 416 751 360 Q 742 314 711 327 Q 696 331 682 334 Q 667 335 671 327 Q 675 318 729 264 Q 750 237 768 259 Q 805 302 817 367 Q 826 410 835 456 Q 844 492 873 523 Q 886 539 869 551 Q 850 563 800 571 Q 781 575 767 561 Q 752 546 653 485 L 610 461 Q 550 437 527 421 L 479 399 Q 434 380 405 368 Q 392 367 391 356 Q 390 349 433 338 Q 458 332 478 344 L 521 371 Z",
    "M 607 420 Q 603 360 597 312 Q 597 284 603 264 Q 609 252 618 258 Q 634 273 645 390 Q 646 418 650 445 L 653 485 Q 666 701 679 743 Q 689 762 676 775 Q 661 788 634 803 Q 613 813 590 804 Q 578 797 591 780 Q 613 735 617 690 Q 621 596 611 468 Q 610 465 610 461 L 607 420 Z",
    "M 478 344 Q 477 212 488 176 Q 498 140 523 116 Q 598 38 797 51 Q 887 58 919 80 Q 950 95 940 127 Q 924 181 918 273 Q 917 289 910 294 Q 901 300 897 279 Q 878 167 861 147 Q 852 123 815 117 Q 764 108 694 112 Q 613 119 578 136 Q 545 155 536 179 Q 520 221 519 331 Q 520 352 521 371 L 527 421 Q 534 478 548 510 Q 561 540 542 557 Q 493 596 476 592 Q 461 586 468 569 Q 487 532 482 476 Q 481 436 479 399 L 478 344 Z",
  ],
};

function setup() {
  createCanvas(500, 500);
  background(255);
  rectMode(CENTER);
  rect(width / 2, height / 2, 300, 300);
  line(width / 2, height / 2 - 300 / 2, width / 2, height / 2 + 300 / 2);
  line(width / 2 - 300 / 2, height / 2, width / 2 + 300 / 2, height / 2);

  translate(100, 370);

  push();
  translate(10, 0);
  scale(0.26, -0.26);
  let ctxa1 = drawingContext;
  ctxa1.fillStyle = "black";
  ctxa1.strokeStyle = "black";
  for (let j = 0; j < chra1.strokes.length; j++) {
    p = new Path2D(chra1.strokes[j]);
    ctxa1.fill(p);
  }

  translate(300, 180);
  scale(0.75, 0.8);
  let ctxa2 = drawingContext;
  ctxa2.fillStyle = "black";
  ctxa2.strokeStyle = "black";
  for (let j = 0; j < chra2.strokes.length; j++) {
    p = new Path2D(chra2.strokes[j]);
    ctxa2.fill(p);
  }
  pop();
}
