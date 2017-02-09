/**
 * Created by kyotsunee on 09/02/2017.
 */
var engine;
var canvas;
var scene;

document.addEventListener("DOMContentLoaded", startGame, false);

function startGame() {
    if (BABYLON.Engine.isSupported()) {
        canvas = document.getElementById("renderCanvas");
        engine = new BABYLON.Engine(canvas, true);
        BABYLON.SceneLoader.Load("Espilit/", "Espilit.babylon", engine, function (loadedScene) {
            scene = loadedScene;

            // Wait for textures and shaders to be ready
            scene.executeWhenReady(function () {
                // Attach camera to canvas inputs
                scene.activeCamera.attachControl(canvas);

                // Once the scene is loaded, just register a render loop to render it
                engine.runRenderLoop(function () {
                    scene.render();
                });
            });
        }, function (progress) {
            // To do: give progress feedback to user
        });
    }
}