<template>
  <div class="table__row-list">
    <TableRow
      v-for="itemList, index in rowList"
      :key="`${itemList[0].name}-${index}`"
      :item-list="itemList"
    >
      <TableCell
        v-for="cell in itemList"
        :key="`${cell.name}-${cell.age}`"
      >
        <template #cell>
          <slot
            name="cell"
            :data="cell"
          />
        </template>
      </TableCell>
    </TableRow>
  </div>
</template>

<script>
import TableCell from './TableCell.vue';
import TableRow from './TableRow.vue';

export default {
  components: { TableRow, TableCell },
  props: ['rowList'],
};
</script>

<style scoped lang="scss">
.table__row-list {
  display: flex;
  flex-direction: column;
}
</style>
