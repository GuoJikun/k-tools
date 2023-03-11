<script setup lang="ts">
import { onMounted } from "vue";
import { register } from "@tauri-apps/api/globalShortcut";
import { WindowManager, appWindow } from "@tauri-apps/api/window";

onMounted(() => {
  const mainWindow = new WindowManager("main");
  register("Ctrl+Space", () => {
    console.log("Shortcut triggered");
    console.log(mainWindow, appWindow);
    // mainWindow.show();

    appWindow.show();
    mainWindow.setDecorations(true);
  });

  window.addEventListener("keydown", (e) => {
    console.log(e);
    if (e.code === "Escape") {
      appWindow.minimize();
    }
  });
});
</script>

<template>
  <div class="container">
    <input type="text" />
  </div>
</template>

<style scoped></style>
