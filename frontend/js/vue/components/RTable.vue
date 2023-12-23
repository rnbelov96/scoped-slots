<template>
  <div class="table__row-list">
    <TableRow
      v-for="itemList, index in rowList"
      :key="`${itemList[0].name}-${index}`"
      :item-list="itemList"
    >
      <template #cell="{item}">
        <slot
          name="cell"
          :item="item"
        />
      </template>
    </TableRow>
  </div>
</template>

<script>
import TableRow from './TableRow.vue';

export default {
  components: { TableRow },
  props: ['rowList'],
};
</script>

<style scoped lang="scss">
.table__row-list {
  display: flex;
  flex-direction: column;
}
</style>
