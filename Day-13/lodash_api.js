import _ from 'lodash'

const array = [1,2,3,4,5,6,7,8,9,0];
const chunks = _.chunk(array, 2)

console.log(chunks)