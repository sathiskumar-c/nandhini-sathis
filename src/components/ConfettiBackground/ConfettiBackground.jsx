import React, { useEffect, useRef } from "react";
import p5 from "p5";

const ConfettiBackground = ({
  particleCount = 500,
  backgroundColor = "transparent",
  duration = 10000,
}) => {
  const sketchRef = useRef();

  useEffect(() => {
    let myP5;
    let timeoutId;

    const sketch = (p) => {
      let ancienne, nouvelle, pression;
      let confettis;

      const themeCouleur = [
        "#f44336",
        "#e91e63",
        "#9c27b0",
        "#673ab7",
        "#3f51b5",
        "#2196f3",
        "#03a9f4",
        "#00bcd4",
        "#009688",
        "#4CAF50",
        "#8BC34A",
        "#CDDC39",
        "#FFEB3B",
        "#FFC107",
        "#FF9800",
        "#FF5722",
      ];

      class Particule {
        constructor(parent) {
          this.parent = parent;
          this.gravite = parent.gravite;
          this.reinit();
          this.forme = p.round(p.random(0, 1));
          this.priseFacteur = p.random(-0.02, 0.02);
          this.multFacteur = p.random(0.01, 0.08);
          this.priseAngle = 0;
          this.priseVitesse = 0.05;
        }

        reinit() {
          this.position = this.parent.position.copy();
          this.position.y = p.random(-20, -100);
          this.position.x = p.random(0, p.width);
          this.velocite = p.createVector(p.random(-6, 6), p.random(-10, 2));
          this.friction = p.random(0.98, 0.995);
          this.taille = p.round(p.random(5, 15));
          this.moitie = this.taille / 2;
          this.couleur = p.color(p.random(themeCouleur));
        }

        integration() {
          this.velocite.add(this.gravite);
          this.velocite.x += this.priseFacteur;
          this.velocite.mult(this.friction);
          this.position.add(this.velocite);

          if (
            this.position.y > p.height ||
            this.position.x < 0 ||
            this.position.x > p.width + 10
          ) {
            this.reinit();
          }
        }

        dessiner() {
          p.push();
          p.translate(this.position.x, this.position.y);
          p.rotate(this.velocite.x * 2);
          p.noStroke();
          p.fill(this.couleur);

          if (this.forme === 0) {
            p.rect(-this.moitie, -this.moitie, this.taille, this.taille);
          } else {
            p.ellipse(0, 0, this.taille, this.taille);
          }

          p.pop();
        }

        rendu() {
          this.integration();
          this.dessiner();
        }
      }

      class SystemeDeParticules {
        constructor(nombreMax, position) {
          this.position = position.copy();
          this.nombreMax = nombreMax;
          this.gravite = p.createVector(0, 0.1);
          this.particules = [];

          for (let i = 0; i < this.nombreMax; i++) {
            this.particules.push(new Particule(this));
          }
        }

        rendu() {
          if (pression) {
            let force = p5.Vector.sub(nouvelle, ancienne);
            this.gravite.x = force.x / 20;
            this.gravite.y = force.y / 20;
          }

          this.particules.forEach((particule) => particule.rendu());
        }
      }

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        ancienne = p.createVector(0, 0);
        nouvelle = p.createVector(0, 0);
        confettis = new SystemeDeParticules(
          particleCount,
          p.createVector(p.width / 2, -20),
        );

        // ensure the generated canvas doesn't block UI and sits above content
        const canvasEl = p.select("canvas");
        if (canvasEl && canvasEl.elt) {
          canvasEl.elt.style.pointerEvents = "none";
          canvasEl.elt.style.position = "fixed";
          canvasEl.elt.style.top = "0";
          canvasEl.elt.style.left = "0";
          canvasEl.elt.style.zIndex = "9999";
          canvasEl.elt.style.width = "100%";
          canvasEl.elt.style.height = "100%";
        }
      };

      p.draw = () => {
        // clear keeps canvas transparent
        p.clear();
        nouvelle.x = p.mouseX;
        nouvelle.y = p.mouseY;
        confettis.rendu();
        ancienne = nouvelle.copy();
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };

      p.mousePressed = () => {
        pression = true;
      };

      p.mouseReleased = () => {
        pression = false;
        confettis.gravite.y = 0.1;
        confettis.gravite.x = 0;
      };
    };

    try {
      if (sketchRef.current) {
        myP5 = new p5(sketch, sketchRef.current);

        // If a duration is provided, schedule removal of the sketch
        if (duration && typeof duration === "number" && duration > 0) {
          timeoutId = setTimeout(() => {
            try {
              if (myP5 && typeof myP5.remove === "function") {
                myP5.remove();
                myP5 = null;
              }
            } catch (e) {
              console.warn("Error removing p5 instance after duration:", e);
            }
          }, duration);
        }
      } else {
        console.warn("ConfettiBackground: sketchRef not available");
      }
    } catch (err) {
      console.error("ConfettiBackground failed to initialize:", err);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (myP5 && typeof myP5.remove === "function") myP5.remove();
    };
  }, [particleCount, backgroundColor]);

  return (
    <div
      ref={sketchRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        pointerEvents: "none",
      }}
    />
  );
};

export default ConfettiBackground;
