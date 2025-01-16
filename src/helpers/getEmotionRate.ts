const getEmotionRate = (rate: number): string => {
    let result;
    switch (rate) {
        case 1:
            result = '😢';
            break;
        case 2:
            result = '😟';
            break;
        case 3:
            result = '😐';
            break;
        case 4:
            result = '🙂';
            break;
        case 5:
            result = '😁';
            break;
        default:
            result = '😐';
    }
    return result;
};
export default getEmotionRate;
