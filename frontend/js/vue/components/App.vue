<template>
  <RTable :row-list="rowList">
    <template
      #cell="{item}"
    >
      <div class="cell">
        <p>
          {{ item.name }}
        </p>
        <p>
          {{ item.age }}
        </p>
      </div>
    </template>
  </RTable>
</template>

<script>
import RTable from './RTable.vue';

export default {
  components: { RTable },
  data() {
    return {
      rowList: [
        [
          {
            name: 'Игорь',
            age: 28,
          },
          {
            name: 'Максим',
            age: 21,
          },
          {
            name: 'Петр',
            age: 23,
          },
        ],
        [
          {
            name: 'Алексей',
            age: 19,
          },
          {
            name: 'Денис',
            age: 30,
          },
        ],
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.cell {
  width: 100px;
  overflow: hidden;
  border: 1px solid black;
}
</style>
