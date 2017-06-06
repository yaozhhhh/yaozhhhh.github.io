ArrayList<Circle> poop  = new ArrayList();
PImage img;
void setup() {
  size(300, 300);
  //String url = "http://dogtowndogtraining.com/wp-content/uploads/2012/06/300x300-061-e1340955308953";
  img = loadImage("fy.jpg");
  color ck = get(width/2, height/2);
  ck = color(ck, 80);
  Circle c = new Circle(width>>1, height>>1, width/2, ck );
  poop.add(c);
}
int k=0;
void draw() {
  background(-1);
  if (k<1) image(img, 0, 0); 

  for (int i=0; i<poop.size (); i++) {
    Circle C = poop.get(i);
    C.show();
  }
  for (int i=0; i<poop.size (); i++) {
    Circle C = poop.get(i);
    if (dist(mouseX, mouseY, C.x, C.y)<C.r) {
      k =2;
      poop.remove(i);
      for (int kx=0; kx<2; kx++) {
        for (int ky=0; ky<2; ky++) {
          color c = img.get(int(pow(-1, kx)*C.r/2+C.x), int(pow(-1, ky)*C.r/2+C.y));
          Circle C1 = new Circle(pow(-1, kx)*C.r/2+C.x, pow(-1, ky)*C.r/2+C.y, C.r/2, c);
          poop.add(C1);
          press =false;
        }
      }
    }
  }
}
boolean press=false;
void mouseDragged() {
  press = true;
  k++;
}


class Circle {
  float x, y, r;
  color c;
  Circle(float x, float y, float r, color c) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.c = c;
  }
  void show() {
    noStroke();
    fill(c);
    ellipse(x, y, 2*r, 2*r);
  }
}