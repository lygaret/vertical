<script setup>
import { computed } from 'vue';
import { Button } from '@/components/ui/button';
import { Cross2Icon, Pencil2Icon } from '@radix-icons/vue';
import { useCalendarStore } from '@/stores/calendarStore';
import { cn } from '@/lib/utils';

const props = defineProps({
  event: {
    type: Object,
    required: true,
    validator: (event) => {
      return event.type && event.name && event.uid;
    }
  }
});

const store   = useCalendarStore();
const isLocal = computed(() => props.event.type === 'local');

const eventStyle = computed(() => ({
  color: props.event.color,
  backgroundColor: props.event.color ? `${props.event.color}20` : null, // 20 = 12.5% opacity in hex
  borderLeft: `2px solid ${props.event.color || 'currentColor'}`
}));

function handleDelete() {
  if (!isLocal.value) return;
  store.removeLocalEvent(props.event.uid);
}

function handleEdit() {
  if (!isLocal.value) return;
  // TODO: Implement edit functionality
  console.log('Edit event:', props.event);
}
</script>

<template>
  <div 
    :class="cn(
      'group flex items-center gap-1 px-2 py-0.5 rounded text-sm',
      'hover:ring-1 hover:ring-border',
      isLocal && 'hover:pr-12' // Space for controls
    )"
    :style="eventStyle"
  >
    <span class="truncate">{{ event.name }}</span>
    
    <!-- Controls for local events -->
    <div 
      v-if="isLocal"
      class="hidden group-hover:flex absolute right-1 bg-background/80 backdrop-blur-sm rounded"
    >
      <Button
        variant="ghost"
        size="icon"
        class="h-6 w-6"
        @click="handleEdit"
      >
        <Pencil2Icon class="h-3 w-3" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        class="h-6 w-6 text-destructive hover:text-destructive"
        @click="handleDelete"
      >
        <Cross2Icon class="h-3 w-3" />
      </Button>
    </div>
  </div>
</template>
