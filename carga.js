class Carga extends Phaser.Scene {

    constructor(){
        super("Carga");
    }

    preload(){

        this.add.rectangle(
            this.scale.width / 2,
            this.scale.height / 2,
            this.scale.width,
            this.scale.height,
            0x222222
        );

        let texto = this.add.text(
            this.scale.width / 2,
            this.scale.height / 2 - 50,
            "Cargando 0%",
            { fontSize: "30px", color: "#ffffff" }
        ).setOrigin(0.5);

        let barraFondo = this.add.rectangle(
            this.scale.width / 2,
            this.scale.height / 2,
            400,
            30,
            0x555555
        );

        let barra = this.add.rectangle(
            this.scale.width / 2 - 200,
            this.scale.height / 2,
            0,
            30,
            0xffff00
        ).setOrigin(0, 0.5);

        this.load.image("CatNap", "CatNap.jpg");
        this.load.image("Huggy", "Huggy.jpg");
        this.load.image("Yarnaby", "Yarnaby.jpg");
        this.load.image("Doey", "Doey.jpg");
        this.load.image("Mommy", "Mommy.jpg");
        this.load.image("Pianosaurus", "Pianosaurus.jpg");

        this.load.on("progress", (valor) => {

            let porcentaje = parseInt(valor * 100);

            texto.setText("Cargando " + porcentaje + "%");

            barra.width = 400 * valor;

        });

    }

    create(){

        this.time.delayedCall(1500, () => {

            this.scene.start("Inicio");

        });

    }

}