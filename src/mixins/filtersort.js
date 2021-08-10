export const filtersort = {
    data () {
        return {
            currentSort: 'title',
            currentSortDir: 'asc'
        }
    },
    methods: {
        sort (s) {
            //if s == current sort, reverse
              if(s === this.currentSort) {
                  this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
              }
              this.currentSort = s
          },
          sortResults (r) {
              return r.sort((a,b) => {
                  let modifier = 1;
                  if(this.currentSortDir === 'desc') modifier = -1;
                  if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
                  if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
                  return 0;
              })
          },
    }
}