<script setup>
import { ref } from 'vue';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useCalendarStore } from '@/stores/calendarStore';

const props = defineProps({
  date: {
    type: Date,
    required: true
  }
});

const store = useCalendarStore();
const eventName = ref('');
const eventColor = ref('#4477FF'); // Default blue color

function handleSubmit() {
  store.createLocalEvent({
    name: eventName.value,
    color: eventColor.value,
    startDate: props.date,
    endDate: new Date(props.date.getTime() + (60 * 60 * 1000))
  });

  // Reset form
  eventName.value = '';
  eventColor.value = '#4477FF';
}
</script>

<template>
  <form
    class="grid gap-4"
    @submit.prevent="handleSubmit"
  >
    <div class="space-y-2">
      <h4 class="font-medium leading-none">
        New Event
      </h4>
      <p class="text-sm text-muted-foreground">
        Create a new event for {{ date.toLocaleDateString() }}
      </p>
    </div>
    <div class="grid gap-2">
      <Input
        v-model="eventName"
        placeholder="Event name"
        class="h-8"
      />
      <Input
        v-model="eventColor"
        type="color"
        class="h-8 w-full"
      />
    </div>
    <Button
      type="submit"
      class="w-full"
    >
      Create Event
    </Button>
  </form>
</template>
