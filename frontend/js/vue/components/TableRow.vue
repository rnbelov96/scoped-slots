<template>
  <div class="row">
    <TableCell
      v-for="cell in itemList"
      :key="`${cell.name}-${cell.age}`"
    >
      <template #cell>
        <slot
          name="cell"
          :item="cell"
        />
      </template>
    </TableCell>
  </div>
</template>

<script>
import TableCell from './TableCell.vue';

export default {
  components: { TableCell },
  props: ['itemList'],
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
}
</style>
