<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Jugend Dank Opfer</template>

    Das Jugenddankopfer ist ein Spendenprojekt von Jugendlichen für Jugendliche.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>1/3: Nepal</template>
    Ein Drittel geht an Nepal
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>1/3: Evangelische Jugend Sachsen</template>

    Ein Drittel geht an die Evangelische Jugend Sachsen
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>1/3: EvJuDD</template>

    Und 1/3 geht an die Evangelische Jugend Dresden.
  </WelcomeItem>
</template>
