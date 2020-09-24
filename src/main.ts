import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';

let canvas = <HTMLCanvasElement>document.getElementById("renderCanvas")
let engine = new BABYLON.Engine(canvas, true, {
    preserveDrawingBuffer: true,
    stencil: true
})

function createScene() {
    let scene = new BABYLON.Scene(engine)

    let posC = new BABYLON.Vector3(0, 5, -10)
    let camera = new BABYLON.FreeCamera("camera", posC, scene)
    let target = BABYLON.Vector3.Zero()
    camera.setTarget(target)
    camera.attachControl(canvas, false)

    let posL = new BABYLON.Vector3(0, 1, 0)
    new BABYLON.HemisphericLight('light', posL, scene)

    BABYLON.SceneLoader.Append("./", "donuts.glb", scene, () => {
        console.log("Load Success")
    })
    return scene
}

let scene = createScene()
engine.runRenderLoop( () => {
    scene.render()
})

window.addEventListener('resize', () => {
    engine.resize()
})
