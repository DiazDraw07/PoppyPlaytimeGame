class Inicio extends Phaser.Scene {

    constructor(){
        super("Inicio");
    }

    create(){

        this.cameras.main.setBackgroundColor("#1a1a1a");

        this.add.text(
            this.scale.width / 2,
            this.scale.height / 2 - 120,
            "DESCUBRE LA IMAGEN",
            {
                fontSize: "40px",
                color: "#ffff00"
            }
        ).setOrigin(0.5);

        this.add.text(
            this.scale.width / 2,
            this.scale.height / 2 - 40,
            "Elimina las imagenes\npara descubrir el mensaje",
            {
                fontSize: "22px",
                align: "center",
                color: "#ffffff"
            }
        ).setOrigin(0.5);

        let boton = this.add.text(
            this.scale.width / 2,
            this.scale.height / 2 + 80,
            "JUGAR",
            {
                fontSize: "32px",
                color: "#ffffff",
                backgroundColor: "#000",
                padding: { x: 20, y: 10 }
            }
        ).setOrigin(0.5);

        boton.setInteractive();

        boton.on("pointerdown", () => {
            this.scene.start("Juego");
        });

        boton.on("pointerover", () => {
            boton.setStyle({ color: "#ffff00" });
        });

        boton.on("pointerout", () => {
            boton.setStyle({ color: "#ffffff" });
        });

    }

}