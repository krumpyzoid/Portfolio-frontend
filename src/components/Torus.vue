<template>
<div style="display: flex; justify-content: center; align-items: center;">
    <div style="width: 800px; height: 800px">
    <Renderer ref="renderer" :alpha="true" :resize="true" :orbitCtrl="{active: true, enableZoom: false}">
    <Camera :position="{ z: 7 }" />
    <Scene :background="'#E8E6DE'">
      <PointLight :position="{ y: 50, z: 50 }" />
      <Mesh ref="box">
            <TorusKnotGeometry :radius="1.5" :tube="0.625" :tubularSegments="300" :radialSegments="200" />
            <ToonMaterial :color="'#0F161B'" />
        </Mesh>
    </Scene>
    <EffectComposer>
      <RenderPass />
      <FXAAPass />
    </EffectComposer>
  </Renderer>
    </div>
</div>
</template>

<script>
import { Mesh, Camera, PointLight, Renderer, Scene, TorusKnotGeometry, ToonMaterial, EffectComposer, RenderPass, FXAAPass } from 'troisjs';


export default {
    components: { Mesh, Camera, PointLight, Renderer, Scene, TorusKnotGeometry, EffectComposer, RenderPass, FXAAPass, ToonMaterial },
    data() {
        return {
        }
    },
    methods: {
      
    },
    mounted() {
      const renderer = this.$refs.renderer;
      const box = this.$refs.box.mesh;
      renderer.onBeforeRender(() => {
        box.rotation.x += 0.003;
      })
      },
}

</script>
<style lang="scss">
</style>
