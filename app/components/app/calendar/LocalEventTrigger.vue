<script setup>
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { PlusIcon } from '@radix-icons/vue';
import LocalEventEditor from './LocalEventEditor.vue';

const props = defineProps({
  date: {
    type: Date,
    required: true
  }
});
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button 
        variant="ghost" 
        size="icon"
        class="h-6 w-6 hover:bg-accent hover:text-accent-foreground"
      >
        <PlusIcon class="h-4 w-4" />
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-80">
      <LocalEventEditor :date="props.date" />
    </PopoverContent>
  </Popover>
</template>
