//total combination
class combination{
    combine(arr, res, temp, index, target){
        if(target === 0){
            res.push([...temp]);
        }
        for(let i = index; i< arr.length; i++){
            if(i > index && arr[i] === arr[i - 1])continue;
            if(target - arr[i] > 0){
                temp.push(arr[i]);
                this.combine(arr, res, temp, i + 1, target -arr[i])
                temp.pop()
            }
        }
        return;
    }

    combine1(arr){
        const [res, temp] = [[],[]];
        this.combine(arr, res, temp, 0, target);
        return res;
    }
}

const dump = new combination();
const arr = [1, 2,4, 5];
const result = dump.combine1(arr);
// program is working fine // looks good
testing the new one