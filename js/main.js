var canvas;
var engine = null;
var scene = null;
var sceneToRender = null;

var createDefaultEngine = function () {
    console.log("dans createDefaultEngine")
    return new BABYLON.Engine(canvas, true, {
        preserveDrawingBuffer: true,
        stencil: true,
        disableWebGL2Support: false
    });
};

window.initFunction = async function () {
   engine = new BABYLON.Engine(canvas, true, {
        preserveDrawingBuffer: true,
        stencil: true,
        disableWebGL2Support: false
    });
    console.log("INIT 2");
    canvas = document.getElementById("myCanvas");

    var asyncEngineCreation = async function () {
        console.log("engine creation")
        try {
            return createDefaultEngine();
        } catch (e) {
            console.log(
                "the available createEngine function failed. Creating the default engine instead"
            );
            return createDefaultEngine();
        }
    }

    engine = await asyncEngineCreation();
    
    engine.runRenderLoop(function () {
        if (sceneToRender && sceneToRender.activeCamera) {
            sceneToRender.render();
        }
    });
    
    scene = createScene();
};

initFunction().then(() => {
    sceneToRender = scene
});

// Resize
window.addEventListener("resize", function () {
    engine.resize();
});



const createScene = function () {
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);
    camera.setPosition(new BABYLON.Vector3(0, 30, 30));

    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0), scene);
    const ball = BABYLON.MeshBuilder.CreateSphere("ball", { diameter: 8, segments: 32 });
    const map = BABYLON.MeshBuilder.CreateSphere("map", { diameter: 150, segments: 32 });
    map.position.y = -78.8;

    var spot = new BABYLON.SpotLight("spot", new BABYLON.Vector3(25, 15, -10), new BABYLON.Vector3(-1, -0.8, 1), 15, 1, scene);
    spot.diffuse = new BABYLON.Color3(0.73, 0.73, 0.73);
    spot.specular = new BABYLON.Color3(0, 0, 0);
    spot.intensity = 0.4;

    var leafMaterial = new BABYLON.StandardMaterial("leafMaterial", scene);
    leafMaterial.diffuseColor = new BABYLON.Color3(0.5, 1, 0.5);

    var woodMaterial = new BABYLON.StandardMaterial(name, scene);
    var woodTexture = new BABYLON.WoodProceduralTexture(name + "text", 512, scene);
    woodTexture.ampScale = 20;
    woodMaterial.diffuseTexture = woodTexture;

    const torus1 = BABYLON.MeshBuilder.CreateTorus("torus", { diameter: 145, tessellation: 200, thickness: 5 });
    const torus2 = BABYLON.MeshBuilder.CreateTorus("torus2", { diameter: 145, tessellation: 200, thickness: 5 });

    torus1.position.y = -78;
    torus1.position.x = 16;
    torus1.rotation.z = 1.57;
    torus2.position.y = -78;
    torus2.position.x = -19;
    torus2.rotation.z = 1.57;

    var simplePineGenerator = function (canopies, height, trunkMaterial, leafMaterial) {
        var curvePoints = function (l, t) {
            var path = [];
            var step = l / t;
            for (var i = 0; i < l; i += step) {
                path.push(new BABYLON.Vector3(0, i, 0));
                path.push(new BABYLON.Vector3(0, i, 0));
            }
            return path;
        };

        var nbL = canopies + 1;
        var nbS = height;
        var curve = curvePoints(nbS, nbL);

        var radiusFunction = function (i, distance) {
            var fact = 1;
            if (i % 2 == 0) { fact = .5; }
            var radius = (nbL * 2 - i - 1) * fact;
            return radius;
        };

        var leaves = BABYLON.Mesh.CreateTube("tube", curve, 0, 10, radiusFunction, 1, scene);
        var trunk = BABYLON.Mesh.CreateCylinder("trunk", nbS / nbL, nbL * 1.5 - nbL / 2 - 1, nbL * 1.5 - nbL / 2 - 1, 12, 1, scene);

        leaves.material = leafMaterial;
        trunk.material = woodMaterial;
        var tree = new BABYLON.Mesh.CreateBox('', 1, scene);
        tree.isVisible = false;
        leaves.parent = tree;
        trunk.parent = tree;
        return tree;
    }

    var tree = simplePineGenerator(3, 15, woodMaterial, leafMaterial);
    var tree2 = simplePineGenerator(3, 15, woodMaterial, leafMaterial);
    var tree3 = simplePineGenerator(3, 15, woodMaterial, leafMaterial);
    var tree4 = simplePineGenerator(3, 15, woodMaterial, leafMaterial);
    var tree5 = simplePineGenerator(3, 15, woodMaterial, leafMaterial);
    var tree6 = simplePineGenerator(3, 15, woodMaterial, leafMaterial);
    var tree7 = simplePineGenerator(3, 15, woodMaterial, leafMaterial);
    var tree8 = simplePineGenerator(3, 15, woodMaterial, leafMaterial);
    var tree9 = simplePineGenerator(3, 15, woodMaterial, leafMaterial);
    var tree10 = simplePineGenerator(3, 15, woodMaterial, leafMaterial);
    var tree11 = simplePineGenerator(3, 15, woodMaterial, leafMaterial);
    var tree12 = simplePineGenerator(3, 15, woodMaterial, leafMaterial);
    var tree13 = simplePineGenerator(3, 15, woodMaterial, leafMaterial);
    var tree14 = simplePineGenerator(3, 15, woodMaterial, leafMaterial);
    var tree15 = simplePineGenerator(3, 15, woodMaterial, leafMaterial);
    var tree16 = simplePineGenerator(3, 15, woodMaterial, leafMaterial);
    var tree17 = simplePineGenerator(3, 15, woodMaterial, leafMaterial);
    var tree18 = simplePineGenerator(3, 15, woodMaterial, leafMaterial);
    var tree19 = simplePineGenerator(3, 15, woodMaterial, leafMaterial);
    var tree20 = simplePineGenerator(3, 15, woodMaterial, leafMaterial);
    var tree21 = simplePineGenerator(3, 15, woodMaterial, leafMaterial);
    var tree22 = simplePineGenerator(3, 15, woodMaterial, leafMaterial);
    var tree23 = simplePineGenerator(3, 15, woodMaterial, leafMaterial);
    var tree24 = simplePineGenerator(3, 15, woodMaterial, leafMaterial);
    var tree25 = simplePineGenerator(3, 15, woodMaterial, leafMaterial);
    var tree26 = simplePineGenerator(3, 15, woodMaterial, leafMaterial);
    var tree27 = simplePineGenerator(3, 15, woodMaterial, leafMaterial);
    var tree28 = simplePineGenerator(3, 15, woodMaterial, leafMaterial);
    var tree29 = simplePineGenerator(3, 15, woodMaterial, leafMaterial);


    tree.position.y = -4;
    tree.position.x = -10;
    tree.position.z = -10;
    tree.rotation.z = 0.1;
    tree.rotation.x = -0.1;


    tree2.position.y = -8;
    tree2.position.x = 7;
    tree2.position.z = -30;
    tree2.rotation.z = -0.1;
    tree2.rotation.x = -0.4;

    tree3.position.y = -16;
    tree3.position.x = -10;
    tree3.position.z = -43;
    tree3.rotation.z = 0.1;
    tree3.rotation.x = -0.6;

    tree4.position.y = -20;
    tree4.position.z = -50;
    tree4.rotation.x = -0.6;

    tree5.position.y = -35;
    tree5.position.x = 7;
    tree5.position.z = -60;
    tree5.rotation.z = -0.1;
    tree5.rotation.x = -1;

    tree6.position.y = -40;
    tree6.position.x = -9;
    tree6.position.z = -65;
    tree6.rotation.z = 0.1;
    tree6.rotation.x = -1;


    tree7.position.y = -55;
    tree7.position.x = 1;
    tree7.position.z = -73;
    tree7.rotation.x = -1.3;

    tree8.position.y = -65;
    tree8.position.x = -9;
    tree8.position.z = -75;
    tree8.rotation.x = -1.3;

    tree9.position.y = -75;
    tree9.position.x = 5;
    tree9.position.z = -75;
    tree9.rotation.x = -1.3;

    tree10.position.y = -90;
    tree10.position.x = -9;
    tree10.position.z = -75;
    tree10.rotation.z = 0.1;
    tree10.rotation.x = -1.7;

    tree11.position.y = -105;
    tree11.position.x = 2;
    tree11.position.z = -70;
    tree11.rotation.x = -1.7;

    tree12.position.y = -116;
    tree12.position.x = 2;
    tree12.position.z = -65;
    tree12.rotation.x = -2;

    tree13.position.y = -130;
    tree13.position.x = 2;
    tree13.position.z = -57;
    tree13.rotation.x = -2.1;

    tree14.position.y = -140;
    tree14.position.x = -9;
    tree14.position.z = -40;
    tree14.rotation.x = -2.5;

    tree15.position.y = -4;
    tree15.position.x = -10;
    tree15.position.z = 10;
    tree15.rotation.z = 0.1;
    tree15.rotation.x = 0.1;


    tree16.position.y = -8;
    tree16.position.x = 7;
    tree16.position.z = 30;
    tree16.rotation.z = -0.1;
    tree16.rotation.x = 0.4;

    tree17.position.y = -15;
    tree17.position.x = -10;
    tree17.position.z = 43;
    tree17.rotation.z = 0.1;
    tree17.rotation.x = 0.6;

    tree18.position.y = -20;
    tree18.position.z = 50;
    tree18.rotation.x = 0.6;

    tree19.position.y = -35;
    tree19.position.x = 7;
    tree19.position.z = 60;
    tree19.rotation.z = -0.1;
    tree19.rotation.x = 1;

    tree20.position.y = -40;
    tree20.position.x = -9;
    tree20.position.z = 65;
    tree20.rotation.z = 0.1;
    tree20.rotation.x = 1;


    tree21.position.y = -55;
    tree21.position.x = 1;
    tree21.position.z = 73;
    tree21.rotation.x = 1.3;

    tree22.position.y = -65;
    tree22.position.x = -9;
    tree22.position.z = 75;
    tree22.rotation.x = 1.3;

    tree23.position.y = -75;
    tree23.position.x = 5;
    tree23.position.z = 75;
    tree23.rotation.x = 1.3;

    tree24.position.y = -90;
    tree24.position.x = -9;
    tree24.position.z = 75;
    tree24.rotation.z = 0.1;
    tree24.rotation.x = 1.7;

    tree25.position.y = -105;
    tree25.position.x = 2;
    tree25.position.z = 70;
    tree25.rotation.x = 1.7;

    tree26.position.y = -116;
    tree26.position.x = 2;
    tree26.position.z = 65;
    tree26.rotation.x = 2;

    tree27.position.y = -130;
    tree27.position.x = 2;
    tree27.position.z = 57;
    tree27.rotation.x = 2.1;

    tree28.position.y = -140;
    tree28.position.x = 9;
    tree28.position.z = 40;
    tree28.rotation.x = 2.5;

    tree29.position.y = -147;
    tree29.position.x = 9;
    tree29.position.z = 32;
    tree29.rotation.x = 2.8;

    return scene;
};
