<script setup>
import { computed } from 'vue';
import { Button } from '@/components/ui/button';
import { Cross2Icon, Pencil2Icon, StarFilledIcon } from '@radix-icons/vue';
import { useCalendarStore } from '@/stores/calendarStore';
import { cn } from '@/lib/utils';

const props = defineProps({
  class: {
    type: String,
    required: false
  },
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
  order: props.event.highlighted ? -1 : 0
}));

function handleDelete() {
  store.removeEvent(props.event, true);
}

function handleEdit() {
  // TODO: Implement edit functionality
  console.log('Edit event:', props.event);
}

function handleHighlight() {
  store.highlightEvent(props.event, !props.event.highlighted);
}
</script>

<template>
  <div 
    :class="cn(
      'group relative flex items-center px-2 m-1 rounded-md hover:pr-[88px]',
      $style.event,
      props.event.highlighted && $style.highlighted,
      props.class,
    )"
    :style="eventStyle"
  >
    <span class="truncate relative inline-block top-0.5">{{ props.event.name }}</span>
    
    <!-- Controls for local events -->
    <div class="hidden group-hover:flex absolute right-0 bg-background/80 backdrop-blur-sm rounded">
      <Button
        variant="ghost"
        size="icon"
        class="h-6 w-6 text-primary hover:text-primary"
        @click="handleHighlight"
      >
        <StarFilledIcon class="h-3 w-3" />
      </Button>
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

<style lang="css" module>
  .event {
      color: var(--calendar_content_color);
      font-family: var(--calendar_content_font-family);
      font-weight: var(--calendar_content_font-weight);
      font-size: var(--calendar_content_font-size);
      font-style: var(--calendar_content_font-style);
  }

  .highlighted {
      color: var(--calendar_content-highlight_color);
      font-family: var(--calendar_content-highlight_font-family);
      font-weight: var(--calendar_content-highlight_font-weight);
      font-size: var(--calendar_content-highlight_font-size);
      font-style: var(--calendar_content-highlight_font-style);
  }
</style>
