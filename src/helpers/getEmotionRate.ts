type TResult = {emoji: string, color: string};

const getEmotionRate = (rate: number): TResult => {
    const result: TResult = { emoji: '', color: '' };
    switch (rate) {
        case 1:
            result.emoji = '😢';
            result.color = 'red';
            break;
        case 2:
            result.emoji = '😟';
            result.color = 'orange';
            break;
        case 3:
            result.emoji = '😐';
            result.color = 'yellow';
            break;
        case 4:
            result.emoji = '🙂';
            result.color = 'lightgreen';
            break;
        case 5:
            result.emoji = '😁';
            result.color = 'green';
            break;
        default:
            result.emoji = '😐';
            result.color = 'yellow';
    }
    return result;
};
export default getEmotionRate;
