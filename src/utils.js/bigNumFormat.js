export default function bigNumFormat(num) {
    if (!num) return ['', ''];
    if (num < 10000) {
        return [num + '', ''];
    }
    else if (num < 100000000) {
        const numStr = ((num / 10000) + '').split('.')[0];
        return [numStr, '万'];
    }
    else {
        const numStrArr = ((num / 100000000) + '').split('.');
        const left = numStrArr[0];
        if (numStrArr[1]) {
            const right = numStrArr[1].slice(0, 2);
            return [`${left}.${right}`, '亿'];
        }
        else {
            return [`${left}`, '亿'];
        }
    }
}