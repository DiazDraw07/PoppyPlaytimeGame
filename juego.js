class Juego extends Phaser.Scene {

    constructor(){
        super("Juego");
    }

    create(){

        // TEXTO OCULTO DETRAS
        this.add.text(
            this.scale.width / 2,
            this.scale.height / 2,
            "WELCOME TO THE POPPYPLAYTIME",
            {
                fontSize: "50px",
                color: "#ffff00"
            }
        ).setOrigin(0.5);

        // VARIABLES DE PUNTOS
        this.puntos = 0;

        // TEXTO DE PUNTOS
        this.textoPuntos = this.add.text(
            20,
            20,
            "Puntos: 0",
            {
                fontSize: "28px",
                color: "#ffffff"
            }
        );

        // GRUPO DE IMAGENES
        this.cubierta = this.add.group();

        // ARREGLO DE IMAGENES POSIBLES
        this.imagenesJuego = [
            "CatNap",
            "Huggy",
            "Yarnaby",
            "Doey",
            "Mommy",
            "Pianosaurus"
        ];


let tamaño = 300;


let columnas = Math.floor(this.scale.width / tamaño);
let filas = Math.floor(this.scale.height / tamaño);


let offsetX = (this.scale.width - (columnas * tamaño)) / 2;
let offsetY = (this.scale.height - (filas * tamaño)) / 2;


for (let x = 0; x < columnas; x++){

    for (let y = 0; y < filas; y++){

        let imagenRandom = Phaser.Utils.Array.GetRandom(this.imagenesJuego);

        let posX = offsetX + x * tamaño + tamaño / 2;
        let posY = offsetY + y * tamaño + tamaño / 2;

        let img = this.add.image(posX, posY, imagenRandom);

        img.setDisplaySize(tamaño, tamaño);
        img.setInteractive();

        this.cubierta.add(img);

                
                img.on("pointerdown", () => {

                    // SISTEMA DE PUNTOS
                    if (img.texture.key === "CatNap"){
                        this.puntos += 1;
                    }

                    if (img.texture.key === "Huggy"){
                        this.puntos += 2;
                    }

                    if (img.texture.key === "Yarnaby"){
                        this.puntos += 3;
                    }

                    if (img.texture.key === "Doey"){
                        this.puntos += 4;
                    }

                    if (img.texture.key === "Mommy"){
                        this.puntos += 5;
                    }

                    if (img.texture.key === "Pianosaurus"){
                        this.puntos += 6;
                    }

                    // ACTUALIZAR TEXTO
                    this.textoPuntos.setText("Puntos: " + this.puntos);

                    // ANIMACION DE DESAPARECER
                    this.tweens.add({
                        targets: img,
                        scale: 0,
                        duration: 200,
                        onComplete: () => {

                            img.destroy();

                    // VERIFICAR SI YA NO QUEDAN
                    if (this.cubierta.countActive(true) === 0){

                        this.add.text(
                            this.scale.width / 2,
                            120,
                            "GANASTE 🎉",
                            {
                                fontSize: "40px",
                                color: "#ffffff"
                            }
                        ).setOrigin(0.5);

                    }
                }
                   
                      })
                
                });

            }

        }

        // BOTON REINICIAR
        let botonReiniciar = this.add.text(
            this.scale.width - 120,
            20,
            "Reiniciar",
            {
                fontSize: "24px",
                backgroundColor: "#000",
                color: "#ffffff",
                padding: { x: 10, y: 5 }
            }
        );

        botonReiniciar.setInteractive();

        botonReiniciar.on("pointerdown", () => {

            this.scene.restart();

        });

    }

}